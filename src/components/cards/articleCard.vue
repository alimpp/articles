<template>
  <baseCard>
    <template #cardContent>
      <div class="d-flex flex-column">
        <div class="d-flex pt-3 px-2 w-100">
          <div class="d-flex justify-content-start w-50">
            <img src="@/assets/icons/profile.jpeg" alt="image profile" />
            <div class="d-flex flex-column px-2">
              <span class="size_small">{{ username }}</span>
              <p class="gray_color size_very_small">2021/11/24</p>
            </div>
          </div>
          <div class="d-flex justify-content-end w-50 px-3">
            <i
              v-if="checkAuth"
              @click="deleteArticle(id)"
              class="bi bi-trash size_medium app_pointer pt-1"
            ></i>
          </div>
        </div>
        <router-link class="app_link" :to="`/article/${id}`">
          <div class="d-flex flex-column px-4">
            <p class="size_small primary_color">{{ title }}</p>
            <p class="size_very_small gray_color">{{ body }}</p>
          </div>
        </router-link>
      </div>
    </template>
  </baseCard>
</template>

<script setup>
import { computed } from "vue";
import baseCard from "@/components/base/baseCard";
import { applicationUserProfile } from "@/stores/applicationUserProfile";
import { applicationArticlesApi } from "@/stores/api/applicationArticlesApi";

const userProfile = applicationUserProfile();
const articlesApiModule = applicationArticlesApi();

const username = computed(() => {
  const username = userProfile.username;
  return JSON.parse(username);
});

const deleteArticle = (id) => {
  articlesApiModule.deleteArticle(id);
};

const checkAuth = computed(() => {
  return userProfile.isAuthenticated;
});

const props = defineProps({
  id: {
    type: Number,
    default: "",
    required: true,
  },
  title: {
    type: String,
    default: "",
    required: true,
  },
  body: {
    type: String,
    default: "",
    required: true,
  },
});
</script>

<style lang="scss" scoped>
img {
  width: 35px;
  height: 35px;
}
</style>
