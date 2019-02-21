### group Servers

A Server is a dedicated machine for your own use. `servers` endpoints allow you to create, list or delete your servers.

#### Servers [/servers]

##### Create a new server [POST]

Create a new server

The response is an object that has a key called `server`. This key contains a standard `server` object.

+ Attributes

    + name: `my_server` (required, string) - The server name
    + organization: `000a115d-2852-4b0a-9ce8-47f1134ba95a` (required, string) - Organization unique identifier
    + image: `85917034-46b0-4cc5-8b48-f0a2245e357e` (required, string) - Image unique identifier
    + volumes: `volumes: {1: {name: "vol_demo", organization: "ecc1c86a-eabb-43a7-9c0a-77e371753c0a", size: 10000000000, volume_type: "l_ssd"}}` (optional, [string]) - A list of volumes identifier to be attached to the server. Required for X64 (Pro) commercial_types.
    + commercial_type: `START1-S` (optional, string) - The type of the server you want to create (START1-XS, START1-S, START1-M, START1-L, C1, C2S, C2M, C2L).
    + tags: `[test, www]` (optional, [string]) - List of tags
    + enable_ipv6: `true` (optional, boolean) - Enable IPv6 on the server.
    + boot_type: `local` (optional, [string]) - Boot method (local, bootscript)

+ Request

      + Body

            {
              "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
              "name": "my_server",
              "image": "85917034-46b0-4cc5-8b48-f0a2245e357e",
              "commercial_type": "START1-S",
              "tags": ["test", "www"],
              "enable_ipv6": true, 
              "boot_type": "local"
            }

