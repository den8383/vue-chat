<template>
  <div>
    <p>home</p>
  </div>
  <div>{{user}}</div>
  <p>------------------------</p>
  <div>{{users}}</div>
</template>


<script>


export default {

  name: "Home",
  props: {
    user: String,
    users: []
  }
};
</script>
