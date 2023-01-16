import { defineStore } from "pinia";
import {
  application_auth_base_url,
  application_path,
} from "@/services/applicationPath";
import axios from "axios";
import { toast_message } from "@/services/notifications";
import { applicationUserProfile } from "../applicationUserProfile";
import { updateLocalStorage } from "@/services/updateLocalstorage";

const userProfile = applicationUserProfile();

export const applicationAuthApi = defineStore("auth", {
  actions: {
    registerUser(data: any) {
      const res = axios
        .post(`${application_auth_base_url}${application_path.POST.REGISTER}`, {
          userId: 0,
          firstName: data.fristname,
          lastName: "string",
          username: data.username,
          password: data.password,
          gender: "string",
          userTypeId: 0,
        })
        .then((res) => {
          toast_message("Sign up successfully", "success", 2000);
          setTimeout(() => {
            location.reload();
          }, 2000);
        })
        .catch((err) => {
          toast_message(
            "Your conection is low please try again",
            "error",
            2000
          );
        });
    },
    async loginUser(data: any) {
      const res = await axios
        .post(`${application_auth_base_url}${application_path.POST.LOGIN}`, {
          userId: 0,
          firstName: "string",
          lastName: "string",
          username: data.username,
          password: data.password,
          gender: "string",
          userTypeId: 0,
        })
        .then((res) => {
          axios.defaults.headers.common["Content-type"] =
            "application/json; charset=UTF-8";
          const accessToken = res.data.token;
          userProfile.updateToken(accessToken);
          updateLocalStorage("token", userProfile.token);
          userProfile .updateUsername(data.username)
          updateLocalStorage("profile", userProfile.username);
          toast_message("Sign in successfully", "success", 2000);
          userProfile.isAuthenticated = true;
          setTimeout(() => {
            location.reload();
          }, 2000);
        })
        .catch((error) => {
          if (error.response.status == 401) {
            userProfile.isAuthenticated = false;
            toast_message(
              "User is not valid and your conection is low please try again",
              "error",
              2000
            );
          }
        });
    },
    logoutUser() {
      userProfile.isAuthenticated = false
      userProfile.token = ""
      axios.defaults.headers.common["Authorization"] = "";
      localStorage.removeItem("token");
      location.reload();
    },
  },
});
