<template>
  <h2>rest</h2>
  <div class="room-group">
      <singleRoom  v-for="(restUser, index) in restUsers" :key="index" :restUser="restUser"></singleRoom>
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
  components:{
    singleRoom
  },
  data() {
    return {
      restUsers: ["test1", "test2", "test3", "test4"]
    };
  },
  methods: {
  },
  mounted(){
  }
};
</script>
