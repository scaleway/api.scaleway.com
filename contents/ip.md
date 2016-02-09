### group IPs

A reserved IP address is a static IP address designed for cloud computing.
Reserved IPs address allow you to mask the failure of a server rapidly reallocating the IPs address to another server in your account.

#### IPs [/ips]

##### Create a new IP [POST]

Create a new reserved IP address

The response is an object that has a key called `ip`. This key contain a standard `ip` object.

+ Parameters
    + organization (required, string, `000a115d-2852-4b0a-9ce8-47f1134ba95a`)... Organization unique identifier

+ Request (application/json)

    + Body

            {
                "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a"
            }

+ Response 201 (application/json)

            {
              "ip": {
                "address": "212.47.226.88",
                "id": "b50cd740-892d-47d3-8cbf-88510ef626e7",
                "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
                "server": null
              }
            }

##### Retrieves all IPs addresses [GET]

List all IPs associate with your account

The response is an object that has a key called `ips`. This key contain an array of ip objects each of which contain the standard `ip` attributes.

+ Response 200 (application/json)

        {
          "ips": [
            {
              "address": "212.47.226.88",
              "id": "b50cd740-892d-47d3-8cbf-88510ef626e7",
              "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
              "server": null
            }
          ]
        }

#### IP [/ips/{ip_id}]

+ Parameters
    + ip_id (required, string, `b50cd740-892d-47d3-8cbf-88510ef626e7`)... Ip unique identifier

##### Retrieve an IP address [GET]

List an individual IP address

The response is an object that has a key called `ip`. This key contain a standard `ip` object.

+ Response 200 (application/json)

        {
          "ip": {
            "address": "212.47.226.88",
            "id": "b50cd740-892d-47d3-8cbf-88510ef626e7",
            "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
            "server": null
          }
        }

##### Attach an IP address [PUT]

Allow you to remap an IP address to another server

The response is an object that has a key called `ip`. This key contain a standard `ip` object.

+ Request (application/json)

    + Body

            {
                "address": "212.47.226.88",
                "id": "b50cd740-892d-47d3-8cbf-88510ef626e7",
                "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
                "server": "c2d8994f-1582-413e-8d48-c53076db06cc"
            }


+ Response 200 (application/json)

        {
          "ip": {
            "address": "212.47.226.88",
            "id": "b50cd740-892d-47d3-8cbf-88510ef626e7",
            "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
            "server": {
              "id": "c2d8994f-1582-413e-8d48-c53076db06cc",
              "name": "default_server_name - acfb51"
            }
          }
        }


##### Remove an IP address [DELETE]

Delete an IP

The response code is a 204, which means that the action was successful with no returned body data.

+ Response 204


