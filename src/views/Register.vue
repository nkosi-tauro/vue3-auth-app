<template>
  <div class="register overflow-hidden">
    <!-- Register component -->
    <!-- Container -->
    <div class="container mx-auto ">
      <div class="flex justify-center px-6 my-5">
        <!-- Row -->
        <div class="w-full xl:w-3/4 lg:w-11/12 flex">
          <!-- Col -->
          <div
            class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
            style="
              background-image: url('https://source.unsplash.com/eEoieXVnKGg/600x800');
            "
          ></div>
          <!-- Col -->
          <div
            class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none"
          >
            <h3 class="pt-4 text-2xl text-center">Create Account</h3>
            <div class="p-5">
              <h3 class="text-center mb-2 font-semibold">Register with</h3>
              <div class="grid grid-cols-2 gap-1">
                <Google />
                <GitHub />
              </div>
            </div>
            <h3 class="text-center font-semibold">Or</h3>
            <form
              @submit.prevent="Register"
              class="px-8 pt-6 pb-8 mb-4 bg-white rounded"
            >
              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="username"
                >
                  Email
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  required
                  v-model.trim="email"
                  placeholder="Username"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="password"
                >
                  Password
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  required
                  v-model.trim="password"
                  placeholder="******************"
                />
              </div>

              <div class="mb-6 text-center">
                <div class="grid grid-cols-3 gap-1">
                  <button
                    class="w-full col-span-2 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Register Account
                  </button>
                  <div v-if="isLoading">
                    <Loading class="m-3 font-extrabold text-center" />
                  </div>
                </div>
              </div>
              <hr class="mb-6 border-t" />
              <div class="text-center">
                <router-link to="/login"
                  ><a
                    class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  >
                    Already have an account? Login
                  </a></router-link
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Google from "../components/LoginProviders/Google.vue";
import GitHub from "../components/LoginProviders/GitHub.vue";
import Loading from "../components/Loading.vue";
import DarkMode from "../components/DarkMode.vue";
import firebase from "firebase";
import { reactive, toRefs } from "vue";
export default {
  name: "Register",
  components: { Google, GitHub, Loading },
  setup() {
    const state = reactive({
      email: null,
      password: null,
      isLoading : false

    });

    function Register() {
      state.isLoading = true
      firebase
        .auth()
        .createUserWithEmailAndPassword(state.email, state.password)
        .then((user) => console.log("success"))
        .catch((err) => alert(err.message));
      
    }

  
    
    return { ...toRefs(state),  Register };
  }
};
</script>

<style>
</style>