module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            // body: "Hello " + (req.query.name || req.body.name)
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "status": 200,
                "requestId": 0,
                "asyncRequestId": null,
                "response": {
                    "pois": [{
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u281z-b74e65a98ebf4519b17354bff491be7c",
                            "id": -1,
                            "name": "Spielplatz",
                            "address": {
                                "street": "Habsburgerplatz",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80801",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.158243,
                            "longitude": 11.58012,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.15825,
                                "longitude": 11.57995
                            }],
                            "exits": [],
                            "distance": 0.691,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Habsburgerplatz\n80801 München",
                                    "contacts": [{
                                            "name": null,
                                            "label": null,
                                            "value": null
                                        },
                                        {
                                            "name": "Website",
                                            "label": "Website",
                                            "value": "http://www.muenchen.de/dienstleistungsfinder/muenchen/10139261/"
                                        }
                                    ],
                                    "reviewSummary": null,
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": null,
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "2768lxx5-e7abce55c48e0d2266e665b658e7473d",
                            "id": -1,
                            "name": "Spielplatz Münchner Freiheit",
                            "address": {
                                "street": "Leopoldstraße",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80802",
                                "city": "Munich",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bavaria",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.162299,
                            "longitude": 11.587074,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.162229,
                                "longitude": 11.5869
                            }],
                            "exits": [],
                            "distance": 0.061,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Leopoldstraße\n80802 Munich",
                                    "contacts": [],
                                    "reviewSummary": {
                                        "provider": "Yelp",
                                        "ciVersion": "V1",
                                        "averageRating": 4.0,
                                        "reviewCount": 1,
                                        "ratingIconId": "40",
                                        "priceRange": ""
                                    },
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": {
                                    "announcements": null,
                                    "image": "https://s3-media0.fl.yelpcdn.com/bphoto/MOXOFMc_t8D585KQV48tfQ/o.jpg",
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u284p-16fb6da81d0d46c38765f11682972249",
                            "id": -1,
                            "name": "Biedersteiner Park",
                            "address": {
                                "street": "Biedersteiner Straße",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80805",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.16525,
                            "longitude": 11.59511,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.16525,
                                "longitude": 11.59511
                            }],
                            "exits": [],
                            "distance": 0.693,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Biedersteiner Straße\n80805 München",
                                    "contacts": [],
                                    "reviewSummary": null,
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": null,
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u281z-b7052ae50bc148b6acd421763da3e1a0",
                            "id": -1,
                            "name": "Spielplatz",
                            "address": {
                                "street": "Pündterplatz",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80803",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.162937,
                            "longitude": 11.57734,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.16292,
                                "longitude": 11.57715
                            }],
                            "exits": [],
                            "distance": 0.685,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Pündterplatz\n80803 München",
                                    "contacts": [{
                                            "name": null,
                                            "label": null,
                                            "value": null
                                        },
                                        {
                                            "name": "Website",
                                            "label": "Website",
                                            "value": "http://www.muenchen.de/dienstleistungsfinder/muenchen/10139261/"
                                        }
                                    ],
                                    "reviewSummary": null,
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": null,
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u281z-3ec272e5780f459f9a60c31f9412d951",
                            "id": -1,
                            "name": "Leopoldpark",
                            "address": {
                                "street": "Friedrichstraße",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80801",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.15713,
                            "longitude": 11.5798,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.15713,
                                "longitude": 11.5798
                            }],
                            "exits": [],
                            "distance": 0.8,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Friedrichstraße\n80801 München",
                                    "contacts": [],
                                    "reviewSummary": {
                                        "provider": "Yelp",
                                        "ciVersion": "V1",
                                        "averageRating": 3.5,
                                        "reviewCount": 4,
                                        "ratingIconId": "35",
                                        "priceRange": ""
                                    },
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": {
                                    "announcements": null,
                                    "image": "https://s3-media0.fl.yelpcdn.com/bphoto/eVWyLyj1mt5nkTkiJS_eeA/o.jpg",
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276jx7ps-d34c3e8b52ef0a875604f80eb400ab4b",
                            "id": -1,
                            "name": "Kölner Platz",
                            "address": {
                                "street": "Kölner Platz",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80804",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.16966,
                            "longitude": 11.57713,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.16966,
                                "longitude": 11.57713
                            }],
                            "exits": [],
                            "distance": 1.04,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Kölner Platz\n80804 München",
                                    "contacts": [],
                                    "reviewSummary": null,
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": null,
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "2768lxx5-ceebfae2520a035f7f9e34cdc2caf4d5",
                            "id": -1,
                            "name": "Spielplatz im Englischen Garten am See",
                            "address": {
                                "street": "Englischer Garten",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80802",
                                "city": "Munich",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bavaria",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.156343,
                            "longitude": 11.595277,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.156343,
                                "longitude": 11.595277
                            }],
                            "exits": [],
                            "distance": 0.961,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Englischer Garten\n80802 Munich",
                                    "contacts": [],
                                    "reviewSummary": {
                                        "provider": "Yelp",
                                        "ciVersion": "V1",
                                        "averageRating": 3.5,
                                        "reviewCount": 3,
                                        "ratingIconId": "35",
                                        "priceRange": ""
                                    },
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": {
                                    "announcements": null,
                                    "image": "https://s3-media0.fl.yelpcdn.com/bphoto/i3O2JHXaDid_qXapDDMfAQ/o.jpg",
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "2768lxx5-adca126c261d094e5f97d6f21b061a57",
                            "id": -1,
                            "name": "Spielplatz Brabanter Straße",
                            "address": {
                                "street": "Brabanter Straße",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80805",
                                "city": "Munich",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bavaria",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.17067,
                            "longitude": 11.59836,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.17075,
                                "longitude": 11.59819
                            }],
                            "exits": [],
                            "distance": 1.243,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Brabanter Straße\n80805 Munich",
                                    "contacts": [],
                                    "reviewSummary": {
                                        "provider": "Yelp",
                                        "ciVersion": "V1",
                                        "averageRating": 3.0,
                                        "reviewCount": 1,
                                        "ratingIconId": "30",
                                        "priceRange": ""
                                    },
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": {
                                    "announcements": null,
                                    "image": "https://s3-media0.fl.yelpcdn.com/bphoto/xsxer6L1v7F0kPo9UY4lWw/o.jpg",
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "2768lxx5-31c9f183da380491077be67ca21c3f17",
                            "id": -1,
                            "name": "Elisabethplatz",
                            "address": {
                                "street": "Elisabethplatz",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80796",
                                "city": "Munich",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bavaria",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.15725,
                            "longitude": 11.57473,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.15732,
                                "longitude": 11.57461
                            }],
                            "exits": [],
                            "distance": 1.069,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Elisabethplatz\n80796 Munich",
                                    "contacts": [],
                                    "reviewSummary": {
                                        "provider": "Yelp",
                                        "ciVersion": "V1",
                                        "averageRating": 4.0,
                                        "reviewCount": 1,
                                        "ratingIconId": "40",
                                        "priceRange": ""
                                    },
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": {
                                    "announcements": null,
                                    "image": "https://s3-media0.fl.yelpcdn.com/bphoto/jsDpm2oKfmTc38OxkT8yUg/o.jpg",
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "2768lxx5-0294b5b6fa580b580438be6682792d30",
                            "id": -1,
                            "name": "Spielplatz Grohewiese",
                            "address": {
                                "street": "Keferstraße",
                                "intersectingStreets": [],
                                "houseNumber": "39",
                                "postalCode": "80802",
                                "city": "Munich",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.16371,
                            "longitude": 11.59468,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.16336,
                                "longitude": 11.59534
                            }],
                            "exits": [],
                            "distance": 0.612,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Keferstraße 39\n80802 Munich",
                                    "contacts": [],
                                    "reviewSummary": {
                                        "provider": "Yelp",
                                        "ciVersion": "V1",
                                        "averageRating": 3.0,
                                        "reviewCount": 1,
                                        "ratingIconId": "30",
                                        "priceRange": ""
                                    },
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": {
                                    "announcements": null,
                                    "image": "https://s3-media0.fl.yelpcdn.com/bphoto/iXV6MfQfIliyCZV11eplZg/o.jpg",
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u284n-3aeee76f7b32450f82a38a22ad93c321",
                            "id": -1,
                            "name": "Olympiapark",
                            "address": {
                                "street": "Spiridon-Louis-Ring",
                                "intersectingStreets": [],
                                "houseNumber": "3",
                                "postalCode": "80809",
                                "city": "Munich",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.17503,
                            "longitude": 11.55726,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.1757,
                                "longitude": 11.55788
                            }],
                            "exits": [],
                            "distance": 2.568,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Spiridon-Louis-Ring 3\n80809 Munich",
                                    "contacts": [{
                                            "name": null,
                                            "label": null,
                                            "value": null
                                        },
                                        {
                                            "name": "Website",
                                            "label": "Website",
                                            "value": "http://www.brk-muenchen.de/aktuelles/aktionen-veranstaltungen/rotkreuz-flohmaerkte/flohmarkt-olympiapark"
                                        }
                                    ],
                                    "reviewSummary": null,
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": null,
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u281v-6d70f159f8814a07ba4c3cb79be59ec4",
                            "id": -1,
                            "name": "Schloss Nymphenburg",
                            "address": {
                                "street": "Schloß Nymphenburg",
                                "intersectingStreets": [],
                                "houseNumber": "1",
                                "postalCode": "80638",
                                "city": "Munich",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bavaria",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.15831,
                            "longitude": 11.50342,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.1581,
                                "longitude": 11.50409
                            }],
                            "exits": [],
                            "distance": 6.187,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Schloß Nymphenburg 1\n80638 Munich",
                                    "contacts": [{
                                            "name": "Phone",
                                            "label": "Phone",
                                            "value": "+4989179080"
                                        },
                                        {
                                            "name": "Website",
                                            "label": "Website",
                                            "value": "http://www.schloss-nymphenburg.de"
                                        }
                                    ],
                                    "reviewSummary": {
                                        "provider": "Yelp",
                                        "ciVersion": "V1",
                                        "averageRating": 5.0,
                                        "reviewCount": 1,
                                        "ratingIconId": "50",
                                        "priceRange": ""
                                    },
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": {
                                    "announcements": null,
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u281z-eb15302a6a9b4a7dbc6b727a193b2bff",
                            "id": -1,
                            "name": "Englischer Garten",
                            "address": {
                                "street": null,
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80539",
                                "city": "Munich",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bavaria",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.152379,
                            "longitude": 11.589926,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.15243,
                                "longitude": 11.59031
                            }],
                            "exits": [],
                            "distance": 1.178,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "80539 Munich",
                                    "contacts": [{
                                            "name": "Phone",
                                            "label": "Phone",
                                            "value": "+498938666390"
                                        },
                                        {
                                            "name": "Website",
                                            "label": "Website",
                                            "value": "http://www.muenchen.de/dienstleistungsfinder/muenchen/10139261/"
                                        }
                                    ],
                                    "reviewSummary": {
                                        "provider": "Yelp",
                                        "ciVersion": "V1",
                                        "averageRating": 5.0,
                                        "reviewCount": 310,
                                        "ratingIconId": "50",
                                        "priceRange": ""
                                    },
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": {
                                    "announcements": null,
                                    "image": "https://s3-media0.fl.yelpcdn.com/bphoto/gadHY0nrUWjbzlxkwpO1cw/o.jpg",
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u281w-a4b658cf989d4841a352e93c8e9a8e6b",
                            "id": -1,
                            "name": "Hellabrunn Zoo",
                            "address": {
                                "street": "Tierparkstraße",
                                "intersectingStreets": [],
                                "houseNumber": "30",
                                "postalCode": "81543",
                                "city": "Munich",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.10022,
                            "longitude": 11.55156,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.10063,
                                "longitude": 11.55144
                            }],
                            "exits": [],
                            "distance": 7.421,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon-Sun: 09:00 - 18:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": null,
                                "structured": [{
                                    "start": "T090000",
                                    "duration": "PT09H00M",
                                    "recurrence": "FREQ:DAILY;BYDAY:MO,TU,WE,TH,FR,SA,SU"
                                }]
                            },
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Tierparkstraße 30\nGiesing, 81543 Munich",
                                    "contacts": [{
                                            "name": "Phone",
                                            "label": "Phone",
                                            "value": "+4989625080"
                                        },
                                        {
                                            "name": "Website",
                                            "label": "Website",
                                            "value": "http://www.hellabrunn.de;http://www.hellabrunn.de/en;http://www.tierpark-hellabrunn.de"
                                        }
                                    ],
                                    "reviewSummary": {
                                        "provider": "Yelp",
                                        "ciVersion": "V1",
                                        "averageRating": 4.5,
                                        "reviewCount": 160,
                                        "ratingIconId": "45",
                                        "priceRange": ""
                                    },
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": {
                                    "announcements": null,
                                    "image": "https://s3-media0.fl.yelpcdn.com/bphoto/uVGXc5Lux22APUNK2dJd_A/o.jpg",
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u281z-2a4f8d1f630942c6a2399d3db9e8b4b4",
                            "id": -1,
                            "name": "Chinese Tower",
                            "address": {
                                "street": "Englischer Garten",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80802",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.15241,
                            "longitude": 11.59214,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.15241,
                                "longitude": 11.59214
                            }],
                            "exits": [],
                            "distance": 1.22,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon-Sun: 10:00 - 18:00",
                                "label": "Opening hours",
                                "status": "C",
                                "statusLabel": null,
                                "compressed": null,
                                "structured": [{
                                    "start": "T100000",
                                    "duration": "PT08H00M",
                                    "recurrence": "FREQ:DAILY;BYDAY:MO,TU,WE,TH,FR,SA,SU"
                                }]
                            },
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 21090,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Englischer Garten\n80802 München",
                                    "contacts": [{
                                            "name": "Phone",
                                            "label": "Phone",
                                            "value": "+49893838730"
                                        },
                                        {
                                            "name": "Website",
                                            "label": "Website",
                                            "value": "http://www.muenchen.de/sehenswuerdigkeiten/orte/120242.html"
                                        }
                                    ],
                                    "reviewSummary": {
                                        "provider": "Yelp",
                                        "ciVersion": "V1",
                                        "averageRating": 4.0,
                                        "reviewCount": 185,
                                        "ratingIconId": "40",
                                        "priceRange": "€€"
                                    },
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": {
                                    "announcements": null,
                                    "image": "https://s3-media0.fl.yelpcdn.com/bphoto/bW0O0Yz2qQ0d3jqVdIxYiA/o.jpg",
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u284j-3c410fbb725e4548abde388895633c37",
                            "id": -1,
                            "name": "Neuer Botanischer Garten",
                            "address": {
                                "street": "Menzinger Straße",
                                "intersectingStreets": [],
                                "houseNumber": "65",
                                "postalCode": "80638",
                                "city": "Munich",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.16434,
                            "longitude": 11.50178,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.16445,
                                "longitude": 11.50201
                            }],
                            "exits": [],
                            "distance": 6.291,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon-Sun: 09:00 - 19:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": null,
                                "structured": [{
                                    "start": "T090000",
                                    "duration": "PT10H00M",
                                    "recurrence": "FREQ:DAILY;BYDAY:MO,TU,WE,TH,FR,SA,SU"
                                }]
                            },
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 21070,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Menzinger Straße 65\n80638 Munich",
                                    "contacts": [{
                                            "name": "Phone",
                                            "label": "Phone",
                                            "value": "+498917861350"
                                        },
                                        {
                                            "name": "Website",
                                            "label": "Website",
                                            "value": "http://www.botmuc.de/"
                                        }
                                    ],
                                    "reviewSummary": {
                                        "provider": "Yelp",
                                        "ciVersion": "V1",
                                        "averageRating": 4.5,
                                        "reviewCount": 79,
                                        "ratingIconId": "45",
                                        "priceRange": ""
                                    },
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": {
                                    "announcements": null,
                                    "image": "https://s3-media0.fl.yelpcdn.com/bphoto/cRi5MjeGi-24HcyWponGJg/o.jpg",
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u281y-d8fbd5f352e8468db218601ded4d81df",
                            "id": -1,
                            "name": "Theresienwiese",
                            "address": {
                                "street": "Matthias-Pschorr-Straße",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80336",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.13021,
                            "longitude": 11.55297,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.13021,
                                "longitude": 11.55297
                            }],
                            "exits": [],
                            "distance": 4.392,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon-Sun: 06:00 - 06:00",
                                "label": "Opening hours",
                                "status": "C",
                                "statusLabel": null,
                                "compressed": null,
                                "structured": [{
                                    "start": "T060000",
                                    "duration": "PT24H00M",
                                    "recurrence": "FREQ:DAILY;BYDAY:MO,TU,WE,TH,FR,SA,SU"
                                }]
                            },
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Matthias-Pschorr-Straße\n80336 München",
                                    "contacts": [{
                                            "name": null,
                                            "label": null,
                                            "value": null
                                        },
                                        {
                                            "name": "Website",
                                            "label": "Website",
                                            "value": "http://oktoberfest.de"
                                        }
                                    ],
                                    "reviewSummary": {
                                        "provider": "Yelp",
                                        "ciVersion": "V1",
                                        "averageRating": 3.5,
                                        "reviewCount": 29,
                                        "ratingIconId": "35",
                                        "priceRange": ""
                                    },
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": {
                                    "announcements": null,
                                    "image": "https://s3-media0.fl.yelpcdn.com/bphoto/18Ip7-oMh5_zLVeRXxmgpA/o.jpg",
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u281w-a7c10fc7006649a597c1e9b08dc7dc9e",
                            "id": -1,
                            "name": "Zum Flaucher",
                            "address": {
                                "street": "Isarauen",
                                "intersectingStreets": [],
                                "houseNumber": "8",
                                "postalCode": "81379",
                                "city": "Munich",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.10878,
                            "longitude": 11.55756,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.109,
                                "longitude": 11.55807
                            }],
                            "exits": [],
                            "distance": 6.374,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon-Sun: 11:00 - 22:00",
                                "label": "Opening hours",
                                "status": "C",
                                "statusLabel": null,
                                "compressed": null,
                                "structured": [{
                                    "start": "T110000",
                                    "duration": "PT11H00M",
                                    "recurrence": "FREQ:DAILY;BYDAY:MO,TU,WE,TH,FR,SA,SU"
                                }]
                            },
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 19000,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Isarauen 8\n81379 Munich",
                                    "contacts": [{
                                            "name": "Phone",
                                            "label": "Phone",
                                            "value": "+49897232677"
                                        },
                                        {
                                            "name": "Website",
                                            "label": "Website",
                                            "value": "http://www.zum-flaucher.de"
                                        }
                                    ],
                                    "reviewSummary": {
                                        "provider": "Yelp",
                                        "ciVersion": "V1",
                                        "averageRating": 4.5,
                                        "reviewCount": 46,
                                        "ratingIconId": "45",
                                        "priceRange": ""
                                    },
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": {
                                    "announcements": null,
                                    "image": "https://s3-media0.fl.yelpcdn.com/bphoto/8Ln4oMjyTLmSHodZ1hMviA/o.jpg",
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276aabd1-02b1abc0a0250e13bd3d457b7f408e76",
                            "id": -1,
                            "name": "English Garden",
                            "address": {
                                "street": null,
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80539",
                                "city": "Munich",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bavaria",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.150526,
                            "longitude": 11.590864,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.150526,
                                "longitude": 11.590864
                            }],
                            "exits": [],
                            "distance": 1.394,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "80539 Munich",
                                    "contacts": [{
                                            "name": "Phone",
                                            "label": "Phone",
                                            "value": "+498938666390"
                                        },
                                        {
                                            "name": "Website",
                                            "label": "Website",
                                            "value": "http://www.muenchen.de/sehenswuerdigkeiten/orte/120242.html"
                                        }
                                    ],
                                    "reviewSummary": null,
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": null,
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u281v-f7211af4fcf24320890ca618b18f406d",
                            "id": -1,
                            "name": "Hirschgarten",
                            "address": {
                                "street": null,
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80639",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.14944,
                            "longitude": 11.51117,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.14944,
                                "longitude": 11.51117
                            }],
                            "exits": [],
                            "distance": 5.785,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon-Sun: 00:00 - 24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": null,
                                "structured": [{
                                    "start": "T000000",
                                    "duration": "PT24H00M",
                                    "recurrence": "FREQ:DAILY;BYDAY:MO,TU,WE,TH,FR,SA,SU"
                                }]
                            },
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "80639 München",
                                    "contacts": [{
                                            "name": "Phone",
                                            "label": "Phone",
                                            "value": "+498917999119"
                                        },
                                        {
                                            "name": "Website",
                                            "label": "Website",
                                            "value": "http://www.hirschgarten.com"
                                        }
                                    ],
                                    "reviewSummary": {
                                        "provider": "Yelp",
                                        "ciVersion": "V1",
                                        "averageRating": 3.5,
                                        "reviewCount": 13,
                                        "ratingIconId": "35",
                                        "priceRange": ""
                                    },
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": {
                                    "announcements": null,
                                    "image": "https://s3-media0.fl.yelpcdn.com/bphoto/Q9qg33WULy9nX8T2vdj59A/o.jpg",
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u281z-e08119e390074101b609720e26a7a9bd",
                            "id": -1,
                            "name": "Hofgarten",
                            "address": {
                                "street": "Hofgartenstraße",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80539",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.1422,
                            "longitude": 11.57939,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.1422,
                                "longitude": 11.57939
                            }],
                            "exits": [],
                            "distance": 2.344,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Hofgartenstraße\n80539 München",
                                    "contacts": [{
                                            "name": null,
                                            "label": null,
                                            "value": null
                                        },
                                        {
                                            "name": "Website",
                                            "label": "Website",
                                            "value": "http://www.muenchen.citysam.de/hofgarten.htm"
                                        }
                                    ],
                                    "reviewSummary": null,
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": null,
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u284r-75f984da56f54f609ec01f8bc67b79ae",
                            "id": -1,
                            "name": "Schloss Schleissheim",
                            "address": {
                                "street": "Max-Emanuel-Platz",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85764",
                                "city": "Oberschleißheim",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.24884,
                            "longitude": 11.56109,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.24998,
                                "longitude": 11.56074
                            }],
                            "exits": [],
                            "distance": 9.759,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Tue-Sun: 10:00 - 16:00",
                                "label": "Opening hours",
                                "status": "C",
                                "statusLabel": null,
                                "compressed": null,
                                "structured": [{
                                    "start": "T100000",
                                    "duration": "PT06H00M",
                                    "recurrence": "FREQ:DAILY;BYDAY:TU,WE,TH,FR,SA,SU"
                                }]
                            },
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 21090,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Max-Emanuel-Platz\n85764 Oberschleißheim",
                                    "contacts": [{
                                            "name": "Phone",
                                            "label": "Phone",
                                            "value": "+49893158720"
                                        },
                                        {
                                            "name": "Website",
                                            "label": "Website",
                                            "value": "http://www.schloesser-schleissheim.de"
                                        }
                                    ],
                                    "reviewSummary": {
                                        "provider": "Yelp",
                                        "ciVersion": "V1",
                                        "averageRating": 5.0,
                                        "reviewCount": 14,
                                        "ratingIconId": "50",
                                        "priceRange": ""
                                    },
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": {
                                    "announcements": null,
                                    "image": "https://s3-media0.fl.yelpcdn.com/bphoto/pYgT1kUJXky_tZEoucidRg/o.jpg",
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u284p-5a4d0971e814487db96afa65350dacd7",
                            "id": -1,
                            "name": "Luitpoldpark",
                            "address": {
                                "street": "Borschtallee",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80804",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.17022,
                            "longitude": 11.5705,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.17022,
                                "longitude": 11.5705
                            }],
                            "exits": [],
                            "distance": 1.453,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Borschtallee\n80804 München",
                                    "contacts": [],
                                    "reviewSummary": {
                                        "provider": "Yelp",
                                        "ciVersion": "V1",
                                        "averageRating": 4.5,
                                        "reviewCount": 13,
                                        "ratingIconId": "45",
                                        "priceRange": ""
                                    },
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": {
                                    "announcements": null,
                                    "image": "https://s3-media0.fl.yelpcdn.com/bphoto/hQXWyzRYMYa4XoLy7mivfA/o.jpg",
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u281z-23f40d9944b342c5a3c4923888f792ca",
                            "id": -1,
                            "name": "Monopteros",
                            "address": {
                                "street": null,
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": null,
                                "city": "Munich",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bavaria",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.14988,
                            "longitude": 11.59091,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.14995,
                                "longitude": 11.59101
                            }],
                            "exits": [],
                            "distance": 1.465,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon-Sun: 06:00 - 06:00",
                                "label": "Opening hours",
                                "status": "C",
                                "statusLabel": null,
                                "compressed": null,
                                "structured": [{
                                    "start": "T060000",
                                    "duration": "PT24H00M",
                                    "recurrence": "FREQ:DAILY;BYDAY:MO,TU,WE,TH,FR,SA,SU"
                                }]
                            },
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 21090,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Munich",
                                    "contacts": [{
                                            "name": null,
                                            "label": null,
                                            "value": null
                                        },
                                        {
                                            "name": "Website",
                                            "label": "Website",
                                            "value": "http://muenchen.de"
                                        }
                                    ],
                                    "reviewSummary": {
                                        "provider": "Yelp",
                                        "ciVersion": "V1",
                                        "averageRating": 4.5,
                                        "reviewCount": 11,
                                        "ratingIconId": "45",
                                        "priceRange": ""
                                    },
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": {
                                    "announcements": null,
                                    "image": "https://s3-media0.fl.yelpcdn.com/bphoto/0MtpMOU91s_3L6JVN1YVEA/o.jpg",
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u2860-b5b801ebd0ba4603b214a22a4a3356d5",
                            "id": -1,
                            "name": "Englischer Garten/Hirschau",
                            "address": {
                                "street": "Gyßlingstraße",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80805",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.166673,
                            "longitude": 11.60869,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.16612,
                                "longitude": 11.60975
                            }],
                            "exits": [],
                            "distance": 1.698,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Gyßlingstraße\n80805 München",
                                    "contacts": [],
                                    "reviewSummary": null,
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": null,
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u284m-9ed558c88b944ba994cff833d08f2d59",
                            "id": -1,
                            "name": "Erholungsgebiet Karlsfelder See",
                            "address": {
                                "street": "Hochstraße",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85757",
                                "city": "Karlsfeld",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.23629,
                            "longitude": 11.47085,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.23607,
                                "longitude": 11.47217
                            }],
                            "exits": [],
                            "distance": 11.851,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Hochstraße\n85757 Karlsfeld",
                                    "contacts": [],
                                    "reviewSummary": null,
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": null,
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u281q-420f5756994a4cb6a8fac8a40c3758ce",
                            "id": -1,
                            "name": "Grünwalder Freizeitpark",
                            "address": {
                                "street": "Ebertstraße",
                                "intersectingStreets": [],
                                "houseNumber": "1",
                                "postalCode": "82031",
                                "city": "Grünwald",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.05035,
                            "longitude": 11.53215,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.05083,
                                "longitude": 11.53261
                            }],
                            "exits": [],
                            "distance": 13.133,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon, Wed, Sun: 09:00 - 21:00\nTue: 07:00 - 08:00\nThu: 11:00 - 18:00\nFri: 07:00 - 21:00\nSat: 08:00 - 21:00",
                                "label": "Opening hours",
                                "status": "C",
                                "statusLabel": null,
                                "compressed": null,
                                "structured": [{
                                        "start": "T090000",
                                        "duration": "PT12H00M",
                                        "recurrence": "FREQ:DAILY;BYDAY:MO,WE,SU"
                                    },
                                    {
                                        "start": "T070000",
                                        "duration": "PT01H00M",
                                        "recurrence": "FREQ:DAILY;BYDAY:TU"
                                    },
                                    {
                                        "start": "T110000",
                                        "duration": "PT07H00M",
                                        "recurrence": "FREQ:DAILY;BYDAY:TH"
                                    },
                                    {
                                        "start": "T070000",
                                        "duration": "PT14H00M",
                                        "recurrence": "FREQ:DAILY;BYDAY:FR"
                                    },
                                    {
                                        "start": "T080000",
                                        "duration": "PT13H00M",
                                        "recurrence": "FREQ:DAILY;BYDAY:SA"
                                    }
                                ]
                            },
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 21230,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Ebertstraße 1\n82031 Grünwald",
                                    "contacts": [{
                                            "name": "Phone",
                                            "label": "Phone",
                                            "value": "+49896418910"
                                        },
                                        {
                                            "name": "Website",
                                            "label": "Website",
                                            "value": "http://www.gruenwalder-freizeitpark.de/"
                                        }
                                    ],
                                    "reviewSummary": {
                                        "provider": "Yelp",
                                        "ciVersion": "V1",
                                        "averageRating": 4.0,
                                        "reviewCount": 1,
                                        "ratingIconId": "40",
                                        "priceRange": ""
                                    },
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": {
                                    "announcements": null,
                                    "image": "https://s3-media0.fl.yelpcdn.com/bphoto/GkH69LNTU_y0MpfcKtqyMQ/o.jpg",
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "2768lxx5-d48acaf2b5c40ed20f9b6e0711ace844",
                            "id": -1,
                            "name": "Baumhaus am Neuhofener Berg",
                            "address": {
                                "street": null,
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "81371",
                                "city": "Munich",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bavaria",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.107109,
                            "longitude": 11.541269,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.107109,
                                "longitude": 11.541269
                            }],
                            "exits": [],
                            "distance": 7.04,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon-Sun: 00:00 - 24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": null,
                                "structured": [{
                                    "start": "T000000",
                                    "duration": "PT24H00M",
                                    "recurrence": "FREQ:DAILY;BYDAY:MO,TU,WE,TH,FR,SA,SU"
                                }]
                            },
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "81371 Munich",
                                    "contacts": [],
                                    "reviewSummary": {
                                        "provider": "Yelp",
                                        "ciVersion": "V1",
                                        "averageRating": 4.0,
                                        "reviewCount": 2,
                                        "ratingIconId": "40",
                                        "priceRange": ""
                                    },
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": {
                                    "announcements": null,
                                    "image": "https://s3-media0.fl.yelpcdn.com/bphoto/czAzXTONBvGOO9ZzOxm0pg/o.jpg",
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u284s-9fb3306b75ab49fbb977c40d95b99a9f",
                            "id": -1,
                            "name": "Englischer Garten",
                            "address": {
                                "street": "Hofgartenweg",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85221",
                                "city": "Dachau",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.25874,
                            "longitude": 11.43128,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.25874,
                                "longitude": 11.43128
                            }],
                            "exits": [],
                            "distance": 15.696,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Hofgartenweg\n85221 Dachau",
                                    "contacts": [],
                                    "reviewSummary": null,
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": null,
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u284s-0691309c37a8475f904198ea4dabd553",
                            "id": -1,
                            "name": "Schloss Dachau",
                            "address": {
                                "street": "Schloßstraße",
                                "intersectingStreets": [],
                                "houseNumber": "2",
                                "postalCode": "85221",
                                "city": "Dachau",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bavaria",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.25837,
                            "longitude": 11.43304,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.25842,
                                "longitude": 11.43312
                            }],
                            "exits": [],
                            "distance": 15.573,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Tue-Sun: 09:00 - 18:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": null,
                                "structured": [{
                                    "start": "T090000",
                                    "duration": "PT09H00M",
                                    "recurrence": "FREQ:DAILY;BYDAY:TU,WE,TH,FR,SA,SU"
                                }]
                            },
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 21070,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Schloßstraße 2\n85221 Dachau",
                                    "contacts": [{
                                            "name": "Phone",
                                            "label": "Phone",
                                            "value": "+49813187923"
                                        },
                                        {
                                            "name": null,
                                            "label": null,
                                            "value": null
                                        }
                                    ],
                                    "reviewSummary": {
                                        "provider": "Yelp",
                                        "ciVersion": "V1",
                                        "averageRating": 4.5,
                                        "reviewCount": 11,
                                        "ratingIconId": "45",
                                        "priceRange": ""
                                    },
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": {
                                    "announcements": null,
                                    "image": "https://s3-media0.fl.yelpcdn.com/bphoto/sR-F-ywTIYerKMRo8k4o5Q/o.jpg",
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u283c-ed0114646030444a9fdc75c881c792f9",
                            "id": -1,
                            "name": "Riemer Park",
                            "address": {
                                "street": "Edinburghplatz",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "81829",
                                "city": "Munich",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bavaria",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.13298,
                            "longitude": 11.68668,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.13303,
                                "longitude": 11.6866
                            }],
                            "exits": [],
                            "distance": 8.131,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Edinburghplatz\n81829 Munich",
                                    "contacts": [],
                                    "reviewSummary": {
                                        "provider": "Yelp",
                                        "ciVersion": "V1",
                                        "averageRating": 4.0,
                                        "reviewCount": 8,
                                        "ratingIconId": "40",
                                        "priceRange": ""
                                    },
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": {
                                    "announcements": null,
                                    "image": "https://s3-media0.fl.yelpcdn.com/bphoto/H2vLBZrSTJLi0mbG-aia-Q/o.jpg",
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u283b-d7c80b6597ac4bdbbb38e777f606cbab",
                            "id": -1,
                            "name": "Josephsburg",
                            "address": {
                                "street": "Jella-Lepman-Straße",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "81673",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.12333,
                            "longitude": 11.6381,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.12333,
                                "longitude": 11.6381
                            }],
                            "exits": [],
                            "distance": 5.815,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Jella-Lepman-Straße\n81673 München",
                                    "contacts": [],
                                    "reviewSummary": null,
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": null,
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u281y-280670ee1c494c71b1a8c6165bdd0f06",
                            "id": -1,
                            "name": "Westpark",
                            "address": {
                                "street": "Preßburger Straße",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "81377",
                                "city": "Munich",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bavaria",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.12089,
                            "longitude": 11.51808,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.12089,
                                "longitude": 11.51808
                            }],
                            "exits": [],
                            "distance": 6.89,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Preßburger Straße\n81377 Munich",
                                    "contacts": [{
                                            "name": null,
                                            "label": null,
                                            "value": null
                                        },
                                        {
                                            "name": "Website",
                                            "label": "Website",
                                            "value": "http://www.muenchen.de/sehenswuerdigkeiten/orte/120259.html"
                                        }
                                    ],
                                    "reviewSummary": {
                                        "provider": "Yelp",
                                        "ciVersion": "V1",
                                        "averageRating": 4.0,
                                        "reviewCount": 39,
                                        "ratingIconId": "40",
                                        "priceRange": ""
                                    },
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": {
                                    "announcements": null,
                                    "image": "https://s3-media0.fl.yelpcdn.com/bphoto/XHf96y9gNYmqw7ZdvrtSAg/o.jpg",
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276jx7ps-d266eaaeca980a35d96a517d71c088f8",
                            "id": -1,
                            "name": "Museumsinsel",
                            "address": {
                                "street": "Auf der Insel",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80538",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.13207,
                            "longitude": 11.58591,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.13207,
                                "longitude": 11.58591
                            }],
                            "exits": [],
                            "distance": 3.41,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Auf der Insel\n80538 München",
                                    "contacts": [{
                                            "name": "Phone",
                                            "label": "Phone",
                                            "value": "+498921791"
                                        },
                                        {
                                            "name": null,
                                            "label": null,
                                            "value": null
                                        }
                                    ],
                                    "reviewSummary": null,
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": null,
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276jx7ps-aa1eace2dc12076f9cb16bf2c1228c53",
                            "id": -1,
                            "name": "Marienhof",
                            "address": {
                                "street": "Weinstraße",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80333",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.13875,
                            "longitude": 11.57551,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.13875,
                                "longitude": 11.57551
                            }],
                            "exits": [],
                            "distance": 2.79,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Weinstraße\n80333 München",
                                    "contacts": [{
                                            "name": null,
                                            "label": null,
                                            "value": null
                                        },
                                        {
                                            "name": "Website",
                                            "label": "Website",
                                            "value": "http://www.muenchen.de/sehenswuerdigkeiten/orte/169923.html"
                                        }
                                    ],
                                    "reviewSummary": null,
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": null,
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276jx7ps-18b898bdf33502250578be056317c5dd",
                            "id": -1,
                            "name": "Goldschmiedplatz",
                            "address": {
                                "street": "Schleißheimer Straße",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80933",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.22003,
                            "longitude": 11.5614,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.22003,
                                "longitude": 11.5614
                            }],
                            "exits": [],
                            "distance": 6.638,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Schleißheimer Straße\n80933 München",
                                    "contacts": [],
                                    "reviewSummary": null,
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": null,
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276jx7ps-08a0a16718710bf1a56f614bec3eba39",
                            "id": -1,
                            "name": "Fröttmaninger Berg",
                            "address": {
                                "street": null,
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80939",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.21198,
                            "longitude": 11.63094,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.21198,
                                "longitude": 11.63094
                            }],
                            "exits": [],
                            "distance": 6.388,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "80939 München",
                                    "contacts": [],
                                    "reviewSummary": null,
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": null,
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u2860-45774877a274425f9563d016137f9db5",
                            "id": -1,
                            "name": "Spielplatz Maria-Probst-Straße",
                            "address": {
                                "street": null,
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80939",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.19985,
                            "longitude": 11.60588,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.19985,
                                "longitude": 11.60588
                            }],
                            "exits": [],
                            "distance": 4.369,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "80939 München",
                                    "contacts": [{
                                            "name": null,
                                            "label": null,
                                            "value": null
                                        },
                                        {
                                            "name": "Website",
                                            "label": "Website",
                                            "value": "http://www.muenchen.de/dienstleistungsfinder/muenchen/10139261/"
                                        }
                                    ],
                                    "reviewSummary": null,
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": null,
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u284r-117335da767d40aa872bd641e00b56cd",
                            "id": -1,
                            "name": "Schlosspark",
                            "address": {
                                "street": "Max-Emanuel-Platz",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85764",
                                "city": "Oberschleißheim",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.24972,
                            "longitude": 11.56076,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.24972,
                                "longitude": 11.56076
                            }],
                            "exits": [],
                            "distance": 9.86,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Max-Emanuel-Platz\n85764 Oberschleißheim",
                                    "contacts": [],
                                    "reviewSummary": null,
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": null,
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u284n-de177cb88f774f859606c742d92dab09",
                            "id": -1,
                            "name": "Fasanerie",
                            "address": {
                                "street": null,
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80995",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.19506,
                            "longitude": 11.51211,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.19506,
                                "longitude": 11.51211
                            }],
                            "exits": [],
                            "distance": 6.588,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "80995 München",
                                    "contacts": [],
                                    "reviewSummary": null,
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": null,
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u284n-9ef04b54a2fb49cb908fe3fe6cc68281",
                            "id": -1,
                            "name": "Fasaneriesee",
                            "address": {
                                "street": "Feldmochinger Straße",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80995",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.20681,
                            "longitude": 11.531854,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.20672,
                                "longitude": 11.53175
                            }],
                            "exits": [],
                            "distance": 6.362,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Feldmochinger Straße\n80995 München",
                                    "contacts": [{
                                            "name": null,
                                            "label": null,
                                            "value": null
                                        },
                                        {
                                            "name": "Website",
                                            "label": "Website",
                                            "value": "http://www.muenchen.de/dienstleistungsfinder/muenchen/10139261/"
                                        }
                                    ],
                                    "reviewSummary": {
                                        "provider": "Yelp",
                                        "ciVersion": "V1",
                                        "averageRating": 3.0,
                                        "reviewCount": 8,
                                        "ratingIconId": "30",
                                        "priceRange": ""
                                    },
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": {
                                    "announcements": null,
                                    "image": "https://s3-media0.fl.yelpcdn.com/bphoto/ZBazPAKpEBGnmtEGRvZwFA/o.jpg",
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u284j-f6192904b6454176bd16b09497cb223a",
                            "id": -1,
                            "name": "Spielplatz",
                            "address": {
                                "street": null,
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80992",
                                "city": null,
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.174024,
                            "longitude": 11.515466,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.17385,
                                "longitude": 11.51558
                            }],
                            "exits": [],
                            "distance": 5.42,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "80992",
                                    "contacts": [{
                                            "name": null,
                                            "label": null,
                                            "value": null
                                        },
                                        {
                                            "name": "Website",
                                            "label": "Website",
                                            "value": "http://www.muenchen.de/dienstleistungsfinder/muenchen/10139261/"
                                        }
                                    ],
                                    "reviewSummary": null,
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": null,
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u284j-5fd9bba8004a4872870a784f337f7439",
                            "id": -1,
                            "name": "Spielplatz",
                            "address": {
                                "street": "Reigersbachstraße",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80995",
                                "city": "Munich",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bavaria",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.203232,
                            "longitude": 11.506339,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.2032,
                                "longitude": 11.50668
                            }],
                            "exits": [],
                            "distance": 7.46,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Reigersbachstraße\n80995 Munich",
                                    "contacts": [{
                                            "name": null,
                                            "label": null,
                                            "value": null
                                        },
                                        {
                                            "name": "Website",
                                            "label": "Website",
                                            "value": "http://www.muenchen.de/dienstleistungsfinder/muenchen/10139261/"
                                        }
                                    ],
                                    "reviewSummary": null,
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": null,
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u284j-40e65db720f24606a9505c77602d713d",
                            "id": -1,
                            "name": "Hartmannshofer Park",
                            "address": {
                                "street": "Im Eichgehölz",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80997",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.17335,
                            "longitude": 11.48998,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.17335,
                                "longitude": 11.48998
                            }],
                            "exits": [],
                            "distance": 7.259,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Im Eichgehölz\n80997 München",
                                    "contacts": [],
                                    "reviewSummary": null,
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": null,
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u283b-32ab6acc40344ca1ac74806b273557b6",
                            "id": -1,
                            "name": "Spielplatz",
                            "address": {
                                "street": null,
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "81669",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.11515,
                            "longitude": 11.61217,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.11507,
                                "longitude": 11.61218
                            }],
                            "exits": [],
                            "distance": 5.622,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "81669 München",
                                    "contacts": [{
                                            "name": null,
                                            "label": null,
                                            "value": null
                                        },
                                        {
                                            "name": "Website",
                                            "label": "Website",
                                            "value": "http://www.muenchen.de/dienstleistungsfinder/muenchen/10139261/"
                                        }
                                    ],
                                    "reviewSummary": null,
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": null,
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u2839-fa7ae7fb70f54fdab0426a82ad1e3f48",
                            "id": -1,
                            "name": "Spielstadt Maulwurfshausen",
                            "address": {
                                "street": "Albert-Schweitzer-Straße",
                                "intersectingStreets": [],
                                "houseNumber": "24",
                                "postalCode": "81735",
                                "city": "Munich",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.11079,
                            "longitude": 11.64641,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.11068,
                                "longitude": 11.64668
                            }],
                            "exits": [],
                            "distance": 7.286,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon-Fri: 13:00 - 18:00",
                                "label": "Opening hours",
                                "status": "C",
                                "statusLabel": null,
                                "compressed": null,
                                "structured": [{
                                    "start": "T130000",
                                    "duration": "PT05H00M",
                                    "recurrence": "FREQ:DAILY;BYDAY:MO,TU,WE,TH,FR"
                                }]
                            },
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": null,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Albert-Schweitzer-Straße 24\n81735 Munich",
                                    "contacts": [{
                                            "name": "Phone",
                                            "label": "Phone",
                                            "value": "+49896701131"
                                        },
                                        {
                                            "name": "Website",
                                            "label": "Website",
                                            "value": "http://www.maulwurfshausen.de/"
                                        }
                                    ],
                                    "reviewSummary": {
                                        "provider": "Yelp",
                                        "ciVersion": "V1",
                                        "averageRating": 5.0,
                                        "reviewCount": 3,
                                        "ratingIconId": "50",
                                        "priceRange": ""
                                    },
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": {
                                    "announcements": null,
                                    "image": "https://s3-media0.fl.yelpcdn.com/bphoto/7zuhPpE95Fs5z-y9XTKnyQ/o.jpg",
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u2839-87f5be6340f44b0680511c486a649519",
                            "id": -1,
                            "name": "Spielplatz Florastraße",
                            "address": {
                                "street": "Florastraße",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "81827",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.11726,
                            "longitude": 11.68251,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.11726,
                                "longitude": 11.68251
                            }],
                            "exits": [],
                            "distance": 8.732,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Florastraße\n81827 München",
                                    "contacts": [{
                                            "name": null,
                                            "label": null,
                                            "value": null
                                        },
                                        {
                                            "name": "Website",
                                            "label": "Website",
                                            "value": "http://www.muenchen.de/dienstleistungsfinder/muenchen/10139261/"
                                        }
                                    ],
                                    "reviewSummary": null,
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": null,
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "214306",
                            "id": 32578595,
                            "name": "Hotel Hilton Munich Park",
                            "address": {
                                "street": "Am Tucherpark 7",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80538",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.153439472,
                            "longitude": 11.599515975,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.153400105,
                                    "longitude": 11.599616557
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.153400105,
                                    "longitude": 11.599616557
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.153400105,
                                    "longitude": 11.599616557
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.153400105,
                                    "longitude": 11.599616557
                                }
                            ],
                            "distance": 1.4147679881815634,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11040,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": 305,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": 0,
                                    "restrictions": [],
                                    "services": [
                                        "WC",
                                        "Family parking spaces",
                                        "Guarded",
                                        "No customer parking",
                                        "Parking spaces for women",
                                        "Disabled parking",
                                        "Car wash",
                                        "Lift",
                                        "Charging station",
                                        "CCTV"
                                    ],
                                    "types": [
                                        "Underground car park",
                                        "Lighted"
                                    ],
                                    "prices": [{
                                        "price": 3.5,
                                        "priceCurrency": "€",
                                        "formattedPrice": "3.50 €",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": 7.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "7.00 EUR / 2h",
                                        "timeframe": "2020-01-30T08:04--2020-01-30T10:04",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [
                                        "MasterCard",
                                        "Coins",
                                        "Bank notes",
                                        "VISA"
                                    ],
                                    "availabilityStatus": null,
                                    "phone": "+49 89 33035757",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        "7.00 EUR / 2h"
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u281z-c5a4370901ad462da1e2af1485236ddd",
                            "id": -1,
                            "name": "Spielplatz",
                            "address": {
                                "street": null,
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80538",
                                "city": "Munich",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bavaria",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.144929,
                            "longitude": 11.588843,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.14498,
                                "longitude": 11.58855
                            }],
                            "exits": [],
                            "distance": 1.987,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "80538 Munich",
                                    "contacts": [{
                                            "name": null,
                                            "label": null,
                                            "value": null
                                        },
                                        {
                                            "name": "Website",
                                            "label": "Website",
                                            "value": "http://www.muenchen.de/dienstleistungsfinder/muenchen/10139261/"
                                        }
                                    ],
                                    "reviewSummary": null,
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": null,
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "284293",
                            "id": 32581075,
                            "name": "Parkstadt Center Schwabing / Rilano Hotel",
                            "address": {
                                "street": "Wilhelm-Wagenfeld-Straße 4 - 8",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80807",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.182830149,
                            "longitude": 11.592995494,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.182913966,
                                    "longitude": 11.594791315
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.18274511,
                                    "longitude": 11.592931392
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.182913966,
                                    "longitude": 11.594791315
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.18274511,
                                    "longitude": 11.592931392
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.182913966,
                                    "longitude": 11.594791315
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.18274511,
                                    "longitude": 11.592931392
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.182913966,
                                    "longitude": 11.594791315
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.18274511,
                                    "longitude": 11.592931392
                                }
                            ],
                            "distance": 2.290906786655533,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11040,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": 525,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": 0,
                                    "restrictions": [],
                                    "services": [
                                        "Disabled parking",
                                        "Guarded",
                                        "No customer parking",
                                        "WC",
                                        "Family parking spaces",
                                        "Lift"
                                    ],
                                    "types": [
                                        "Underground car park",
                                        "Lighted"
                                    ],
                                    "prices": [{
                                        "price": 20.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "20.00 €",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": 20.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "20.00 EUR / 2h",
                                        "timeframe": "2020-01-30T08:04--2020-01-30T10:04",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [
                                        "MasterCard",
                                        "Bank notes",
                                        "VISA",
                                        "Coins"
                                    ],
                                    "availabilityStatus": null,
                                    "phone": "+49 1520 4786130",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        "20.00 EUR / 2h"
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "217932",
                            "id": 32575806,
                            "name": "Parkdeck Olympiaturm",
                            "address": {
                                "street": "Spiridon-Louis-Ring",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80809",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.175793169,
                            "longitude": 11.554645612,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.175863342,
                                    "longitude": 11.554646953
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.175863342,
                                    "longitude": 11.554646953
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.175859764,
                                    "longitude": 11.555243745
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.175859764,
                                    "longitude": 11.555243745
                                }
                            ],
                            "distance": 2.784249551908363,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": 400,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": 6,
                                    "availabilityStatusInt": 0,
                                    "restrictions": [],
                                    "services": [
                                        "No customer parking",
                                        "Disabled parking",
                                        "Motorcycle parking"
                                    ],
                                    "types": [
                                        "Partially covered",
                                        "Lighted"
                                    ],
                                    "prices": [{
                                        "price": 0.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "0.00 €",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": 4.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "4.00 EUR / 2h",
                                        "timeframe": "2020-01-30T08:04--2020-01-30T10:04",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [
                                        "Bank notes",
                                        "Coins"
                                    ],
                                    "availabilityStatus": null,
                                    "phone": "+49 89 2373251",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        "4.00 EUR / 2h"
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "217335",
                            "id": 32575657,
                            "name": "Arabella Park Bogenhausen",
                            "address": {
                                "street": "Arabellastraße",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "81925",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.150343711,
                            "longitude": 11.620470732,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.150001913,
                                    "longitude": 11.620461345
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.150001913,
                                    "longitude": 11.620461345
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.150001913,
                                    "longitude": 11.620461345
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.150001913,
                                    "longitude": 11.620461345
                                }
                            ],
                            "distance": 2.8752753237739848,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11040,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [
                                        "ParkNow"
                                    ],
                                    "subsupplier": null,
                                    "spotsNumber": 2436,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": 6,
                                    "availabilityStatusInt": 0,
                                    "restrictions": [],
                                    "services": [
                                        "Lift",
                                        "Disabled parking",
                                        "No customer parking"
                                    ],
                                    "types": [
                                        "Underground car park",
                                        "Lighted"
                                    ],
                                    "prices": [{
                                        "price": 2.5,
                                        "priceCurrency": "€",
                                        "formattedPrice": "2.50 €",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": 5.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "5.00 EUR / 2h",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [
                                        "Bank notes",
                                        "American Express",
                                        "Coins",
                                        "MasterCard",
                                        "VISA",
                                        "Payment by mobile phone"
                                    ],
                                    "availabilityStatus": null,
                                    "phone": "+49 89 92868308",
                                    "website": null,
                                    "paymentOperator": "ParkNow",
                                    "paymentLocationId": "24490320108",
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        "5.00 EUR / 2h"
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "217141",
                            "id": 32569542,
                            "name": "City-Parkhaus",
                            "address": {
                                "street": "Färbergraben",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80331",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.137066501,
                            "longitude": 11.5719603,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.136930463,
                                    "longitude": 11.571848989
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.137114831,
                                    "longitude": 11.571622342
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.136930463,
                                    "longitude": 11.571848989
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.137114831,
                                    "longitude": 11.571622342
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.136930463,
                                    "longitude": 11.571848989
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.137114831,
                                    "longitude": 11.571622342
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.136930463,
                                    "longitude": 11.571848989
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.137114831,
                                    "longitude": 11.571622342
                                }
                            ],
                            "distance": 3.0608112176792126,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11040,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": 400,
                                    "freeSpotsNumber": 266,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": 2,
                                    "restrictions": [],
                                    "services": [
                                        "Guarded",
                                        "No customer parking"
                                    ],
                                    "types": [
                                        "Lighted",
                                        "With gate",
                                        "Multi-storey"
                                    ],
                                    "prices": [{
                                        "price": 3.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "3.00 €",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": 6.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "6.00 EUR / 2h",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [
                                        "MasterCard",
                                        "Coins",
                                        "VISA",
                                        "Bank notes"
                                    ],
                                    "availabilityStatus": "Enough free parking spaces (trend: declining).",
                                    "phone": "+49 89 266177",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        "6.00 EUR / 2h"
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "217299",
                            "id": 32576767,
                            "name": "Marsstraße (Parkhaus)",
                            "address": {
                                "street": "Hirtenstraße",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80335",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.142186419,
                            "longitude": 11.558730318,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.142117096,
                                    "longitude": 11.558700813
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.142186003,
                                    "longitude": 11.558386995
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.142117096,
                                    "longitude": 11.558700813
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.142186003,
                                    "longitude": 11.558386995
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.142994352,
                                    "longitude": 11.558927477
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.142117096,
                                    "longitude": 11.558700813
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.142186003,
                                    "longitude": 11.558386995
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.142994352,
                                    "longitude": 11.558927477
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.142117096,
                                    "longitude": 11.558700813
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.142186003,
                                    "longitude": 11.558386995
                                }
                            ],
                            "distance": 3.0876309629527623,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11040,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [
                                        "ParkNow"
                                    ],
                                    "subsupplier": null,
                                    "spotsNumber": 700,
                                    "freeSpotsNumber": 329,
                                    "disabledSpotsNumber": 5,
                                    "availabilityStatusInt": 1,
                                    "restrictions": [],
                                    "services": [
                                        "No customer parking",
                                        "Guarded",
                                        "CCTV",
                                        "WC",
                                        "Lift",
                                        "Disabled parking"
                                    ],
                                    "types": [
                                        "Lighted",
                                        "With gate"
                                    ],
                                    "prices": [{
                                        "price": 3.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "3.00 €",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": 6.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "6.00 EUR / 2h",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [
                                        "Bank notes",
                                        "Coins",
                                        "Payment by mobile phone"
                                    ],
                                    "availabilityStatus": "Enough free parking spaces (trend: declining).",
                                    "phone": "+49 89 545439310",
                                    "website": null,
                                    "paymentOperator": "ParkNow",
                                    "paymentLocationId": "24490320110",
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        "6.00 EUR / 2h"
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "217298",
                            "id": 32576764,
                            "name": "Car Park Cristal",
                            "address": {
                                "street": "Schwanthalerstraße",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80336",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.137691199,
                            "longitude": 11.559317708,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.13743971,
                                    "longitude": 11.55930832
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.13743971,
                                    "longitude": 11.55930832
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.137447764,
                                    "longitude": 11.558964998
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.137447764,
                                    "longitude": 11.558964998
                                }
                            ],
                            "distance": 3.449937716211821,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11040,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": 220,
                                    "freeSpotsNumber": 220,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": 3,
                                    "restrictions": [
                                        "Liquid gas not permitted"
                                    ],
                                    "services": [
                                        "Lift",
                                        "No customer parking",
                                        "Disabled parking"
                                    ],
                                    "types": [
                                        "Lighted",
                                        "With gate"
                                    ],
                                    "prices": [{
                                        "price": 3.5,
                                        "priceCurrency": "€",
                                        "formattedPrice": "3.50 €",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": 6.5,
                                        "priceCurrency": "€",
                                        "formattedPrice": "6.50 EUR / 2h",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [
                                        "Bank notes",
                                        "Coins"
                                    ],
                                    "availabilityStatus": "Enough free parking spaces (trend: unchanged).",
                                    "phone": "+49 89 551110",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        "6.50 EUR / 2h"
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "326998",
                            "id": 32580981,
                            "name": "P+R BMW Parkhaus FIZ",
                            "address": {
                                "street": "BMW-Allee",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80937",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.193409188,
                            "longitude": 11.570964086,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.193536525,
                                    "longitude": 11.570949334
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.193536525,
                                    "longitude": 11.570949334
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.193536525,
                                    "longitude": 11.570949334
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.193536525,
                                    "longitude": 11.570949334
                                }
                            ],
                            "distance": 3.6111525946944276,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Fri. 16:00-24:00, Sat.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "C",
                                "statusLabel": null,
                                "compressed": "16:00,24:00;5,5|00:00,24:00;6,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11040,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": -1,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": -1,
                                    "restrictions": [],
                                    "services": [
                                        "No customer parking",
                                        "Charging station"
                                    ],
                                    "types": [
                                        "Lighted"
                                    ],
                                    "prices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [],
                                    "paymentMethods": [],
                                    "availabilityStatus": null,
                                    "phone": "+49 89 38245000",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": null,
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "217944",
                            "id": 32578378,
                            "name": "Parkharfe Olympiapark",
                            "address": {
                                "street": "Tom-Merkenrs--Weg",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80809",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.170717672,
                            "longitude": 11.539114015,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.175946497,
                                    "longitude": 11.545454757
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.175946497,
                                    "longitude": 11.545454757
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.17580609,
                                    "longitude": 11.545406477
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.17580609,
                                    "longitude": 11.545406477
                                }
                            ],
                            "distance": 3.638801880976144,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": 3900,
                                    "freeSpotsNumber": 43,
                                    "disabledSpotsNumber": 20,
                                    "availabilityStatusInt": 1,
                                    "restrictions": [],
                                    "services": [
                                        "Disabled parking",
                                        "No customer parking"
                                    ],
                                    "types": [
                                        "Not covered"
                                    ],
                                    "prices": [{
                                        "price": 5.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "5.00 €",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": 5.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "5.00 EUR / 2h",
                                        "timeframe": "2020-01-30T08:04--2020-01-30T10:04",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [
                                        "Bank notes",
                                        "Coins"
                                    ],
                                    "availabilityStatus": "Few free parking spaces.",
                                    "phone": "+49 89 30672099",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        "5.00 EUR / 2h"
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "218163",
                            "id": 32575739,
                            "name": "P+R Westfriedhof (Parkplatz)",
                            "address": {
                                "street": "Orpheusstraße",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80992",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.171767744,
                            "longitude": 11.528245658,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.172441209,
                                    "longitude": 11.52818799
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.172441209,
                                    "longitude": 11.52818799
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.172441209,
                                    "longitude": 11.52818799
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.172441209,
                                    "longitude": 11.52818799
                                }
                            ],
                            "distance": 4.451785111752159,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": 113,
                                    "freeSpotsNumber": 38,
                                    "disabledSpotsNumber": 3,
                                    "availabilityStatusInt": 1,
                                    "restrictions": [],
                                    "services": [
                                        "Disabled parking",
                                        "No customer parking"
                                    ],
                                    "types": [
                                        "Not covered"
                                    ],
                                    "prices": [{
                                        "price": 1.5,
                                        "priceCurrency": "€",
                                        "formattedPrice": "1.50 €",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": 1.5,
                                        "priceCurrency": "€",
                                        "formattedPrice": "1.50 EUR / 2h",
                                        "timeframe": "2020-01-30T08:04--2020-01-30T10:04",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [
                                        "Bank notes",
                                        "Coins"
                                    ],
                                    "availabilityStatus": "Enough free parking spaces.",
                                    "phone": "+49 89 32464748",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        "1.50 EUR / 2h"
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u281z-4cb2b0b6e91a459f99b8258db281a8c1",
                            "id": -1,
                            "name": "Frühlingsanlagen",
                            "address": {
                                "street": "Claude-Lorrain-Straße",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "81543",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.12167,
                            "longitude": 11.57246,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.12167,
                                "longitude": 11.57246
                            }],
                            "exits": [],
                            "distance": 4.685,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "Claude-Lorrain-Straße\n81543 München",
                                    "contacts": [],
                                    "reviewSummary": {
                                        "provider": "Yelp",
                                        "ciVersion": "V1",
                                        "averageRating": 4.0,
                                        "reviewCount": 1,
                                        "ratingIconId": "40",
                                        "priceRange": ""
                                    },
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": {
                                    "announcements": null,
                                    "image": "https://s3-media0.fl.yelpcdn.com/bphoto/6T2jXOFcbomvRaPOsBowmg/o.jpg",
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "244545",
                            "id": 32576772,
                            "name": "Media Works Munich (Parkhaus)",
                            "address": {
                                "street": "Zündappbogen",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "81669",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.123006347,
                            "longitude": 11.607455542,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.122162646,
                                    "longitude": 11.60763525
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.122162646,
                                    "longitude": 11.60763525
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.122129522,
                                    "longitude": 11.60722219
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.122129522,
                                    "longitude": 11.60722219
                                }
                            ],
                            "distance": 4.693857323531231,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11040,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": 900,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": 0,
                                    "restrictions": [],
                                    "services": [
                                        "No customer parking"
                                    ],
                                    "types": [
                                        "Lighted"
                                    ],
                                    "prices": [{
                                        "price": 1.5,
                                        "priceCurrency": "€",
                                        "formattedPrice": "1.50 €",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": 3.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "3.00 EUR / 2h",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [
                                        "Bank notes",
                                        "Coins"
                                    ],
                                    "availabilityStatus": null,
                                    "phone": "+49 89 40269810",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        "3.00 EUR / 2h"
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "217331",
                            "id": 32576773,
                            "name": "Media Works Munich (Parkplatz)",
                            "address": {
                                "street": "Rosenheimer Straße",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "81667",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.12224203,
                            "longitude": 11.605223715,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.122007922,
                                    "longitude": 11.604806632
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.122007922,
                                    "longitude": 11.604806632
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.122007922,
                                    "longitude": 11.604806632
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.122007922,
                                    "longitude": 11.604806632
                                }
                            ],
                            "distance": 4.722911080503554,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": 70,
                                    "freeSpotsNumber": 32,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": 1,
                                    "restrictions": [],
                                    "services": [
                                        "No customer parking"
                                    ],
                                    "types": [
                                        "Lighted",
                                        "Not covered"
                                    ],
                                    "prices": [{
                                        "price": 1.5,
                                        "priceCurrency": "€",
                                        "formattedPrice": "1.50 €",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": 3.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "3.00 EUR / 2h",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [
                                        "Bank notes",
                                        "Coins"
                                    ],
                                    "availabilityStatus": "Enough free parking spaces.",
                                    "phone": "+49 89 40269810",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        "3.00 EUR / 2h"
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "376337",
                            "id": 32575529,
                            "name": "Audi Dome (Parkhaus)",
                            "address": {
                                "street": "Siegenburger Straße",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80686",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.127690669,
                            "longitude": 11.522858063,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.127952226,
                                    "longitude": 11.521849808
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.127952226,
                                    "longitude": 11.521849808
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.127952226,
                                    "longitude": 11.521849808
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.127952226,
                                    "longitude": 11.521849808
                                }
                            ],
                            "distance": 6.141797178978564,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "",
                                "label": "Opening hours",
                                "status": "N",
                                "statusLabel": null,
                                "compressed": null,
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11040,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": 331,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": 1,
                                    "availabilityStatusInt": 0,
                                    "restrictions": [
                                        "For events only"
                                    ],
                                    "services": [
                                        "Disabled parking",
                                        "No customer parking"
                                    ],
                                    "types": [
                                        "Lighted"
                                    ],
                                    "prices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [
                                        "Coins",
                                        "Bank notes"
                                    ],
                                    "availabilityStatus": null,
                                    "phone": "+49 89 32464748",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        ""
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "Here",
                            "providerId": "75",
                            "providerPOIid": "276u281y-e39e99764df7488ea40ebf419d74e1d5",
                            "id": -1,
                            "name": "Spielplatz",
                            "address": {
                                "street": null,
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "80686",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DEU",
                                "region": "Bayern",
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.126812,
                            "longitude": 11.516219,
                            "entrances": [{
                                "name": null,
                                "clearance": null,
                                "latitude": 48.12676,
                                "longitude": 11.51646
                            }],
                            "exits": [],
                            "distance": 6.572,
                            "travelTime": null,
                            "businessHours": null,
                            "attributes": [],
                            "categories": [{
                                "id": null,
                                "vehicleCategoryId": 20030,
                                "hierarchy": [],
                                "realTimeCategoryId": null,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": null,
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": {
                                    "isPOI": true,
                                    "chainIds": [],
                                    "vicinity": "80686 München",
                                    "contacts": [{
                                            "name": null,
                                            "label": null,
                                            "value": null
                                        },
                                        {
                                            "name": "Website",
                                            "label": "Website",
                                            "value": "http://www.muenchen.de/dienstleistungsfinder/muenchen/10139261/"
                                        }
                                    ],
                                    "reviewSummary": null,
                                    "reviews": []
                                },
                                "phonemes": null,
                                "common": null,
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "218112",
                            "id": 32581063,
                            "name": "P+R Aidenbachstraße (Parkdeck)",
                            "address": {
                                "street": "Gmunder Straße",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "81379",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.097406837,
                            "longitude": 11.524530798,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.098306414,
                                    "longitude": 11.523808032
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.098306414,
                                    "longitude": 11.523808032
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.097389676,
                                    "longitude": 11.523713045
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.097389676,
                                    "longitude": 11.523713045
                                }
                            ],
                            "distance": 8.622657684395268,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": 188,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": 0,
                                    "restrictions": [],
                                    "services": [
                                        "Disabled parking",
                                        "No customer parking",
                                        "Family parking spaces",
                                        "Lift",
                                        "Parking spaces for women",
                                        "WC"
                                    ],
                                    "types": [
                                        "Partially covered",
                                        "Lighted"
                                    ],
                                    "prices": [{
                                        "price": 1.5,
                                        "priceCurrency": "€",
                                        "formattedPrice": "1.50 €",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": 1.5,
                                        "priceCurrency": "€",
                                        "formattedPrice": "1.50 EUR / 2h",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [
                                        "Coins"
                                    ],
                                    "availabilityStatus": null,
                                    "phone": "+49 89 32464748",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        "1.50 EUR / 2h"
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "1166097",
                            "id": 33822297,
                            "name": "Parkhaus P1",
                            "address": {
                                "street": "Parkring 9",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85748",
                                "city": "Garching Bei München",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.252393753,
                            "longitude": 11.633553388,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.252312776,
                                    "longitude": 11.633526566
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.252312776,
                                    "longitude": 11.633526566
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.252312776,
                                    "longitude": 11.633526566
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.252312776,
                                    "longitude": 11.633526566
                                }
                            ],
                            "distance": 10.587991751999846,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11040,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": 1000,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": 0,
                                    "restrictions": [],
                                    "services": [
                                        "No customer parking"
                                    ],
                                    "types": [
                                        "Multi-storey",
                                        "Lighted"
                                    ],
                                    "prices": [{
                                        "price": 1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "1.00 €",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": 2.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "2.00 EUR / 2h",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [
                                        "Coins",
                                        "Bank notes"
                                    ],
                                    "availabilityStatus": null,
                                    "phone": "+49 89 30909990",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        "2.00 EUR / 2h"
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "245056",
                            "id": 32581073,
                            "name": "Bad Forstenrieder Park",
                            "address": {
                                "street": "Stäblistraße",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "81476",
                                "city": "München",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.086737715,
                            "longitude": 11.499577246,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.086963521,
                                    "longitude": 11.49936807
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.086963521,
                                    "longitude": 11.49936807
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.086963521,
                                    "longitude": 11.49936807
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.086963521,
                                    "longitude": 11.49936807
                                }
                            ],
                            "distance": 10.662514770014871,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 08:00-22:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "08:00,22:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": 80,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": 0,
                                    "restrictions": [
                                        "Visitor only"
                                    ],
                                    "services": [
                                        "No customer parking"
                                    ],
                                    "types": [
                                        "Lighted",
                                        "Not covered"
                                    ],
                                    "prices": [{
                                        "price": 0.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "0.00 €",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": 0.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "0.00 EUR / 2h",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [],
                                    "availabilityStatus": null,
                                    "phone": "+49 800 7967960",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        "0.00 EUR / 2h"
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "1124219",
                            "id": 33720187,
                            "name": "Park and Fly Held-Pretzl",
                            "address": {
                                "street": "Franzheimer Ring 9a",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85452",
                                "city": "Moosinning",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.275751,
                            "longitude": 11.748041,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.275751,
                                    "longitude": 11.748041
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.275751,
                                    "longitude": 11.748041
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.275751,
                                    "longitude": 11.748041
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.275751,
                                    "longitude": 11.748041
                                }
                            ],
                            "distance": 17.396259054653896,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": -1,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": -1,
                                    "restrictions": [],
                                    "services": [
                                        "No customer parking",
                                        "WC",
                                        "Guarded"
                                    ],
                                    "types": [
                                        "With gate",
                                        "Partially covered",
                                        "Lighted"
                                    ],
                                    "prices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [
                                        "Coins",
                                        "Bank notes"
                                    ],
                                    "availabilityStatus": null,
                                    "phone": "+49 170 2403994",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        ""
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "319200",
                            "id": 32581074,
                            "name": "Park and Fly München",
                            "address": {
                                "street": "Münchner Straße 11b",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85375",
                                "city": "Neufahrn Bei Freising",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.317795,
                            "longitude": 11.691159,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.317795,
                                    "longitude": 11.691159
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.317795,
                                    "longitude": 11.691159
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.317795,
                                    "longitude": 11.691159
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.317795,
                                    "longitude": 11.691159
                                }
                            ],
                            "distance": 18.95156427882252,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": 100,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": 0,
                                    "restrictions": [],
                                    "services": [
                                        "No customer parking",
                                        "WC",
                                        "Guarded"
                                    ],
                                    "types": [
                                        "Not covered",
                                        "Lighted"
                                    ],
                                    "prices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [
                                        "Coins",
                                        "Bank notes"
                                    ],
                                    "availabilityStatus": null,
                                    "phone": "+49 162 4146482",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        ""
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "319208",
                            "id": 32587553,
                            "name": "Parken-Fliegen Friedrich Brielmaier",
                            "address": {
                                "street": "Münchner Straße",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85375",
                                "city": "Mintraching",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.320666486,
                            "longitude": 11.692082845,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.320672892,
                                    "longitude": 11.69199165
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.320672892,
                                    "longitude": 11.69199165
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.320672892,
                                    "longitude": 11.69199165
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.320672892,
                                    "longitude": 11.69199165
                                }
                            ],
                            "distance": 19.271724141226038,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": 60,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": 0,
                                    "restrictions": [],
                                    "services": [
                                        "Guarded",
                                        "Car wash",
                                        "No customer parking"
                                    ],
                                    "types": [
                                        "Not covered"
                                    ],
                                    "prices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [
                                        "Bank notes",
                                        "Coins"
                                    ],
                                    "availabilityStatus": null,
                                    "phone": "+49 8165 799880",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        ""
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "319183",
                            "id": 32576121,
                            "name": "Parkservice & Transfer",
                            "address": {
                                "street": "Grünecker Straße 15",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85399",
                                "city": "Hallbergmoos",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.30857846,
                            "longitude": 11.727118079,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.308708875,
                                    "longitude": 11.727106009
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.308708875,
                                    "longitude": 11.727106009
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.308708875,
                                    "longitude": 11.727106009
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.308708875,
                                    "longitude": 11.727106009
                                }
                            ],
                            "distance": 19.321280862759906,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": 110,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": 0,
                                    "restrictions": [],
                                    "services": [
                                        "No customer parking",
                                        "Car wash",
                                        "Guarded"
                                    ],
                                    "types": [
                                        "Partially covered"
                                    ],
                                    "prices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [
                                        "Bank notes",
                                        "Coins"
                                    ],
                                    "availabilityStatus": null,
                                    "phone": "+49 170 7708615",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        ""
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "319184",
                            "id": 32586788,
                            "name": "Parkservice Eberl",
                            "address": {
                                "street": "Grünbacher Straße 29",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85452",
                                "city": "Moosinning",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.282822,
                            "longitude": 11.779318,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.282822,
                                    "longitude": 11.779318
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.282822,
                                    "longitude": 11.779318
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.282822,
                                    "longitude": 11.779318
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.282822,
                                    "longitude": 11.779318
                                }
                            ],
                            "distance": 19.601547163869544,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 08:00-20:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "08:00,20:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": -1,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": -1,
                                    "restrictions": [],
                                    "services": [
                                        "Guarded",
                                        "No customer parking"
                                    ],
                                    "types": [
                                        "Not covered"
                                    ],
                                    "prices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [],
                                    "availabilityStatus": null,
                                    "phone": "+49 173 3710129",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        ""
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "319182",
                            "id": 32572165,
                            "name": "Park-fly&more",
                            "address": {
                                "street": "Brandstadl 4",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85399",
                                "city": "Hallbergmoos",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.318268,
                            "longitude": 11.71421,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.318268,
                                    "longitude": 11.71421
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.318268,
                                    "longitude": 11.71421
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.318268,
                                    "longitude": 11.71421
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.318268,
                                    "longitude": 11.71421
                                }
                            ],
                            "distance": 19.761100957905448,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": -1,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": -1,
                                    "restrictions": [],
                                    "services": [
                                        "No customer parking",
                                        "Guarded",
                                        "Motorcycle parking"
                                    ],
                                    "types": [
                                        "Partially covered"
                                    ],
                                    "prices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [],
                                    "availabilityStatus": null,
                                    "phone": "+49 811 9967818",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        ""
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "319279",
                            "id": 32571360,
                            "name": "Parkplätze & Car-Cosmetic Wagner (Freigelände)",
                            "address": {
                                "street": "Freisinger Straße 3",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85399",
                                "city": "Hallbergmoos",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.309706,
                            "longitude": 11.741542,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.309706,
                                    "longitude": 11.741542
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.309706,
                                    "longitude": 11.741542
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.309706,
                                    "longitude": 11.741542
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.309706,
                                    "longitude": 11.741542
                                }
                            ],
                            "distance": 20.02293806639584,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": -1,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": -1,
                                    "restrictions": [],
                                    "services": [
                                        "Guarded",
                                        "No customer parking"
                                    ],
                                    "types": [
                                        "Not covered",
                                        "Lighted"
                                    ],
                                    "prices": [{
                                        "price": 24.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "24.00 €",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": 24.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "24.00 EUR / 2h",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [
                                        "Bank notes",
                                        "Coins"
                                    ],
                                    "availabilityStatus": null,
                                    "phone": "+49 173 3978815",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        "24.00 EUR / 2h"
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "319280",
                            "id": 32571428,
                            "name": "Parkplätze & Car-Cosmetic Wagner (Hallenplätze)",
                            "address": {
                                "street": "Freisinger Straße 3",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85399",
                                "city": "Hallbergmoos",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.3097,
                            "longitude": 11.741587,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.3097,
                                    "longitude": 11.741587
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.3097,
                                    "longitude": 11.741587
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.3097,
                                    "longitude": 11.741587
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.3097,
                                    "longitude": 11.741587
                                }
                            ],
                            "distance": 20.024311849833985,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11040,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": -1,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": -1,
                                    "restrictions": [],
                                    "services": [
                                        "No customer parking",
                                        "Guarded"
                                    ],
                                    "types": [
                                        "Covered"
                                    ],
                                    "prices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [],
                                    "availabilityStatus": null,
                                    "phone": "+49 173 3978815",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        ""
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "319276",
                            "id": 32587554,
                            "name": "Parkservice Thomas Lang",
                            "address": {
                                "street": "Friedrich-Fischer-Straße 10",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85445",
                                "city": "Oberding",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.307651,
                            "longitude": 11.774704,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.307651,
                                    "longitude": 11.774704
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.307651,
                                    "longitude": 11.774704
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.307651,
                                    "longitude": 11.774704
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.307651,
                                    "longitude": 11.774704
                                }
                            ],
                            "distance": 21.35911789410888,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": -1,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": -1,
                                    "restrictions": [],
                                    "services": [
                                        "Guarded",
                                        "No customer parking"
                                    ],
                                    "types": [
                                        "Partially covered"
                                    ],
                                    "prices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [],
                                    "availabilityStatus": null,
                                    "phone": "+49 811 3674",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        ""
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "1136389",
                            "id": 33754803,
                            "name": "Ikarus Parken",
                            "address": {
                                "street": "Lilienthalstraße 1-3",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85399",
                                "city": "Hallbergmoos",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.329368,
                            "longitude": 11.737813,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.329368,
                                    "longitude": 11.737813
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.329368,
                                    "longitude": 11.737813
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.329368,
                                    "longitude": 11.737813
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.329368,
                                    "longitude": 11.737813
                                }
                            ],
                            "distance": 21.707439565830466,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": -1,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": -1,
                                    "restrictions": [],
                                    "services": [
                                        "Guarded",
                                        "No customer parking"
                                    ],
                                    "types": [
                                        "With gate",
                                        "Lighted",
                                        "Partially covered"
                                    ],
                                    "prices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [],
                                    "availabilityStatus": null,
                                    "phone": "+49 173 8552263",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        ""
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "319273",
                            "id": 32582567,
                            "name": "Parkservice Gold",
                            "address": {
                                "street": "Lilienthalstraße 24",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85399",
                                "city": "Hallbergmoos",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.332221,
                            "longitude": 11.731499,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.332221,
                                    "longitude": 11.731499
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.332221,
                                    "longitude": 11.731499
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.332221,
                                    "longitude": 11.731499
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.332221,
                                    "longitude": 11.731499
                                }
                            ],
                            "distance": 21.74436977364192,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": -1,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": -1,
                                    "restrictions": [],
                                    "services": [
                                        "Guarded",
                                        "No customer parking"
                                    ],
                                    "types": [
                                        "Partially covered"
                                    ],
                                    "prices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [],
                                    "availabilityStatus": null,
                                    "phone": "+49 176 27186426",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        ""
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "319198",
                            "id": 32573413,
                            "name": "Park+Fly am Schindlerhof",
                            "address": {
                                "street": "Zur Isar 8",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85354",
                                "city": "Freising",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.34345,
                            "longitude": 11.710449,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.34345,
                                    "longitude": 11.710449
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.34345,
                                    "longitude": 11.710449
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.34345,
                                    "longitude": 11.710449
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.34345,
                                    "longitude": 11.710449
                                }
                            ],
                            "distance": 22.146955850225126,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": -1,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": -1,
                                    "restrictions": [],
                                    "services": [
                                        "No customer parking",
                                        "Guarded"
                                    ],
                                    "types": [
                                        "Not covered"
                                    ],
                                    "prices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [],
                                    "availabilityStatus": null,
                                    "phone": "+49 8161 61088",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        ""
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "319187",
                            "id": 32582564,
                            "name": "Parkservice Eder",
                            "address": {
                                "street": "Birkenweg 49",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85399",
                                "city": "Hallbergmoos",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.325152,
                            "longitude": 11.764432,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.325152,
                                    "longitude": 11.764432
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.325152,
                                    "longitude": 11.764432
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.325152,
                                    "longitude": 11.764432
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.325152,
                                    "longitude": 11.764432
                                }
                            ],
                            "distance": 22.41145148647838,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": -1,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": -1,
                                    "restrictions": [],
                                    "services": [
                                        "No customer parking",
                                        "Guarded"
                                    ],
                                    "types": [
                                        "Partially covered"
                                    ],
                                    "prices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [],
                                    "availabilityStatus": null,
                                    "phone": "+49 811 94069",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        ""
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "319202",
                            "id": 32576122,
                            "name": "M-PARK",
                            "address": {
                                "street": "Weiherstraße 7",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85354",
                                "city": "Freising",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.347759,
                            "longitude": 11.708945,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.347759,
                                    "longitude": 11.708945
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.347759,
                                    "longitude": 11.708945
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.347759,
                                    "longitude": 11.708945
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.347759,
                                    "longitude": 11.708945
                                }
                            ],
                            "distance": 22.53947400792628,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": 220,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": 0,
                                    "restrictions": [],
                                    "services": [
                                        "No customer parking",
                                        "Guarded"
                                    ],
                                    "types": [
                                        "Not covered",
                                        "Lighted"
                                    ],
                                    "prices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [
                                        "Bank notes",
                                        "Coins"
                                    ],
                                    "availabilityStatus": null,
                                    "phone": "+49 8165 6911061",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        ""
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "319275",
                            "id": 32582562,
                            "name": "Parkservice Karl",
                            "address": {
                                "street": "Birkeneck 1",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85399",
                                "city": "Hallbergmoos",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.328432,
                            "longitude": 11.760886,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.328432,
                                    "longitude": 11.760886
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.328432,
                                    "longitude": 11.760886
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.328432,
                                    "longitude": 11.760886
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.328432,
                                    "longitude": 11.760886
                                }
                            ],
                            "distance": 22.55559247327427,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": -1,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": -1,
                                    "restrictions": [],
                                    "services": [
                                        "Guarded",
                                        "No customer parking"
                                    ],
                                    "types": [
                                        "Not covered"
                                    ],
                                    "prices": [{
                                        "price": 40.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "40.00 €",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": 40.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "40.00 EUR / 2h",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [
                                        "Coins",
                                        "Bank notes"
                                    ],
                                    "availabilityStatus": null,
                                    "phone": "+49 179 1055551",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        "40.00 EUR / 2h"
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "319194",
                            "id": 32582566,
                            "name": "Park-fly-MUC",
                            "address": {
                                "street": "Ismaninger Straße 98",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85399",
                                "city": "Hallbergmoos",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.340812,
                            "longitude": 11.732202,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.340812,
                                    "longitude": 11.732202
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.340812,
                                    "longitude": 11.732202
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.340812,
                                    "longitude": 11.732202
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.340812,
                                    "longitude": 11.732202
                                }
                            ],
                            "distance": 22.606118479669043,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": -1,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": -1,
                                    "restrictions": [],
                                    "services": [
                                        "Guarded",
                                        "No customer parking"
                                    ],
                                    "types": [
                                        "Not covered"
                                    ],
                                    "prices": [{
                                        "price": 29.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "29.00 €",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": 29.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "29.00 EUR / 2h",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [],
                                    "availabilityStatus": null,
                                    "phone": "+49 8168 90820",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        "29.00 EUR / 2h"
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "319278",
                            "id": 32582561,
                            "name": "Angerer-Schmid Parkservice",
                            "address": {
                                "street": "Amalienstraße 29",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85399",
                                "city": "Hallbergmoos",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.333425,
                            "longitude": 11.75941,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.333425,
                                    "longitude": 11.75941
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.333425,
                                    "longitude": 11.75941
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.333425,
                                    "longitude": 11.75941
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.333425,
                                    "longitude": 11.75941
                                }
                            ],
                            "distance": 22.95190978551547,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": -1,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": -1,
                                    "restrictions": [],
                                    "services": [
                                        "No customer parking",
                                        "Guarded"
                                    ],
                                    "types": [
                                        "With gate",
                                        "Partially covered",
                                        "Lighted"
                                    ],
                                    "prices": [{
                                        "price": 35.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "35.00 €",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": 35.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "35.00 EUR / 2h",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [
                                        "Bank notes",
                                        "Coins"
                                    ],
                                    "availabilityStatus": null,
                                    "phone": "+49 811 9966872",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        "35.00 EUR / 2h"
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "319195",
                            "id": 32582642,
                            "name": "Parkservice Unertl (Freigelände)",
                            "address": {
                                "street": "Moosstraße 11",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85445",
                                "city": "Oberding",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.322763,
                            "longitude": 11.838338,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.322763,
                                    "longitude": 11.838338
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.322763,
                                    "longitude": 11.838338
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.322763,
                                    "longitude": 11.838338
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.322763,
                                    "longitude": 11.838338
                                }
                            ],
                            "distance": 25.8408607551114,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": 90,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": 0,
                                    "restrictions": [],
                                    "services": [
                                        "Guarded",
                                        "No customer parking"
                                    ],
                                    "types": [
                                        "Not covered"
                                    ],
                                    "prices": [{
                                        "price": 35.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "35.00 €",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": 35.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "35.00 EUR / 2h",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [],
                                    "availabilityStatus": null,
                                    "phone": "+49 8122 8472341",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        "35.00 EUR / 2h"
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "319197",
                            "id": 32582641,
                            "name": "Parkservice Unertl (Sicherheitsparken)",
                            "address": {
                                "street": "Moosstraße 11",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85445",
                                "city": "Oberding",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.322835,
                            "longitude": 11.838363,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.322835,
                                    "longitude": 11.838363
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.322835,
                                    "longitude": 11.838363
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.322835,
                                    "longitude": 11.838363
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.322835,
                                    "longitude": 11.838363
                                }
                            ],
                            "distance": 25.84773640777678,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11040,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": -1,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": -1,
                                    "restrictions": [],
                                    "services": [
                                        "No customer parking",
                                        "Motorcycle parking",
                                        "Guarded"
                                    ],
                                    "types": [
                                        "With gate",
                                        "Covered"
                                    ],
                                    "prices": [{
                                        "price": 45.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "45.00 €",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": 45.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "45.00 EUR / 2h",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [],
                                    "availabilityStatus": null,
                                    "phone": "+49 8122 8472341",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        "45.00 EUR / 2h"
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "319196",
                            "id": 32582643,
                            "name": "Parkservice Unertl (Halle)",
                            "address": {
                                "street": "Moosstraße 11",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85445",
                                "city": "Oberding",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.322809,
                            "longitude": 11.838428,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.322809,
                                    "longitude": 11.838428
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.322809,
                                    "longitude": 11.838428
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.322809,
                                    "longitude": 11.838428
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.322809,
                                    "longitude": 11.838428
                                }
                            ],
                            "distance": 25.84922939498683,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11040,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": -1,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": -1,
                                    "restrictions": [],
                                    "services": [
                                        "No customer parking",
                                        "Motorcycle parking",
                                        "Guarded"
                                    ],
                                    "types": [
                                        "Covered"
                                    ],
                                    "prices": [{
                                        "price": 43.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "43.00 €",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": 43.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "43.00 EUR / 2h",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [],
                                    "availabilityStatus": null,
                                    "phone": "+49 8122 8472341",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        "43.00 EUR / 2h"
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "319217",
                            "id": 32582644,
                            "name": "Parkservice Bauer",
                            "address": {
                                "street": "Am Mühlbach 12",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85445",
                                "city": "Oberding",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.320936,
                            "longitude": 11.844801,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.320936,
                                    "longitude": 11.844801
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.320936,
                                    "longitude": 11.844801
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.320936,
                                    "longitude": 11.844801
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.320936,
                                    "longitude": 11.844801
                                }
                            ],
                            "distance": 26.052015910102238,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": -1,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": -1,
                                    "restrictions": [],
                                    "services": [
                                        "No customer parking",
                                        "Guarded"
                                    ],
                                    "types": [
                                        "With gate",
                                        "Partially covered"
                                    ],
                                    "prices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [],
                                    "availabilityStatus": null,
                                    "phone": "+49 8122 7692",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        ""
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "319277",
                            "id": 32582640,
                            "name": "Parkservice Pointner",
                            "address": {
                                "street": "Hauptstraße 17",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85445",
                                "city": "Oberding",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.323768,
                            "longitude": 11.845043,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.323768,
                                    "longitude": 11.845043
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.323768,
                                    "longitude": 11.845043
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.323768,
                                    "longitude": 11.845043
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.323768,
                                    "longitude": 11.845043
                                }
                            ],
                            "distance": 26.27952463671781,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": -1,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": -1,
                                    "restrictions": [],
                                    "services": [
                                        "Guarded",
                                        "No customer parking"
                                    ],
                                    "types": [
                                        "Partially covered"
                                    ],
                                    "prices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [
                                        "Bank notes",
                                        "Coins"
                                    ],
                                    "availabilityStatus": null,
                                    "phone": "+49 8122 2830",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        ""
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "319211",
                            "id": 32582572,
                            "name": "Parkservice Badberger",
                            "address": {
                                "street": "Hallbergmooserstraße 3",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85445",
                                "city": "Oberding",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.344066,
                            "longitude": 11.830492,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.344066,
                                    "longitude": 11.830492
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.344066,
                                    "longitude": 11.830492
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.344066,
                                    "longitude": 11.830492
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.344066,
                                    "longitude": 11.830492
                                }
                            ],
                            "distance": 27.139610708390816,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": -1,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": -1,
                                    "restrictions": [],
                                    "services": [
                                        "Guarded",
                                        "No customer parking"
                                    ],
                                    "types": [
                                        "Lighted",
                                        "Partially covered"
                                    ],
                                    "prices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [
                                        "Bank notes",
                                        "Coins"
                                    ],
                                    "availabilityStatus": null,
                                    "phone": "+49 8122 903104",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        ""
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "319410",
                            "id": 32582569,
                            "name": "Parkservice Neumeier (Freifläche)",
                            "address": {
                                "street": "Hallbergmooserstraße 4",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85445",
                                "city": "Oberding",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.344851497,
                            "longitude": 11.829881921,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.344618972,
                                    "longitude": 11.830061629
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.344618972,
                                    "longitude": 11.830061629
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.344618972,
                                    "longitude": 11.830061629
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.344618972,
                                    "longitude": 11.830061629
                                }
                            ],
                            "distance": 27.174691389757065,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": 100,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": 0,
                                    "restrictions": [],
                                    "services": [
                                        "No customer parking",
                                        "Guarded"
                                    ],
                                    "types": [
                                        "Not covered",
                                        "With gate",
                                        "Lighted"
                                    ],
                                    "prices": [{
                                        "price": 33.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "33.00 €",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": 33.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "33.00 EUR / 2h",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [
                                        "Bank notes",
                                        "Coins"
                                    ],
                                    "availabilityStatus": null,
                                    "phone": "+49 1512 5344113",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        "33.00 EUR / 2h"
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "319412",
                            "id": 32582570,
                            "name": "Parkservice Neumeier (Garage)",
                            "address": {
                                "street": "Hallbergmooserstraße 4",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85445",
                                "city": "Oberding",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.344851088,
                            "longitude": 11.829885123,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.344614997,
                                    "longitude": 11.830054102
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.344614997,
                                    "longitude": 11.830054102
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.344614997,
                                    "longitude": 11.830054102
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.344614997,
                                    "longitude": 11.830054102
                                }
                            ],
                            "distance": 27.174815350192357,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11040,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": -1,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": -1,
                                    "restrictions": [],
                                    "services": [
                                        "No customer parking",
                                        "Guarded"
                                    ],
                                    "types": [
                                        "With gate",
                                        "Lighted",
                                        "Covered"
                                    ],
                                    "prices": [{
                                        "price": 38.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "38.00 €",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": 38.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "38.00 EUR / 2h",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [
                                        "Bank notes",
                                        "Coins"
                                    ],
                                    "availabilityStatus": null,
                                    "phone": "+49 1512 5344113",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        "38.00 EUR / 2h"
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "312208",
                            "id": 32582639,
                            "name": "APM Parkservice",
                            "address": {
                                "street": "Eichenstraße 70",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85445",
                                "city": "Oberding",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.343569,
                            "longitude": 11.837933,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.343569,
                                    "longitude": 11.837933
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.343569,
                                    "longitude": 11.837933
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.343569,
                                    "longitude": 11.837933
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.343569,
                                    "longitude": 11.837933
                                }
                            ],
                            "distance": 27.470584078686766,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": 150,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": 0,
                                    "restrictions": [],
                                    "services": [
                                        "Guarded",
                                        "No customer parking"
                                    ],
                                    "types": [
                                        "Lighted",
                                        "With gate",
                                        "Partially covered"
                                    ],
                                    "prices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [
                                        "Bank notes",
                                        "Coins"
                                    ],
                                    "availabilityStatus": null,
                                    "phone": "+49 1511 5696699",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        ""
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "1121224",
                            "id": 33675514,
                            "name": "ParkAirport München",
                            "address": {
                                "street": "Angerstraße 48",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85354",
                                "city": "Freising",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.388648,
                            "longitude": 11.734887,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.388648,
                                    "longitude": 11.734887
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.388648,
                                    "longitude": 11.734887
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.388648,
                                    "longitude": 11.734887
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.388648,
                                    "longitude": 11.734887
                                }
                            ],
                            "distance": 27.48584198398558,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": 460,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": 0,
                                    "restrictions": [],
                                    "services": [
                                        "Guarded",
                                        "No customer parking"
                                    ],
                                    "types": [
                                        "Not covered",
                                        "Lighted"
                                    ],
                                    "prices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [],
                                    "availabilityStatus": null,
                                    "phone": "+49 8161 8866290",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        ""
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "319172",
                            "id": 32582637,
                            "name": "Parkservice-Bayern",
                            "address": {
                                "street": "Eichenstraße 72",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85445",
                                "city": "Oberding",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.343726,
                            "longitude": 11.838364,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.343726,
                                    "longitude": 11.838364
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.343726,
                                    "longitude": 11.838364
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.343726,
                                    "longitude": 11.838364
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.343726,
                                    "longitude": 11.838364
                                }
                            ],
                            "distance": 27.50514484575776,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11040,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": 600,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": 0,
                                    "restrictions": [],
                                    "services": [
                                        "Guarded",
                                        "No customer parking"
                                    ],
                                    "types": [
                                        "Lighted",
                                        "Covered",
                                        "With gate"
                                    ],
                                    "prices": [{
                                        "price": 25.5,
                                        "priceCurrency": "€",
                                        "formattedPrice": "25.50 €",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": 25.5,
                                        "priceCurrency": "€",
                                        "formattedPrice": "25.50 EUR / 2h",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [
                                        "Coins",
                                        "Bank notes"
                                    ],
                                    "availabilityStatus": null,
                                    "phone": "+49 8122 1870997",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        "25.50 EUR / 2h"
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "319175",
                            "id": 32582571,
                            "name": "Pfiffig Parken",
                            "address": {
                                "street": "Sandstraße 8",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85445",
                                "city": "Oberding",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.348158,
                            "longitude": 11.831058,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.348158,
                                    "longitude": 11.831058
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.348158,
                                    "longitude": 11.831058
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.348158,
                                    "longitude": 11.831058
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.348158,
                                    "longitude": 11.831058
                                }
                            ],
                            "distance": 27.508338784759484,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": 200,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": 0,
                                    "restrictions": [],
                                    "services": [
                                        "Guarded",
                                        "No customer parking"
                                    ],
                                    "types": [
                                        "With gate",
                                        "Not covered"
                                    ],
                                    "prices": [{
                                        "price": 19.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "19.00 €",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": 19.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "19.00 EUR / 2h",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [],
                                    "availabilityStatus": null,
                                    "phone": "+49 8122 2279788",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        "19.00 EUR / 2h"
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "319193",
                            "id": 32582636,
                            "name": "Airparks Parkplatz München",
                            "address": {
                                "street": "Eichenstraße 10 c",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85455",
                                "city": "Oberding",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.350742,
                            "longitude": 11.833257,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.350742,
                                    "longitude": 11.833257
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.350742,
                                    "longitude": 11.833257
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.350742,
                                    "longitude": 11.833257
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.350742,
                                    "longitude": 11.833257
                                }
                            ],
                            "distance": 27.832294373645308,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": 280,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": 0,
                                    "restrictions": [],
                                    "services": [
                                        "Guarded",
                                        "No customer parking"
                                    ],
                                    "types": [
                                        "With gate",
                                        "Lighted",
                                        "Not covered"
                                    ],
                                    "prices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [
                                        "Bank notes",
                                        "Coins"
                                    ],
                                    "availabilityStatus": null,
                                    "phone": "+49 89 288527008",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        ""
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "319404",
                            "id": 32582574,
                            "name": "XYZ Parkservice München (Parkplatz)",
                            "address": {
                                "street": "Eichenstarsse 4",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85445",
                                "city": "Oberding",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.351754828,
                            "longitude": 11.832528225,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.351859211,
                                    "longitude": 11.832568458
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.351859211,
                                    "longitude": 11.832568458
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.351859211,
                                    "longitude": 11.832568458
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.351859211,
                                    "longitude": 11.832568458
                                }
                            ],
                            "distance": 27.881860214897483,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": 150,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": 0,
                                    "restrictions": [],
                                    "services": [
                                        "Guarded",
                                        "No customer parking",
                                        "Car wash"
                                    ],
                                    "types": [
                                        "Lighted",
                                        "Not covered",
                                        "With gate"
                                    ],
                                    "prices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [],
                                    "availabilityStatus": null,
                                    "phone": "+49 8122 9543570",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        ""
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "1157830",
                            "id": 33813756,
                            "name": "München PARKANDGO-MUC",
                            "address": {
                                "street": "Max-Lehner-Straße 29",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85354",
                                "city": "Freising",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.39385,
                            "longitude": 11.739581,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.39385,
                                    "longitude": 11.739581
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.39385,
                                    "longitude": 11.739581
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.39385,
                                    "longitude": 11.739581
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.39385,
                                    "longitude": 11.739581
                                }
                            ],
                            "distance": 28.15663227075661,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": -1,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": -1,
                                    "restrictions": [],
                                    "services": [
                                        "No customer parking",
                                        "Guarded"
                                    ],
                                    "types": [
                                        "Lighted",
                                        "Not covered"
                                    ],
                                    "prices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [],
                                    "availabilityStatus": null,
                                    "phone": "+49 172 8902570",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        ""
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "1121258",
                            "id": 33676998,
                            "name": "ParkAdler Parkplatz München",
                            "address": {
                                "street": "Raiffeisenstraße 34-36",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85356",
                                "city": "Freising",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.382792,
                            "longitude": 11.780798,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.382792,
                                    "longitude": 11.780798
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.382792,
                                    "longitude": 11.780798
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.382792,
                                    "longitude": 11.780798
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.382792,
                                    "longitude": 11.780798
                                }
                            ],
                            "distance": 28.453842037629745,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": -1,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": -1,
                                    "restrictions": [],
                                    "services": [
                                        "Car wash",
                                        "Guarded",
                                        "No customer parking"
                                    ],
                                    "types": [
                                        "Partially covered",
                                        "Lighted"
                                    ],
                                    "prices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [],
                                    "availabilityStatus": null,
                                    "phone": "+49 170 9435004",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        ""
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        },
                        {
                            "provider": "parkopedia",
                            "providerId": "25",
                            "providerPOIid": "1121146",
                            "id": 33673732,
                            "name": "Parkservice Sky München",
                            "address": {
                                "street": "Adolph-Kolping-Straße 9",
                                "intersectingStreets": [],
                                "houseNumber": null,
                                "postalCode": "85356",
                                "city": "Freising",
                                "country": "Germany",
                                "countryCode": "DE",
                                "region": null,
                                "regionCode": null,
                                "settlement": null
                            },
                            "latitude": 48.384621,
                            "longitude": 11.776561,
                            "entrances": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.384621,
                                    "longitude": 11.776561
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.384621,
                                    "longitude": 11.776561
                                }
                            ],
                            "exits": [{
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.384621,
                                    "longitude": 11.776561
                                },
                                {
                                    "name": null,
                                    "clearance": null,
                                    "latitude": 48.384621,
                                    "longitude": 11.776561
                                }
                            ],
                            "distance": 28.472737915942428,
                            "travelTime": null,
                            "businessHours": {
                                "hours": "Mon.-Sun. 00:00-24:00",
                                "label": "Opening hours",
                                "status": "O",
                                "statusLabel": null,
                                "compressed": "00:00,24:00;1,7",
                                "structured": []
                            },
                            "attributes": [],
                            "categories": [{
                                "id": -117,
                                "vehicleCategoryId": 11030,
                                "hierarchy": [
                                    -117,
                                    -115,
                                    -10
                                ],
                                "realTimeCategoryId": -114,
                                "providerCategories": []
                            }],
                            "details": {
                                "parking": {
                                    "preferredPartners": [],
                                    "subsupplier": null,
                                    "spotsNumber": 660,
                                    "freeSpotsNumber": -1,
                                    "disabledSpotsNumber": -1,
                                    "availabilityStatusInt": 0,
                                    "restrictions": [],
                                    "services": [
                                        "Guarded",
                                        "No customer parking"
                                    ],
                                    "types": [
                                        "Not covered",
                                        "Lighted"
                                    ],
                                    "prices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T09:11"
                                    }],
                                    "currentPrices": [{
                                        "price": -1.0,
                                        "priceCurrency": "€",
                                        "formattedPrice": "",
                                        "timeframe": "2020-01-30T08:11--2020-01-30T10:11",
                                        "interval": "2h"
                                    }],
                                    "paymentMethods": [],
                                    "availabilityStatus": null,
                                    "phone": "+49 8161 5193490",
                                    "website": null,
                                    "paymentOperator": null,
                                    "paymentLocationId": null,
                                    "bookingOperator": null,
                                    "bookingLocationId": null
                                },
                                "refueling": null,
                                "charging": null,
                                "dealer": null,
                                "online": null,
                                "phonemes": null,
                                "common": {
                                    "announcements": [
                                        ""
                                    ],
                                    "image": null,
                                    "rawAdditions": null,
                                    "boundingBox": null,
                                    "priceLabel": null
                                },
                                "childrenPois": []
                            }
                        }
                    ],
                    "translations": {
                        "pois.businessHours.hours": "Opening hours",
                        "pois.details.charging.authentications": "Authentification methods",
                        "pois.details.charging.freeCharging": "Free charging",
                        "pois.details.charging.greenElectricity": "Green electricity",
                        "pois.details.charging.highPowerCharging": "High power charging",
                        "pois.details.charging.location": "Location",
                        "pois.details.charging.power.connectors.plugType": "Power level",
                        "pois.details.charging.reservable": "Reservable",
                        "pois.details.charging.stationOperator": "Service provider",
                        "pois.details.charging.typeOfService": "Services",
                        "pois.details.parking.availabilityStatus": "Availability",
                        "pois.details.parking.freeSpotsNumber": "Number of free spots",
                        "pois.details.parking.paymentMethods": "Payment methods",
                        "pois.details.parking.prices": "Prices",
                        "pois.details.parking.restrictions": "Restrictions",
                        "pois.details.refueling.prices": "Fuel prices",
                        "pois.details.refueling.services": "Services",
                        "pois.details.refueling.types": "Fuel type",
                        "pois.provider": "Source of data"
                    },
                    "sorting": [{
                            "name": "Relevance",
                            "identifier": 100,
                            "description": "Sort search results by: Relevance",
                            "enabled": true
                        },
                        {
                            "name": "Distance",
                            "identifier": 101,
                            "description": "Sort search results by: Distance",
                            "enabled": false
                        },
                        {
                            "name": "Name A-Z",
                            "identifier": 102,
                            "description": "Sort search results by: Name A-Z",
                            "enabled": false
                        },
                        {
                            "name": "Category",
                            "identifier": 103,
                            "description": "Sort search results by: Category",
                            "enabled": false
                        }
                    ],
                    "filters": [],
                    "size": 100
                }
            }
        };
    } else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};