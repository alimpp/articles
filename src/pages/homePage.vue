<template>
  <div class="home-page">
    <applicationHeader />
    <baseLoading v-if="loading" />
    <div class="row px-3 app_animation" v-else>
      <div class="col-lg-4" v-for="data in dataSource" :key="data.id">
          <articleCard :title="data.title" :body="data.body" :id="data.id" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { applicationArticlesApi } from "@/stores/api/applicationArticlesApi";
import { applicationArticles } from "@/stores/applicationArticles";
import articleCard from "@/components/cards/articleCard";
import applicationHeader from "@/components/applicationHeader";
import baseLoading from "@/components/base/baseLoading";

const articlesApiModule = applicationArticlesApi();
const articlesModule = applicationArticles();
const loading = ref(false);

const dataSource = computed(() => {
  return articlesModule.articlesDataSource;
});

onMounted(async () => {
  loading.value = true;
  await articlesApiModule.articles();
  loading.value = false;
});
</script>

<style lang="scss" scoped>
.home-page {
  height: 90vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
