<template >
  <div class="main-header-container">
    <lw-button v-for="button in buttons" :key="button.id" :class="`btn btn-${button.button}`" :to="button.route">
      {{button.title}}
    </lw-button>
  </div>
</template>
<script>
import LwButton from '../partials/LwButton.vue';
export default {
  components: {
    LwButton
  },
  data() {
    return {
      logged: localStorage.hasOwnProperty("user"),
      buttons: [
        { id: "1", title: "log in", icon: "mdi-view-dashboard", route: "login", button: "secondary"},
        { id: "2", title: "sign up", icon: "mdi-image", route: "signup",button: "primary" },
        { id: "3", title: "log out", icon: "mdi-help-box",button: "danger" },
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
@import '../../styles/components/partials/mainheader.scss';
</style>