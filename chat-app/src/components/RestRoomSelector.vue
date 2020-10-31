<template>
  <div id="channel-box">
    <ul id="channel-list">
      <li id="channel-line" v-for="(channel_info,index) in channels" :key="index">
          <button id="channel-font" @click="changeChannel(channel_info.id)">{{channel_info.id}}</button> 
      </li>
    </ul>
  </div>
  <input id="input-channel" type="text" v-model="new_channel_name"/>
  <button @click="addChannel">create</button>
</template>

<style>
#channel-list{
  list-style: none;
}
#channel-font{
  font-size:0.8em;
}
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
  name: "channelSelector",
  props:{
    databaseItem: String
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
      const newChannel = firebase.database().ref(this.databaseItem).push();
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
    firebase.database().ref(this.databaseItem).on("value", snapshot => (this.channels = snapshot.val()))
  }
};
</script>
