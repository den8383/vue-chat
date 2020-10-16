<template>
  <div>
    <h1>Channel</h1>
    <messageBox></messageBox>
  </div>
</template>

<style>
</style>


<script>

import messageBox from '@/components/ChannelChat.vue'



export default {
  name: "Channel",
  components:{
    messageBox
  },
};
</script>
