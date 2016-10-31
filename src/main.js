import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'
import App from './App'
import routes from './routes'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VeeValidate)

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
