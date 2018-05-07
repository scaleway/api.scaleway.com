### group Tokens

A Token is an identifier associated with your account. We use this token to authenticate commands in our APIs.

#### Tokens [/tokens]

##### Create a token [POST]

Authenticates a user against their username, password, and then returns a new Token, which can be used until it expires.

The response is an object that has a key called `token`. This key contains a standard `token` object.

+ Attributes

    + email: `jsnow@got.com` (required, string) - User email
    + password: `winteriscoming` (required, string) - User password
    + expires (optional, boolean) - Set if you want a Token which doesn't expire
        + Default: `true`

+ Request (application/json)

    + Body

            {
                "email": "jsnow@got.com",
                "password": "winteriscoming",
                "expires": false
            }

+ Response 201

    + Headers (application/json)

            Location: https://account.cloud.online.net/tokens/9de8f869-c58e-4aa3-9208-2d4eaff5fa20

    + Body

            {
                "token": {
                    "creation_date": "2014-05-22T08:05:57.556385+00:00",
                    "expires": null,
                    "id": "9de8f869-c58e-4aa3-9208-2d4eaff5fa20",
                    "inherits_user_perms": true,
                    "permissions": [],
                    "roles": {
                      "organization": null,
                      "role": null
                    },
                    "user_id": "5bea0358-db40-429e-bd82-914686a7e7b9"
                }
            }

##### List all tokens [GET]

List all Tokens associated with your account

The response is an object that has a key called `tokens`. This key contains an array of token objects each of which contains the standard `token` attributes.

+ Response 200 (application/json)

        {
            {
                "tokens": [
                    {
                        "creation_date": "2014-03-13T10:53:11.456319+00:00",
                        "expires": null,
                        "id": "4e5570fb-c854-5349-979f-9f51d608d34z",
                        "inherits_user_perms": true,
                        "permissions": [],
                        "roles": {
                            "organization": null,
                            "role": null
                        },
                        "user_id": "5bea0358-db40-429e-bd82-953016a7e2s7"
                    },
                   {
                        "creation_date": "2014-05-19T18:05:47.304433+00:00",
                        "expires": "2014-05-20T14:05:06.393875+00:00",
                        "id": "654c95b0-2cf5-41a3-b3cc-733ffba4b4b7",
                        "inherits_user_perms": true,
                        "permissions": [],
                        "roles": {
                            "organization": null,
                            "role": null
                        },
                        "user_id": "5bea0358-db40-429e-bd82-953016a7e2s7"
                    }
                ]
            }
        }


#### Token [/tokens/{token_id}]

+ Parameters
    + token_id: `654c95b0-2cf5-41a3-b3cc-733ffba4b4b7` (required, string) - Token unique identifier

##### Retrieve a token [GET]

List an individual Token

The response is an object that has a key called `token`. This key contains a standard `token` object.

+ Response 200 (application/json)

        {
            "token": {
                "creation_date": "2014-05-22T08:06:51.742826+00:00",
                "expires": "2014-05-20T14:05:06.393875+00:00",
                "id": "654c95b0-2cf5-41a3-b3cc-733ffba4b4b7",
                "inherits_user_perms": true,
                "permissions": [],
                "roles": {
                    "organization": null,
                    "role": null
                },
                "user_id": "5bea0358-db40-429e-bd82-953016a7e2s7"
            }
        }


##### Update a token [PATCH]

Increase Token expiration time of 30 minutes

The response is an object that has a key called `token`. This key contains a standard `token` object.

+ Response 200 (application/json)

        {
            "token": {
                "creation_date": "2014-05-22T08:06:51.742826+00:00",
                "expires": "2014-05-22T11:18:07.786841+00:00",
                "id": "654c95b0-2cf5-41a3-b3cc-733ffba4b4b7",
                "inherits_user_perms": true,
                "permissions": [],
                "roles": {
                    "organization": null,
                    "role": null
                },
                "user_id": "5bea0358-db40-429e-bd82-953016a7e2s7"
            }
        }



##### Remove a token [DELETE]

Delete an individual token

The response code is a 204, which means that the action was successful with no returned body data.

+ Response 204

### group Organizations

This resources of API methods allows you to get your Organizations information

#### Organizations [/organizations]

##### List all organizations [GET]

List all Organizations associate with your account

The response is an object that has a key called `organizations`. This key contains an array of organization objects each of which contain the standard `organization` attributes.

+ Response 200 (application/json)

        {
          "organizations": [
            {
              "id": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
              "name": "jsnow@got.com",
              "users": [
                {
                  "email": "jsnow@got.com",
                  "firstname": "John",
                  "fullname": "John Snow",
                  "id": "59a98700-8622-4495-a11a-e1efbfac5972",
                  "lastname": "Snow",
                  "organizations": [
                    {
                      "id": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
                      "name": "jsnow@got.com"
                    }
                  ],
                  "roles": [
                    {
                      "organization": {
                        "id": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
                        "name": "jsnow@got.com"
                      },
                      "role": "manager"
                    }
                  ],
                  "ssh_public_keys": []
                }
              ]
            }
          ]
        }


### group Users

#### User [/users/{user_id}]

+ Parameter
    + user_id: `5bea0358-db40-429e-bd82-953016a7e2s7` (required, string) - User unique identifier

##### Retrieve a user [GET]

List information about your user account

The response is an object that has a key called `user`. This key contains a standard `user` object.

+ Response 200 (application/json)

            {
             "user": {
                 "email": "jsnow@got.com",
                 "firstname": "John",
                 "fullname": "John Snow",
                 "id": "5bea0358-db40-429e-bd82-953016a7e2s7",
                 "lastname": "Snow",
                 "organizations": null,
                 "roles": null,
                 "ssh_public_keys": null
             }
           }

##### Update the SSH keys of an user [PATCH]

Update the SSH keys linked to your user account.

        {
         "ssh_public_keys": [
            {"key":"<YOUR KEY>"},
            {"key":"<YOUR KEY 2>"}
            ]
        }

Make a `PATCH` request to to update the SSH keys linked to the user account.

The response is an object that has a key called `user`. This key contains a standard `user` object.

+ Response 200 (application/json)

            {
             "user": {
                 "email": "jsnow@got.com",
                 "firstname": "John",
                 "fullname": "John Snow",
                 "id": "5bea0358-db40-429e-bd82-953016a7e2s7",
                 "lastname": "Snow",
                 "organizations": null,
                 "roles": null,
                 "ssh_public_keys": null
             }
            }
