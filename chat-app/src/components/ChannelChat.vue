<template>
  <div id="message-box">
    <ul id="message-list">
      <li id="message-line" v-for="(message,index) in messages" :key="index">
          {{message.user.name}} {{message.content}}
          <span @click="deleteMessage(index)">X</span>
      </li>
    </ul>
  </div>
  <div id="send-box">
    <input v-model="message" />
    <button @click="addMessage">メッセージを追加</button>
  </div>
  <div id="channel-box">
    <ul id="channel-list">
      <li id="channel-line" v-for="(channel_info,index) in channels" :key="index">
          {{channel_info.id}} 
      </li>
    </ul>
  </div>
</template>

<style>
#send-box{
  bottom: 0;
}

#message-box{
    display: flex;
    align-items: center;
    flex-direction: column;
}

#message-list{
    text-align: left;
}
#message-list span{
    text-align: right;
    color: red;
}

</style>



<script>
import firebase from "firebase/app";
import "firebase/database";






// Initialize Firebase


export default {
  name: "messageBox",
  props:{
    currentChannel: String,
  },
  data() {
    return {
      message: "",
      messages:[],
      name: "",
      names:[],
      channel: this.currentChannel,
      channels: []
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
