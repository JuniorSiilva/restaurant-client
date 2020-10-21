import Vue from 'vue'
import VueRouter, { NavigationGuard, NavigationGuardNext, Route, RouteConfig } from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

/* 
  TODO: Analisar se o uso do vuex esta correto
*/

const preventAuthenticatedAccess: NavigationGuard = (to: Route, from: Route, next: NavigationGuardNext) => {
  if (store.getters['auth/isSigned']) {
    next({ name: 'home' })
  } else {
    next()
  }
}

const preventUnauthenticatedAccess: NavigationGuard = (to: Route, from: Route, next: NavigationGuardNext) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters['auth/isSigned']) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    next()
  }
}

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'Página inicial',
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/SignIn.vue'),
    beforeEnter: preventAuthenticatedAccess,
    meta: {
      title: 'Autenticação',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach(preventUnauthenticatedAccess)

export default router
