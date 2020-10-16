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
  <div>
    <input v-model="channel" />
  </div>
  <div id="channel-box">
    <ul id="channel-list">
      <li id="channel-line" v-for="(channel,index) in channels" :key="index">
          {{channel.channel_name}} 
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
  },
  data() {
    return {
      message: "",
      messages:[],
      name: "userNo." + Math.floor( Math.random() * 1000000 ),
      names:[],
      channel: "",
      channels: []
    };
  },
  methods: {
    addMessage() {
      firebase.database().ref("open_chat_history")
        .push({
          content: this.message,
          user: {
          name: this.name
        }
      });
    },
    deleteMessage(index) {
      firebase.database().ref("open_chat_history").child(index).remove();
    },
  },
  mounted(){
    firebase.database().ref("open_chat_history").on("value", snapshot => (this.messages = snapshot.val()));
    firebase.database().ref("channel").on("value", snapshot => (this.channels = snapshot.val()))
  }
};
</script>
