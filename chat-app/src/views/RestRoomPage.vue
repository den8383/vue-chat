<template>
  <div>
    <h2>Channel Name</h2>
    <h2>{{channel}}</h2>
    <messageBox ref="messageBox" v-bind:currentChannel="channel"></messageBox>
    <usersView></usersView>
  </div>
  <div>
    <channelSelector @change="changeChannel" ></channelSelector>
  </div>
</template>

<style>
</style>


<script>

import messageBox from '@/components/ChannelChat.vue'
import usersView from '@/components/OnlineUsers.vue'
import channelSelector from '@/components/ChannelSelector.vue'



export default {
  name: "Channel",
  components:{
    messageBox,
    usersView,
    channelSelector
  },
  data(){
    return{
      channel: ""
    }
  },
  methods: {
    changeChannel(currentChannel){
      this.channel = currentChannel
      this.$refs.messageBox.changeChannel(this.channel)
    }
  }
};
</script>
