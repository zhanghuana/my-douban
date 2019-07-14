import Vue from 'vue'
import Router from 'vue-router'

import Index from '../pages/index.vue'
import Nav from '../pages/nav.vue'
import Movie from '../pages/movie.vue'
import Tv from '../pages/tv.vue'
import Book from '../pages/book.vue'
import Mxiangqing from '../pages/mxiangqing.vue'
import Reg from '../pages/reg.vue'
import Reg1 from '../pages/reg1.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/nav',
      name: 'Nav',
      component: Nav
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },

    {
      path: '/tv',
      name: 'Tv',
      component: Tv
    },
    {
      path: '/mxiangqing',
      name: 'Mxiangqing',
      component: Mxiangqing
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/reg1',
      name: 'Reg1',
      component: Reg1
    },
    {
      path: '/*',
      redirect:"/index"
    },
    
  ]
})
