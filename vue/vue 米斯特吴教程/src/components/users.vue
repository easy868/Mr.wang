<template>
  <div class="users">
    <h2>我是users.vue的文件</h2>
    <ul>
      <li v-for="user in users">{{user}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'users',
    props: ['users'],
    data() {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
