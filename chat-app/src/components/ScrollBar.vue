<template>
  <div id="scroll-bar">
    <button @click="moveToTarget">scroll bottom</button>
    <div>
      <h1>ScrollBar</h1>
      <slot></slot>
    </div>
    <button @click="savePosition()">savePosition</button>
  </div>
</template>

<style>
#scroll-bar{
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
    },
    savePosition(){
      var positonX = window.scrollX
      var positonY = window.scrollY
      alert(positonX.toString() + "," + positonY.toString())
      window.scrollTo(0,0)
    }

  }
};
</script>
