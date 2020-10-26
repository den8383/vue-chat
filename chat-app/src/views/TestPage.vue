<template>
  <div class="about">
    <h1>Test Page</h1>
  </div>
  <p>users</p>
  <div v-for="user in users" :key="user.user_id">
    {{user.user_id}}
  </div>
  <p>con</p>
  <div>
    {{connections}}
  </div>
  <p>online</p>
  <div>
    {{onlineUser}}
  </div>
</template>

<script>

import firebase from "firebase/app";
import "firebase/database";






// Initialize Firebase


export default {
  name: "testPage",
  props:{
  },
  data() {
    return {
      users:[],
      connections: [],
      onlineUser: []
    };
  },
  methods: {
  },
  mounted(){
    firebase.database().ref("users").on("value", snapshot => {
      this.users = snapshot.val()
    })
    firebase.database().ref("connections").on("child_added", snapshot => {
      this.connections.push(snapshot.val())
    })
  },
  beforeUnmount(){
  }
};


</script>
