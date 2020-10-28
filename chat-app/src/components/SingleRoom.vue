<template>
  <div class="room-border" v-for="(restUser, index) in restUsers" :key="index">
    <div class="room">
      {{restUser}}
    </div>
  </div>
</template>

<style>
.room-border{
  border:solid;
  width:40%;
  height:auto;
}
.room{
  padding-top:100%;
}
</style>

<script>




export default {
  name: "singleRoom",
  props:{
    restUsers: Array,
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
