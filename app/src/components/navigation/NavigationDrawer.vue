<template>
  <v-navigation-drawer
    app
    clipped
    v-model="drawer"
    :color="color"
    :right="right"
    :permanent="permanent"
    :src="bg"
    absolute
    dark
  >
    <v-list dense nav class="py-0">
      <v-list-item v-for="item in items" :key="item.title" link :to="item.route" class="list-item-white-dashed">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
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
      permanent: true,
      miniVariant: false,
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
<style>
.list-item-white-dashed {
    color: white;
    height: 20px;
    padding: 20px;
    border: dashed;
}
</style>