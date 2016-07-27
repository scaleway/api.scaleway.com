### group Servers

A Server is a dedicated machine for your own use. `servers` endpoint allow you to create, list or delete your servers.

#### Servers [/servers]

##### Create a new server [POST]

Create a new server

The response is an object that has a key called `server`. This key contain a standard `server` object.

+ Parameters
    
    + name (required, string, `my_server`)... The server name
    + organization (required, string, `000a115d-2852-4b0a-9ce8-47f1134ba95a`)... Organization unique identifier
    + image (required, string, `85917034-46b0-4cc5-8b48-f0a2245e357e`)... Image unique identifier
    + volumes (required, list, `volumes: {1: {name: "vol_demo", organization: "ecc1c86a-eabb-43a7-9c0a-77e371753c0a", size: 10000000000, volume_type: "l_sdd"`)... A list of volumes identifier to be attached to the server
    + tags (optional, list, `[test, www]`)... A list of tags

+ Request

      + Body

            {
              "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
              "name": "my_server",
              "image": "85917034-46b0-4cc5-8b48-f0a2245e357e",
              "tags": ["test", "www"]
            }

+ Response 201 (application/json)

    + Header
    
        location: https://api.scaleway.com/servers/3cb18e2d-f4f7-48f7-b452-59b88ae8fc8c

    + Body

        {
          "server": {
            "bootscript": null,
            "dynamic_public_ip": false,
            "id": "3cb18e2d-f4f7-48f7-b452-59b88ae8fc8c",
            "image": {
              "id": "85917034-46b0-4cc5-8b48-f0a2245e357e",
              "name": "ubuntu working"
            },
            "name": "my_server",
            "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
            "private_ip": null,
            "public_ip": null,
            "state": "running",
            "tags": [
              "test",
              "www"
            ],
            "volumes": {
              "0": {
                "export_uri": null,
                "id": "d9257116-6919-49b4-a420-dcfdff51fcb1",
                "name": "vol simple snapshot",
                "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
                "server": {
                  "id": "3cb18e2d-f4f7-48f7-b452-59b88ae8fc8c",
                  "name": "my_server"
                },
                "size": 10000000000,
                "volume_type": "l_ssd"
              }
            }
          }
        }

##### List all servers [GET]

List all servers associate with your account

The response is an object that has a key called `servers`. This key contain an array of server objects each of which contain the standard `server` attributes.

+ Response 200 (application/json)

        {
          "servers": [
            {
              "bootscript": null,
              "dynamic_public_ip": false,
              "id": "741db378-6b87-46d4-a8c5-4e46a09ab1f8",
              "image": {
                "id": "85917034-46b0-4cc5-8b48-f0a2245e357e",
                "name": "ubuntu working"
              },
              "name": "my_server",
              "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
              "private_ip": null,
              "public_ip": null,
              "state": "running",
              "tags": [
                "test",
                "www"
              ],
              "volumes": {
                "0": {
                  "export_uri": null,
                  "id": "c1eb8f3a-4f0b-4b95-a71c-93223e457f5a",
                  "name": "vol simple snapshot",
                  "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
                  "server": {
                    "id": "741db378-6b87-46d4-a8c5-4e46a09ab1f8",
                    "name": "my_server"
                  },
                  "size": 10000000000,
                  "volume_type": "l_ssd"
                }
              }
            },
            {
              "bootscript": null,
              "dynamic_public_ip": false,
              "id": "0e9f85af-b6aa-401e-a00d-484f832c5024",
              "image": {
                "id": "85917034-46b0-4cc5-8b48-f0a2245e357e",
                "name": "ubuntu working"
              },
              "name": "my_server",
              "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
              "private_ip": null,
              "public_ip": null,
              "state": "running",
              "tags": [
                "test",
                "www"
              ],
              "volumes": {
                "0": {
                  "export_uri": null,
                 "id": "fb09bb31-ecd9-4dff-8b55-b6e45715199d",
                  "name": "vol simple snapshot",
                  "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
                  "server": {
                    "id": "0e9f85af-b6aa-401e-a00d-484f832c5024",
                    "name": "my_server"
                  },
                  "size": 10000000000,
                  "volume_type": "l_ssd"
                }
              }
            }
          ]
        }


#### Server [/servers/{server_id}]

+ Parameters

    + server_id (required, string, `741db378-6b87-46d4-a8c5-4e46a09ab1f8`)... Server unique identifier

##### Retrieve a server [GET]

List an individual server

