<template>
  <button
    ref="btn"
    v-on="listeners"
    :disabled="disableButton"
    :class="className"
    :size="size"
    :href="to"
  >
    <div class="button-text">
      <slot></slot>
    </div>
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
        mouseout: (event) => this.mouseoutx(event)
        // focus: (event) => this.focus(event)
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
    }
  },
  updated(){
  }
};
</script>
<style lang="scss" scoped>

.btn {
    width: 9rem;
    height: 3rem;
    border-radius: 5px;
    box-shadow: 2px 5px 10px #888888;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        filter: brightness(150%);
    }

    &-success {
      background-color: #5cb85c;
      font-family: 'Courier New', Courier, monospace;
      font-weight:bold;
    }
    &-primary{
        background-color: #0275d8;
        font-family: 'Times New Roman', Times, serif
    }
    &-secondary {
        background-color: greenyellow;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    &-danger {
        background-color: #d9534f;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    &-warning {
        background-color: #f0ad4e;
        font-weight:bold;
        font-style: oblique;

    }
    &-info {
        background-color: #5bc0de;
        font-weight:bold;
    }
    &-light {
        background-color: #f7f7f7;
         font-style: normal;
    }
    &-dark {
        background-color: #292b2c;
          font-style: italic;
          font-feature-settings: "c2sc",
          "smcp";

          color: white;
    }
    .button-text{
      padding: 3px;
      height: 100%;
      font-size: 15px;
    }
}
.xs {
  width: 25px;
  height: 25px;
}
.sm {
  width: 50px;
  height: 25px;
}
.md {
  width: 120px;
  height: 30px;
}
.lg {
  width: 160px;
  height: 50px;
}

/**
 * Icons within buttons
 */
.button>svg {
    fill: currentcolor;
    // … etc.
}

/**
 * Inline button
 */
.button--inline {
    display: inline-block;
}
</style>

