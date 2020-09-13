module.exports = {
  Query: {
    getPlayers: async (parent, args, {models : { Player }  }) => { 
      console.log('this is context  ', Player)
      const players = await Player.find({});
      return players
    }
      ,
    getPlayer: async (parent, { id }, { models: { models: { Player } } }) => {
      const { _id, playername } = await player.findOne({ _id: id }).exec();
      return { id: _id, playername };
    },

  },
  Player: {
    playername: (_) => {
        console.log('this is parent      ',_)
     return _.playername
    },
  },
  Mutation: {
    createPlayer: async (_, { input: { playername } }, { models: { Player } }) => {
      const existingplayer = await Player.findOne({ playername }).exec();
      if (existingplayer) {
        // we have found someone with that name

      }
      console.log('this is existing player    ', existingplayer)
      const createdplayer = new Player({ playername });
      console.log('this is createdplayer     ', createdplayer)
      createdplayer.save();
      return createdplayer;
    },
    updatePlayer: async (_, { input: { name } }, { models: { Player } }) =>{
      const existingplayer = await Player.findOne({ name }).exec();
      return existingplayer;
    },
    deletePlayer: async (_, { id }, { models: { Player } }) => {
      const deletedplayer = await Player.findOneAndDelete({ _id: id }).exec();
      return { id: deletedplayer._id, confirmation: `${deletedplayer.playername} was removed` };
    },
  },
};
