<template>
  <div id="scroll-bar">
    <button @click="moveToBottom">scroll</button>
    <h1>ScrollBar</h1>
    <slot></slot>
  </div>
</template>

<style>
#scroll-bar{
  height: 20rem;
  overflow-y: scroll;
}

</style>

<script>


export default {
  name: "ScrollBar",
  data() {
    return {
    };
  },
  methods: {
    tmpAlert(){
      alert("ScrollBar")
    },
    moveToBottom(){
      document.getElementById("scroll-bar").scroll(0,50);
    }
  }
};
</script>
