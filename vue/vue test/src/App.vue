<template>
  <div id="app2">
    <h1><a href="#">公共组件</a></h1>
    <router-view/>
  </div>
</template>
<script>
  export default ({
    name: 'app'
  })
</script>
<style>
  @import '../../../mystudy/css/reset.css';
  * { box-sizing: border-box; }
  #app2 { font-family: 'Avenir', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-align: center; color: #2c3e50; margin-top: 30px; }
  h1 {margin-bottom: 20px; font-size: 30px;font-weight: 600;box-shadow:0 1px 1px #333;}

</style>
