<template>
  <h1>User Info</h1>
  <div>
  </div>
</template>

<style>

</style>



<script>
import firebase from "firebase/app";
import "firebase/database";






// Initialize Firebase


export default {
  name: "messageBox",
  props:{
  },
  data() {
    return {
    };
  },
  methods: {
    addMessage() {
      firebase.database().ref("channel/"+this.channel+"/"+"messages")
        .push({
          content: this.message,
          user: {
          name: this.name
        }
      });
    },
    deleteMessage(index) {
      firebase.database().ref("channel/"+this.channel+"/"+"messages").child(index).remove();
    },
  },
  mounted(){
      firebase.auth().onAuthStateChanged(user => {
        this.name = user.email
      })
    firebase.database().ref("channel/"+this.channel+"/"+"messages").on("value", snapshot => (this.messages = snapshot.val()));
    firebase.database().ref("channel").on("value", snapshot => (this.channels = snapshot.val()))
  }
};
</script>
