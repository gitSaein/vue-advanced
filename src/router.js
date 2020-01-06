import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/parent',
      component: ()=> import("./components/parent_slot.vue")
    },
    {
      path:'/child',
      component: () => import('./components/child_slot.vue')
    }
  ]
})
