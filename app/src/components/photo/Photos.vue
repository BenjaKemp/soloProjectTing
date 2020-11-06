<template>
<div class="container">
  <div class="container-fluid">
  <div class="container__row">
    <div v-for="element in testArray" :key="element.id" class="container__col-sm-12 container__col-md-4 container__col-lg-3">
      {{element.name}}
    </div>
  </div>
</div>
</div>

</template>
<script>

export default {
  data() {
    return {
      testArray: [
        {
          _id:1,
          name: "one"
        },
        {
          _id:2,
          name: "two"
        },
        {
          _id:3,
          name: "three"
        },
        {
          _id:4,
          name: "four"
        },
        {
          _id:5,
          name: "five"
        },
        {
          _id:6,
          name: "six"
        },
        {
          _id:7,
          name: "seven"
        },
        {
          _id:8,
          name: "eight"
        },
        {
          _id:9,
          name: "nine"
        },
        {
          _id:10,
          name: "ten"
        },
        {
          _id:11,
          name: "eleven"
        },
        {
          _id:12,
          name: "twelve"
        },
      ]
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
@import '../../styles/layout/_grid.scss';

$grid__cols: 12;

.container {
  // max-width: $grid__bp-md * 1px;
  margin: 0 auto;
  &--fluid {
    margin: 0;
    max-width: 100%;
    
  }
  &__row {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  @each $modifier , $breakpoint in $map-grid-props {
    @include create-col-classes($modifier, $grid__cols, $breakpoint);
  }
}

//Styling of grid for demostration purposes
.container {
  background-color: #88d8b0;
  padding: 10px;
  box-sizing: border-box;
  &__row {
    background-color: #ffeead;
    &.nested {
      background-color: #ffcc5c;
    }
  }

  @at-root {
    [class*='container__col-'] {
      &.higher {
        min-height: 60px;
      }
      width: 256px;
      height: 237px;
      border-radius: 8px;
      box-shadow: 0 2px 16px 0 rgba(33, 43, 54, 0.08), 0 0 0 1px rgba(6, 44, 82, 0.1);
      background-color: #ffffff;
      min-height: 30px;
      outline: 1px solid #ffcc5c;
      margin: 10px 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
}


</style>