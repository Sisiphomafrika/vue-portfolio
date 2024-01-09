<template>
  <div>
    <NavBarComponents />
    <FooterComponets/>
    <SpinnerComponents/>
     <router-view/>

  </div>
</template>


<script>
import NavBarComponents from './components/NavBarComponents.vue';
import FooterComponets from './components/FooterComponets.vue';
import SpinnerComponents from './components/SpinnerComponents.vue';
  export default {
    components : {
      NavBarComponents,
      FooterComponets,
      SpinnerComponents
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #B11226;
}
nav {
  padding: 30px;
  margin-left: auto;
  position: center;
  top: 0%;
  right: 0;
  background-color: rgb(255, 196, 228);
  box-shadow: 5px 5px 20px rgba(245, 40, 145, 0.8);
}
nav a {
  margin: 10px;
  font-weight: bold;
  color: #EA3B52;
  text-decoration: underline;
}
nav a.router-link-exact-active {
  color: #634490;
}
</style>
