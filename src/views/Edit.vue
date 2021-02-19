<template>
  <div class="about">
    <Header />
    <!-- component -->
    <div class="bg-white m-10 shadow rounded-lg p-6">
      <h2 class="text-xl mb-4 font-semibold">Update Account Infomation</h2>
      <form @submit.prevent="updateInfo">
        <div class="grid lg:grid-cols-2 gap-6">
          <div
            class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1"
          >
            <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
              <p>
                <label for="name" class="bg-white text-gray-600 px-1"
                  >First name *</label
                >
              </p>
            </div>
            <p>
              <input
                v-model.trim="fname"
                id="name"
                autocomplete="false"
                tabindex="0"
                required
                type="text"
                class="py-1 px-1 text-gray-900 outline-none block h-full w-full"
              />
            </p>
          </div>
          <div
            class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1"
          >
            <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
              <p>
                <label for="lastname" class="bg-white text-gray-600 px-1"
                  >Last name *</label
                >
              </p>
            </div>
            <p>
              <input
                v-model.trim="lname"
                id="lastname"
                required
                autocomplete="false"
                tabindex="0"
                type="text"
                class="py-1 px-1 outline-none block h-full w-full"
              />
            </p>
          </div>
          <div
            class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1"
          >
            <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
              <p>
                <label for="username" class="bg-white text-gray-600 px-1"
                  >Username *</label
                >
              </p>
            </div>
            <p>
              <input
                v-model.trim="Uname"
                id="username"
                autocomplete="false"
                tabindex="0"
                required
                type="text"
                class="py-1 px-1 outline-none block h-full w-full"
              />
            </p>
          </div>
          <div
            class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1"
          >
            <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
              <p>
                <label for="Phone" class="bg-white text-gray-600 px-1"
                  >Phone *</label
                >
              </p>
            </div>
            <p>
              <input
                v-model.number="phone"
                id="phone"
                required
                autocomplete="false"
                tabindex="0"
                type="phone"
                class="py-1 px-1 outline-none block h-full w-full"
              />
            </p>
          </div>
        </div>
        <div class="textarea mt-4">
          <div
            class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1"
          >
            <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
              <p>
                <label for="Bio" class="bg-white text-gray-600 px-1"
                  >Bio *</label
                >
              </p>
            </div>
            <p>
              <textarea
                v-model="bio"
                id="text"
                required
                autocomplete="false"
                tabindex="0"
                type="text"
                class="py-1 px-1 outline-none block h-full w-full"
              />
            </p>
          </div>
        </div>
        <div class="border-t mt-6 pt-3">
          <div class="w-28">
            <button
              type="submit"
              class="rounded text-gray-100 px-3 py-1 bg-blue-500 hover:shadow-inner hover:bg-blue-700 transition-all duration-300"
            >
              Update
            </button>
            <div v-if="isLoading" class="flex mt-1 text-center float-right">
              <Loading />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import Header from "../components/Header.vue";
import { useRoute, useRouter } from "vue-router";
import { getUser, updateUser } from "../main.js";
import { reactive, computed, onMounted, toRefs } from "vue";
import Loading from "../components/Loading.vue";

export default {
  name: "About",
  components: {
    Header,
    Loading,
  },
  setup() {
    const router = useRouter();
    // get id from url
    const route = useRoute();

    const state = reactive({
      fname: null,
      lname: null,
      Uname: null,
      phone: null,
      bio: null,
      isLoading: false,
      userId: computed(() => route.params.id),
    });

    onMounted(async () => {
      const user = await getUser(state.userId);
      state.fname = user.fname;
      state.lname = user.lname;
      state.Uname = user.Uname;
      state.phone = user.phone;
      state.bio = user.bio;
    });

    const updateInfo = async () => {
      await updateUser(state.userId, { ...state }, (state.isLoading = true));
      // redirect to home page
      router.push("/");
      // clear fields once method is done
      state.isLoading = false;
      state.fname = "";
      state.lname = "";
      state.Uname = "";
      state.phone = "";
      state.bio = "";
    };

    return { ...toRefs(state), updateInfo };
  },
};
</script>