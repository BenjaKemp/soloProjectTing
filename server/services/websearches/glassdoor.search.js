const fetch = require("node-fetch");
const search = async (searchinput) => {
    let searchString = ''
    const partnerKey = 'whatever'
    const partnerId = 'whatevre'
    for (key in searchinput) {
        searchString += `${key}=${searchinput[key]}&`
    }
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Basic NTE2OGZhMTEtZGViZS00OTQxLTg2NGQtZWM2ZTc1NTI0NzkzOg ==",
            'Accept-Encoding': 'gzip'
        },
    }
    http: //api.glassdoor.com/api/api.htm?v=1&format=json&t.p=120&t.k=fz6JLNDfgVs&action=employers&q=pharmaceuticals&userip=192.168.43.42&useragent=Mozilla/%2F4.0
    try {
        const results = await fetch(`http: //api.glassdoor.com/api/api.htm?v=1&format=json&t.p=120&t.k=fz6JLNDfgVs&action=employers&q=pharmaceuticals&userip=192.168.43.42&useragent=Mozilla/%2F4.0${searchString}`, requestOptions)
        const resultsJson = await results.json()
        return resultsJson
    } catch (e) {
        throw e
    }
}
module.exports = search