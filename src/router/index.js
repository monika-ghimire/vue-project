import Vue from 'vue'
import VueRouter from 'vue-router'

 
import  JoinUsPage from '../pages/join-us.vue';
import StepForm from '../pages/stepForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component:JoinUsPage
  },
  {
    path: '/stepForm',
    name: 'step Form',
    component:StepForm
  },

 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