+ Response 201 (application/json)

    + Header

            Location: https://cp-par1.scaleway.com/servers/3cb18e2d-f4f7-48f7-b452-59b88ae8fc8c

    + Body

            {
              "server": {
                  "maintenances": [],
                  "state_detail": "",
                  "image": {
                    "default_bootscript": {
                      "kernel": "http://169.254.42.24/kernel/x86_64-mainline-lts-4.4-4.4.127-rev1/vmlinuz-4.4.127",
                      "initrd": "http://169.254.42.24/initrd/initrd-Linux-x86_64-v3.14.4.gz",
                      "default": true,
                      "bootcmdargs": "LINUX_COMMON scaleway boot=local nbd.max_part=16",
                      "architecture": "x86_64",
                      "title": "x86_64 mainline 4.4.127 rev1",
                      "dtb": "",
                      "organization": "11111111-1111-4111-8111-111111111111",
                      "id": "b1e68c26-a19c-4eac-9222-498b22bd7ad9",
                      "public": true
                    },
                    "creation_date": "2018-04-11T06:35:44.250891+00:00",
                    "name": "Ubuntu Xenial",
                    "modification_date": "2018-04-11T06:41:06.414064+00:00",
                    "organization": "51b656e3-4865-41e8-adbc-0c45bdd780db",
                    "extra_volumes": {},
                    "arch": "x86_64",
                    "id": "e20532c4-1fa0-4c97-992f-436b8d372c07",
                    "root_volume": {
                      "size": 50000000000,
                      "id": "83548ffe-1312-461c-86eb-3c7717710563",
                      "volume_type": "l_ssd",
                      "name": "snapshot-d12cfbb6-4843-48ad-84dc-f3a8690fdb02-2018-04-11_06:35"
                    },
                    "public": true
                  },
                  "creation_date": "2018-05-24T13:48:18.865352+00:00",
                  "public_ip": {
                    "dynamic": false,
                    "id": "d44a3223-56f6-4617-97cd-aea1d69c9e1d",
                    "address": "163.172.136.159"
                  },
                  "private_ip": null,
                  "id": "22a5c380-0a27-4a55-8f91-bedf427f6b6a",
                  "dynamic_ip_required": false,
                  "modification_date": "2018-05-24T13:49:10.388108+00:00",
                  "enable_ipv6": false,
                  "hostname": "scw-be19b9",
                  "state": "stopped",
                  "bootscript": {
                    "kernel": "http://169.254.42.24/kernel/x86_64-mainline-lts-4.4-4.4.127-rev1/vmlinuz-4.4.127",
                    "initrd": "http://169.254.42.24/initrd/initrd-Linux-x86_64-v3.14.4.gz",
                    "default": true,
                    "bootcmdargs": "LINUX_COMMON scaleway boot=local nbd.max_part=16",
                    "architecture": "x86_64",
                    "title": "x86_64 mainline 4.4.127 rev1",
                    "dtb": "",
                    "organization": "11111111-1111-4111-8111-111111111111",
                    "id": "b1e68c26-a19c-4eac-9222-498b22bd7ad9",
                    "public": true
                  },
                  "location": null,
                  "boot_type": "local",
                  "ipv6": null,
                  "commercial_type": "START1-L",
                  "tags": [],
                  "arch": "x86_64",
                  "extra_networks": [],
                  "name": "scw-be19b9",
                  "volumes": {
                    "0": {
                      "size": 50000000000,
                      "state": "available",
                      "name": "snapshot-d12cfbb6-4843-48ad-84dc-f3a8690fdb02-2018-04-11_06:35",
                      "modification_date": "2018-05-24T13:48:18.865352+00:00",
                      "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
                      "export_uri": "device://dev/vda",
                      "creation_date": "2018-05-24T13:48:18.865352+00:00",
                      "id": "1cb48c59-1816-47b9-b3d8-54560772389c",
                      "volume_type": "l_ssd",
                      "server": {
                        "id": "22a5c380-0a27-4a55-8f91-bedf427f6b6a",
                        "name": "scw-be19b9"
                      }
                    },
                    "1": {
                      "size": 150000000000,
                      "state": "available",
                      "name": "Volume",
                      "modification_date": "2018-05-24T13:48:19.267400+00:00",
                      "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
                      "export_uri": "device://dev/vdb",
                      "creation_date": "2018-05-24T13:48:18.865352+00:00",
                      "id": "ae789518-73c1-4e8b-8235-357da8dd9e04",
                      "volume_type": "l_ssd",
                      "server": {
                        "id": "22a5c380-0a27-4a55-8f91-bedf427f6b6a",
                        "name": "scw-be19b9"
                      }
                    }
                  },
                  "security_group": {
                    "id": "e78bc604-90c7-46f5-b705-3b401fbddd4d",
                    "name": "Default security group"
                  },
                  "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a"
                }
            }

##### List all servers [GET]

List all servers associated with your account

The response is an object that has a key called `servers`. This key contains an array of server objects each of which contains the standard `server` attributes.

