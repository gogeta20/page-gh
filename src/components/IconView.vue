<!-- @format -->

<script setup lang="ts">
import { defineProps } from "vue";
defineProps({
  icon: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
});
</script>
<template>
  <a
    class="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
    :href="link"
    target="_blank"
  >
    <span class="iconify" :data-icon="icon"></span>
  </a>
</template>

<style scoped>
.carousel div {
  width: 66%;
  margin: 40px;
}

embed {
  max-height: 500px;
}
</style>
