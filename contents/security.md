### group Security groups

Security groups are like a virtual firewall. With security groups, you can define rules that restrict network access to your servers.

#### Security Groups [/security_groups]

##### Create a security group [POST]

Create a new security group

The response is an object that has a key called `security_group`. This key contain a standard `security_group` object.

+ Attributes
    + organization: `000a115d-2852-4b0a-9ce8-47f1134ba95a` (required, string) - Organization unique identifier
    + name: `security-group-01` (required, string) - The security group name
    + description: `arm` (required, string) - The security group description

+ Request (application/json)

    + Body

            {
                "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
                "name": "security-group-01",
                "description": "Security group 01"
            }

+ Response 201 (application/json)

        {
          "security_group": {
              "description": "Security group 01",
              "enable_default_security": true,
              "id": "adb5887b-5ab5-445a-ae70-276df95a9852",
              "name": "security-group-01",
              "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
              "organization_default": false,
              "servers": []
          }
        }

##### List all security groups [GET]

List all security groups associate with your account

The response is an object that has a key called `security_groups`. This key contain an array of security group objects each of which contain the standard `security_groups` attributes.

+ Response 200 (application/json)

        {
            "security_groups": [
                {
                    "description": "Base security group",
                    "enable_default_security": true,
                    "id": "000a115d-2852-4b1a-9ce8-47f1134ba95a",
                    "name": "Base group",
                    "organization": "ecc1c86a-eabb-43a7-9c0a-77e371753c0a",
                    "organization_default": true,
                    "servers": [
                        {
                            "id": "b5614869-1967-9ce8-8cd2-801febf9a3f9",
                            "name": "scw-9b0823"
                        },
                        {
                            "id": "4167bf23-9ce8-4790-2852-d7c5b86934df",
                            "name": "scw-9b088e"
                        }
                    ]
                }
            ]
        }

#### Operation on a security groups [/security_groups/{group_id}]

+ Parameters
    + group_id: `000a115d-2852-4b1a-9ce8-47f1134ba95a`(required, string) - Security group id unique identifier

##### Retrieves a security group [GET]

List an individual security group

The response is an object that has a key called `security_group`. This key contain a standard `security_group` object.

+ Response 200 (application/json)

        {
          "security_group": {
            "description": "Base security group",
            "enable_default_security": true,
            "id": "000a115d-2852-4b1a-9ce8-47f1134ba95a",
            "name": "Base group",
            "organization": "ecc1c86a-eabb-43a7-9c0a-77e371753c0a",
            "organization_default": true,
            "servers": [
                {
                    "id": "b5614869-1967-9ce8-8cd2-801febf9a3f9",
                    "name": "scw-9b0823"
                },
                {
                    "id": "4167bf23-9ce8-4790-2852-d7c5b86934df",
                    "name": "scw-9b088e"
                }
            ]
          }
        }

##### Update a security group [PUT]

Update a security group details

The response is an object that has a key called `security_group`. This key contain a standard `security_group` object.

+ Request (application/json)

    + Body

            {
                "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
                "name": "security-group-02",
                "description": "Security group 02"
            }


+ Response 200 (application/json)

        {
          "security_group": {
            "description": "Security group 02",
            "enable_default_security": true,
            "id": "000a115d-2852-4b1a-9ce8-47f1134ba95a",
            "name": "security-group-02",
            "organization": "ecc1c86a-eabb-43a7-9c0a-77e371753c0a",
            "organization_default": true,
            "servers": [
                {
                    "id": "b5614869-1967-9ce8-8cd2-801febf9a3f9",
                    "name": "scw-9b0823"
                },
                {
                    "id": "4167bf23-9ce8-4790-2852-d7c5b86934df",
                    "name": "scw-9b088e"
                }
            ]
          }
        }


##### Delete a security group [DELETE]

Delete a security group

The response code is a 204, which means that the action was successful with no returned body data.

+ Response 204

#### Manage rules [/security_groups/{group_id}/rules]

##### Create a new rule [POST]

Create a new rule

The response is an object that has a key called `rule`. This key contain a standard `rule` object.

