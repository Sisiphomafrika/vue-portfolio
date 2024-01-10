<template>
  <div>
    <h2>Testimonials</h2>
    <div
      class="card"
      v-for="testimonial in $store.state.testimonialData"
      :key="testimonial.name"
      style="width: 18rem;" >
      <img src="" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">{{ testimonial.name }}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>
 <script>
 export default {
   computed: {
     fetchDataTestimonial() {
       this.$store.dispatch('fetchData');
     },
   },
   mounted() {
     this.fetchDataTestimonial;
   },
 };
 </script>
  <style>
</style>