import { createRouter, createWebHashHistory } from 'vue-router'
import routerList from '@constants/router-list'

const router = createRouter({
  history: createWebHashHistory(),
  routes: routerList
})

export default router
