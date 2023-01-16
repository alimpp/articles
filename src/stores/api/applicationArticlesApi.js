import axios from "axios";
import { defineStore } from "pinia";
import {
  application_base_url,
  application_path,
} from "@/services/applicationPath";
import { applicationArticles } from "../applicationArticles";
import { toast_message } from "@/services/notifications";
import { useRouter } from "vue-router";

const articlesModule = applicationArticles();
const router = useRouter()

export const applicationArticlesApi = defineStore("articlesapi", {
  actions: {
    async articles() {
      const res = await axios
        .get(`${application_base_url}${application_path.GET.ARTICLES}`)
        .then((res) => {
          articlesModule.articles = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async singleArticle(id) {
      const res = await axios.get(
        `${application_base_url}${application_path.GET.SINGLE_ARTICLES}/${id}`
      )
      .then((res) => {
        articlesModule.article = res.data;
      })
    },
    async deleteArticle(id){
      await axios.delete(`${application_base_url}${application_path.DELETE.DELETE_ARTICLES}/${id}`)
      articlesModule.deleteArticle(id)
      toast_message('Article deleted' , 'success' , 2000)
    }
  },
});
