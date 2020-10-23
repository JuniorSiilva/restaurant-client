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
    component: () => import('../components/layouts/PrivateLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/Home.vue'),
        meta: {
          title: 'Página inicial',
        },
      },
      {
        path: '/dishes',
        name: 'dishes',
        component: () => import('../views/Dishes.vue'),
        meta: {
          title: 'Pratos',
        },
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/security',
    component: () => import('../components/layouts/PublicLayout.vue'),
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/SignIn.vue'),
        beforeEnter: preventAuthenticatedAccess,
        meta: {
          title: 'Autenticação',
        },
      },
    ],
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    name: 'error.notfound',
    component: () => import('../views/errors/404.vue'),
    meta: {
      title: 'Página não encontrada',
    },
  })
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach(preventUnauthenticatedAccess)

export default router
