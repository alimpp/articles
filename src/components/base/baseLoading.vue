<template>
  <div class="base-loading-container">
    <div
      class="spinner-border"
      :class="watchTheme === 'dark' ? 'text-light' : 'text-dark'"
      role="status"
    ></div>
    <span class="px-2">Please loading ... </span>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { applicationTheme } from "@/stores/applicationTheme";
const theme = applicationTheme();
const watchTheme = computed(() => {
  return theme.themeStatus;
});
</script>

<style lang="scss" scoped>
.base-loading-container {
  width: 100;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    font-weight: 600;
    animation: 1s loading infinite;
    padding: 10px 0;
  }
}
@keyframes loading {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
}
</style>
