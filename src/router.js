import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Sabores from './views/Sabores.vue'
import Sabor from './views/Sabor.vue'
import Pedido from './views/Pedido.vue'
import StatusPedido from './views/StatusPedido.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sabores',
      name: 'sabores',
      component: Sabores
    },
    {
      path: '/sabor/:id',
      name: 'sabor',
      component: Sabor
    },
    {
      path: '/pedido/:sabor',
      name: 'pedido',
      component: Pedido
    },
    {
      path: '/status-pedido/:id',
      name: 'status-pedido',
      component: StatusPedido
    }
  ],

  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
