import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Navbar from '@/components/Navbar'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/',
      name: 'Navbar',
      component: Navbar
    }
  ]
})
