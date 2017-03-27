### group User Data

User data is a key value store API you can use to provide data from and to your
server without authentication.

As an example of use, Scaleway images contain the script
[`scw-generate-ssh-keys`][scw-generate-ssh-keys] which generates SSH server's
host keys then stores their fingerprints as user data under the key
"ssh-host-fingerprints". This way, our users can ensure they are really
connecting to their Scaleway instance and they are not victim of a [MITM
attack][mitm].

[scw-generate-ssh-keys]: https://github.com/scaleway/image-tools/blob/master/skeleton-common/usr/local/sbin/scw-generate-ssh-keys#L14
[mitm]: https://en.wikipedia.org/wiki/Man-in-the-middle_attack

There are two endpoints to access user data:

* from a running instance, by using the metadata API at
  http://169.254.42.42/user_data. To enhance security, we only allow user data
  viewing and editing as root. To know if the query is issued by the root user,
  we only accept queries made from a local port below 1024 (by default,
  non-root users can't bind ports below 1024). To specify the local port with
  cURL, use `curl --local-port 1-1024 http://169.254.42.42/user_data`
* from the compute API at
  [https://cp-\<region\>.scaleway.com/servers/\<server_id\>/user_data.](https://cp-\<region\>.scaleway.com/servers/\<server_id\>/user_data).


#### User Data keys [/user_data]

##### Get all User Data keys [GET]

Get the keys of available User Data.

+ Response 200 (application/json)
    {
      "user_data": [
        "ssh-host-fingerprints",
        "mykey"
      ]
    }


#### Specific User Data [/user_data/{key_id}]

+ Parameters
    + key_id: mykey (requires, string)

##### Create/Edit User Data [PATCH]

+ Request User Data content
    + Headers
        Content-Type: text/plain

    + Body
        supervalue

##### Show User Data [GET]

+ Response 200 (text/plain)
    supervalue

##### Delete User Data [DELETE]

+ Response 204
