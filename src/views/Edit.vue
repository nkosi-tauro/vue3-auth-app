<template>
  <div class="about">
    <Header/>
    <!-- component -->
    <h1>Pizza About</h1>
  </div>
</template>


<script>
import Header from "../components/Header.vue";
import firebaseUser from '../store/user.js'

export default {
  name: "About",
  components: {
    Header,
  },
  setup(){
    const { name, image } = firebaseUser()
    return {name, image}
  }
};
</script>