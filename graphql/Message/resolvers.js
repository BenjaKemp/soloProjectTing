module.exports = {
    Query: {
        messages: (parents, args, { models }) => {
          return Object.values(models.messages);
        },
        message: (parent, { id }, { models }) => {
          return models.messages[id];
        },
    },
      Mutation: {
        createMessage: (parent, { input:{text, tags, userId, title} }, { models: { models: { Message } } }) => {
          const createdMessage = new Message({
            text,
            date: new Date(),
            tags,
            author: userId,
            title
          });
          createdMessage.save()
          return { messageId: createdMessage._id }
        },
        deleteMessage: (parent, { id }, { models }) => {
            const { [id]: message, ...otherMessages } = models.messages;
            if (!message) {
                return false;
            }
            models.messages = otherMessages;
            return true;
        },
      },
      Message: {
        user: (message, args, { models }) => {
          return models.users[message.userId];
        },
      }
    }
    