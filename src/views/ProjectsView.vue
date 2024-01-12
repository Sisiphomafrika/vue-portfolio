<template lang="">
  <div>
   <div class="container vh-150">
      <h5 class="display-5">Projects</h5>
     <div class="row mx-5">
         <div class="row">
          <div class="card m-5" id="" style="width: 18rem;" v-for="Projects in projects" :key="Projects">
    <div class="card-body">
        <h3 class="card-title">{{Projects.name}}</h3>
      <img class="card-images" :src=" Projects.image" loading="lazy" alt="Profile picture" width="200" height="200">
      <a :href="Projects.gitHub" class="btn btn-primary">gitHub</a>
      <a :href="Projects.netlify" class="btn btn-primary">Netlify</a>
    </div>
  </div>
  </div>
</div>
  </div>
  </div>
</template>
<script>
export default {
  computed:{
      projects(){
          return this.$store.state.projects;
      }
  },
  mounted(){
      this.$store.dispatch("fetchProjects")
  }
}
</script>
<style lang="">
</style>