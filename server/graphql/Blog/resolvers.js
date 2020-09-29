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
    createPost: (parent, {
      input
    }, {
      models: {
        Post
      }
    }) => {
      const {
        comments
      } = input
      const date = new Date()
      const createdPost = new Post({
        ...input,
        comments,
        date
      });
      createdPost.save()
      return {
        messageId: createdPost._id
      }
    },
    updatePost: async (_, {
      input: {
        _id
      }
    }, {
      models: {
        Post
      }
    }) => {
      const existingPost = await Post.findOne({
        _id
      }).exec();
    },
    deletePost: async (_, {
      id
    }, {
      models: {
        Post
      }
    }) => {
      const deletedPost = await Post.findOneAndDelete({
        _id: id
      }).exec();
      return {
        id: deletedPost._id,
        confirmation: `${deletedPost.title} was removed`
      }
    },
    favePost: async (_, {
      input: {
        postId,
        authorId
      }
    }, {
      models: {
        Post
      }
    }) => {
      console.log('postId    ,', postId)
      console.log('authorId    ,', authorId)

    },
    addComment: async (_, {
      input: {
        postId,
        comment,
        authorId
      }
    }, {
      models: {
        Post
      }
    }) => {

      const postToUpdate = await Post.findById(postId).exec();
      const newComment = {
        author: authorId,
        body: comment,
        date: new Date(),
        likes: new Map()
      }
      console.log('post      ', postToUpdate)
      postToUpdate.comments.push(newComment)
      await postToUpdate.save()
      return {
        messageId: postToUpdate._id
      }
    },
    likeComment: async (_, {
      input: {
        postId,
        commentId,
        authorId
      }
    }, {
      models: {
        Post
      }
    }) => {

      const postToUpdate = await Post.findById(postId).exec();
      const commentIndex = await postToUpdate.comments.findIndex(el => el._id == commentId)
      if (postToUpdate.comments[commentIndex].likes.get(authorId)) {
        await postToUpdate.comments[commentIndex].likes.remove(authorId)
      } else {
        console.log('we should be trying to post    ', authorId)
        await postToUpdate.comments[commentIndex].likes.set(authorId)
      }
      postToUpdate.save()
      console.log('commentToLike after   ,', postToUpdate)
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