action: "accept"
direction: "outbound"
ip_range: "0.0.0.0/0"
protocol: "ICMP"

+ Attributes
    + organization: `000a115d-2852-4b0a-9ce8-47f1134ba95a` (required, string) - Organization unique identifier
    + action (required, enum[string]) - The rule action
        + Members
            + `accept`
            + `drop`
    + direction (required, enum[string]) - The rule direction
        + Members
            + `outbound`
            + `inbound`
    + ip_range: `0.0.0.0/0` (required, string) - The IPs range, must be an IPv4 range
    + protocol (required, enum[string]) - The rule protocol
        + Members
            + `TCP`
            + `UDP`
            + `ICMP`
    + dest_port_from: `65` (optional, string) - The port between 1 and 65535

+ Request (application/json)

    + Body

            {
              "action": "drop",
              "direction": "inbound",
              "ip_range": "0.0.0.0/0",
              "protocol": "TCP"
            }

+ Response 201 (application/json)

            {
              "rule": {
                  "direction": "inbound",
                  "protocol": "TCP",
                  "ip_range": "0.0.0.0/0",
                  "dest_port_from": null,
                  "action": "drop",
                  "position": 2,
                  "dest_port_to": null,
                  "editable": null,
                  "id": "ef2136c9-6c21-491a-b238-b38de24726a7"
              }
            }

##### List all rules [GET]

List all rules for a security group

The response is an object that has a key called `rules`. This key contain an array of rules for a security group each of which contain the standard `rule` attributes.

+ Response 200 (application/json)

        {
            "rules": [
              {
                  "direction": "outbound",
                  "protocol": "TCP",
                  "ip_range": "0.0.0.0/0",
                  "dest_port_from": 25,
                  "action": "drop",
                  "position": 1,
                  "dest_port_to": null,
                  "editable": false,
                  "id": "58909be7-d17c-4ac8-9eb3-23d5fc58abc5"
              }, {
                  "direction": "outbound",
                  "protocol": "TCP",
                  "ip_range": "0.0.0.0/0",
                  "dest_port_from": 465,
                  "action": "drop",
                  "position": 2,
                  "dest_port_to": null,
                  "editable": false,
                  "id": "25680235-108b-4bbc-8e25-114303d950bd"
              }, {
                  "direction": "outbound",
                  "protocol": "TCP",
                  "ip_range": "0.0.0.0/0",
                  "dest_port_from": 587,
                  "action": "drop",
                  "position": 3,
                  "dest_port_to": null,
                  "editable": false,
                  "id": "4a31b633-118e-4900-bd52-facf1085fc8d"
              }
            ]
        }

#### Operation on a security rule [/security_groups/{group_id}/rules/{rule_id}]


##### Update a security rule [PUT]

Update a security rule

The response is an object that has a key called `rule`. This key contain a standard `rule` object.

+ Request (application/json)

    + Body

            {
              "action": "drop",
              "direction": "outbound",
              "ip_range": "0.0.0.0/0",
              "protocol": "TCP"
            }


+ Response 200 (application/json)

        {
          "rule": {
              "direction": "outbound",
              "protocol": "TCP",
              "ip_range": "0.0.0.0/0",
              "dest_port_from": null,
              "action": "drop",
              "position": 2,
              "dest_port_to": null,
              "editable": null,
              "id": "ef2136c9-6c21-491a-b238-b38de24726a7"
          }
        }

##### Retrieves a security rule [GET]

List an individual security rule

The response is an object that has a key called `rule`. This key contain a standard `rule` object.

+ Response 200 (application/json)

        {
          "rule": {
              "direction": "outbound",
              "protocol": "TCP",
              "ip_range": "0.0.0.0/0",
              "dest_port_from": null,
              "action": "drop",
              "position": 2,
              "dest_port_to": null,
              "editable": null,
              "id": "ef2136c9-6c21-491a-b238-b38de24726a7"
          }
        }

##### Delete a security rule [DELETE]

Delete and deactivate a security rule

The response code is a 204, which means that the action was successful with no returned body data.

+ Response 204

