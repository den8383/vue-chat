import { createRouter, createWebHistory } from 'vue-router'


import firebase from "firebase/app";
import "firebase/auth";



const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/NewHome.vue'),
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          next()
        } else {
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
    component: () => import(/* webpackChunkName: "about" */ '../views/ChannelPage.vue'),
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          next()
        } else {
          next("/signin")
        }
      });
    }
  },
  {
    path: '/rest',
    name: 'RestRoom',
    component: () => import(/* webpackChunkName: "about" */ '../views/RestRoomPage.vue'),
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          next()
        } else {
          next("/signin")
        }
      });
    }
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
    component: () => import(/* webpackChunkName: "about" */ '../views/SigninPage.vue'),
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          next("/")
        } else {
          next()
        }
      });
    }
  },
  {
    path: '/signout',
    name: 'Signout',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignoutPage.vue'),
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          next()
        } else {
          next("/signin")
        }
      });
    }
  },
  {
    path: '/online',
    name: 'online',
    component: () => import(/* webpackChunkName: "about" */ '../views/OnlineUsersPage.vue'),
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          next()
        } else {
          next("/signin")
        }
      });
    }
  },
  {
    path: '/workspace',
    name: 'workspace',
    component: () => import(/* webpackChunkName: "about" */ '../views/WorkSpacePage.vue')
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
