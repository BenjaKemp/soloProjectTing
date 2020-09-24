module.exports = {
  Query: {
    getPosts: async (parents, args, {
      models: {
        Message
      }
    }) => {
      const messageArray = await Message.find({}, function (err, Message) {
        if (err) {
          console.log(err);
        } else {
          return Message;
        }
      });
      console.log('these are messageArray    ', messageArray)
      return messageArray
    },
    message: (parent, {
      id
    }, {
      models
    }) => {
      return models.messages[id];
    },
  },
  Mutation: {
    createMessage: (parent, {
      input
    }, {
      models: {
        Message
      }
    }) => {
      const {
        comments
      } = input
      const date = new Date()
      const createdMessage = new Message({
        ...input,
        comments,
        date
      });
      createdMessage.save()
      return {
        messageId: createdMessage._id
      }
    },
    updateMessage: async (_, {
      input: {
        _id
      }
    }, {
      models: {
        Message
      }
    }) => {
      const existingMessage = await Message.findOne({
        _id
      }).exec();
    },
    deleteMessage: async (_, {
      id
    }, {
      models: {
        Message
      }
    }) => {
      const deletedMessage = await Message.findOneAndDelete({
        _id: id
      }).exec();
      return {
        id: deletedMessage._id,
        confirmation: `${deletedMessage.title} was removed`
      }
    },
  },
  Message: {
    // user: (message, args, {
    //   models
    // }) => {
    //   return models.users[message.userId];
    // },
  }
}