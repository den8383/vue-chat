<template>
  <h2>Channels</h2>
  <div id="channel-box">
    <ul id="channel-list">
      <li id="channel-line" v-for="(channel_info,index) in channels" :key="index">
          <button @click="changeChannel(channel_info.id)">{{channel_info.id}}</button> 
      </li>
    </ul>
  </div>
  <input type="text" v-model="new_channel_name"/>
  <button @click="addChannel"
  >create</button>
</template>

<style>
#channel-list{
  list-style: none;
}
</style>



<script>
import firebase from "firebase/app";
import "firebase/database";






// Initialize Firebase


export default {
  name: "channelSelector",
  props:{
  },
  data() {
    return {
      channels: [],
      currentChannel: "",
      new_channel_name: "",
    };
  },
  methods: {
    addChannel(){
      const newChannel = firebase.database().ref("channel").push();
      const key_id = newChannel.key;
      newChannel.set({
        channel_name: this.new_channel_name,
        id: key_id
      }).then(() => {
        this.channelModel = false;
      });
      this.new_channel_name = ''
    },
    changeChannel(channelName){
      this.currentChannel = channelName
      this.$emit("change",this.currentChannel)
    }
  },
  mounted(){
    firebase.database().ref("channel").on("value", snapshot => (this.channels = snapshot.val()))
  }
};
</script>
