<template>
  <div id="app">
    <ul class="index-nav">
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/btn">按钮</router-link>
      </li>
      <li>
        <router-link to="/list">列表</router-link>
      </li>
      <li>
        <router-link to="/nav">导航</router-link>
      </li>
    </ul>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  * { box-sizing: border-box; }
  #app { font-family: 'Avenir', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-align: center; color: #2c3e50; margin-top: 30px; }
  .index-nav { margin: 0 0 20px 0; padding: 0; list-style: none; border-bottom: 1px solid #4cae4c; }
  .index-nav li { display: inline-block; line-height: 50px; margin-right: 20px; }
  .main { padding: 10px; }
</style>
