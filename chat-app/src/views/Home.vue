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

  <p>channel</p>
  <div class="my-3">
    <input
      type="text"
      class="w-full rounded border-gray-900 border-solid border p-3"
      v-model="channel"
    />
  </div>
  <div class="flex justify-end">
    <button
      class="px-8 py-2 rounded bg-green-900 font-bold text-white"
      @click="addChannel"
    >create</button>
  </div>

  <div>
    {{channels}}
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
    this.user = firebase.auth().currentUser;
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
