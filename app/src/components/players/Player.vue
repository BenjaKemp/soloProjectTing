<template>
    <div class="components-container">
      {{this.players}}
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
  export default {
    data () {
      return {
        name: 'Ben'
      }
    },
    
    computed: {
        ...mapState({
        players: ({ players }) => players.players,
      }),
      ...mapGetters([
        'players/singlePlayer'
    ])

    },
    beforeRouteEnter (f, t, next) {
      next(async (vm) => {
        vm.init()
      })
    },
    methods: {
      async init () {
        await this.$store.dispatch('players/init')
      }
    }
  }
</script>