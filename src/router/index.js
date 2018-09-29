import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodbyeWorld from '../components/GoodbyeWorld'
import Lidate from '../components/VueTraining'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/bye',
      name: GoodbyeWorld,
      component: GoodbyeWorld

    },
    {
      path:'/vue',
      name:Lidate,
      component:Lidate
    }
  ]
})
