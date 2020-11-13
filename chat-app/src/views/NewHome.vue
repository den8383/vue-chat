<template>
  <div>
    <p>home</p>
  </div>
  <div>you: {{user.email}}</div>
</template>


<script>


export default {

  name: "Home",
  props: {
    user: String,
    users: Array
  }
};
</script>
