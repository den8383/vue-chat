<template>
  <div>
    <h2>Rest Room</h2>
    <messageBox ref="messageBox" v-bind:currentChannel="channel" databaseItem="restroom" :restUsers="testUser"></messageBox>
  </div>
  <div id="users-and-channels">
    <div id="users">
      <p>user</p>
      <usersView ref="onlineUser"></usersView>
    </div>
    <div id="channels">
      <p>channel</p>
      <channelSelector @change="changeChannel" databaseItem="restroom"></channelSelector>
    </div>
  </div>
</template>

<style>
#users-and-channels{
  display:flex;
  margin:auto;
}
#users{
  margin:0 0 0 auto;
}
#channels{
  margin:0 auto 0 0;
  padding:0;
}
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
