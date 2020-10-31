<template>
  <h1>Users</h1>
  <div v-for="user in users" :key="user.user_id">
    <span>{{user.email}}</span>
    <span :class="isOnline(user,connections) ? 'online-icon' : 'offline-icon'"></span>
  </div>
<!--  <h2>OnlineUser</h2>
  <div v-for="user in connections" :key="user.user_id">
    {{user.user_id}}
  </div>
  !-->
</template>

<style>
.online-icon{
  border-radius: 50%;
  background:lightgreen;
  display: inline-block;
  height:0.5em;
  margin:auto 1em;
  width:0.5em;
}
.offline-icon{
  border-radius: 50%;
  background:gray;
  display: inline-block;
  height:0.5em;
  margin:auto 1em;
  width:0.5em;
}

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
      onlineUsers:[],
      ref: [],
      connectionRef: firebase.database().ref("connections"),
      connection_key: "",
      connections: []
    };
  },
  methods: {
    isOnline(user, connections){
      
      if (connections.find(item => item.user_id === user.user_id) != undefined){
        this.onlineUsers.push(user.email)
        return true;
      }
      else{
        return false;
      }
    },
    getOnlineUsers(){
      return this.onlineUsers.filter((x,i,self) => self.indexOf(x) === i);
    }
  },
  mounted(){
    firebase.auth().onAuthStateChanged(user => {
      this.user = user;
    })
    firebase.database().ref("users").on("child_added", snapshot => {
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
