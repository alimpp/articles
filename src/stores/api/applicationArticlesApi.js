import axios from "axios";
import { defineStore } from "pinia";
import {
  application_base_url,
  application_path,
} from "@/services/applicationPath";
import { applicationArticles } from "../applicationArticles";
import { toast_message } from "@/services/notifications";
import { useRouter } from "vue-router";
import { randomString } from "../../utils/randomString";

const articlesModule = applicationArticles();
const router = useRouter();

export const applicationArticlesApi = defineStore("articlesapi", {
  actions: {
    async articles() {
      const res = await axios
        .get(`${application_base_url}${application_path.GET.ARTICLES}`)
        .then((res) => {
          articlesModule.articles = res.data;
        })
        .catch((err) => {
          toast_message(
            "Your conection is low please try again",
            "error",
            2000
          );
        });
    },
    async singleArticle(id) {
      const res = await axios
        .get(
          `${application_base_url}${application_path.GET.SINGLE_ARTICLES}/${id}`
        )
        .then((res) => {
          articlesModule.article = res.data;
        });
    },
    async createArticle(data) {
      const res = await axios
        .post(
          `${application_base_url}${application_path.POST.CREATE_ARTICLE}`,
          {
            id : randomString(),
            title: data.title,
            body: data.body,
          }
        )
        .then(res => {
          articlesModule.updateArticles(data)
          toast_message('Article created' , 'success' , '2000')
        });
    },
    async editArticle(data , id){
      const res = await axios.put(`${application_base_url}${application_path.PUT.EDIT_ARTICLE}/${id}`,{
        title : data.title , 
        body : data.body
      })
      .then((res) => {
        toast_message('Article updated' , 'success' , '2000')
      })
    },
    async deleteArticle(id) {
      await axios.delete(
        `${application_base_url}${application_path.DELETE.DELETE_ARTICLES}/${id}`
      );
      articlesModule.deleteArticle(id);
      toast_message("Article deleted", "success", 2000);
    },
  },
});
