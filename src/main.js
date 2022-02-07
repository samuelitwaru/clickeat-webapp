import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Axios from 'axios'
import store from "./store/index"
Vue.config.productionTip = false
Vue.prototype.$host = 'http://192.168.42.49:5000/api/v1'
Vue.prototype.$host = 'http://127.0.0.1:5000/api/v1',

Vue.prototype.$http = Axios

const token = localStorage.getItem('token')

if(token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}


new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
