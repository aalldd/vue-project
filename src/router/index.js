/*
 * @Author: wangshiyang
 * @Date: 2023-06-07 14:50:33
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-06-08 14:31:00
 * @Description: 请填写简介
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/click',
      name: 'click',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/eventsView.vue')
    },{
      path: '/direction',
      name: 'direction',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/direction.vue')
    },{
      path: '/style',
      name: 'style',
      component: () => import('../views/styleView.vue')
    },{
      path: '/request',
      name: 'request',
      component: () => import('../views/requestView.vue')
    },{
      path: '/computed',
      name: 'computed',
      component: () => import('../views/ComputedView.vue')
    },{
      path: '/components',
      name: 'components',
      component: () => import('../views/ComponentsFather.vue')
    },{
      path: '/watch',
      name: 'watch',
      component: () => import('../views/WatchView.vue')
    },{
      path: '/sync',
      name: 'sync',
      component: () => import('../views/SyncView.vue')
    }
  ]
})

export default router
