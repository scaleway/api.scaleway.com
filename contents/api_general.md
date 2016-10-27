FORMAT: 1A

# Scaleway API documentation.

The Scaleway API allows you to manage servers and resources in a simple, programmatic way using conventional HTTP requests. 
All features you will find in the web control panel are also available through the API.

## Request and response

Our API works over https and is accessed from several endpoints:

- `account.scaleway.com` for Account related actions.
- `cp-<region>.scaleway.com` for Compute Power related actions, where
  `<region>` is `par1` or `ams1`.

All data is sent and received as json.

## Constructing Requests

Requests are made of two components:

- Base URL: `https://cp-par1.scaleway.com` or `https://cp-ams1.scaleway.com`
- Resource path: `servers`

To construct a proper request, you need to format the URL as follows:

`https://cp-<region>.scaleway.com/{resource}`

Example: `https://cp-par1.scaleway.com/volumes/f929fe39-63f8-4be8-a80e-1e9c8ae22a76`

The following code is an example request to retrieve detailed informations about a volume

```
% curl -H 'X-Auth-Token: 017ce0ce-20ec-4d4ez-b44c-e561a23481d2c' -H 'Content-Type: application/json' https://cp-par1.scaleway.com/volumes/f929fe39-63f8-4be8-a80e-1e9c8ae22a76 -i

HTTP/1.1 200 OK
Server: nginx
Date: Thu, 22 May 2014 07:55:00 GMT
Content-Type: application/json
Content-Length: 1345
Connection: keep-alive
X-Sentry-ID: None
Strict-Transport-Security: max-age=86400

{
  "volumes": [
    {
      "export_uri": null,
      "id": "f929fe39-63f8-4be8-a80e-1e9c8ae22a76",
      "name": "volume-0-1",
      "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
      "server": null,
      "size": 10000000000,
      "volume_type": "l_ssd"
    },
    {
      "export_uri": null,
      "id": "0facb6b5-b117-441a-81c1-f28b1d723779",
      "name": "volume-0-2",
      "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
      "server": null,
      "size": 20000000000,
      "volume_type": "l_ssd"
    }
  ]
}
```

## Basic Authentication

You authenticate to the API by requesting a token. You can create a token from the `account.scaleway.com` domain related to account actions with a POST request on the /tokens HTTP resource.

Basic Authentication process:

- Query via POST request the /tokens resource [see here how to](https://developer.scaleway.com/#tokens-tokens-post)

- Supply an "X-Auth-Token" header followed by the token you get previously, e.g. "4e0b46e4-7c1d-44d4-8ba6-dc5f80694397"

```
curl -X GET -H "X-Auth-Token: 4e0b46e4-7c1d-44d4-8ba6-dc5f80694397" -H "Content-Type: application/json" https://account.scaleway.com/{resources}
```

## Errors

We use conventional HTTP response codes to indicate success or failure of an API request.

In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error that resulted from the provided information (e.g., a required parameter is missing), and codes in the 5xx range indicate an error with our servers.

### HTTP Status Code Summary

- `200 OK` - Everything worked as expected.
- `400 Bad Request` - Often missing a required parameter.
- `401 Unauthorized` - No valid API key provided.
- `402 Request Failed` - Parameters were valid but request failed.
- `403 Forbidden` - Insufficient privileges to access requested resource.
- `404 Not Found` - The requested item doesn't exist.
- `50x` Server errors - something went wrong on api domain's end.

Input and output data must be valid JSON with appropriate Content-Type header set.

### Attributes

- type:

  - `invalid_request_error`: Occur when your request has invalid parameters.
  - `invitalid_auth`: Arise when there is a problem of authentication.
  - `unknown_resource`: Occur when the resource doesn't exist.
  - `authorization_required`: You don't have sufficient right to access the resource.
  - `api_error`: API errors use in case of problem with api domain's servers

- message:

  - A human readable error giving more details about the error

- fields (Optional):

  - An array of parameters with an human readable message giving more details about the error.

### Errors responses example

+ Response 400 (application/json)

        {
            "fields": {
                "email": [
                    "incorrect email address",
                    "required key not provided"
                ],
                "firstname": [
                    "length of value must be at least 2",
                    "required key not provided"
                ],
                "lastname": [
                    "length of value must be at least 2",
                    "required key not provided"
                ]
            },
            "message": "Validation Error",
            "type": "invalid_request_error"
        }

+ Response 401 (application/json)

        {
            "message": "The header 'X-Auth-Token' is missing",
            "type": "invalid_auth"
        }

+ Response 403 (application/json)

        {
          "message": "The token provided doesn't have the requested permission.",
          "type": "authorization_required"
        }

+ Response 404 (application/json)

        {
            "message": "User not found",
            "type": "unknown_resource"
        }

### Pagination

Most of listing requests receive a paginated response. Your client needs to
handle the pagination transparently as Scaleway reserves the right to paginate
any non-paginted API endpoint at anytime without warning.


**Paginated request**

Requests against paginated endpoints accept two querystring arguments:

* *page*, a positive integer to choose the page to display.
* *per_page*, an positive integer lower or equal to 100 to select the number of
  items to display.

Paginated endpoints usually also accept filters to search and sort results.
These filters are documented along each endpoint documentation.

**Paginated response**

```
% curl -H 'X-Auth-Token: <token>' 'https://cp-par1.scaleway.com/images/?page=2&per_page=10' -i
HTTP/1.0 200 OK
[...]
X-Total-Count: 209
Link: </images/?page=1&per_page=10>; rel="first",</images/?page=1&per_page=10>; rel="previous",</images/?page=3&per_page=10>; rel="next",</images/?page=21&per_page=10>; rel="last"
[...]
```

The *X-Total-Count* header contains the total number of items for the resource.

The *Link* header as specified by [rfc
5988](https://tools.ietf.org/html/rfc5988) helps to navigate between pages.
Each programming langage has a specific way to parse it. With Python for
example, the *Link* header can be parsed with
[python-requests](http://docs.python-requests.org/en/master/):

```python
>>> response = requests.get('https://cp-par1.scaleway.com/images', headers={'X-Auth-Token': '<token>'})
>>> print response.links
{'last': {'url': '/images?page=5&per_page=50', 'rel': 'last'}, 'next': {'url': '/images?page=2&per_page=50', 'rel': 'next'}}
```
