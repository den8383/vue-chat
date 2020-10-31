<template>
  <div>
    {{testUser}}
    <h2>Channel Name</h2>
    <messageBox ref="messageBox" v-bind:currentChannel="channel" databaseItem="restroom" :restUsers="testUser"></messageBox>
    <usersView ref="onlineUser"></usersView>
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
      message: "hello",
      testUser: []

    }
  },
  methods: {
    changeChannel(currentChannel){
      this.channel = currentChannel
      this.$refs.messageBox.changeChannel(this.channel)
      this.testUser = this.$refs.onlineUser.getOnlineUsers()
    }
  }
};
</script>
