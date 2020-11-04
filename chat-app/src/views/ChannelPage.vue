<template>
  <div>channel</div>
  <channelCreateButton @add="addChannel" databaseItem="channel"></channelCreateButton>
  <div>
    <ul>
      <li v-for="(channel, index) in channels" :key="index">
        <channelSelectButton @selected="channelSelected(channel)" :channel="channel.channel_name"></channelSelectButton>
      </li>
    </ul>
  </div>
</template>

<style>
</style>


<script>

import channelCreateButton from '@/components/ChannelCreateButton.vue'
import channelSelectButton from '@/components/ChannelSelectButton.vue'



export default {
  name: "ChannelPage",
  props:{
    channels: Array
  },
  components:{
    channelCreateButton,
    channelSelectButton
  },
  data(){
    return{
    }
  },
  methods: {
    addChannel(){
      this.$emit("add-channel")
    },
    channelSelected(selectedChannel){
      this.$emit("selected-channel", selectedChannel)
    }
  }
};
</script>
