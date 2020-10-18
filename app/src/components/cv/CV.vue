<template>
    <div class="components-container">
      Hello ben
      <job-search-bar></job-search-bar>
      <!-- {{search}} -->
      <job-search-results v-for="job in search" v-bind:key="job.id" v-bind:job="job"></job-search-results>
    </div>
</template>

<script>
import JobSearchBar from "./JobSearchBar.vue";
import JobSearchResults from "./JobSearchResults.vue";
import { mapState } from 'vuex'
  export default {
    components: {
      JobSearchBar,
      JobSearchResults
      },
    data () {
      return {
      }
    },
    computed: {
      ...mapState({
        search: ({ cv }) => cv.search
      })
    },
  }
</script>