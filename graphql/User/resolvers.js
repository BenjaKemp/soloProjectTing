const { AuthenticationError } = require('apollo-server')

module.exports = {
  Query: {
      users: (parent, args, {  models }) => {
        return Object.values(models.users);
      },
      user: async (parent, { id }, { models: { models: { User } } }) => {
        const {_id, username} = await User.findOne({ _id: id }).exec()
        return { id: _id, username };
      },
      me: (parent, args, { me }) => {
        return me;
      },
    },
    User: {
      username: (_, __, context) => {
        console.log('this is parent      ',_)
        return `${_.username} and then whatever else` 
      },
      messages: (user, args, { models }) => {
        return Object.values(models.messages).filter(
          message => message.userId === user.id,
        );
      },
    },
    Mutation: {
      createUser: async (_, { input: { name, password } }, { models: { models: { User } }}) => {
        const existingUser = await User.findOne({ name: name }).exec()
        if (existingUser) {
          // we have found someone with that name

        }
        const createdUser = new User({ name: name, password: password });
        createdUser.save()
        return createdUser
      }
    }
}