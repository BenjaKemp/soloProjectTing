<template>
  <div class="components-container">
    <blog-post v-for="post in posts" :key="post._id"></blog-post>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BlogPost from "./BlogPost.vue";
export default {
  components: {
    BlogPost,
  },
  computed: {
    ...mapState({
      posts: ({ blog }) => blog.posts,
    }),
  },
  beforeRouteEnter(f, t, next) {
    next(async (vm) => {
      vm.init();
    });
  },
  methods: {
    async init() {
      await this.$store.dispatch("blog/init");
    },
  },
};
</script>