<template>
  <div>
    <h2>Channel Name</h2>
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

import messageBox from '@/components/RestRoomChat.vue'
import usersView from '@/components/OnlineUsers.vue'
import channelSelector from '@/components/RestRoomSelector.vue'


export default {
  name: "Channel",
  components:{
    messageBox,
    usersView,
    channelSelector,
  },
  data(){
    return{
      channel: "",
      restUsers: ["test1", "test2", "test3", "test4"],
      message: "hello"

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
