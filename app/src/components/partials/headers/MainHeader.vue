<template>
  <v-app-bar class="navbar-container" app clipped-left dense>
    <div v-for="button in buttons" :key="button.id">
      <router-link :to="{name: button.route}" v-bind:class="{ hidden: button.hidden }" >
        <button v-on="handleLogout()" >
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
      console.log('this is logoiut')
      localStorage.removeItem('user');
    }
  }
};
</script>
<style>
.hidden {
  display: none ;
}
</style>