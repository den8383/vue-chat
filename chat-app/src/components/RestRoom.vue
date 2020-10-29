<template>
  <h2>rest</h2>
  <div class="room-group">
    <singleRoom  v-for="(restUser, index) in restUsers" :key="index" :restUser="restUser" :message="message"></singleRoom>
  </div>
</template>

<style>
.room-group{
  display:flex;
  flex-wrap: wrap;
  margin:auto;
}
</style>

<script>

import singleRoom from '@/components/SingleRoom.vue'



export default {
  name: "restRoom",
  props: {
    restUsers: Array,
    message:String,
  },
  components:{
    singleRoom
  },
  data() {
    return {
    };
  },
  methods: {
  },
  mounted(){
  }
};
</script>
