<template>
  <div container class="post-container">
    <div class="title">{{post.title}}</div>
    <div class="author">{{post.author}}</div>
    <div class="text">{{post.text}}</div>
    <div class="time">{{post.time}}</div>
    <br />Comments
    <ul>
      <li v-for="comment in post.comments" v-bind:key="comment.author">
        <div>{{ comment.author }}</div>
        <div>{{ comment.body }}</div>
        <div>{{ comment.meta }}</div>
      </li>
    </ul>
    <textarea
      type="submit"
      v-model="message"
      placeholder="hoot your trap off"
      v-on:keyup.enter="handleCommentInput()"
    />
    <div class="button-flex">
      <button class="like" @click="handleLike">like</button>
      <button class="fav" @click="handleFave">fave</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "BlogPost",
  props: {
    post: {
      type: Object,
    },
  },
  data() {
    return {
      message: "",
    };
  },
  mounted() {
    console.log("this     ", this);
  },
  methods: {
    handleCommentInput() {
      console.log("this is inout       ", this.message);
      const commentPayload = this.data;
      this.$emit("add-comment", commentPayload);
    },
    async handleLike() {
      await this.$store.dispatch("blog/init");
    },
  },
};
</script>
<style>
.post-container {
  display: flex;
  flex-direction: column;
  border: solid;
  padding: 10px;
  min-width: 900px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 5px 10px #888888;
}
.title {
  background: #ff009d;
}
.author {
}
.time {
}
.comment {
}
.meta {
}
.text {
}
.button-flex {
  display: flex;
}
</style>  