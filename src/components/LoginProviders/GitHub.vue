<template>
  <button
    @click="githubAuth"
    type="button"
    class="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block"
  >
    Github
  </button>
</template>

<script>
import firebase from "firebase";
export default {
  name: "github-button",

  setup(props) {
    function githubAuth() {
      const provider = new firebase.auth.GithubAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
            console.log("success")
        })
        .catch((error) => {
            console.log(error)
        });
    }

    return { githubAuth };
  },
};
</script>

<style>
</style>