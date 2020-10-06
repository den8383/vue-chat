<template>
  <div>
    <h1>real time chat</h1>
      <messageBox></messageBox>
  </div>
</template>

<style>
</style>


<script>

import messageBox from '@/components/MessageBox.vue'



export default {
  name: "FreeChat",
  components:{
    messageBox
  },
};
</script>
