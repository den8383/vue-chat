<template>
  <h2>send</h2>
  <input type="text" v-model="sendMessage">
  <button @click="addMessage">send</button>
</template>

<style>
</style>

<script>
export default{
  name: "SendMessageBox",
  data (){
    return{
      sendMessage: ""
    }
  },
  methods: {
    addMessage(){
      this.$emit("added-message", this.sendMessage)
      this.sendMessage = ""
    }
  }
}
</script>
