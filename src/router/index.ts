import { createRouter, createWebHashHistory } from "vue-router"

const routes = [{ path: "/", component: () => import("../pages/table.vue") }]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
