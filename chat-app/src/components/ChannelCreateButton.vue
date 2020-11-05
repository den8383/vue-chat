<template>
  <input id="input-channel" type="text" v-model="newChannelName"/>
  <button @click="addChannel">create</button>
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
      this.$emit("added-channel",this.newChannelName)
      this.newChannelName = ""
    },
  },
  mounted(){
  }
}
</script>
