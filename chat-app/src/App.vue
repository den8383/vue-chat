<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/free-chat">Free Chat</router-link> |
      <router-link to="/register">Register</router-link>|
      <router-link to="/signin">Sign in</router-link>|
    </div>
    <scrollBar :initialPositonX="0" :initialPositonY="0" scrollTarget="send-box">
      <router-view/>
    </scrollBar>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>

import scrollBar from '@/components/ScrollBar.vue'

import firebase from "firebase/app";
import firebaseConfig from "@/assets/firebaseConfig.json"
firebase.initializeApp(firebaseConfig[0]);

export default {
  name: "App",
  components:{
    scrollBar,
  }
};






</script>
