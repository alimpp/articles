<template>
  <div class="px-4 py-5" style="height: 500px">
    <baseLoading v-if="loading" />
    <div class="d-flex flex-column" v-else>
      <div class="d-flex">
        <img src="@/assets/icons/profile.jpeg" alt="image profile" />
        <div class="d-flex flex-column px-2">
          <span class="size_small">{{ username }}</span>
          <p class="gray_color size_very_small">2021/11/24</p>
        </div>
      </div>
      <div class="d-flex flex-column px-5">
        <span class="size_small primary_color">{{ dataSource.title }}</span>
        <p class="gray_color pt-2">{{ dataSource.body }}</p>
        <div class="d-flex">
          <baseButton @click="back" name="Back" color="primary" icon="back" />
          <editArticleModal v-if="checkAuth" class="mt-1 mx-2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { applicationArticlesApi } from "@/stores/api/applicationArticlesApi";
import { applicationArticles } from "@/stores/applicationArticles";
import { applicationUserProfile } from "@/stores/applicationUserProfile";
import { useRoute, useRouter } from "vue-router";
import editArticleModal from "@/components/modals/editArticleModal";
import articleCard from "@/components/cards/articleCard";
import baseButton from "@/components/base/baseButton";
import baseLoading from "@/components/base/baseLoading";

const articlesApiModule = applicationArticlesApi();
const articlesModule = applicationArticles();
const userProfile = applicationUserProfile();
const route = useRoute();
const router = useRouter();
const loading = ref(false);

const dataSource = computed(() => {
  return articlesModule.articleDataSource;
});

const username = computed(() => {
  const username = userProfile.username;
  return JSON.parse(username);
});

const back = () => {
  return router.push("/");
};

const checkAuth = computed(() => {
  return userProfile.isAuthenticated;
});

onMounted(async () => {
  loading.value = true;
  const routeId = route.params.id;
  await articlesApiModule.singleArticle(routeId);
  loading.value = false;
});
</script>

<style lang="scss" scoped>
img {
  width: 40px;
  height: 40px;
}
</style>
