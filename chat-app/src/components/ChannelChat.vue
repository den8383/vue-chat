<template>
  <div>
    {{databaseItem}}
  </div>
  <div id="message-box">
    <ul id="message-list">
      <li id="message-line" v-for="(message,index) in messages" :key="index">
          {{message.user.name}} {{message.content}}
          <span @click="deleteMessage(index,message.user.name)">X</span>
      </li>
    </ul>
  </div>
  <slot :messages="messages"></slot>
  <div id="send-box" v-if="String(currentChannel) !== String(empty)">
    <input v-model="message" />
    <button @click="addMessage">メッセージを追加</button>
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
    databaseItem: String
  },
  data() {
    return {
      empty: [],
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
      firebase.database().ref(this.databaseItem+"/"+this.currentChannel+"/"+"messages")
        .push({
          content: this.message,
          user: {
          name: this.name
        }
      });
    },
    deleteMessage(index, name) {
      if(this.name === name){
        firebase.database().ref(this.databaseItem+"/"+this.currentChannel+"/"+"messages").child(index).remove();
      }
    },
    changeChannel(currentChannel){
      firebase.database().ref(this.databaseItem+"/"+currentChannel+"/"+"messages").on("value", snapshot => (this.messages = snapshot.val()));
    }
  },
  mounted(){
      firebase.auth().onAuthStateChanged(user => {
        this.name = user.email
      })
    firebase.database().ref(this.databaseItem+"/"+this.currentChannel+"/"+"messages").on("value", snapshot => (this.messages = snapshot.val()));
    firebase.database().ref(this.databaseItem).on("value", snapshot => (this.channels = snapshot.val()))
  }
};
</script>
