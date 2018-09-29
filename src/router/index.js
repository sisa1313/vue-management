import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)

const router = new vueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/home'], resolve),
      meta: { title: '整合页' },
      children: [
        {
          path: '/blank',
          name: 'blank',
          component: resolve => require(['@/components/blank'], resolve),
          meta: { title: '空白页' }
        },
        {
          path: '/waterfall',
          name: 'waterfall',
          component: resolve => require(['@/components/pages/waterfall'], resolve),
          meta: { title: '瀑布流' }
        },
        {
          path: '/draggable',
          name: 'draggable',
          component: resolve => require(['@/components/pages/draggable'], resolve),
          meta: { title: '拖拽' }
        },
        {
          path: '/map',
          name: 'map',
          component: resolve => require(['@/components/pages/map'], resolve),
          meta: { title: '地图' }
        },
        {
          path: '/echarts',
          name: 'echarts',
          component: resolve => require(['@/components/pages/echarts'], resolve),
          meta: { title: '图表' }
        },
        {
          path: '/basicTable',
          name: 'basicTable',
          component: resolve => require(['@/components/table/basic-table'], resolve),
          meta: { title: '基础表格' }
        },
        {
          path: '/basicForm',
          name: 'basicForm',
          component: resolve => require(['@/components/form/basic-form'], resolve),
          meta: { title: '基础表单' }
        },
        {
          path: '/upload',
          name: 'upload',
          component: resolve => require(['@/components/form/upload'], resolve),
          meta: { title: '上传' }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/components/pages/login'], resolve),
      meta: { title: '登录页' }
    }
  ]
})

export default router
