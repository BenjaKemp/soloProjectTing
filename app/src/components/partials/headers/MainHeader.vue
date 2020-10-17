<template>
  <v-app-bar class="navbar-container" app clipped-left dense>
    <div v-for="button in buttons" :key="button.id" >
      <router-link :to="{name: button.route}" class="nav-link">
        <button>
            {{button.title}}
        </button>   
      </router-link>        
    </div>
  </v-app-bar>
</template>
<script>
export default {

    data() {
    return {
      buttons: [
        { id: "1", title: "log in", icon: "mdi-view-dashboard", route: "login" },
        { id: "2", title: "sign up", icon: "mdi-image", route: "signup" },
        { id: "3", title: "log out", icon: "mdi-help-box"},
      ]
    };
  },
};
</script>
<style>
</style>