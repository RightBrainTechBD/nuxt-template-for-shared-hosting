import Vue from 'vue'
import Router from 'vue-router'
import { scrollBehavior } from '~/utils'

Vue.use(Router)

const Index = () => import('~/pages/Index').then(m => m.default || m)
const About = () => import('~/pages/About').then(m => m.default || m)

const routes = [
  /*
      This route will prevent our App from showing 404 ERROR
  */
  {
    path: '/index.html',
    redirect: '/'
  },
  {
    name: 'Index',
    path: '/',
    component: Index
  },
  {
    name: 'About',
    path: '/about',
    component: About
  }
]

export function createRouter () {
  return new Router({
    mode: 'history',
    routes,
    scrollBehavior
  })
}
