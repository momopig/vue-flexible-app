import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import login from '../view/login.vue'
import accountDetail from '../view/account_detail.vue'
import nav1List from '../view/nav_1_list.vue'
import nav2List from '../view/nav_2_list.vue'
import collectList from '../view/collect_list.vue'
import msgDetail from '../view/msg_detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
      meta: { notRequireAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: { notRequireAuth: true }
    },
    {
      path: '/account-detail',
      name: 'account-detail',
      component: accountDetail
    },
    {
      path: '/nav-1-list',
      name: 'nav-1-list',
      component: nav1List
    },
    {
      path: '/nav-2-list',
      name: 'nav-2-list',
      component: nav2List
    },
    {
      path: '/collect-list',
      name: 'collect-list',
      component: collectList
    },
    {
      path: '/msg-detail',
      name: 'msgDetail',
      component: msgDetail
    }
  ]
})
