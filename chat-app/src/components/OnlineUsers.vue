<template>
  {{connections}}
  <div v-for="user in users" :key="user.user_id">
    <div v-if="isOnline(user,connections)">
      <span>{{user.email}}</span>
      <span :class="isOnline(user,connections) ? 'online-icon' : 'offline-icon'"></span>
    </div>
  </div>
<!--  <h2>OnlineUser</h2>
  <div v-for="user in connections" :key="user.user_id">
    {{user.user_id}}
  </div>
  !-->
</template>

<style>
.online-icon{
  border-radius: 50%;
  background:lightgreen;
  display: inline-block;
  height:0.5em;
  margin:auto 1em;
  width:0.5em;
}
.offline-icon{
  border-radius: 50%;
  background:gray;
  display: inline-block;
  height:0.5em;
  margin:auto 1em;
  width:0.5em;
}

</style>



<script>



export default {
  name: "channelUsers",
  props:{
    users: Array,
    connections: Array
  },
  methods: {
    isOnline(user, connections){
      if (connections.find(item => item.user_id === user.user_id) != undefined){
        return true;
      }
      else{
        return false;
      }
    },
  },
};
</script>
