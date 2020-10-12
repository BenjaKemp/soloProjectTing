const {
  set
} = require("mongoose");

module.exports = {
  Query: {
    getPosts: async (parents, args, {
      models: {
        Post
      }
    }) => {
      const messageArray = await Post.find({}, function (err, Post) {
        if (err) {
          console.log(err);
        } else {
          return Post;
        }
      });
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
    createPost: (parent, { input }, { models: { Post } }) => {
      const { comments } = input
      const date = new Date()
      const createdPost = new Post({
        ...input,
        comments,
        date
      });
      createdPost.save()
      return { messageId: createdPost._id }
    },
    updatePost: async (_, { input: { _id } }, { models: { Post } }) => {
      const existingPost = await Post.findOne({ _id }).exec();
    },
    deletePost: async (_, { id }, { models: { Post } }) => {
      const deletedPost = await Post.findOneAndDelete({ _id: id }).exec();
      return {
        id: deletedPost._id,
        confirmation: `${deletedPost.title} was removed`
      }
    },
    favePost: async (_, { input: { postId, authorId } }, { models: { Post } }) => {
      console.log('postId    ,', postId)
      console.log('authorId    ,', authorId)
    },
    addComment: async (_, { input: { postId, comment, authorId } }, { models: { Post } }) => {
      const postToUpdate = await Post.findById(postId).exec();
      const newComment = {
        author: authorId,
        body: comment,
        date: new Date(),
        likes: []
      }
      postToUpdate.comments.push(newComment)
      await postToUpdate.save()
      return {
        messageId: postToUpdate._id
      }
    },
    likeComment: async (_, { input: { postId, commentId, authorId } }, { models: { Post } }) => {
      // fuck me this took all day
      // check whether the authorId exists in the likes map of the comments. if it doesn't then add it and if it doesn't then don't
      const postToUpdate = await Post.findById(postId).exec();
      console.log('postToUpdate    ,', postToUpdate)
      const commentIndex = await postToUpdate.comments.findIndex(el => el._id == commentId)
      console.log('commentToLike befoire   ,', commentIndex)
      await postToUpdate.comments[commentIndex].likes.set('whatever')
      postToUpdate.save()
      // console.log('this is the like ,', commentToLike.likes)
      console.log('commentToLike after   ,', postToUpdate)

      // console.log('this is the like with get ,', commentToLike.likes.get(authorId))

      return {
        messageId: postToUpdate._id
      }
    }
  },
  Post: {
    // user: (message, args, {`
    //   models
    // }) => {
    //   return models.users[message.userId];
    // },
  }
}