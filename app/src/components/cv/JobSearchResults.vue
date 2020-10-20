<template>
  <div class="mega_test">
{{job}}
  </div>
</template>

<script>
  export default {
    props: ['job'],
    data () {
      return {
      }
    },
    computed: {
    },
  }
</script>
<style lang="scss">
@import '../../styles/base/_typography.scss';

.mega_test {
  font: $blue
}

</style>

