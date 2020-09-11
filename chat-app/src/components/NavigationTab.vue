<template>
  <div>
    <button @click="savePosition">savePosition</button>
    <button @click="moveToSavePosition">moveToSavePosition</button>
  </div>
</template>

<style>

</style>

<script>


export default {
  name: "NavigationTab",
  props: {
    scrollTarget: String
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
    }

  }
};
</script>
