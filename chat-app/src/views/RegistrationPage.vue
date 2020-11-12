<template>
  <div>
      <register :workspace="workspace"></register>
  </div>
</template>

<style>
</style>


<script>

import register from '@/components/Register.vue'



export default {
  name: "RegistrationPage",
  props:{
    workspace: String
  },
  components:{
    register
  },
};
</script>
