<template>
  <h1>User Info</h1>
  <div v-for="user in users" :key="user.user_id">
    <span>{{user.email}}, {{user.status}}</span>
  </div>
  <h2>User</h2>
  <h2>Connection</h2>
  <div v-for="user in connections" :key="user.user_id">
    {{user}}
  </div>
  <h2>connections</h2>
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
    firebase.database().ref("users").on("value", snapshot => {
      this.users.push(snapshot.val())
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
        })
        firebase.database().ref("connections").on("child_removed", snapshot => {
          let remove_connection = snapshot.val();
          this.connections = this.connections.filter(
            connection => connection.user_id !== remove_connection.user_id
            )
        })
      }
    })
  },
  beforeUnmount(){
  }
};
</script>
