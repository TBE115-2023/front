
import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router'
//import VueRouter from 'vue-router'
/*
//const app = app =createApp(App)

//componentes de la aplicacion
const Home = { template: '<h1> home de sistema </h1>' }
const DB = { template: '<h1> base de datos del sistema </h1>'} 
const Control = { template: '<h1> sistema de control </h1>' }
const Registro = { template: '<h1> sistema de registro </h1>' }
const Alarmas = { template: '<h1> programacion de alarmas </h1>' }

//rutas de cada app, configuracion
const routes = [  
    {path: '/', component: Home},
    {path: '/database', component: DB},
    {path: '/Control', component: Control},
    {path: '/Registro', component: Registro},
    {path: '/Alarmas', component: Alarmas}
]
// crear objeto rutas de vue router

const router = VueRouter.createRouter({ 
  history: VueRouter.createWebHashHistory(),
   routes,
})

 const app = Vue.createApp({})

 app.use(router)

 app.mount('#app')


// se elimino de aqui para abajo para poder activar routes

*/

Vue.config.productionTip = false
/*
new Vue({
 vuetify,
 store,
 router,
 render: h => h(App)
}).$mount('#app')*/


new Vue({
  router,
  store,
  vuetify,
  beforeCreate() {
      const token = localStorage.getItem("token");
      if (token) store.commit("setToken",token);
  },
  render: (h) => h(App),
}).$mount("#app");
