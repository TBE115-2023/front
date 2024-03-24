import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/consultas',
    name: 'consultas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ConsultasView.vue')
  },

  {
    path: '/control',
    name: 'control',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdministracionView.vue')
  },

  {
    path: '/administracion',
    name: 'administracion',
    component: () => import(/* webpackChunkName: "about" */ '../views/ControlView.vue')
  },

  {
    path: '/configuracion',
    name: 'configuracion',
    component: () => import(/* webpackChunkName: "about" */ '../views/ConfiguracionView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
