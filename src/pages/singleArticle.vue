<template>
  <div class="px-4 py-5 d-flex flex-column" style="height: 500px">
    <articleCard
      :title="dataSource.title"
      :body="dataSource.body"
      :id="dataSource.id"
    />
    <div class="d-flex">
      <baseButton
        class="mx-2"
        name="Delete Article"
        color="danger"
        icon="delete"
      />
      <baseButton name="Back" color="primary" icon="back" />
      <editArticle class="mt-1 mx-2" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { applicationArticlesApi } from "@/stores/api/applicationArticlesApi";
import { applicationArticles } from "@/stores/applicationArticles";
import editArticle from "@/components/modals/editArticle";
import { useRoute } from "vue-router";
import articleCard from "@/components/cards/articleCard";
import baseButton from "@/components/base/baseButton";

const articlesApiModule = applicationArticlesApi();
const articlesModule = applicationArticles();
const route = useRoute();

const dataSource = computed(() => {
  return articlesModule.articleDataSource;
});

onMounted(() => {
  const routeId = route.params.id;
  articlesApiModule.singleArticle(routeId);
});
</script>

<style></style>
