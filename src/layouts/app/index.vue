<template>
  <div class="main-layout">
    <div
      class="application-nav px-3"
      :class="{
        nav_dark_mode_theme: watchTheme === 'dark',
        nav_light_mode_theme: watchTheme === 'light',
      }"
    >
      <div class="logo-container">
        <img src="@/assets/icons/app-logo.png" alt="app logo" />
      </div>
      <div class="item-container">
        <profileModal v-if="checkAuth" class="mt-2 mx-2" />
        <createArticleModal v-if="checkAuth" class="mt-2 mx-2 mobile-size" />
        <loginModal v-if="!checkAuth" class="mt-2 mx-3" />
        <registerModal v-if="!checkAuth" class="mx-3 mt-2" />
        <themeSwicther class="mt-1" />
      </div>
    </div>
    <applicationHeader />
    <router-view></router-view>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { applicationTheme } from "@/stores/applicationTheme";
import loginModal from "@/components/modals/loginModal";
import registerModal from "@/components/modals/registerModal";
import themeSwicther from "@/components/themeSwicther";
import profileModal from "@/components/modals/profileModal";
import applicationHeader from "@/components/applicationHeader";
import { applicationUserProfile } from "@/stores/applicationUserProfile";
import createArticleModal from "@/components/modals/createArticleModal";

const userProfile = applicationUserProfile();
const theme = applicationTheme();

const watchTheme = computed(() => {
  return theme.themeStatus;
});

const checkAuth = computed(() => {
  return userProfile.isAuthenticated;
});
</script>

<style lang="scss" scoped>
.main-layout {
  width: 100%;
  display: flex;
  flex-direction: column;
  .application-nav {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    .logo-container {
      width: 50%;
      img {
        width: 100px;
        height: 70px;
      }
    }
    .item-container {
      width: 50%;
      display: flex;
      justify-content: end;
    }
  }
}
.mobile-size{
  display: inline;
}
@media (max-width: 900px) {
  .mobile-size{
    display: none;
  }
}
</style>
