// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import './assets/js/common.js'
import './assets/css/reset.scss'
// import './assets/css/common.scss' //这样导入, px无法转化为rem
import Mint from 'mint-ui'
import vueMoment from 'vue-moment'
import IScrollView from 'vue-iscroll-view'
// import IScroll from 'iscroll'
import IScroll from 'iscroll/build/iscroll-probe.js'
// import IScroll from 'iscroll/build/iscroll-infinite.js
// import IScroll from 'iscroll/build/iscroll-view.js
// import IScroll from 'iscroll/build/iscroll-zoom.js
// import IScroll from 'iscroll/build/iscroll-lite.js
import ES6Promise from 'es6-promise'
import Filters from './filter.js'
ES6Promise.polyfill()
Vue.use(Filters)
Vue.use(IScrollView, IScroll)
Vue.use(Mint)
Vue.use(vueMoment)
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (!to.matched.some(record => record.meta.notRequireAuth)) {
    const accessToken = window.localStorage.getItem('access_token')
    if (accessToken) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  }
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
