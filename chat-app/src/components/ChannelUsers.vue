<template>
  <h1>User Info</h1>
  <div v-for="user in users" :key="user.user_id">
    <span>{{user.email}}, {{user.status}}</span>
  </div>
  <h2>con</h2>
  <span>{{connections}}</span>
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
      ref: [],
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
    firebase.database().ref(".info/connected").on("value", snapshot => {
      if (snapshot.val() === true){
        this.ref = this.connectionRef.push();
        this.connection_key = this.ref.key;
        this.ref.onDisconnect().remove();
        this.ref.set({
          user_id: this.user.uid,
          key:this.connection_key
        })
        firebase.database().ref("connections").on("child_added", snapshot => {
          this.connections.push(snapshot.val())
          alert("aaaaa")
        })
      }
    })
  },
  beforeUnmount(){
  }
};
</script>
