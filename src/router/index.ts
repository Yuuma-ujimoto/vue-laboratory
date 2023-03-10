import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      component:()=>import("../views/DragAndDrop.vue"),
      name:"dd"
    },
    {
      path:"/lc",
      component:()=>import("../views/LifeCycleCheck.vue"),
      name:"lc"
    },{
    path:"/ft",
      component:()=>import("../views/FileTest.vue")
    },
    {
      path:"/form",
      component:()=>import("../views/FormTest.vue")
    }
  ]
})

export default router
