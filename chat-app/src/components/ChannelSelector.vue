<template>
  <p>channel name: {{currentChannelName}}</p>
  <div id="channel-box">
    <ul id="channel-list">
      <li id="channel-line" v-for="(channel_info,index) in channels" :key="index">
          <button id="channel-font" @click="changeChannel(channel_info.id, channel_info.channel_name)">{{channel_info.channel_name}}</button> 
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



// Initialize Firebase


export default {
  name: "channelSelector",
  props:{
    channels:Array
  },
  data() {
    return {
    };
  },
  methods: {
    changeChannel(channelID, channelName){
      this.currentChannel = channelID
      this.currentChannelName = channelName
      this.$emit("change",this.currentChannel)
    }
  },
  mounted(){
  }
};
</script>
