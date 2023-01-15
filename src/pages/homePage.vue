<template>
  <div class="home-page">
    {{dataSource}}
  </div>
</template>

<script setup>
import { onMounted , computed } from "vue";
import { applicationArticlesApi } from "@/stores/api/applicationArticlesApi";
import {applicationArticles} from '@/stores/applicationArticles'

const articlesApiModule = applicationArticlesApi();
const articlesModule = applicationArticles()

const dataSource = computed(() => {
  return articlesModule.articlesDataSource
})

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
