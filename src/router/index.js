import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/Login'
import mainListView from '@/components/mainListView'
import serviceAListView from '@/components/serviceAListView'
import serviceBListView from '@/components/serviceBListView'

import userInfo from '@/components/userInfo'
import welcomeView from '@/components/welcome'

Vue.use(Router)
Vue.component('userInfo', userInfo)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/mainListView',
      name: 'mainListView',
      component: mainListView
    },
    {
      path: '/serviceAListView',
      name: 'serviceAListView',
      component: serviceAListView
    },
    {
      path: '/serviceBListView',
      name: 'serviceBListView',
      component: serviceBListView
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/welcome',
      name: 'welcomeView',
      component: welcomeView
    }
  ]
})
