import { createRouter, createWebHistory } from 'vue-router'


import Home from '../views/Home.vue'

import firebase from "firebase/app";
import "firebase/database";

import "firebase/auth";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          alert(user.email)
          next()
        } else {
          alert("bbbb")
          next("/signin")
        }
      });
    }
  },
  {
    path: '/free-chat',
    name: 'FreeChat',
    component: () => import(/* webpackChunkName: "about" */ '../views/FreeChat.vue')
  },
  {
    path: '/channel',
    name: 'Channel',
    component: () => import(/* webpackChunkName: "about" */ '../views/Channel.vue')
  },
  {
    path: '/rest',
    name: 'RestRoom',
    component: () => import(/* webpackChunkName: "about" */ '../views/RestRoomPage.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistrationPage.vue')
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import(/* webpackChunkName: "about" */ '../views/SigninPage.vue')
  },
  {
    path: '/test',
    name: 'TestOne',
    component: () => import(/* webpackChunkName: "about" */ '../views/TestPage.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
