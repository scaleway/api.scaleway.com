### group products

Resources related to stocks available in the different regions.

#### Commercial offers [/products/servers]

This resource provides the list of the different types of servers within the zone

+ Response 200 (application/json)

    {
      "servers": {
        "VC1S": {
          "baremetal": false,
          "monthly_price": 2.99,
          "volumes_constraint": {
            "min_size": null,
            "max_size": 50000000000
          },
          "network": {
            "interfaces": [
              {
                "internal_bandwidth": null,
                "internet_bandwidth": 209715200
              }
            ],
            "sum_internal_bandwidth": null,
            "sum_internet_bandwidth": 209715200,
            "ipv6_support": true
          },
          "hourly_price": 0.006,
          "ncpus": 2,
          "ram": 2147483648,
          "arch": "x86_64",
          "alt_names": [
            "X64-2GB"
          ]
        },
       }
    }

#### Availability [/products/servers/availability]

This resource provides the availability of the different server products within the zone.
A resource goes scarce when it hits a first low_stock threshold (that is different for every instance) and shortage when it hits the lower second threshold.

+ Response 200 (application/json)

    {
      "servers": {
        "VC1S": {
          "availability": "available"
        },
        "START1-XS": {
          "availability": "available"
        }
      }
    }
