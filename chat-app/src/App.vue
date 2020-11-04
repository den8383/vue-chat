<template>
  {{user.email}}
  <h2>{{channel}}</h2>
  {{connections}}
  <div id="app">
    {{channels}}
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="register">Regist</router-link> |
      <router-link to="signin">Sign In</router-link> |
      <router-link to="signout">Sign Out</router-link> |
      <router-link to="online">online</router-link> |
      <router-link to="workspace">work space</router-link> |
      <router-link to="channel">channel</router-link> |
    </div>
    <router-view :user="user" :users="users" :connections="connections" :channels="channels" @selected-channel="setChannelAndMessages" @added-channel="addChannel" :messages="messages" @added-message="addMessage"></router-view>
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
import "firebase/auth";
import "firebase/database";
import firebaseConfig from "@/assets/firebaseConfig.json"
firebase.initializeApp(firebaseConfig[0]);

export default {
  name: "App",
  components:{
  },
  data(){
    return {
      user: "",
      users: [],
      connections: [],
      connectionRef: firebase.database().ref("connections"),
      connection_key: "",
      channel: "",
      channels: [],
      messages: [],
      sendMessage: "hello"
    }
  },
  methods:{
    setCurrentUser(){
      firebase.auth().onAuthStateChanged(user => {
        this.user = user
      });
    },
    setCurrentUsers(){
      firebase.database().ref("users").on("child_added", snapshot => {
        this.users.push(snapshot.val());
      });
    },
    setConnections(){
      firebase.database().ref(".info/connected").on("value", snapshot => {
        if (snapshot.val() === true){
          let ref = this.connectionRef.push();
          this.connection_key = ref.key;
          ref.onDisconnect().remove();
          ref.set({
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
    setDisConnections(){
      firebase.database().ref(".info/connected").off();
    },
    addChannel(newChannelName){
      const newChannel = firebase.database().ref("channel").push();
      const key_id = newChannel.key;
      newChannel.set({
        channel_name: newChannelName,
        id: key_id
      })
    },
    setChannels(){
      firebase.database().ref("channel").on("value", snapshot => (this.channels = snapshot.val()))
    },
    setChannel(selectedChannel){
      this.channel = selectedChannel
    },
    setMessages(){
      firebase.database().ref("channel/"+this.channel.id+"/"+"messages").on("child_added", snapshot => {
        this.messages.push(snapshot.val())
      })
    },
    setChannelAndMessages(selectedChannel){
      this.setChannel(selectedChannel);
      this.setMessages()
    },
    addMessage(message){
      alert(message)
      firebase.database().ref("channel/"+this.channel.id+"/"+"messages")
        .push({
          content: message,
          user: {
            name: this.user.email
        }
      });
    }
  },
  mounted(){
    this.setCurrentUser()
    this.setCurrentUsers()
    this.setConnections()
    this.setChannels()
  },
  beforeUnmount(){
    this.setDisConnections()
  }
};


</script>
