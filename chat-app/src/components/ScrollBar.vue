<template>
  <div id="scroll-bar">
    <h1>ScrollBar</h1>
    <slot></slot>  </div>
</template>

<style>

#scroll-bar{
  height: 100px;
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
    }
  }
};
</script>
