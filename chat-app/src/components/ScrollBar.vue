<template>
  <div id="scroll-bar">
    <button @click="moveToTarget">scroll bottom</button>
    <button @click="moveToSavePosition">moveToSavePosition</button>
    <div>
      <h1>ScrollBar</h1>
      <slot></slot>
    </div>
    <button @click="savePosition">savePosition</button>
    <button @click="moveToSavePosition">moveToSavePosition</button>
  </div>
</template>

<style>
#scroll-bar{
}

</style>

<script>

import router from '@/router'

export default {
  name: "ScrollBar",
  props: {
    scrollTarget: String,
    initialPositonX:Number,
    initialPositonY:Number,
  },
  data() {
    return {
      positonX: this.initialPositonX,
      positonY: this.initialPositonY
    };
  },
  created(){
    router.beforeEach(() => {
      this.savePosition()
    })

  },
  methods: {
    tmpAlert(){
      alert("ScrollBar")
    },
    moveToTarget(){
      var bar = document.getElementById(this.scrollTarget);
      bar.scrollIntoView();
    },
    moveToSavePosition(){
      alert(this.positonX.toString() + "," + this.positonY.toString())
      window.scrollTo(this.positonX,this.positonY)
    },
    savePosition(){
      this.positonX = window.scrollX
      this.positonY = window.scrollY
    }

  }
};
</script>
