<template>
  <button
    ref="btn"
    v-on="listeners"
    :disabled="disableButton"
    :class="className"
    :size="size"
    :href="to"
  >
    <slot>Submit</slot>
  </button>
</template>

<script>

export default {
  name: "LoadingButton",
  props: {
    className:{
      type: String,
      default: "button",
    },
    tag: {
      type: String,
      default: "button",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "normal",
    },
    rounded: {
      type: String,
      default: "medium",
    },
    to: {
      type: String,
    },
    target:{
      type: String,
      default: '_blank',
    }
  },
  data() {
    return {
      loading: false,
      disableButton: this.disabled,
    };
  },
  computed: {
    // we're merging the listeners of the parent and overring native elements in the component
    listeners(){
      return {
        ...this.$listeners,
        click: (event) => this.clickButton(event),
        blur: (event) => this.blurButton(event),
        mouseover: (event) => this.mouseoverx(event),
        mouseout: (event) => this.mouseoutx(event),
        focus: (event) => this.focus(event)
      }
    }
  },
  methods:{
    routerPush () {
      this.$router.push(this.to).catch(err => { this.$emit('routeErr', err) })
    },
    clickButton(event) {

      this.$emit('click',event)
      if(this.to){
        this.routerPush()
      }
      if (this.href) {
        if (typeof (this.href) === 'string') {
          this.target ? window.open(this.href) : window.location.href = this.href
        } else {
          this.target ? window.open(this.href.url) : window.location.href = this.href.url
        }
      }
    },
    blurButton(event) {
      console.log('this is blurButton    ',event)
    },
    mouseoverx(event) {
      // console.log('this is mouseoverx      ',event)
    },
    mouseoutx(event) {
      // console.log('this is mouseoutx        ',event)
    },
    focuse(even) {}

  },
  updated(){
    console.log('tese are listneres     ',this.$listeners)
  }
};
</script>
<style lang="scss" scoped>
 @import '../../styles/components/partials/button';

  .button:focus {
    outline: none;
    box-shadow: none;
    
  }
</style>

