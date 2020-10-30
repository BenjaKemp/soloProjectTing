<template >
  <div v-if="!deviceType" class="main-header-container">
    <lw-button v-for="button in buttons" :key="button.id" :class="`btn btn-${button.button}`" :to="button.route">
      {{button.title}}
    </lw-button>
  </div>
  <div v-else class="mobile_header_container">
    <div v-bind:class="[isActive ? 'is-active' : '', 'hamburger']" id="hamburger-1" @click="toggleActive">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>
  </div>
</template>
<script>
import LwButton from '../partials/LwButton.vue';
export default {
  components: {
    LwButton
  },
  data() {
    return {
      logged: localStorage.hasOwnProperty("user"),
      buttons: [
        { id: "1", title: "log in", icon: "mdi-view-dashboard", route: "login", button: "secondary"},
        { id: "2", title: "sign up", icon: "mdi-image", route: "signup",button: "primary" },
        { id: "3", title: "log out", icon: "mdi-help-box",button: "danger" },
      ],
      isActive: false
    };
  },
  computed: {
    deviceType(){
      return innerWidth <= 760
    }, 
  },
  methods: {
    handleLogout() {
      localStorage.removeItem('user');
    },
    toggleActive () {
      console.log('this is active    ',this.isActive)
       this.isActive = !this.isActive
    }
  }
};
</script>
<style lang="scss">
@import '../../styles/components/partials/mainheader.scss';

.mobile_header_container {
  background-color: $pb-navy-light;
  .hamburger {
    display: inline-block;
    margin-left: 5px;
    margin-top: 5px;
    
  }
  
  .hamburger .line{
    width: 50px;
    height: 5px;
    border: 1px solid $pb-navy-dark;
    background-color: $pb-pink;
    display: block;
    margin: 8px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  
  .hamburger:hover{
    cursor: pointer;
  }
  
  /* ONE */
  
  .is-active .line:nth-child(2){
    opacity: 0;
  }
  
  .is-active .line:nth-child(1){
    -webkit-transform: translateY(13px) rotate(45deg);
    -ms-transform: translateY(13px) rotate(45deg);
    -o-transform: translateY(13px) rotate(45deg);
    transform: translateY(13px) rotate(45deg);
  }
  
  .is-active .line:nth-child(3){
    -webkit-transform: translateY(-13px) rotate(-45deg);
    -ms-transform: translateY(-13px) rotate(-45deg);
    -o-transform: translateY(-13px) rotate(-45deg);
    transform: translateY(-13px) rotate(-45deg);
  }

}

</style>