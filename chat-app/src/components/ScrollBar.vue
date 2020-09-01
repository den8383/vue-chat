<template>
  <div id="scroll-bar">
    <button @click="moveToTarget">scroll</button>
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
  props: {
    scrollTarget: String
  },
  data() {
    return {
    };
  },
  methods: {
    tmpAlert(){
      alert("ScrollBar")
    },
    moveToTarget(){
      var bar = document.getElementById(this.scrollTarget);
      bar.scrollIntoView();
    }
  }
};
</script>
