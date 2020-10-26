<template>
<div class="toolkit_container">
    <h1>colours</h1>
    <div class="section_container">
      <div class="theme_container">
        <div v-for="theme in themes" :key="theme.name">
            <div v-for="colour in theme" :key="colour.name" class="colour-box" :style="`background-color:${colour.colour}`">
                {{colour.name}}
            </div>
        </div>
      </div>
    </div>
    <div class="section_container">
      <div class="button_container">
        <lw-button v-for="button in buttons" :key="button.type" :class="`btn btn-${button.type}`" @click="handleClick" :my-attr="`hello ben`">
          <div>{{button.type}}</div>
        </lw-button> 
        <lw-button> 
          basic wonk
        </lw-button>
      </div>
    </div>
    <div class="section_container">
      <div id="demo">
        <lw-button v-on:click="show = !show" class="btn btn-primary">
          Toggle Fade
        </lw-button>
        <transition name="fade">
          <p v-show="show">hello</p>
        </transition>
        <lw-button v-on:click="slide = !slide" class="btn btn-info">
          Toggle slide
        </lw-button>
        <transition name="slide">
          <p v-if="slide">hello</p>
        </transition>
      </div>
    </div>
</div>
</template>

<script>
import LwButton from '../partials/LwButton.vue'
export default {
  components: {
    LwButton
  },
  data() {
    return {
      themes: [
        [
          {name: "$theme-dark-pink", colour: '#F77FBE'},
          {name:" $theme-light-pink", colour: '#FF99CC'},
          {name:'$theme-charcoal' ,colour:' #4C454C'},
          {name:'$theme-black' ,colour: '#000000'}
        ],
        [
          {name: '$pb-pink', colour:'#f74464 '},
          {name: '$pb-navy-dark',colour:'#374258'},
          {name: '$pg-navy-light',colour:'#6a7285'},
          {name: '$pg-grey',colour: '#c4c4c4'},
          {name: '$pb-white',colour:'#f3f3f3}'}
        ],
        [
          {name: '$Maximum-Blue-Green', colour: '#16bac5'},
          {name: '$Maya-Blue', colour:'#5fbff9'},
          {name: '$Magnolia', colour:'#efe9f4'},
          {name: '$Dark-Jungle-Green', colour:'#171d1c'},
          {name: '$Neon-Blue', colour:'#5863f8'},
        ]
    ],
      buttons: [
        {type:'primary'},
        {type:'secondary'},
        {type:'success'},
        {type:'danger'},
        {type:'warning'},
        {type:'info'},
        {type:'light'},
        {type:'dark'}
      ],
      show: true,
      slide: true
    };
  },
  computed: {},
  methods: {
    handleClick(e){
      console.log('this is the click in parent   ',e)
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../../styles/abstracts/mixins';
@import '../../styles/base/typography';
@import '../../styles/components/partials/button';

.toolkit_container {
  max-width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .section_container {
    display: flex;
    flex-direction: column;
    flex-direction: row;
    padding: 10px;
    justify-content: center;
    .theme_container {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      width: 100%;
      .colour-box {
        width: 150px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .button_container {
      display: flex;
      flex-direction: row;
    }
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
    .slide-leave-active,
    .slide-enter-active {
      transition: 1s;
    }
    .slide-enter {
      transform: translate(100%, 0);
    }
    .slide-leave-to {
      transform: translate(-100%, 0);
    }
  }
}

</style>