<template>
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
@media screen and (min-width:768px){
  .room-group{
    width:49%;
  }
}
</style>

<script>

import singleRoom from '@/components/SingleRoom.vue'



export default {
  name: "restRoom",
  props: {
    restUsers: Array,
    message: Object,
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
