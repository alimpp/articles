import { defineStore } from "pinia";
export const applicationArticles = defineStore("articles", {
  state: () => ({ articles: [] }),
  getters: {
    articlesDataSource(state){
        return state.articles
    }
  },
  actions: {},
});
