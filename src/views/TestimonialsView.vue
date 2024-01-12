<template>
    <div class="container vh-150">
       <h5 class="display-5">Testimonials</h5>
      <div class="row mx-5">
           <div class="card m-5 " id="" style="width: 18rem;" v-for="Testimonials in Testimonials " :key="Testimonials">
     <div class="card-body">
       <img class="card-images" :src=" Testimonials.profile" loading="lazy" alt="Profile picture" width="200" height="200">
       <h3 class="card-title mt-2">{{Testimonials.name}}</h3>
       <h4 class="card-subtitle">{{ Testimonials.surname }}</h4>
       <span class="card-text">{{Testimonials.quotes}}</span>
     </div>
   </div>
      </div>
   </div>
</template>
<script>
export default {
    computed:{
        Testimonial(){
            return this.$store.state.Testimonials;
        }
    },
    mounted(){
        this.$store.dispatch("fetchTestimonials")
    }
}
</script>
<style >
body{
    background-color: #6A9AC4;
}
.card{
    background-color: #021627;
    color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-left: 16px;
  /* Add any other styling as needed */
}
</style>