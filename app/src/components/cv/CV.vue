<template>
    <div class="components-container">
      Hello ben
      <job-search></job-search>
      {{this.search}}

    </div>
</template>

<script>
import JobSearch from "./JobSearch.vue";
import { mapState } from 'vuex'
  export default {
    components: {
      JobSearch
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