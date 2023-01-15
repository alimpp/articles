import { defineStore } from "pinia";
import axios from 'axios'
export const applicationUserProfile = defineStore("userprofile", {
  state: () => ({
    token: localStorage.getItem("token"),
    isAuthenticated: false,
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
        console.log("token done");
      } else {
        this.isAuthenticated = false;
        this.token = "";
        axios.defaults.headers.common["Authorization"] = "";
        console.log("error token");
      }
    },
    updateToken(token: string) {
      this.token = token;
    },
  },
});
