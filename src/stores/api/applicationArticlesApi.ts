import axios from "axios";
import { defineStore } from "pinia";
import {
  application_base_url,
  application_path,
} from "@/services/applicationPath";
import { applicationArticles } from "../applicationArticles";

const articlesModule = applicationArticles()

export const applicationArticlesApi = defineStore("articlesapi", {
  actions: {
    async articles() {
      const res = await axios
        .get(`${application_base_url}${application_path.GET.ARTICLES}`)
        .then((res) => {
            articlesModule.articles = res.data
        })
        .catch((err) => {
            console.log(err);
        })
    },
  },
});
