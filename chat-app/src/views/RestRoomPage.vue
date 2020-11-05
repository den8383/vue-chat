<template>
  <h2>Rest Room</h2>
  <div>
    <ul>
      <li v-for="(restRoom, index) in restRooms" :key="index">
        <channelSelectButton @selected="restRoomSelected(restRoom)" :channel="restRoom.channel_name"></channelSelectButton>
      </li>
    </ul>
  </div>
  <channelCreateButton @added-channel="addRestRoom"></channelCreateButton>
</template>

<style>
</style>


<script>

import channelCreateButton from '@/components/ChannelCreateButton.vue'
import channelSelectButton from '@/components/ChannelSelectButton.vue'



export default {
  name: "RestRoomPage",
  props:{
    restRooms: Array,
  },
  components:{
    channelCreateButton,
    channelSelectButton,
  },
  data(){
    return{
    }
  },
  methods: {
    addRestRoom(newRestRoomName){
      this.$emit("added-restroom",newRestRoomName)
    },
    restRoomSelected(selectedRestRoom){
      this.$emit("selected-restroom", selectedRestRoom)
    },
  }
};
</script>
