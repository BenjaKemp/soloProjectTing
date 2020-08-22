const { AuthenticationError } = require('apollo-server')

module.exports = {
  Query: {
      users: (parent, args, {  models }) => {
        return Object.values(models.users);
      },
      user: async (parent, { id }, { models: { models: { User } } }) => {
        const existingUser = await User.findOne({ _id: id }).exec()
        console.log('this is id      ',id)
        console.log('this is User      ',User)
        console.log('this is existingUser      ',existingUser)
        return models.users[id];
      },
      me: (parent, args, { me }) => {
        return me;
      },
    },
    User: {
      username: (_, __, context) => {
        return `${_.name}${_.id}` 
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
