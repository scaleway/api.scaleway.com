### group Metadata

Resources related to server Metadata available from your servers at `http://169.254.42.42`

#### Server metadata [/conf{?format}]

+ Parameters
    + format (enum[string], optional) - Rendering format

        + Default: `sh`

        + Members
            + `sh`
            + `json`

##### Serves server metadata [GET]

Serves instance metadata using its own IP address as authentication token.

+ Response 200 (application/json)

        {
            "id": "9fc9a037-5eaa-4073-9919-63adbe400ab9",
            "name": "Server 2",
            "organization": "11111111-1111-4111-8111-111111111111",
            "private_ip": "10.42.1.2",
            "public_ip": "42.1.2.3",
            "ssh_public_keys": [
                "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCjHvTHk5QY+JZdCvAep6APwOhZvIimlC4aybrXkGSBxpNeZI1f+AexDuFFWGZPb1y135pgTAc7VXpKD2FU2xd4EwsSTHaBcaBIs1HkhpFScTwN15IfLiefIHgjgveP/8U8AKQvCK7oecz3egjvqNtBDDj9cHySpQ6w5Zq/rtF7Ku8xAfBa78NEQrwaYvdfHqI/1APeoo61MJse+xZH2LVHX1EZp79jRbHny/0WkZifVXudDCmM9aqI3G1ZgWTWvFxHW/HTkSLz1v8OHD1ZPOEjIIKLxCoYE4kukK2eVZVUWFb+iU+u6GunwqWUa6W/g+0NzpEoSHVcasIC88d3tBZD",
                "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAutWtCIFyrtcpxBevMyDrNlYabV6cCVPjfWwfuKABofuWwCSX8gP2gSnmjQCdtTwYnz/vAuAXbKxn8pxtUy4c24oRvtwqHpEsFDMpzzMzWtghQFOHEd7NWzda3yDGCaJ8OFD1IkiFad5QNKmOt8nlERBUK9cwbPjzhTnP/o2Odn5nJJ8WySn0/TWwMaHH6hpZTtKMSrIn06Fo5MviPfeZ9Loe8IfgV7llB7ITMFTUKP5vPVvMlPJi8MYeo0AYmhFhbTO5wWj8hK8AJELF9RwMCehcsxjDRxKKbxiv9RL3yIdBH0dftlaNX5rYazRp4zB2BYvfPNjhpTqrY2RdPYAvTw=="
            ],
            "tags": [],
            "volumes": []
        }

+ Response 200 (plain/text)

        NAME='Server 2'
        TAGS=0
        PUBLIC_IP=42.1.2.3
        SSH_PUBLIC_KEYS=2
        SSH_PUBLIC_KEYS_0='ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCjHvTHk5QY+JZdCvAep6APwOhZvIimlC4aybrXkGSBxpNeZI1f+AexDuFFWGZPb1y135pgTAc7VXpKD2FU2xd4EwsSTHaBcaBIs1HkhpFScTwN15IfLiefIHgjgveP/8U8AKQvCK7oecz3egjvqNtBDDj9cHySpQ6w5Zq/rtF7Ku8xAfBa78NEQrwaYvdfHqI/1APeoo61MJse+xZH2LVHX1EZp79jRbHny/0WkZifVXudDCmM9aqI3G1ZgWTWvFxHW/HTkSLz1v8OHD1ZPOEjIIKLxCoYE4kukK2eVZVUWFb+iU+u6GunwqWUa6W/g+0NzpEoSHVcasIC88d3tBZD'
        SSH_PUBLIC_KEYS_1='ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAutWtCIFyrtcpxBevMyDrNlYabV6cCVPjfWwfuKABofuWwCSX8gP2gSnmjQCdtTwYnz/vAuAXbKxn8pxtUy4c24oRvtwqHpEsFDMpzzMzWtghQFOHEd7NWzda3yDGCaJ8OFD1IkiFad5QNKmOt8nlERBUK9cwbPjzhTnP/o2Odn5nJJ8WySn0/TWwMaHH6hpZTtKMSrIn06Fo5MviPfeZ9Loe8IfgV7llB7ITMFTUKP5vPVvMlPJi8MYeo0AYmhFhbTO5wWj8hK8AJELF9RwMCehcsxjDRxKKbxiv9RL3yIdBH0dftlaNX5rYazRp4zB2BYvfPNjhpTqrY2RdPYAvTw=='
        PRIVATE_IP=10.42.1.2
        VOLUMES=0
        ORGANIZATION=11111111-1111-4111-8111-111111111111
        ID=9fc9a037-5eaa-4073-9919-63adbe400ab9
