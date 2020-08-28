<template>
  <div>
    <h1>Firebase Test</h1>
    <scrollBar>
      <messageBox></messageBox>
    </scrollBar>
  </div>
</template>

<style>
</style>


<script>

import scrollBar from '@/components/ScrollBar.vue'
import messageBox from '@/components/MessageBox.vue'



export default {
  name: "Home",
  components:{
    scrollBar,
    messageBox
  },
};
</script>
