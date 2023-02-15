import Vue from 'vue'
import VueRouter from 'vue-router'
 import RegisterAccount from '../pages/register-account.vue'
 
import  JoinUsPage from '../pages/join-us.vue';
import CompeletProfile from '../pages/complete-profile.vue'
import VeriFicaTionForm from '../pages/VeriFication-Form.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component:JoinUsPage
  },

  {
    path: '/registerAccount',
    name: 'registe rAccount',
    component: RegisterAccount
  },
  {
    path:'/compeletProfile',
    name:'CompeletProfile',
    component:CompeletProfile

  },
  {
    path:'/verification',
    name:'VeriFicaTionForm',
    component:VeriFicaTionForm

  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
