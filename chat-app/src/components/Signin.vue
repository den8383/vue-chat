<template>
  <h1>Sign In</h1>
  <form @submit.prevent="signIn">
    <div>
      <input type="email" v-model="email" placeholder="your@email.com" />
    </div>
    <div>
      <input type="password" v-model="password" placeholder="password" />
    </div>
    <button type="submit">Sign In</button>
  </form>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";




export default {
  name: "signin",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signIn(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(response => {
        console.log(response);
        this.$router.push("/");
      }).catch(e => {
        console.log(e);
      });
    }
  },
  mounted(){
  }
};
</script>
