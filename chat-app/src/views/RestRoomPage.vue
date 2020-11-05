<template>
  {{message}}
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



export default {
  name: "RestRoomPage",
  props:{
    user: Object,
  },
  components:{
    channelCreateButton,
    channelSelectButton,
    messageBox,
    sendMessageBox
  },
  data(){
    return{
      databaseItem: "restroom",
      channel: "",
      channels: [],
      message: [],
      messages: []
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
    },
    setChannels(){
      firebase.database().ref(this.databaseItem).on("value", snapshot => (this.channels = snapshot.val()))
    },
    channelSelected(selectedChannel){
      this.channel = selectedChannel
    },
    setMessages(){
      this.messages = []
      firebase.database().ref(this.databaseItem+"/"+this.channel.id+"/"+"messages").on("child_added", snapshot => {
        this.message = snapshot.val()
      })
      firebase.database().ref(this.databaseItem+"/"+this.channel.id+"/"+"messages").on("value", snapshot => {
        this.messages = snapshot.val()
      })
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
    }
  },
  mounted(){
    this.setChannels()
  }
};
</script>
