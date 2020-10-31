<template>
  <div>
  </div>
  <scrollBar v-if="String(messages) !== String(empty)" scrollTarget="scroll-target">
    <div id="message-box">
      <ul id="message-list">
        <li id="message-line" v-for="(message,index) in messages" :key="index">
            {{message.user.name}} {{message.content}}
            <span @click="deleteMessage(index,message.user.name)">X</span>
        </li>
        <div id="scroll-target"></div>
      </ul>
    </div>
  </scrollBar>
  <slot :messages="messages"></slot>
  <restRoom :restUsers="restUsers" :message="new_message" :messager="new_messanger"></restRoom>
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

import restRoom from '@/components/RestRoom.vue'
import scrollBar from '@/components/ScrollBar.vue'





// Initialize Firebase


export default {
  name: "messageBox",
  components:{
    restRoom,
    scrollBar
  },
  props:{
    currentChannel: String,
    databaseItem: String,
    restUsers: Array,
  },
  data() {
    return {
      empty: [],
      message: "",
      messages:[],
      name: "",
      names:[],
      channel: this.currentChannel,
      channels: [],
      new_message: "",
      new_messanger: "",
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
      firebase.database().ref(this.databaseItem+"/"+currentChannel+"/"+"messages").on("child_added", snapshot => {
        this.new_message = snapshot.val()
        this.new_messanger = this.new_message.user.name
      });
      firebase.database().ref(this.databaseItem+"/"+currentChannel+"/"+"messages").on("value", snapshot => (this.messages = snapshot.val()));
    }
  },
  mounted(){
      firebase.auth().onAuthStateChanged(user => {
        this.name = user.email
      })
    firebase.database().ref(this.databaseItem+"/"+this.currentChannel+"/"+"messages").on("child_added", snapshot => {
this.messages = (snapshot.val())
    })
    firebase.database().ref(this.databaseItem).on("value", snapshot => (this.channels = snapshot.val()))
  }
};
</script>
