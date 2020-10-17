const search = require('../services/websearches/reed.search')
const searchJooble = require('../services/websearches/jooble.search')

class SearchClass {
static async metaSearch(input){
    const res = await search(input)
    // const joobleRes = await searchJooble(input)'
    // console.log('this is joobl        ', joobleRes)
    return res
}
}
module.exports = SearchClass