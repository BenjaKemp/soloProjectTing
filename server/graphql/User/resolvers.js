module.exports = {
  Query: {
    users: (parent, args, { models }) => {
      Object.values(models.users);
    },
    user: async (parent, { id }, { models: { models: { User } } }) => {
      const { _id, username } = await User.findOne({ _id: id }).exec();
      return { id: _id, username };
    },
    me: (parent, args, { me }) => { me },
  },
  User: {
    username: (_) => `${_.username} and then whatever else`,
    messages: (user, args, { models }) => (
      Object.values(models.messages).filter((message) => message.userId === user.id)
    ),
  },
  Mutation: {
    createUser: async (_, { input: { name, password } }, { models: { User } }) => {
      const existingUser = await User.findOne({ name }).exec();
      if (existingUser) {
        // we have found someone with that name

      }
      const createdUser = new User({ name, password });
      createdUser.save();
      return createdUser;
    },
    updateUser: async (_, { input: { id } }, { controllers: {UserClass} }) => {
      const UserToUpdate = new UserClass()
      const {firstName} = await UserToUpdate.get(id)
      return {username: firstName }

    },
    deleteUser: async (_, { id }, { models: { User } }) => {
      const deletedUser = await User.findOneAndDelete({ _id: id }).exec();
      return {
        id: deletedUser._id,
        confirmation: `${deletedUser.username} was removed`
      };
    },
  },
};