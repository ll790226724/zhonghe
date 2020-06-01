import Vue from 'vue'
import Router from 'vue-router'
import * as pages from './views/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      name: 'resources',
      path: '/resources',
      component: pages.resources,
    },
    {
      name: 'supply',
      path: '/supply',
      component: pages.supply,
    },
    {
      name: 'introduction',
      path: '/introduction',
      component: pages.introduction,
    }
  ],
})
