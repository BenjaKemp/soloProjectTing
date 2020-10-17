const fetch = require("node-fetch");
const url = "https://jooble.org/api/";
const key = "e74d0304-bb1f-4965-a68d-3e00da082b1d";

const searchJooble = async ({locationName, keywords}) => {

  console.log('this is locationName   ', locationName)
  console.log('this is keywords   ', keywords.toString())
  var params = `{ keywords: , ${keywords.toString()}: ${locationName}}`

  const requestOptions = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: params
  }
  try {
      const results = await fetch(`${url}${key}`, requestOptions)
      console.log('these are results      ',results)
      const resultsJson = await results.json()
      console.log('these are resultsJson      ',resultsJson)
      return resultsJson
  } catch (e) {
      throw e
  }
}
module.exports = searchJooble