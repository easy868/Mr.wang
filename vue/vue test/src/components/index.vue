<template>
  <div id="index">
    <ul class="nav">
      <li>
        <router-link to="/pageButton">button页面</router-link>
      </li>
      <li>
        <router-link to="/pageList">列表页面</router-link>
      </li>
      <li>
        <router-link to="/pageNav">导航页面</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>
  .nav li {padding: 6px 0;}
  .nav a {font-size: 14px;color: #0b93d5;}
</style>
