import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve=>require(["@/components/Home"],resolve)
    },
    {
      path: '/About',
      name: 'About',
      component: resolve=>require(["@/components/About"], resolve)
    },
    {
      path: '/Service',
      name: 'Service',
      component: resolve=>require(["@/components/Service"], resolve)
    }
  ]
})
