<template>
  <input id="input-channel" type="text" v-model="newChannelName"/>
  <button @click="addChannel">Entry</button>
</template>

<style>
#input-channel{
  margin:0;
  width:50%;
}
</style>



<script>






// Initialize Firebase


export default {
  name: "channelCreateButton",
  props:{
  },
  data() {
    return {
      newChannelName: ""
    }
  },
  methods: {
    addChannel(){
      this.$emit("input-channel-id",this.newChannelName)
      this.newChannelName = ""
    },
  },
  mounted(){
  }
}
</script>
