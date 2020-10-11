const Message = require('../database/models/messageModel.js')
class MessageClass {
    constructor(_id){
        this._id = _id
    }

}
Message.schema.loadClass(MessageClass)
module.exports = Message