+ Response 200 (application/json)

            {
              "servers": [
                {
                  "maintenances": [],
                  "state_detail": "booted",
                  "image": {
                    "default_bootscript": {
                      "kernel": "http://169.254.42.24/kernel/x86_64-mainline-lts-4.4-4.4.127-rev1/vmlinuz-4.4.127",
                      "initrd": "http://169.254.42.24/initrd/initrd-Linux-x86_64-v3.14.4.gz",
                      "default": true,
                      "bootcmdargs": "LINUX_COMMON scaleway boot=local nbd.max_part=16",
                      "architecture": "x86_64",
                      "title": "x86_64 mainline 4.4.127 rev1",
                      "dtb": "",
                      "organization": "11111111-1111-4111-8111-111111111111",
                      "id": "b1e68c26-a19c-4eac-9222-498b22bd7ad9",
                      "public": true
                    },
                    "creation_date": "2018-04-11T06:35:44.250891+00:00",
                    "name": "Ubuntu Xenial",
                    "modification_date": "2018-04-11T06:41:06.414064+00:00",
                    "organization": "51b656e3-4865-41e8-adbc-0c45bdd780db",
                    "extra_volumes": {},
                    "arch": "x86_64",
                    "id": "e20532c4-1fa0-4c97-992f-436b8d372c07",
                    "root_volume": {
                      "size": 50000000000,
                      "id": "83548ffe-1312-461c-86eb-3c7717710563",
                      "volume_type": "l_ssd",
                      "name": "snapshot-d12cfbb6-4843-48ad-84dc-f3a8690fdb02-2018-04-11_06:35"
                    },
                    "public": true
                  },
                  "creation_date": "2018-05-24T13:48:18.865352+00:00",
                  "public_ip": {
                    "dynamic": false,
                    "id": "d44a3223-56f6-4617-97cd-aea1d69c9e1d",
                    "address": "163.172.136.159"
                  },
                  "private_ip": "10.14.167.165",
                  "id": "22a5c380-0a27-4a55-8f91-bedf427f6b6a",
                  "dynamic_ip_required": false,
                  "modification_date": "2018-05-24T13:49:10.388108+00:00",
                  "enable_ipv6": false,
                  "hostname": "scw-be19b9",
                  "state": "running",
                  "bootscript": {
                    "kernel": "http://169.254.42.24/kernel/x86_64-mainline-lts-4.4-4.4.127-rev1/vmlinuz-4.4.127",
                    "initrd": "http://169.254.42.24/initrd/initrd-Linux-x86_64-v3.14.4.gz",
                    "default": true,
                    "bootcmdargs": "LINUX_COMMON scaleway boot=local nbd.max_part=16",
                    "architecture": "x86_64",
                    "title": "x86_64 mainline 4.4.127 rev1",
                    "dtb": "",
                    "organization": "11111111-1111-4111-8111-111111111111",
                    "id": "b1e68c26-a19c-4eac-9222-498b22bd7ad9",
                    "public": true
                  },
                  "location": {
                    "platform_id": "13",
                    "hypervisor_id": "314",
                    "node_id": "19",
                    "cluster_id": "4",
                    "zone_id": "par1"
                  },
                  "boot_type": "local",
                  "ipv6": null,
                  "commercial_type": "START1-L",
                  "tags": [],
                  "arch": "x86_64",
                  "extra_networks": [],
                  "name": "scw-be19b9",
                  "volumes": {
                    "0": {
                      "size": 50000000000,
                      "state": "available",
                      "name": "snapshot-d12cfbb6-4843-48ad-84dc-f3a8690fdb02-2018-04-11_06:35",
                      "modification_date": "2018-05-24T13:48:18.865352+00:00",
                      "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
                      "export_uri": "device://dev/vda",
                      "creation_date": "2018-05-24T13:48:18.865352+00:00",
                      "id": "1cb48c59-1816-47b9-b3d8-54560772389c",
                      "volume_type": "l_ssd",
                      "server": {
                        "id": "22a5c380-0a27-4a55-8f91-bedf427f6b6a",
                        "name": "scw-be19b9"
                      }
                    },
                    "1": {
                      "size": 150000000000,
                      "state": "available",
                      "name": "Volume",
                      "modification_date": "2018-05-24T13:48:19.267400+00:00",
                      "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
                      "export_uri": "device://dev/vdb",
                      "creation_date": "2018-05-24T13:48:18.865352+00:00",
                      "id": "ae789518-73c1-4e8b-8235-357da8dd9e04",
                      "volume_type": "l_ssd",
                      "server": {
                        "id": "22a5c380-0a27-4a55-8f91-bedf427f6b6a",
                        "name": "scw-be19b9"
                      }
                    }
                  },
                  "security_group": {
                    "id": "e78bc604-90c7-46f5-b705-3b401fbddd4d",
                    "name": "Default security group"
                  },
                  "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a"
                }
              ]
            }


#### Server [/servers/{server_id}]

+ Parameters

    + server_id: `741db378-6b87-46d4-a8c5-4e46a09ab1f8` (required, string) - Server unique identifier

