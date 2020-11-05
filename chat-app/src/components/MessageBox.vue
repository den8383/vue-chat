<template>
  <h2>message</h2>
  <div id="message-box">
    <ul id="message-list">
      <li id="message-line" v-for="(message, index) in messages" :key="index">
        <span>{{message.user.name}},{{message.content}}</span>
        <span id="delete-button" @click="deleteMessage(index,message.user.name)"> X</span>
      </li>
    </ul>
  </div>
<!--
  <div id="message-box">
    <ul id="message-list">
      {{mounted()}}
      <li id="message-line" v-for="(message,index) in messages" :key="index">
          {{message.user.name}} {{message.content}}
          <span @click="deleteMessage(index)">X</span>
      </li>
    </ul>
  </div>

  -->
</template>

<style>
#send-box{
  bottom: 0;
}

#message-box{
    display: flex;
    align-items: center;
    flex-direction: column;
}

#message-list{
    text-align: left;
}
#delete-button{
    text-align: right;
    color: red;
}

</style>



<script>






// Initialize Firebase


export default {
  name: "messageBox",
  props:{
    messages: Array
  },
  data() {
    return {
    }
  },
  methods: {
    deleteMessage(index,user){
      var indexs = {
        index: index,
        user:user
      }
      this.$emit("delete-message",indexs)
    }
  }
};
</script>
