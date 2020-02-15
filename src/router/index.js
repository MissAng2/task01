import Vue from 'vue'
import Router from 'vue-router'
import List from '@/views/List'
import Detail from '@/views/Detail'
import Suggestion from '@/views/Suggestion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List,
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/Suggestion',
      name: 'Suggestion',
      component: Suggestion
    }
  ]
})
