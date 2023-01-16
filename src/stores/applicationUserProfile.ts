import { defineStore } from "pinia";
import axios from "axios";
import { updateLocalStorage } from "@/services/updateLocalstorage";
import { toast_message } from "@/services/notifications";

export const applicationUserProfile = defineStore("userprofile", {
  state: () => ({
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    username: localStorage.getItem("profile"),
    bio: localStorage.getItem("bio"),
  }),
  getters: {
    tokenInformation(state) {
      return state.token;
    },
  },
  actions: {
    refreshApplication() {
      let token = localStorage.getItem("token");
      if (token) {
        this.isAuthenticated = true;
        this.token = token;
        axios.defaults.headers.common["Authorization"] = "Token " + token;
      } else {
        this.isAuthenticated = false;
        this.token = "";
        axios.defaults.headers.common["Authorization"] = "";
      }
    },
    updateToken(token: string) {
      this.token = token;
    },
    updateUsername(username: string) {
      this.username = username;
    },
    updateBio(bio: string) {
      console.log(bio);
      updateLocalStorage("bio", bio);
      toast_message("Your bio is updated", "success", 2000);
      setTimeout(() => {
        location.reload()
      } , 2000)
    },
  },
});
