<template>
  <div>
    <messageBox ref="messageBox" v-bind:currentChannel="channel" databaseItem="channel"></messageBox>
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
