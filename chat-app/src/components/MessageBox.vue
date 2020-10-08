<template>
  <div id="message-box">
    <ul id="message-list">
      {{mounted()}}
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
      names:[]
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
    mounted(){
      firebase.database().ref("open_chat_history").on("value", snapshot => (this.messages = snapshot.val()));
    },
    deleteMessage(index) {
      firebase.database().ref("open_chat_history").child(index).remove();
    },
  }
};
</script>
