import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Axios from 'axios'
import store from "./store/index"
import https from 'https';
// import './

Vue.config.productionTip = true

Vue.prototype.$host = 'http://192.168.42.49:5000'
Vue.prototype.$host = 'http://92.205.24.64' 
Vue.prototype.$host = 'http://127.0.0.1:5000'
Vue.prototype.$host = 'https://clickeat.tujariug.com/'
Vue.prototype.$apiUrl = `${Vue.prototype.$host}/api/v1`,
Vue.prototype.$staticUrl = `${Vue.prototype.$host}/static`,


// Vue.prototype.$http = Axios
Vue.prototype.$http = Axios.create({
  httpAgent: new https.Agent({
    rejectUnauthorized: false
  })
})

Vue.prototype.$alert = (title, msg, actionText, actionUrl) => {
  store.state.msg = msg
  store.state.title = title
  store.state.action = {
    text: actionText,
    url: actionUrl,
  }
  store.state.showMsgDialog = true
}


// Vue.prototype.$height = () => {
//   switch (this.$vuetify.breakpoint.name) {
//     case 'xs': return 220
//     case 'sm': return 400
//     case 'md': return 500
//     case 'lg': return 600
//     case 'xl': return 800
//   } 
// }


const token = localStorage.getItem('token')

if(token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.filter('commas', x=>x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
Vue.filter('currency', x=>x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' UGX')


new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
