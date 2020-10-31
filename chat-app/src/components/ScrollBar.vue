<template>
  <div id="scroll-bar">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<style>
#scroll-bar{
  overflow:hidden;
  overflow-y:scroll;
  margin:auto;
  width: 100%;
  height: 10rem;
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

  },
  mounted(){
    this.moveToTarget()
  }
};
</script>
