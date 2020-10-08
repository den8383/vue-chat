<template>
  <div>
    <p>ログイン中</p>
    <div>
      <button class="py-1 px-4 bg-gray-800 text-white" @click=signOut>サインアウト</button>
    </div>
  </div>
</template>


<script>
import firebase from "firebase/app";
import "firebase/auth";


export default {

  name: "Home",
  components:{
  },
  methods: {
    signOut(){
      alert("signout");
      firebase.auth().signOut();
      this.$router.push("/signin");
    }

  },
  mounted(){

  }
};
</script>
