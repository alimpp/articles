<template>
  <div
    class="app"
    :class="{
      application_dark_mode_theme: watchTheme === 'dark',
      application_light_mode_theme: watchTheme === 'light',
    }"
  >
    <router-view></router-view>
  </div>
</template>

<script setup>
import { computed, watch, onMounted, ref } from "vue";
import { applicationTheme } from "@/stores/applicationTheme";
import { applicationUserProfile } from "@/stores/applicationUserProfile";

const theme = applicationTheme();
const userProfile = applicationUserProfile()

const watchTheme = computed(() => {
  return theme.themeStatus;
});

onMounted(() => {
   userProfile.refreshApplication()
})
</script>

<style></style>
