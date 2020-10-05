<template>
  <div>
    <button @click="savePosition">savePosition</button>
      <router-link to="/" @click="tmp">Home</router-link> |
      <router-link to="/about" @click="savePosition">About</router-link>
  </div>
</template>

<style>

</style>

<script>


export default {
  name: "NavigationTab",
  props: {
  },
  data() {
    return {
      positonX: 0,
      positonY: 0
    };
  },
  methods: {
    savePosition(){
      this.positonX = window.scrollX
      this.positonY = window.scrollY
    },
    tmp(){
      alert("aaaa")
    }

  }
};
</script>
