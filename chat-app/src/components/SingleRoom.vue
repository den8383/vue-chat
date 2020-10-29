<template>
  <div class="room-border">
      <div>
        {{restUser}}
        [<span>{{message}}</span>]
      </div>
    <div class="room">
      <img class="user-icon" src="@/assets/rest-user-icon.png" alt="">
    </div>
  </div>
</template>


<style>
.room-border{
  border:solid;
  width:49%;
}
.room{
  padding-bottom:100%;
}
.user-icon{
  width:50%;
  float: left; 
}
</style>

<script>




export default {
  name: "singleRoom",
  props:{
    restUser: String,
    message: String
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
