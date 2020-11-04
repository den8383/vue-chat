<template>
  <input id="input-channel" type="text" v-model="new_channel_name"/>
  <button @click="addChannel">create</button>
</template>

<style>
#input-channel{
  margin:0;
  width:50%;
}
</style>



<script>

import firebase from "firebase/app";
import "firebase/database";





// Initialize Firebase


export default {
  name: "channelCreateButton",
  props:{
    databaseItem: String
  },
  data() {
    return {
      newChannelName: ""
    }
  },
  methods: {
    addChannel(){
      const newChannel = firebase.database().ref(this.databaseItem).push();
      const key_id = newChannel.key;
      newChannel.set({
        channel_name: this.newChannelName,
        id: key_id
      })
      this.newChannelName = ''
    },
  },
  mounted(){
  }
}
</script>
