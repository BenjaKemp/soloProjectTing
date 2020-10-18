<template>
    <div class="components-container">
        <input v-model="searchData.employerId" placeholder="employerId">
        <p>employerId is: {{ searchData.employerId }}</p>
        <input v-model="searchData.employerProfileId" placeholder="employerProfileId">
        <p>employerProfileId is: {{ searchData.employerProfileId }}</p>
        <tags-input element-id="tags"
        :existing-tags="tags"
        :typeahead="true"></tags-input>
        <input v-model="searchData.locationName" placeholder="locationName">
        <p>locationName is: {{ searchData.locationName }}</p>
        <input v-model="searchData.distanceFromLocation" placeholder="distanceFromLocation">
        <p>distanceFromLocation is: {{ searchData.distanceFromLocation }}</p>
        <input type="checkbox" id="permenant" v-model="searchData.permenant">
        <label for="permenant">permenant</label>
        <input type="checkbox" id="contract" v-model="searchData.contract">
        <label for="contract">contract</label>
        <input type="checkbox" id="temp" v-model="searchData.temp">
        <label for="temp">temp </label>
        <input type="checkbox" id="partTime" v-model="searchData.partTime">
        <label for="partTime">partTime </label>
        <input type="checkbox" id="fullTime" v-model="searchData.fullTime">
        <label for="fullTime">fullTime</label>
        <label for="permenant">{{ searchData.permenant }}</label> -->
        <input v-model.number="searchData.minimumSalary" placeholder="minimumSalary">
        <p>minimumSalary is: {{ searchData.minimumSalary }}</p>
        maximumSalary	highest possible salary e.g. 30000 -->
        <input v-model="searchData.maximumSalary" placeholder="maximumSalary">
        <p>maximumSalary is: {{ searchData.maximumSalary }}</p>
        <input type="checkbox" id="postedByRecruitmentAgency" v-model="searchData.postedByRecruitmentAgency">
        <label for="postedByRecruitmentAgency">postedByRecruitmentAgency</label>
        <input type="checkbox" id="postedByDirectEmployer" v-model="searchData.postedByDirectEmployer">
        <label for="postedByDirectEmployer">postedByDirectEmployer</label>
        <input type="checkbox" id="graduate" v-model="searchData.graduate">
        <label for="graduate">graduate</label>
        <button @click="handlesearch">submit search</button>
    </div>
</template>
<script>
const TagsInput = require('@voerro/vue-tagsinput').default
  export default {
    name: "JobSearch",
    components:{
        TagsInput
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
            console.log('this.searchData      ',this.searchData)
            await this.$store.dispatch("cv/search",this.searchData);
        }
    }
  }
</script>