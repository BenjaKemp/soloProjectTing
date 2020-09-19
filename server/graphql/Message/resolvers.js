module.exports = {
  Query: {
    messages: (parents, args, {
      models
    }) => {
      return Object.values(models.messages);
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
      input: {
        text,
        tags,
        userId,
        title
      }
    }, {
      models: {
        Message
      }
    }) => {
      const createdMessage = new Message({
        text,
        date: new Date(),
        tags,
        author: userId,
        title
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
    user: (message, args, {
      models
    }) => {
      return models.users[message.userId];
    },
  }
}