<template>
  <div class="room-group">
    <singleRoom  v-for="(restUser, index) in restUsers" :key="index" :restUser="restUser" :message="message" :messager="messager"></singleRoom>
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
    width:30%;
  }
}
</style>

<script>

import singleRoom from '@/components/SingleRoom.vue'



export default {
  name: "restRoom",
  props: {
    restUsers: Array,
    message:String,
    messager:String,
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
