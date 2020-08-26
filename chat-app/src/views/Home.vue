<template>
  <div>
    <h1>Firebase Test</h1>
    <input v-model="message" />
    <button @click="addMessage">メッセージを追加</button>
    <ul>
      {{mounted()}}
      <li v-for="(message,index) in messages" :key="index">
          index:{{index}} {{message.user}} {{message.content}} 
          <span @click="deleteMessage(index)">X</span>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/database";




var firebaseConfig = {
  apiKey: "AIzaSyA25O_qbC-XzDBRyR4s9W9t4CiEksfz9A0",
  authDomain: "vue-chat-e20e7.firebaseapp.com",
  databaseURL: "https://vue-chat-e20e7.firebaseio.com",
  projectId: "vue-chat-e20e7",
  storageBucket: "vue-chat-e20e7.appspot.com",
  messagingSenderId: "274472843631",
  appId: "1:274472843631:web:2fcb7f3c546e14259dd09a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);





export default {
  name: "Home",
  data() {
    return {
        message: "",
        messages:[],
        name:"",
        names:[]
    };
  },
  methods: {
    addMessage() {
        firebase.database().ref("open_chat_history")
        .push({
          content: this.message,
          user: {
            name: "userNo." + Math.floor( Math.random() * 1000000 )
          }
        });
    },
    mounted(){
          firebase.database().ref("open_chat_history").on("value", snapshot => (this.messages = snapshot.val()));
    },
    deleteMessage(index) {
      firebase
        .database()
        .ref("open_chat_history")
        .child(index)
        .remove();
    }
  }
};
</script>
