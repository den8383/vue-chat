<template>
  <div>
    <onlineUsers :users="users" :connections="connections"></onlineUsers>
  </div>
</template>


<script>
import onlineUsers from '@/components/OnlineUsers.vue'


export default {

  name: "OnlineUsersPage",
  components:{
    onlineUsers
  },
  props: {
    users: Array,
    connections: Array
  }
};
</script>
