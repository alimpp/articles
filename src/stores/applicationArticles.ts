import { defineStore } from "pinia";
export const applicationArticles = defineStore("articles", {
  state: () => ({ articles: [], article: [] }),
  getters: {
    articlesDataSource(state) {
      return state.articles;
    },
    articleDataSource(state) {
      return state.article;
    },
  },
  actions: {},
});
