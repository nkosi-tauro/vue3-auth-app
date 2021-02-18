<template>
  <div class="home">
    <Header/>
    <h1>Im a Pizza</h1>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import {onBeforeMount, reactive, toRefs} from 'vue'
import firebase from 'firebase'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>


