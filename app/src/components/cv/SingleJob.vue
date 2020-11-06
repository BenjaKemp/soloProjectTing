<template>
  <div>
    <div>{{job.jobTitle}}</div>
    <div>{{props}}</div>
    
       <!-- "jobId" -->
       <!-- "employerId" "employerName" "employerProfileId" "employerProfileName"  "jobTitle" "locationName" "minimumSalary" "maximumSalary" "currency" "expirationDate"  "date"  "jobDescription" "applications" "NewSearchObject" } -->

  </div>
</template>

<script>
export default {
  name: "SingleJob",
  props:['job'],  
  data() {
    return {};
  },
  computed: {},
};
</script>