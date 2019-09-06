import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueScrollTo from 'vue-scrollto'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(VueScrollTo)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
