<template lang="">
  <div>
      <h1 class="display-5">Resume</h1>
      <div class="container vh-150">
     <h5 >Education</h5>
    <div class="row mx-5">
         <div class="card m-5 " id="" style="width: 18rem;" v-for="Education in education " :key="Education">
   <div class="card-body">
     <img class="card-images" :src=" Education.picture" loading="lazy" alt="Profile picture" width="150" height="150">
     <h3 class="card-title">{{Education.year}}</h3>
     <h4 class="card-subtitle">{{ Education.description }}</h4>
     <h4 class="card-subtitle">{{ Education.place }}</h4>
   </div>
      </div>
    </div>
  </div>
  </div>
  <div class="container vh-150">
     <h5 >Skills</h5>
    <div class="row mx-5">
         <div class="card m-5 " id="" style="width: 12rem;" v-for="Skills in skills " :key="Skills">
   <div class="card-body">
     <img class="card-images" :src=" Skills.item" loading="lazy" alt="Profile picture" width="150" height="150">
     <h3 class="card-title">{{Skills.name}}</h3>
     <h4 class="card-subtitle">{{ Skills.surname }}</h4>
   </div>
 </div>
    </div>
 </div>
</template>
<script>
export default {
  computed: {
      education() {
          return this.$store.state.education;
      },
      skills() {
          return this.$store.state.skills;
      }
  },
  mounted() {
      this.$store.dispatch("fetchEducation")
      this.$store.dispatch("fetchSkills")
  }
}
</script>
<style lang="">
</style>









