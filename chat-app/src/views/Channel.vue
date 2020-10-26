<template>
  <div>
    <h1>Channel</h1>
    <messageBox currentChannel="-MJkjpAVy3qqpr-qMSda"></messageBox>
    <usersView></usersView>
  </div>
</template>

<style>
</style>


<script>

import messageBox from '@/components/ChannelChat.vue'
import usersView from '@/components/ChannelUsers.vue'



export default {
  name: "Channel",
  components:{
    messageBox,
    usersView,
  },
};
</script>
