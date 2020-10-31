<template>
  <div>
    <h2>your name</h2>
    <p> {{user}}</p>
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
  data(){
    return {
      user: "",
      users: [],
      channel_name: '',
      channelModel: false,
      channel: "",
      channels:[]
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
    },
    addChannel(){
      const newChannel = firebase.database().ref("channel").push();
      const key_id = newChannel.key;
      newChannel.set({
        channel_name: this.channel,
        id: key_id
      }).then(() => {
        this.channelModel = false;
      });
      this.channel = ''
    }

  },
  mounted(){
    firebase.auth().onAuthStateChanged(user => {
      this.user = user.email
    })
    firebase.database().ref("users").on("child_added", snapshot => {
      this.users.push(snapshot.val());
    });
    firebase.database().ref("channel").on("child_added", snapshot => {
      this.channels.push(snapshot.val());
    })
  },
  beforeUnmount(){
    firebase.database().ref("users").off()
  }
};
</script>
