function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const poiData = require('./fakePoiData.json');

const result = {
    "status": 200,
    "requestId": 0,
    "asyncRequestId": null,
    "response": {
        "pois": [],
        "translations": {
            "pois.businessHours.hours": "시작시간", //"Opening hours",
            "pois.details.charging.authentications": "인증방법", //"Authentification methods",
            "pois.details.charging.freeCharging": "무료충전", //"Free charging",
            "pois.details.charging.greenElectricity": "환경친화 전기", //"Green electricity",
            "pois.details.charging.highPowerCharging": "급속충전", //"High power charging",
            "pois.details.charging.location": "위치", //"Location",
            "pois.details.charging.power.connectors.plugType": "플러그종류", //"Power level",
            "pois.details.charging.reservable": "예약가능", //"Reservable",
            "pois.details.charging.stationOperator": "서비스사업자", //"Service provider",
            "pois.details.charging.typeOfService": "서비스종류", //"Services",
            "pois.details.parking.availabilityStatus": "사용가능여부", //"Availability",
            "pois.details.parking.freeSpotsNumber": "무료충전번호", //"Number of free spots",
            "pois.details.parking.paymentMethods": "지불방법", //"Payment methods",
            "pois.details.parking.prices": "가격", //"Prices",
            "pois.details.parking.restrictions": "제약사항", //"Restrictions",
            "pois.details.refueling.prices": "연료가격", //"Fuel prices",
            "pois.details.refueling.services": "서비스", //"Services",
            "pois.details.refueling.types": "연료종류", //"Fuel type",
            "pois.provider": "데이터원천", //"Source of data"
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
        "size": 0
    }
};

module.exports.getData = (context, req) => {

    let pois = [];
    for (let i = 0; i < req.query.maxResultSize; i++) {
        let poi = ((i % 2) == 0) ? poiData[0] : poiData[1]
        const latitude = (getRandomArbitrary(126.7627805, 128.887499)).toFixed(6);
        const longitude = (getRandomArbitrary(35.391267, 37.6559448)).toFixed(6);
        poi.latitude = latitude;
        poi.longitude = longitude;
        poi.entrances.latitude = latitude;
        poi.entrances.longitude = longitude;
        pois.push(poi);
    }

    result.response.pois = pois;
    result.response.size = pois.length;

    return result;
}