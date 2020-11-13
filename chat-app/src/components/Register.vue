<template>
  <h1>regist</h1>
  <form @submit.prevent="registerUser">
    <div>
      <input type="email" v-model="email" placeholder="your@email.com" />
    </div>
    <div>
      <input type="password" v-model="password" placeholder="password" />
    </div>
    <button type="submit">Regist</button>
  </form>
</template>

<script>
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";




export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    registerUser(){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(response => {
        const user = response.user;
        firebase.database().ref("users").child(user.uid).set({
          user_id:user.uid,
          email: user.email
        }).then(() => {
          this.$router.push("/");
        }).catch(e => {
          console.log(e);
        });
      }).catch(e =>{
        console.log(e);
        if (e.code == "auth/email-already-in-use"){
          this.errors.push("this is already registered")
        }
        else{
          this.errors.push("thre is proplem")
        }
      });
    }
  },
  mounted(){
  }
};
</script>
