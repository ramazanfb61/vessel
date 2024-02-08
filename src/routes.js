import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/index.vue";

const routes = [
  { name: "AnaSayfa", path: "/", component: Home },
  
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
