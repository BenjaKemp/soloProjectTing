<template>
  <v-app>
    <navigation-drawer></navigation-drawer>
    <v-app-bar
      app
      dark
      elevate-on-scroll 
    >
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/The-Wonk-forweb-1200x442.jpg"
          transition="scale-transition"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import NavigationDrawer from './components/navigation/NavigationDrawer';

export default {
  name: 'App',

  components: {
    HelloWorld,
    NavigationDrawer
  },

  data: () => ({
    //
  }),
};
</script>
