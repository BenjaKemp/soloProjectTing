const fetch = require("node-fetch");
const search = async (searchinput) => {
    if (searchinput.keywords){
        searchinput.keywords = tags,
    }
    let searchString = ''
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
    try {
        const results = await fetch(`https://www.reed.co.uk/api/1.0/search?${searchString}`, requestOptions)
        const resultsJson = await results.json()
        return resultsJson
    } catch (e) {
        throw e
    }
}
module.exports = search