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
  actions: {
    deleteArticle(id) {
      this.articles = this.articles.filter((article) => article.id != id);
    },
  },
});
