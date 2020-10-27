<template>
    <usersView></usersView>
</template>

<script>


import usersView from '@/components/OnlineUsers.vue'





// Initialize Firebase


export default {
  name: "testPage",
  props:{
  },
  components:{
    usersView
  },
  data() {
    return {
    };
  },
  methods: {
  },
  mounted(){
  },
  beforeUnmount(){
  }
};


</script>
