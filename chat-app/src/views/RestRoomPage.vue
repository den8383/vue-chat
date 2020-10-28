<template>
  <div>
    <h2>Channel Name</h2>
    <restRoom></restRoom>
    <messageBox ref="messageBox" v-bind:currentChannel="channel" databaseItem="restroom"></messageBox>
    <usersView></usersView>
  </div>
  <div>
    <channelSelector @change="changeChannel" databaseItem="restroom"></channelSelector>
  </div>
</template>

<style>
</style>


<script>

import messageBox from '@/components/ChannelChat.vue'
import usersView from '@/components/OnlineUsers.vue'
import channelSelector from '@/components/RestRoomSelector.vue'
import restRoom from '@/components/RestRoom.vue'



export default {
  name: "Channel",
  components:{
    messageBox,
    usersView,
    channelSelector,
    restRoom
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
