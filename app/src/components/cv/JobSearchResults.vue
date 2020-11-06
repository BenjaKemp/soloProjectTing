<template>
  <div>
    <single-job v-for="job in search" :key="job.jobId" :job="job"></single-job>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import SingleJob from './SingleJob.vue'
  export default {
    components: {
      SingleJob
    },
    data () {
      return {
      }
    },
    computed: {
    ...mapState({
      search: ({ cv }) => cv.search
    }),
  },
}
</script>
<style lang="scss">
</style>