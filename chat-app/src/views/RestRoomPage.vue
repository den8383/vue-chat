<template>
  <h2>{{restUsers}}</h2>
  <div v-for="(registUser,index) in channel.users" :key="index">{{registUser.user.name}}<button @click="canselInvitation(index)">cansel</button>
  </div>
  <h2>{{channel.channel_name}}</h2>
  <sendMessageBox @added-message="addMessage"></sendMessageBox>
  <messageBox :messages="messages" @delete-message="deleteMessage"></messageBox>
  <div>channel</div>
  <channelCreateButton @added-channel="addChannel"></channelCreateButton>
  <div>
    <ul>
      <li v-for="(channel, index) in channels" :key="index">
        <channelSelectButton @selected="selectedChannelAndMessages(channel)" :channel="channel.channel_name"></channelSelectButton>
      </li>
    </ul>
  </div>
  <restRoom :restUsers="channel.users" :message="message"></restRoom>
  <onlineUsersButton @invite="inviteUser" :users="users" :connections="connections"></onlineUsersButton>
</template>

<style>
</style>


<script>

import firebase from "firebase/app";
import "firebase/auth";

import channelCreateButton from '@/components/ChannelCreateButton.vue'
import channelSelectButton from '@/components/ChannelSelectButton.vue'
import messageBox from '@/components/MessageBox.vue'
import sendMessageBox from '@/components/SendMessageBox.vue'
import onlineUsersButton from '@/components/OnlineUsersButton.vue'
import restRoom from '@/components/RestRoom.vue'


export default {
  name: "RestRoomPage",
  props:{
    user: Object,
    users: Object,
    connections: Object,
    workspace: Object
  },
  components:{
    channelCreateButton,
    channelSelectButton,
    messageBox,
    sendMessageBox,
    onlineUsersButton,
    restRoom,
  },
  data(){
    return{
      databaseItem: "workspace/" + this.workspace.id + "/restroom",
      channel: "",
      channels: [],
      message: [],
      messages: [],
      registUser: []
    }
  },
  methods: {
    addChannel(newChannelName){
      const newChannel = firebase.database().ref(this.databaseItem).push();
      const key_id = newChannel.key;
      newChannel.set({
        channel_name: newChannelName,
        id: key_id
      })
      firebase.database().ref(this.databaseItem+"/"+key_id+"/"+"users").push({
        user: {
          name:String(this.user.email),
          uid:String(this.user.uid)
        }
      })
    },
    inviteUser(user){
      if(this.isRegistedUser(this.user) & this.isNotDuplicate(user)){
        firebase.database().ref(this.databaseItem+"/"+this.channel.id+"/"+"users").push({
          user: {
            name:String(user.email),
            uid:String(user.user_id)
          }
        })
        this.reloadChannel()
      }
      else {
        console.log("you are not invited")
      }
    },
    canselInvitation(index){
      firebase.database().ref(this.databaseItem+"/"+this.channel.id+"/"+"users").child(index).remove()
      this.reloadChannel()
    },
    setChannels(){
      firebase.database().ref(this.databaseItem).on("value", snapshot => (this.channels = snapshot.val()))
    },
    channelSelected(selectedChannel){
      this.channel = selectedChannel
    },
    reloadChannel(){
      this.channel = this.channels[this.channel.id]
    },
    setMessages(){
      if(this.isRegistedUser(this.user)){
        this.messages = []
        firebase.database().ref(this.databaseItem+"/"+this.channel.id+"/"+"messages").on("child_added", snapshot => {
          this.message = snapshot.val()
        })
        firebase.database().ref(this.databaseItem+"/"+this.channel.id+"/"+"messages").on("value", snapshot => {
          this.messages = snapshot.val()
        })
      }
      else{
        this.messages = [{
          content: "you are not registed user",
          user:{
            name: "not-registet",
          }
        }]
      }
    },
    addMessage(message){
      firebase.database().ref(this.databaseItem+"/"+this.channel.id+"/"+"messages")
        .push({
          content: message,
          user: {
            name: this.user.email
        }
      });
    },
    selectedChannelAndMessages(selectedChannel){
      this.channelSelected(selectedChannel);
      this.setMessages()
    },
    deleteMessage(indexs){
      if(this.user.email === indexs.user){
        firebase.database().ref(this.databaseItem+"/"+this.channel.id+"/"+"messages").child(indexs.index).remove();
      }
    },
    isRegistedUser(user){
      for (var registUser in this.channel.users){
        console.log(this.channel.users[registUser].user.name)
        if(this.channel.users[registUser].user.name === user.email){
          return true
        }
      }
      return false
    },
    isNotDuplicate(user){
      var duplicationFlug = false
      for (var registUser in this.channel.users){
        if(this.channel.users[registUser].user.name === user.email){
          duplicationFlug = true
        }
      }
      return !duplicationFlug
    }
  },
  mounted(){
    this.setChannels()
  }
};
</script>
