const search = require('../services/websearches/reed.search')
const searchJooble = require('../services/websearches/jooble.search')

class SearchClass {
static async metaSearch(input){
    console.log('this is input in the back end    ',input)
    const res = await search(input)

    console.log('this is the res      ',res)

    return res
}
}
module.exports = SearchClass