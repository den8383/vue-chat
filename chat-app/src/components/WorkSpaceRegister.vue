<template>
  <h2>Regist</h2>
  <form @submit.prevent="registerUser(user)">
    {{workspace.channel_name}}
    <button type="submit">Regist</button>
  </form>
</template>

<script>
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";




export default {
  name: "register",
  props: {
    workspace:Object,
    user: Object
  },
  data() {
    return {
      errors: []
    };
  },
  methods: {
    registerUser(user){
      firebase.database().ref("workspace/" + this.workspace.id + "/users").child(user.uid).set({
        user_id:user.uid,
        email: user.email
      }).then(() => {
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
