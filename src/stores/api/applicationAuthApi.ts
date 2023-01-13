import { defineStore } from "pinia";
import {
  application_base_url,
  application_path,
} from "@/services/applicationPath";
import axios from "axios";

export const applicationAuthApi = defineStore("auth", {
  actions: {
    registerUser(data: any) {
      const res = axios
        .post(`${application_base_url}${application_path.POST.REGISTER}`, {
          username: data.username,
          email: data.email,
          password: data.password,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
