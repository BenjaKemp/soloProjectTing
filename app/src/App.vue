<template>
  <!-- <v-app v-if="!authenticated">
      <signup />
  </v-app>-->
  <v-app>
    <main-header />
    <navigation-drawer />
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import SoundCloud from "./components/soundcloud/Soundcloud.vue";
import Settings from "./components/settings/Settings.vue";
import NavigationDrawer from "./components/navigation/NavigationDrawer.vue";
import MainHeader from "./components/partials/headers/MainHeader.vue";



export default {
  name: "Home",
  components: {
    SoundCloud,
    Settings,
    MainHeader,
    NavigationDrawer,
  },
  computed: {
    ...mapState({
      user: (state) => state.login.user,
    }),
    ...mapGetters({
      getRoles: "users/getRoles",
    }),
  },
  methods: {
    authenticated: () => {
      console.log("this.user     ", this.user);
      return false;
    },
  },
  beforeCreate() {
    // The beforeCreate hook runs at the very initialization of your component. data has not been made reactive, and events have not been set up yet:
    // console.log('At this point, events and lifecycle have been initialized.')
  },
  created() {
    // You are able to access reactive data and events that are active with the created hook. Templates and Virtual DOM have not yet been mounted or rendered:
    // console.log('At this point, this.property is now reactive and propertyComputed will update.')
    this.property = "Example property updated.";
    console.log("this.user     ", this);
    // console.log('this is router   ',this.$route)
  },
  beforeMount() {
    // The beforeMount hook runs right before the initial render happens and after the template or render functions have been compiled:
    // console.log(`At this point, vm.$el has not been created yet.`)
  },
  mounted() {
    // console.log(`At this point, vm.$el has been created and el has been replaced.`);
    // console.log('what is this     ',this.$el) // Example component.
  },
  beforeUpdate() {
    // console.log(`At this point, Virtual DOM has not re-rendered or patched yet.`)
  },
  updated() {
    // console.log('The updated hook runs after data changes on your component and the DOM re-renders. Use updated if you need to access the DOM after a property change:')
  },
  beforeDestroy() {
    // console.log(`At this point, watchers, child components, and event listeners have not been teared down yet.`)
    // Perform the teardown procedure for exampleLeakyProperty.
    // (In this case, effectively nothing)
    // console.log('beforeDestroy is fired right before teardown. Your component will still be fully present and functional.')
  },
  destroyed() {
    // console.log(`At this point, watchers, child components, and event listeners have been torn down.`)
    // console.log('this '   ,this)
  },
  data: () => ({
    property: "Example property.",
  }),
};
</script>
<style lang="scss">
@import './styles/main.scss'


</style>
