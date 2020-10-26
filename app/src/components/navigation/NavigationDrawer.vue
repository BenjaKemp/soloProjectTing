<template>
<div class="navigation_container">
  <router-link tag="div" v-for="item in items" :key="item.title" class="navigation_item" :to="item.route" @click="handleClick" >
  </router-link>
</div>

</template>

<script>

export default {
  data() {
    return {
      items: [
        { title: "Photos", route: "photos" },
        { title: "CV",  route: "cv" },
        { title: "Blog",  route: "blog" },
        { title: "ToolKit",  route: "toolkit" },
        { title: "Players",  route: "players" },
        { title: "Chat",  route: "chat" },
      ],
    }
  },
  methods: {
      handleClick() {
        console.log('hi Ben')
      }
  }
};
</script>
<style lang="scss">
@import '../../styles/components//navigation/navigation.scss';


</style>