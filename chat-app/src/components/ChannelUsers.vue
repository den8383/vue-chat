<template>
  <h1>User Info</h1>
  <div v-for="user in users" :key="user.user_id">
    <span>{{user.email}}, {{user.status}}</span>
  </div>
</template>

<style>

</style>



<script>
import firebase from "firebase/app";
import "firebase/database";






// Initialize Firebase


export default {
  name: "channelUsers",
  props:{
  },
  data() {
    return {
      user: "",
      users: [],
      connectionRef: firebase.database().ref("connections"),
      connection_key: "",
      connections: []
    };
  },
  methods: {
  },
  mounted(){
    firebase.auth().onAuthStateChanged(user => {
      this.user = user;
    })
    firebase.database().ref("users").on("child_added", snapshot => {
      let user = snapshot.val();
      if (this.user.uid == user.user_id){
        user.status = "online";
      }
      else {
        user.status = "offline";
      }
      this.users.push(user);
    })
    firebase.database().ref(".info/connected").on("value", snapshot => {
      if (snapshot.val() === true){
        let ref = this.connectionRef.push();
        this.connection_key = ref.key;
        ref.onDisconnect().remove();
        ref.set({
          user_id: this.user.uid,
          key:this.connection_key
        })
      }
    })
  },
  beforeUnmount(){
  }
};
</script>
