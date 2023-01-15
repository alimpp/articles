<template>
  <div class="home-page px-3">
    <div class="row">
      <div class="col-lg-4" v-for="data in dataSource" :key="data.id">
        <router-link class="app_link" :to="`/article/${data.id}`">
          <articleCard :title="data.title" :body="data.body" :id="data.id" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { applicationArticlesApi } from "@/stores/api/applicationArticlesApi";
import { applicationArticles } from "@/stores/applicationArticles";
import articleCard from "@/components/cards/articleCard";

const articlesApiModule = applicationArticlesApi();
const articlesModule = applicationArticles();

const dataSource = computed(() => {
  return articlesModule.articlesDataSource;
});

onMounted(() => {
  return articlesApiModule.articles();
});
</script>

<style lang="scss" scoped>
// .home-page{
//   height: 90vh;
//   overflow-y: scroll;
//   overflow-x: hidden;
// }
</style>
