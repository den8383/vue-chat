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
    positionX:Number,
    positionY:Number,
  },
  data() {
    return {
      savedPositionX: this.positionX,
      savedPositionY: this.positionY
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
      alert(this.savedPositionX.toString() + "," + this.savedPositionY.toString())
      window.scrollTo(this.savedPositionX,this.savedPositionY)
    },
    savePosition(){
      this.savedPositionX = window.scrollX
      this.savedPositionY = window.scrollY
    }

  }
};
</script>
