<template>
  <router-view/>
</template>

<script>
import {onBeforeMount} from 'vue';
import {useRouter, useRoute} from 'vue-router';
import firebase from 'firebase';
export default {
  setup(){
    const router = useRouter();
    const route = useRoute()

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        // if not logged in redirect to login page
        if(!user){
          router.replace('/login')
        }
        // if logged in (user available)  redirect to Home
        else if (route.path == '/login' || route.path == '/register'){
          router.replace('/')
        }
      })
    })
  }
}
</script>

<style>

</style>

