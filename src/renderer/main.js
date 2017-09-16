import Vue from 'vue'
import VueMaterial from 'vue-material'
import App from './App'
import store from './store'

Vue.use(VueMaterial)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  store,
  template: '<App/>'
}).$mount('#app')
