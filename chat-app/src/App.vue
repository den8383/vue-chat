<template>
  <button @click="setCurrentUsers">user</button>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="register">Regist</router-link> |
      <router-link to="signin">Sign In</router-link> |
      <router-link to="signout">Sign Out</router-link> |
      <router-link to="workspace">Haunt</router-link> |
    </div>
    <div id="nav">
      <router-link to="online">online</router-link> |
      <router-link to="channel">channel</router-link> |
      <router-link to="rest">rest room</router-link> |
    </div>
    <router-view :workspace="workspace" :workspaces="workspaces" @added-workspace="addWorkspace" :user="user" :users="users" :connections="workspaceConnections" @selected-workspace="setWorkspace" ></router-view>
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
      workspace: "",
      workspaces: [],
      user: "",
      users: [],
      connections: [],
      workspaceConnections: [],
      connectionRef: firebase.database().ref("connections"),
      connection_key: "",
      channel: "",
      channels: [],
      restRoom: "",
      restRooms: []
    }
  },
  methods:{
    setCurrentUser(){
      firebase.auth().onAuthStateChanged(user => {
        this.user = user
      });
    },
    setCurrentUsers(){
      this.users = []
      firebase.database().ref("workspace/" + this.workspace.id + "/users").on("child_added", snapshot => {
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
    setConnectionsInWorkspace(){
      if(this.isRegistedUserInWorkspace(this.user)){
        this.workspaceConnections = this.connections
      }
      else{
        this.workspaceConnections = []
      }
    }
    ,
    setDisConnections(){
      firebase.database().ref(".info/connected").off();
    },
    setWorkspace(selectedWorkspace){
      this.workspace = selectedWorkspace
      this.setCurrentUsers()
      this.setConnectionsInWorkspace()
    },
    addWorkspace(newWorkspaceName){
      const newWorkspace = firebase.database().ref("workspace").push();
      const key_id = newWorkspace.key;
      newWorkspace.set({
        channel_name: newWorkspaceName,
        id: key_id
      })
    },
    setWorkspaces(){
      firebase.database().ref("workspace").on("value", snapshot => {
        this.workspaces = snapshot.val()
      })
    },
    isRegistedUserInWorkspace(user){
      for (var registUser in this.workspace.users){
        console.log(this.workspace.users[registUser].email)
        if(this.workspace.users[registUser].email === user.email){
          return true
        }
      }
      return false
    },
  },
  mounted(){
    this.setCurrentUser()
    this.setCurrentUsers()
    this.setWorkspaces()
    this.setConnections()
  },
  beforeUnmount(){
    this.setDisConnections()
  }
};


</script>
