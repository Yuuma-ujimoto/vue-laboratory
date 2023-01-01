import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      component:()=>import("../views/DragAndDrop.vue"),
      name:"dd"
    }
  ]
})

export default router
