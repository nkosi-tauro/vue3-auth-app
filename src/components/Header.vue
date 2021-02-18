<template>
  <div class="header">
    <div class="">
      <div class="antialiased bg-gray-100 dark-mode:bg-gray-900">
        <div
          class="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800"
        >
          <div
            class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
          >
            <div class="flex flex-row items-center justify-between p-4">
              <a
                href="#"
                class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
                >Authentication App</a
              >
            </div>
            <nav
              class="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row"
            >
              <router-link
                v-if="!currentRoute"
                to="/about"
                class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >Profile {{ name }}
              </router-link>
              <router-link
                v-else-if="currentRoute"
                to="/"
                class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >Home
              </router-link>
              <a
                class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                @click="Logout"
                >Logout</a
              >
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, reactive, toRefs } from "vue";
import firebase from "firebase";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "Header",
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
      name: "",
      currentRoute: true,
    });

    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if (user) {
        state.name = user.email.split("@")[0];
      }
    });
    // Dynamic route
    if (route.path !== "/about") {
      state.currentRoute = false;
    }

    function Logout() {
      firebase.auth().signOut();
    }

    return { ...toRefs(state), Logout };
  },
};
</script>


