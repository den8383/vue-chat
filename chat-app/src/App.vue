<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/free-chat">Free Chat</router-link> |
      <router-link to="/register">Register</router-link>|
      <router-link to="/signin">Sign in</router-link>|
      <router-link to="/channel">channel-chat</router-link>|
      <router-link to="/test">test</router-link>|
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
}

#nav a {
  font-weight: bold;
  color: black;
}

#nav a.router-link-exact-active {
  color: limegreen;
}
</style>

<script>


import firebase from "firebase/app";
import firebaseConfig from "@/assets/firebaseConfig.json"
firebase.initializeApp(firebaseConfig[0]);

export default {
  name: "App",
  components:{
  }
};






</script>
