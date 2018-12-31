import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueSocketIO from 'vue-socket.io'
Vue.config.productionTip = true

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000'
}))

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
