<template>
  <h1>regist</h1>
  <div>
    <input type="email" v-model="email" placeholder="your@email.com" />
  </div>
  <div>
    <input type="password" v-model="password" placeholder="password" />
  </div>
  <button @click="registerUser">Regist</button>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

import firebaseConfig from "@/assets/firebaseConfig.json"


firebase.initializeApp(firebaseConfig[0]);

export default {
  name: "register",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    registerUser(){
      alert(this.email+" "+this.password)
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(response => {
        console.log(response);
      }).catch(e =>{
        console.log(e);
      });
    }
  }
};
</script>
