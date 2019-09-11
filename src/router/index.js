import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/Login'
import mainListView from '@/components/mainListView'

Vue.use(Router)

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
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
