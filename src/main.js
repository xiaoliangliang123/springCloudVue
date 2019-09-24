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

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      debugger
      switch (error.response.status) {
        case 401:
          router.replace({
            path: 'login',
            query: {redirect: router.currentRoute.fullPath}
          })
      }
    }
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
