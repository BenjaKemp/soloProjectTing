<template >
  <div class="main-header-container" >
    i only want one header
    <div v-for="button in buttons" :key="button.id" class="header-button">
      <router-link :to="{name: button.route}">
      </router-link>        
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      logged: localStorage.hasOwnProperty("user"),
      buttons: [
        { id: "1", title: "log in", icon: "mdi-view-dashboard", route: "login"},
        { id: "2", title: "sign up", icon: "mdi-image", route: "signup" },
        { id: "3", title: "log out", icon: "mdi-help-box" },
      ]
    };
  },
  methods: {
    handleLogout() {
      localStorage.removeItem('user');
    }
  }
};
</script>
<style lang="scss">
@import '../../../styles/components/partials/mainheader.scss';

</style>