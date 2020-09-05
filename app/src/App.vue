<template>
  <v-app>

    
    <v-main>
    <navigation-drawer></navigation-drawer>
        <router-view></router-view>
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
