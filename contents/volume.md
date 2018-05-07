### group Volumes

A Volume abstracts data storage operations for your servers in a flexible manner. `volumes` endpoint allow you to create, list or delete your volumes.

#### Volumes [/volumes]

##### Create a new volume [POST]

Create a new volume

The response is an object that has a key called `volume`. This key contains a standard `volume` object.

+ Attributes
    + name: `volume-0-3` (required, string) - The volume name
    + organization: `000a115d-2852-4b0a-9ce8-47f1134ba95a` (required, string) - Unique organization identifier
    + volume_type: `l_ssd` (required, string) - The volume type l_ssd
    + size: `10000000000` (required, number) - The volume size

+ Request (application/json)

    + Body

            {
              "name": "volume-0-3",
              "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
              "size": 10000000000,
              "volume_type": "l_ssd"
            }

+ Response 201

    + Headers (application/json)

            https://cp-par1.scaleway.com/volumes/c675f420-cfeb-48ff-ba2a-9d2a4dbe3fcd

    + Body

            {
              "volume": {
                "export_uri": null, 
                "id": "c675f420-cfeb-48ff-ba2a-9d2a4dbe3fcd", 
                "name": "volume-0-3", 
                "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a", 
                "server": null, 
                "size": 10000000000, 
                "volume_type": "l_ssd"
              }
            }


##### Retrieves all volumes [GET]

List all volumes associated with your account

The response is an object that has a key called `volumes`. This key contains an array of volume objects each of which contains the standard `volume` attributes.

+ Response 200 (application/json)

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


#### Volume [/volumes/{volume_id}]

+ Parameters
    + volume_id: `f929fe39-63f8-4be8-a80e-1e9c8ae22a76`(required, string) - Volume unique identifier

##### Retrieves information about a volume [GET]

List an individual volume

The response is an object that has a key called `volume`. This key contains a standard `volume` object.

+ Response 200 (application/json)

            {
              "volume": {
                "export_uri": null,
                "id": "f929fe39-63f8-4be8-a80e-1e9c8ae22a76",
                "name": "volume-0-1",
                "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
                "server": null,
                "size": 10000000000,
                "volume_type": "l_ssd"
              }
            }


##### Delete a volume [DELETE]

Delete a volume

The response code is a 204, which means that the action was successful with no returned body data.

+ Response 204
