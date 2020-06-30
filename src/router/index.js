import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import About from '../views/About.vue'
import Table from '@/components/Table.vue'
import Calendar from '@/components/Calendar.vue'
import Tools from '@/components/Tools.vue'
import Cool from '@/components/Cool.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {    
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path:'/table',
    name:'Table',
    component: Table
  },
  {
    path:'/calendar',
    name:'Calendar',
    component: Calendar
  },
  {
    path:'/tools',
    name:'Tools',
    component: Tools
  },
  {
    path:'/cool',
    name:'Cool',
    component: Cool
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
