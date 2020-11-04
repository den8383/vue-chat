<template>
  <h2>message</h2>
  <div id="message-box">
    <ul id="message-list">
      <li id="message-line" v-for="(message, index) in messages" :key="index">{{message[Object.keys(message)].user.name}},{{message[Object.keys(message)].content}}</li>
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
#message-list span{
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
  }
};
</script>
