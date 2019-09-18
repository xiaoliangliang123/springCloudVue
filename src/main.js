// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import router from './router'

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import QS from 'qs'
Vue.prototype.qs = QS;
Vue.prototype.$axios = axios;
Vue.use(VueAxios, axios)

Vue.config.productionTip = false


axios.interceptors.request.use(

  config => {

    let token =localStorage.getItem('token')
    if (token) {
      config.headers.common['token'] =localStorage.getItem('token');
    }
    return config
  },
  err => {
    return Promise.reject(err);
  }
)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