##### Retrieve a server [GET]

List an individual server

The response is an object that has a key called `server`. This key contains a standard `server` object.

+ Response 200 (application/json)

            {
              "server": {
              "maintenances": [],
              "state_detail": "booted",
              "image": {
                "default_bootscript": {
                  "kernel": "http://169.254.42.24/kernel/x86_64-mainline-lts-4.4-4.4.127-rev1/vmlinuz-4.4.127",
                  "initrd": "http://169.254.42.24/initrd/initrd-Linux-x86_64-v3.14.4.gz",
                  "default": true,
                  "bootcmdargs": "LINUX_COMMON scaleway boot=local nbd.max_part=16",
                  "architecture": "x86_64",
                  "title": "x86_64 mainline 4.4.127 rev1",
                  "dtb": "",
                  "organization": "11111111-1111-4111-8111-111111111111",
                  "id": "b1e68c26-a19c-4eac-9222-498b22bd7ad9",
                  "public": true
                },
                "creation_date": "2018-04-11T06:35:44.250891+00:00",
                "name": "Ubuntu Xenial",
                "modification_date": "2018-04-11T06:41:06.414064+00:00",
                "organization": "51b656e3-4865-41e8-adbc-0c45bdd780db",
                "extra_volumes": {},
                "arch": "x86_64",
                "id": "e20532c4-1fa0-4c97-992f-436b8d372c07",
                "root_volume": {
                  "size": 50000000000,
                  "id": "83548ffe-1312-461c-86eb-3c7717710563",
                  "volume_type": "l_ssd",
                  "name": "snapshot-d12cfbb6-4843-48ad-84dc-f3a8690fdb02-2018-04-11_06:35"
                },
                "public": true
              },
              "creation_date": "2018-05-24T13:48:18.865352+00:00",
              "public_ip": {
                "dynamic": false,
                "id": "d44a3223-56f6-4617-97cd-aea1d69c9e1d",
                "address": "163.172.136.159"
              },
              "private_ip": "10.14.167.165",
              "id": "22a5c380-0a27-4a55-8f91-bedf427f6b6a",
              "dynamic_ip_required": false,
              "modification_date": "2018-05-24T13:49:10.388108+00:00",
              "enable_ipv6": false,
              "hostname": "scw-be19b9",
              "state": "running",
              "bootscript": {
                "kernel": "http://169.254.42.24/kernel/x86_64-mainline-lts-4.4-4.4.127-rev1/vmlinuz-4.4.127",
                "initrd": "http://169.254.42.24/initrd/initrd-Linux-x86_64-v3.14.4.gz",
                "default": true,
                "bootcmdargs": "LINUX_COMMON scaleway boot=local nbd.max_part=16",
                "architecture": "x86_64",
                "title": "x86_64 mainline 4.4.127 rev1",
                "dtb": "",
                "organization": "11111111-1111-4111-8111-111111111111",
                "id": "b1e68c26-a19c-4eac-9222-498b22bd7ad9",
                "public": true
              },
              "location": {
                "platform_id": "13",
                "hypervisor_id": "314",
                "node_id": "19",
                "cluster_id": "4",
                "zone_id": "par1"
              },
              "boot_type": "local",
              "ipv6": null,
              "commercial_type": "START1-L",
              "tags": [],
              "arch": "x86_64",
              "extra_networks": [],
              "name": "scw-be19b9",
              "volumes": {
                "0": {
                  "size": 50000000000,
                  "state": "available",
                  "name": "snapshot-d12cfbb6-4843-48ad-84dc-f3a8690fdb02-2018-04-11_06:35",
                  "modification_date": "2018-05-24T13:48:18.865352+00:00",
                  "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
                  "export_uri": "device://dev/vda",
                  "creation_date": "2018-05-24T13:48:18.865352+00:00",
                  "id": "1cb48c59-1816-47b9-b3d8-54560772389c",
                  "volume_type": "l_ssd",
                  "server": {
                    "id": "22a5c380-0a27-4a55-8f91-bedf427f6b6a",
                    "name": "scw-be19b9"
                  }
                },
                "1": {
                  "size": 150000000000,
                  "state": "available",
                  "name": "Volume",
                  "modification_date": "2018-05-24T13:48:19.267400+00:00",
                  "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
                  "export_uri": "device://dev/vdb",
                  "creation_date": "2018-05-24T13:48:18.865352+00:00",
                  "id": "ae789518-73c1-4e8b-8235-357da8dd9e04",
                  "volume_type": "l_ssd",
                  "server": {
                    "id": "22a5c380-0a27-4a55-8f91-bedf427f6b6a",
                    "name": "scw-be19b9"
                  }
                }
              },
              "security_group": {
                "id": "e78bc604-90c7-46f5-b705-3b401fbddd4d",
                "name": "Default security group"
              },
              "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a"
            }

##### Update a server [PUT]

Update details about a server

The response is an object that has a key called `server`. This key contains a standard `server` object.

+ Request

    + Body

            {
              "server": {
              "maintenances": [],
              "state_detail": "booted",
              "image": {
                "default_bootscript": {
                  "kernel": "http://169.254.42.24/kernel/x86_64-mainline-lts-4.4-4.4.127-rev1/vmlinuz-4.4.127",
                  "initrd": "http://169.254.42.24/initrd/initrd-Linux-x86_64-v3.14.4.gz",
                  "default": true,
                  "bootcmdargs": "LINUX_COMMON scaleway boot=local nbd.max_part=16",
                  "architecture": "x86_64",
                  "title": "x86_64 mainline 4.4.127 rev1",
                  "dtb": "",
                  "organization": "11111111-1111-4111-8111-111111111111",
                  "id": "b1e68c26-a19c-4eac-9222-498b22bd7ad9",
                  "public": true
                },
                "creation_date": "2018-04-11T06:35:44.250891+00:00",
                "name": "Ubuntu Xenial",
                "modification_date": "2018-04-11T06:41:06.414064+00:00",
                "organization": "51b656e3-4865-41e8-adbc-0c45bdd780db",
                "extra_volumes": {},
                "arch": "x86_64",
                "id": "e20532c4-1fa0-4c97-992f-436b8d372c07",
                "root_volume": {
                  "size": 50000000000,
                  "id": "83548ffe-1312-461c-86eb-3c7717710563",
                  "volume_type": "l_ssd",
                  "name": "snapshot-d12cfbb6-4843-48ad-84dc-f3a8690fdb02-2018-04-11_06:35"
                },
                "public": true
              },
              "creation_date": "2018-05-24T13:48:18.865352+00:00",
              "public_ip": {
                "dynamic": false,
                "id": "d44a3223-56f6-4617-97cd-aea1d69c9e1d",
                "address": "163.172.136.159"
              },
              "private_ip": "10.14.167.165",
              "id": "22a5c380-0a27-4a55-8f91-bedf427f6b6a",
              "dynamic_ip_required": false,
              "modification_date": "2018-05-24T13:49:10.388108+00:00",
              "enable_ipv6": false,
              "hostname": "scw-be19b9",
              "state": "running",
              "bootscript": {
                "kernel": "http://169.254.42.24/kernel/x86_64-mainline-lts-4.4-4.4.127-rev1/vmlinuz-4.4.127",
                "initrd": "http://169.254.42.24/initrd/initrd-Linux-x86_64-v3.14.4.gz",
                "default": true,
                "bootcmdargs": "LINUX_COMMON scaleway boot=local nbd.max_part=16",
                "architecture": "x86_64",
                "title": "x86_64 mainline 4.4.127 rev1",
                "dtb": "",
                "organization": "11111111-1111-4111-8111-111111111111",
                "id": "b1e68c26-a19c-4eac-9222-498b22bd7ad9",
                "public": true
              },
              "location": {
                "platform_id": "13",
                "hypervisor_id": "314",
                "node_id": "19",
                "cluster_id": "4",
                "zone_id": "par1"
              },
              "boot_type": "local",
              "ipv6": null,
              "commercial_type": "START1-L",
              "tags": [],
              "arch": "x86_64",
              "extra_networks": [],
              "name": "scw-be19b9",
              "volumes": {
                "0": {
                  "size": 50000000000,
                  "state": "available",
                  "name": "snapshot-d12cfbb6-4843-48ad-84dc-f3a8690fdb02-2018-04-11_06:35",
                  "modification_date": "2018-05-24T13:48:18.865352+00:00",
                  "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
                  "export_uri": "device://dev/vda",
                  "creation_date": "2018-05-24T13:48:18.865352+00:00",
                  "id": "1cb48c59-1816-47b9-b3d8-54560772389c",
                  "volume_type": "l_ssd",
                  "server": {
                    "id": "22a5c380-0a27-4a55-8f91-bedf427f6b6a",
                    "name": "scw-be19b9"
                  }
                },
                "1": {
                  "size": 150000000000,
                  "state": "available",
                  "name": "Volume",
                  "modification_date": "2018-05-24T13:48:19.267400+00:00",
                  "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
                  "export_uri": "device://dev/vdb",
                  "creation_date": "2018-05-24T13:48:18.865352+00:00",
                  "id": "ae789518-73c1-4e8b-8235-357da8dd9e04",
                  "volume_type": "l_ssd",
                  "server": {
                    "id": "22a5c380-0a27-4a55-8f91-bedf427f6b6a",
                    "name": "scw-be19b9"
                  }
                }
              },
              "security_group": {
                "id": "e78bc604-90c7-46f5-b705-3b401fbddd4d",
                "name": "Default security group"
              },
              "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a"
            }


+ Response 200 (application/json)

            {
              "server": {
              "maintenances": [],
              "state_detail": "booted",
              "image": {
                "default_bootscript": {
                  "kernel": "http://169.254.42.24/kernel/x86_64-mainline-lts-4.4-4.4.127-rev1/vmlinuz-4.4.127",
                  "initrd": "http://169.254.42.24/initrd/initrd-Linux-x86_64-v3.14.4.gz",
                  "default": true,
                  "bootcmdargs": "LINUX_COMMON scaleway boot=local nbd.max_part=16",
                  "architecture": "x86_64",
                  "title": "x86_64 mainline 4.4.127 rev1",
                  "dtb": "",
                  "organization": "11111111-1111-4111-8111-111111111111",
                  "id": "b1e68c26-a19c-4eac-9222-498b22bd7ad9",
                  "public": true
                },
                "creation_date": "2018-04-11T06:35:44.250891+00:00",
                "name": "Ubuntu Xenial",
                "modification_date": "2018-04-11T06:41:06.414064+00:00",
                "organization": "51b656e3-4865-41e8-adbc-0c45bdd780db",
                "extra_volumes": {},
                "arch": "x86_64",
                "id": "e20532c4-1fa0-4c97-992f-436b8d372c07",
                "root_volume": {
                  "size": 50000000000,
                  "id": "83548ffe-1312-461c-86eb-3c7717710563",
                  "volume_type": "l_ssd",
                  "name": "snapshot-d12cfbb6-4843-48ad-84dc-f3a8690fdb02-2018-04-11_06:35"
                },
                "public": true
              },
              "creation_date": "2018-05-24T13:48:18.865352+00:00",
              "public_ip": {
                "dynamic": false,
                "id": "d44a3223-56f6-4617-97cd-aea1d69c9e1d",
                "address": "163.172.136.159"
              },
              "private_ip": "10.14.167.165",
              "id": "22a5c380-0a27-4a55-8f91-bedf427f6b6a",
              "dynamic_ip_required": false,
              "modification_date": "2018-05-24T13:49:10.388108+00:00",
              "enable_ipv6": false,
              "hostname": "scw-be19b9",
              "state": "running",
              "bootscript": {
                "kernel": "http://169.254.42.24/kernel/x86_64-mainline-lts-4.4-4.4.127-rev1/vmlinuz-4.4.127",
                "initrd": "http://169.254.42.24/initrd/initrd-Linux-x86_64-v3.14.4.gz",
                "default": true,
                "bootcmdargs": "LINUX_COMMON scaleway boot=local nbd.max_part=16",
                "architecture": "x86_64",
                "title": "x86_64 mainline 4.4.127 rev1",
                "dtb": "",
                "organization": "11111111-1111-4111-8111-111111111111",
                "id": "b1e68c26-a19c-4eac-9222-498b22bd7ad9",
                "public": true
              },
              "location": {
                "platform_id": "13",
                "hypervisor_id": "314",
                "node_id": "19",
                "cluster_id": "4",
                "zone_id": "par1"
              },
              "boot_type": "local",
              "ipv6": null,
              "commercial_type": "START1-L",
              "tags": [],
              "arch": "x86_64",
              "extra_networks": [],
              "name": "scw-be19b9",
              "volumes": {
                "0": {
                  "size": 50000000000,
                  "state": "available",
                  "name": "snapshot-d12cfbb6-4843-48ad-84dc-f3a8690fdb02-2018-04-11_06:35",
                  "modification_date": "2018-05-24T13:48:18.865352+00:00",
                  "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
                  "export_uri": "device://dev/vda",
                  "creation_date": "2018-05-24T13:48:18.865352+00:00",
                  "id": "1cb48c59-1816-47b9-b3d8-54560772389c",
                  "volume_type": "l_ssd",
                  "server": {
                    "id": "22a5c380-0a27-4a55-8f91-bedf427f6b6a",
                    "name": "scw-be19b9"
                  }
                },
                "1": {
                  "size": 150000000000,
                  "state": "available",
                  "name": "Volume",
                  "modification_date": "2018-05-24T13:48:19.267400+00:00",
                  "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a",
                  "export_uri": "device://dev/vdb",
                  "creation_date": "2018-05-24T13:48:18.865352+00:00",
                  "id": "ae789518-73c1-4e8b-8235-357da8dd9e04",
                  "volume_type": "l_ssd",
                  "server": {
                    "id": "22a5c380-0a27-4a55-8f91-bedf427f6b6a",
                    "name": "scw-be19b9"
                  }
                }
              },
              "security_group": {
                "id": "e78bc604-90c7-46f5-b705-3b401fbddd4d",
                "name": "Default security group"
              },
              "organization": "000a115d-2852-4b0a-9ce8-47f1134ba95a"
            }

##### Remove a server [DELETE]

Delete a server

The response code is a 204, which means that the action was successful with no returned body data.

+ Response 204


#### Actions [/servers/{server_id}/action]

A collection of actions to be applied on a server

+ Parameters

    + server_id: `741db378-6b87-46d4-a8c5-4e46a09ab1f8` (required, string) - Server unique identifier

##### List all actions [GET]

List all actions available for the specified server

The response is an object that has a key called `actions`. This key contains an array of action

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

The response is an object that has a key called `task`. This key contains a standard `task` object.

+ Parameters 

    + server_id: `741db378-6b87-46d4-a8c5-4e46a09ab1f8` (required, string) - Server unique identifier
    + action: `poweron` (required, string) - Action to execute

+ Request

    + Body

            {
              "action": "poweroff"
            }

+ Response 202 (application/json)

    + Header

            location: https://cp-par1.scaleway.com/tasks/a8a1775c-0dda-4f52-87b2-4e8101d68d6e

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
