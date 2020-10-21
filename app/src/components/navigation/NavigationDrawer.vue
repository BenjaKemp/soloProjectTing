<template>

</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", route: "dashboard" },
        { title: "Photos", icon: "mdi-image", route: "photos" },
        { title: "CV", icon: "mdi-help-box", route: "cv" },
        { title: "Blog", icon: "mdi-help-box", route: "blog" },
        { title: "Soundcloud", icon: "mdi-help-box", route: "soundcloud" },
        { title: "Newsletter", icon: "mdi-help-box", route: "newsletter" },
        { title: "Players", icon: "mdi-help-box", route: "players" },
        { title: "Chat", icon: "mdi-help-box", route: "chat" },
      ],
      color: "primary",
      colors: ["primary", "blue", "success", "red", "teal"],
      right: false,
      permanent: false,
      miniVariant: true,
      expandOnHover: true,
      background: false,
    };
  },
  computed: {
    bg() {
      return this.background
        ? "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        : undefined;
    },
  },
};
</script>
<style lang="scss">
</style>