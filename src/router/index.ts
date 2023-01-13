import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index layout",
    redirect: "/home",
    component: () => import("@/layouts/app/index.vue"),
    children: [
      {
        path: "/home",
        name: "home page",
        component: () => import("@/pages/homePage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
