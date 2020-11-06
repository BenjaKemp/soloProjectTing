<template>
    <div class="jobsearchbar-container">
        <input v-model="searchData.employerId" placeholder="employerId" class="lw-text-input">
        <p>employerId is: {{ searchData.employerId }}</p>
        <input v-model="searchData.employerProfileId" placeholder="employerProfileId" class="lw-text-input">
        <p>employerProfileId is: {{ searchData.employerProfileId }}</p>
        <input v-model="searchData.locationName" placeholder="locationName" class="lw-text-input">
        <p>locationName is: {{ searchData.locationName }}</p>
        <input v-model="searchData.distanceFromLocation" placeholder="distanceFromLocation" class="lw-text-input">
        <p>distanceFromLocation is: {{ searchData.distanceFromLocation }}</p>
        <div class="tags-container">
          <vue-tags v-model="searchData.keywords">
            <div class="tags-input" slot-scope="{removeTag,inputEventHandlers,inputBindings }">
              <span v-for="keyword in searchData.keywords" class="tags-input-tag " :key="keyword">
                <span>{{ keyword }}</span>
                <lw-button  type="button" class="tags-input-remove btn btn-warning xs"
                  v-on:click="removeTag(keyword)"
                >&times;
                </lw-button >
              </span>
              <input
                class="tags-input-text"  placeholder="Add tag..."
                v-on="inputEventHandlers"
                v-bind="inputBindings"
              >
            </div>
          </vue-tags>
        </div>
        <label class="lw-checkbox-label" for="tags" >tag all dem searches</label>

        <input type="checkbox" id="permanent" v-model="searchData.permanent" class="lw-checkbox">
        <label class="lw-checkbox-label" for="permanent">permanent</label>

        <input type="checkbox" id="contract" v-model="searchData.contract" class="lw-checkbox">
        <label class="lw-checkbox-label" for="contract">contract</label>

        <input type="checkbox" id="temp" v-model="searchData.temp" class="lw-checkbox">
        <label class="lw-checkbox-label" for="temp">temp </label>

        <input type="checkbox" id="partTime" v-model="searchData.partTime" class="lw-checkbox">
        <label class="lw-checkbox-label" for="partTime">partTime </label>

        <input type="checkbox" id="fullTime" v-model="searchData.fullTime" class="lw-checkbox">
        <label  class="lw-checkbox-label" for="fullTime">fullTime</label>

        <input v-model.number="searchData.minimumSalary" placeholder="minimu acceptable salary" class="lw-text-input">
        <p>minimumSalary is: {{ searchData.minimumSalary }}</p>

        <input v-model="searchData.maximumSalary" placeholder="maximum salary" class="lw-text-input">
        <p>maximumSalary is: {{ searchData.maximumSalary }}</p>

        <input type="checkbox" id="postedByRecruitmentAgency" v-model="searchData.postedByRecruitmentAgency" class="lw-checkbox">
        <label class="lw-checkbox-label" for="postedByRecruitmentAgency">postedByRecruitmentAgency</label>

        <input type="checkbox" id="postedByDirectEmployer" v-model="searchData.postedByDirectEmployer" class="lw-checkbox">
        <label class="lw-checkbox-label" for="postedByDirectEmployer">postedByDirectEmployer</label>

        <input type="checkbox" id="graduate" v-model="searchData.graduate" class="lw-checkbox">
        <label  class="lw-checkbox-label"for="graduate">graduate</label>

        <lw-button @click="handlesearch" class="btn btn-secondary md">search</lw-button>
    </div>
</template>
<script>
import VueTags from "vue-tags";
import LwButton from '../partials/LwButton.vue'

import '../../styles/components/partials/_forms.scss';

  export default {
    name: "JobSearch",
    components:{
      VueTags,
      LwButton
    },
    data () {
      return {
        searchData: {
          employerId:"",
          employerProfileId:"",	
          keywords:['javascript'],
          locationName:"manchester",	
          distanceFromLocation:15,
          permanent:true,
          contract:true,
          temp:true,
          partTime:true,
          fullTime:true,
          minimumSalary:40000,
          maximumSalary:60000,
          postedByRecruitmentAgency:true,
          postedByDirectEmployer:true,
          graduate:true,
        }
      }
    },
    computed: {

    },
    methods: {
        async handlesearch(){
          console.log('search data      ',this.searchData)
            await this.$store.dispatch("cv/search",this.searchData);
        },
        removeTag(tag){
          return this.searchData.keywords.filter(el=> el !== tag)
        }
    }
  }
</script>
<style lang="scss">
.jobsearchbar-container {
  background-color: $pb-grey;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
  padding: 10px;
}
.tags-input{
  display: flex;
}
.tags-input-tag{
  background-color: $pb-pink;
  color:$pb-white;
  margin: 5px;
  border-radius: 5px;
  display: flex;
  padding: 5px;
  align-items: center;
}
.tags-input-text {
    border: none;
    outline: none;
    display: flex;
    margin: 1px;
    min-width: 500px;
}
.tags-container {
    background-color: white;
    min-width: 500px;
    height: 50px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border: black solid;
    border-radius: 5px;
}
</style>