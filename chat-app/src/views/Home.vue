<template>
  <div>
    <p>ログイン中</p>
    <div>
      <button class="py-1 px-4 bg-gray-800 text-white" @click=signOut>サインアウト</button>
    </div>
    <p>you {{user.email}}</p>
    <p>----------</p>
    <p>{{users}}</p>
    <button @click="directMessage(user.email)">{{user.email}}</button>
    <p>{{channel_name}}</p>
  </div>
</template>


<script>
import firebase from "firebase/app";
import "firebase/auth";


export default {

  name: "Home",
  data(){
    return {
      user: "",
      users: [],
      channel_name: '',
    }
  },
  components:{
  },
  methods: {
    signOut(){
      alert("signout");
      firebase.auth().signOut();
      this.$router.push("/signin");
    },
    directMessage(email){
      this.channel_name = email;
    }

  },
  mounted(){
    this.user = firebase.auth().currentUser;
    firebase.database().ref("users").on("child_added", snapshot => {
      this.users.push(snapshot.val());
    });
  },
  beforeUnmount(){
    firebase.database().ref("users").off()
  }
};
</script>