The response is an object that has a key called `server`. This key contain a standard `server` object.

+ Response 200 (application/json)

        {
          "server": {
            "bootscript": null,
            "dynamic_public_ip": false,
            "id": "741db378-6b87-46d4-a8c5-4e46a09ab1f8",
            "image": {
              "id": "85917034-46b0-4cc5-8b48-f0a2245e357e",
              "name": "ubuntu working"
            },
            "name": "my_server",
            "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
            "private_ip": null,
            "public_ip": null,
            "state": "running",
            "tags": [
              "test",
              "www"
            ],
            "volumes": {
              "0": {
                "export_uri": null,
                "id": "c1eb8f3a-4f0b-4b95-a71c-93223e457f5a",
                "name": "vol simple snapshot",
                "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
                "server": {
                  "id": "741db378-6b87-46d4-a8c5-4e46a09ab1f8",
                  "name": "my_server"
                },
                "size": 10000000000,
                "volume_type": "l_ssd"
              }
            }
          }
        }

##### Update a server [PUT]

Update details about a server

The response is an object that has a key called `server`. This key contain a standard `server` object.

+ Request

    + Body

        {
          "bootscript": null,
          "dynamic_public_ip": false, 
          "id": "741db378-6b87-46d4-a8c5-4e46a09ab1f8",
          "image": {
                "id": "85917034-46b0-4cc5-8b48-f0a2245e357e", 
                "name": "ubuntu working"
              }, 
          "name": "my_server", 
          "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a", 
          "private_ip": null, 
          "public_ip": null, 
          "state": "running",
          "tags": [
            "test", 
            "www", 
            "new"
          ], 
          "volumes": {
            "0": {
              "export_uri": null, 
              "id": "c39b49f4-1804-4d03-96b4-952896b0918e", 
              "name": "vol simple snapshot", 
              "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a", 
              "server": {
                "id": "345b862b-9198-4633-94a5-3f0307702652", 
                "name": "my_server"
              }, 
              "size": 10000000000, 
              "volume_type": "l_ssd"
            }
          }
        }


+ Response 200 (application/json)

        {
          "server": {
            "bootscript": null,
            "dynamic_public_ip": false,
            "id": "741db378-6b87-46d4-a8c5-4e46a09ab1f8",
            "image": {
              "id": "85917034-46b0-4cc5-8b48-f0a2245e357e",
              "name": "ubuntu working"
            },
            "name": "my_server",
            "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
            "private_ip": null,
            "public_ip": null,
            "state": "running",
            "tags": [
              "prod",
              "www",
               "new"
            ],
            "volumes": {
              "0": {
                "export_uri": null,
                "id": "c1eb8f3a-4f0b-4b95-a71c-93223e457f5a",
                "name": "vol simple snapshot",
                "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
                "server": {
                  "id": "741db378-6b87-46d4-a8c5-4e46a09ab1f8",
                  "name": "my_server"
                },
                "size": 10000000000,
                "volume_type": "l_ssd"
              }
            }
          }
        }

##### Remove a server [DELETE]

Delete a server

The response code is a 204, which means that the action was successful with no returned body data.

+ Response 204


#### Actions [/servers/{server_id}/action]

A collection of actions to be applied on a server

+ Parameters

    + server_id (required, string, `741db378-6b87-46d4-a8c5-4e46a09ab1f8`)... Server unique identifier

##### List all actions [GET]

List all actions available for the secified server

The response is an object that has a key called `actions`. This key contain an array of action

+ Response 200 (application/json)
     
        {
          "actions": [
            "poweron",
            "poweroff",
            "reboot"
          ]
        }

##### Execute an action [POST]

Execute an action on a server

The response is an object that has a key called `task`. This key contain a standard `task` object.

+ Parameters 

    + server_id (required, string, `741db378-6b87-46d4-a8c5-4e46a09ab1f8`)... Server unique identifier
    + action (required, string, `poweron`)... Action to execute

+ Request

    + Body

        {
          "action": "poweroff"
        }

+ Response 202 (application/json)

    + Header

        location: https://api.scaleway.com/tasks/a8a1775c-0dda-4f52-87b2-4e8101d68d6e

    + Body

        {
          "task": {
            "description": "server_poweroff",
            "href_from": "/servers/741db378-6b87-46d4-a8c5-4e46a09ab1f8/action",
            "id": "a8a1775c-0dda-4f52-87b2-4e8101d68d6e",
            "progress": "0",
            "status": "pending"
          }
        }

