<template>
    <div class="components-container">
      Hello ben
      <job-search-bar></job-search-bar>
      <job-search-results></job-search-results>
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
<style lang="scss">
.components-container{
  width:100%;
  padding: 50px;
}

</style>