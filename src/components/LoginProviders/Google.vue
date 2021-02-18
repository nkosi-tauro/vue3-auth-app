<template>
  <div class="google-button">
    <button
      type="button"
      @click="googleAuth"
      class="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block"
    >
      Google
    </button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "google-button",
  setup(props) {
    function googleAuth() {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          console.log("success");
        })
        .catch(error => console.log(error))
    }
    return { googleAuth };
  },
};
</script>

<style>
</style>