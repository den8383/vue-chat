<template>
  <button @click="addMessage">add</button>
  <sendMessageBox @added-message="addMessage"></sendMessageBox>
  <messageBox :messages="messages"></messageBox>
  <div>channel</div>
  <channelCreateButton @added-channel="addChannel" databaseItem="channel"></channelCreateButton>
  <div>
    <ul>
      <li v-for="(channel, index) in channels" :key="index">
        <channelSelectButton @selected="channelSelected(channel)" :channel="channel.channel_name"></channelSelectButton>
      </li>
    </ul>
  </div>
</template>

<style>
</style>


<script>

import channelCreateButton from '@/components/ChannelCreateButton.vue'
import channelSelectButton from '@/components/ChannelSelectButton.vue'
import messageBox from '@/components/MessageBox.vue'
import sendMessageBox from '@/components/SendMessageBox.vue'



export default {
  name: "ChannelPage",
  props:{
    channels: Array,
    messages: Array
  },
  components:{
    channelCreateButton,
    channelSelectButton,
    messageBox,
    sendMessageBox
  },
  data(){
    return{
    }
  },
  methods: {
    addChannel(newChannelName){
      this.$emit("added-channel",newChannelName)
    },
    channelSelected(selectedChannel){
      this.$emit("selected-channel", selectedChannel)
    },
    addMessage(message){
      this.$emit("added-message",message)
    }
  }
};
</script>
