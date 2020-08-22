module.exports = {
  Query: {
      users: (parent, args, {
        models
      }) => {
        return Object.values(models.users);
      },
      user: (parent, {
        id
      }, {
        models
      }) => {
        return models.users[id];
      },
      me: (parent, args, {
        me
      }) => {
        return me;
      },
    },

    User: {
      username: (_, __, context) => {
        console.log('this is context     ',context)
        return 'context.me.firstname'
      },
      messages: (user, args, {
        models
      }) => {
        return Object.values(models.messages).filter(
          message => message.userId === user.id,
        );
      },
    },
}
