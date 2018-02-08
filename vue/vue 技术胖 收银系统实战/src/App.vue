<template>
  <div id="app">
    <left-nav></left-nav>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import leftNav from '@/components/common/leftNav';

  export default {
    name: 'app',
    components: {
      leftNav
    }
  }
</script>

<style>
  body, div, p, ul, ol, a, h1, h2, h3, h4, h5, h6, dl, dt, dd, table, tr, td, span, i { margin: 0; padding: 0; }
  ul, ol { list-style: none; }
  *, *:before, *:after { box-sizing: border-box; }
  .iconfont { font-size: 20px; }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .main { margin-left: 100px; }
  li { cursor: pointer; }
</style>
