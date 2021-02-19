<template>
  <fulfilling-bouncing-circle-spinner
    :animation-duration="1000"
    :size="20"
    :color="'rgb(59 130 246)'"
  />
</template>

<script>
import { FulfillingBouncingCircleSpinner } from "epic-spinners";
export default {
  name: "Loading",
  components: {
    FulfillingBouncingCircleSpinner,
  },
};
</script>

<style>
</style>