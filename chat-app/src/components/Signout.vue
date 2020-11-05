<template>
  <div>
    <button class="py-1 px-4 bg-gray-800 text-white" @click=signOut>サインアウト</button>
  </div>
</template>


<script>
import firebase from "firebase/app";
import "firebase/auth";


export default {

  name: "Signout",
  methods: {
    signOut(){
      alert("signout");
      firebase.auth().signOut();
      this.$router.push("/signin");
    },
  },
};
</script>
