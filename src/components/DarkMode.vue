<template>
  <div class="darkmode">
    <button
      @click="isDarkMode"
      class="float-right bg-grey-800 mt-10 mr-10 border-black border dark:bg-gray-800 dark:border-transparent p-2 rounded-full text-1xl font-semibold"
    >
      <span v-if="!dark_mode">🌑</span>
      <span v-else>☀</span>
    </button>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "Dark Mode",
  setup() {
    const state = reactive({
      dark_mode: false,
    });

    function isDarkMode() {
      const root = document.getElementsByTagName("html")[0];
      if (state.dark_mode == false) {
        root.setAttribute("class", "dark");
        state.dark_mode = true;
      } else if (state.dark_mode == true) {
        root.classList.remove("dark");
        state.dark_mode = false;
      }
    }

    return { ...toRefs(state), isDarkMode };
  },
};
</script>

<style>
</style>