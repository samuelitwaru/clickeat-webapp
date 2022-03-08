import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Axios from 'axios'
import store from "./store/index"
import https from 'https';

Vue.config.productionTip = true

Vue.prototype.$host = 'http://192.168.42.49:5000'
Vue.prototype.$host = 'http://92.205.24.64'
Vue.prototype.$host = 'http://127.0.0.1:5000'
Vue.prototype.$apiUrl = `${Vue.prototype.$host}/api/v1`,
Vue.prototype.$staticUrl = `${Vue.prototype.$host}/static`,


Vue.prototype.$http = Axios
Vue.prototype.$http = Axios.create({
  httpAgent: new https.Agent({
    rejectUnauthorized: false
  })
})

console.log(Vue.prototype.$http)

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
