export const application_base_url: string = "https://jsonplaceholder.typicode.com";
export const application_auth_base_url: string = "https://bookcart.azurewebsites.net";

export const application_path = {
  GET: {
    ARTICLES: "/posts",
    SINGLE_ARTICLES: "/posts",
  },
  POST: {
    LOGIN: "/api/Login",
    REGISTER: "/api/User",
    CREATE_ARTICLE: '/posts'
  },
  PUT: {
    EDIT_ARTICLE: '/posts'
  },
  DELETE: {
    DELETE_ARTICLES: "/posts",
  },
};
