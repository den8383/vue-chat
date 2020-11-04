<template>
  <button id="channel-font" @click="selected">{{channel}}</button> 
</template>

<style>
#channel-list{
  list-style: none;
}
#channel-font{
  font-size:0.8em;
}
#input-channel{
  margin:0;
  width:50%;
}
</style>



<script>



// Initialize Firebase


export default {
  name: "channelSelectButton",
  props:{
    channel: String
  },
  data() {
    return {
    };
  },
  methods: {
    selected(){
      this.$emit("selected")
    }
  },
  mounted(){
  }
};
</script>
