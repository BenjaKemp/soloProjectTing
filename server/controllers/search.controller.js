const search = require('../services/websearches/reed.search')

class SearchClass {
static async metaSearch(input){
    const res = await search(input)
    return res
}
}
module.exports = SearchClass