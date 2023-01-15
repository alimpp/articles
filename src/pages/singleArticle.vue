<template>
  <div class="px-5 py-5 d-flex flex-column" style="height: 500px">
    <span class="size_small">Title</span>
    <p class="size_very_small gray_color">{{ dataSource.title }}</p>
    <span class="size_small">Body</span>
    <p class="size_very_small gray_color">{{ dataSource.body }}</p>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { applicationArticlesApi } from "@/stores/api/applicationArticlesApi";
import { applicationArticles } from "@/stores/applicationArticles";
import { useRoute } from "vue-router";

const articlesApiModule = applicationArticlesApi();
const articlesModule = applicationArticles();
const router = useRoute();

const dataSource = computed(() => {
  return articlesModule.articleDataSource;
});

onMounted(() => {
  const routeId = router.params.id;
  articlesApiModule.singleArticle(routeId);
});
</script>

<style></style>
