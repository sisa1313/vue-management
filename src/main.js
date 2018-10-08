// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from '@/router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import Vuex from 'vuex'
import utils from '@/assets/js/utils' // 全局函数
import store from '@/vuex/index' // 状态库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
import VueAMap from 'vue-amap'
import '@/style/lib/animate.css' // 动画样式
import App from '@/App'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
// Vue.use(Vuex)
Vue.use(utils)
Vue.use(ElementUI)
Vue.use(VueAMap)

VueAMap.initAMapApiLoader({
  key: '8221cd55866583cce7bebdce503ecdd3',
  plugin: ['AMap.Geolocation'],
  // plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType',
  // 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})

/* 路由拦截 */
const whiteList = ['login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start() // 开始Progress
  if (whiteList.indexOf(to.name) !== -1) {
    next()
  } else {
    if (store.getters.loginState) {
      next()
      NProgress.done() // 结束Progress
    } else {
      next({ name: 'login' })
      NProgress.done() // 结束Progress
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
