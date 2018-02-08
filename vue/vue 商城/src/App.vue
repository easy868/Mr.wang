<template>
  <div id="app">
    <router-view/>
    <foot></foot>
    <hello></hello>
  </div>
</template>
<script>
  import Vue from 'vue';
  export default {
    name: 'app',
    components: {}
  }
</script>

<style>
  @import '//at.alicdn.com/t/font_530305_3sdd6vxdpa5uerk9.css';
  *, *:before, *:after { box-sizing: border-box; }
  html, body { height: 100%; background: #f1f1f1;}
  body, div, p, span, ul, ol, li, h1, h2, h3, h4, h5, h6, dl, dt, dd, table, td, a, input, button, textarea, select { margin: 0; padding: 0; }
  h1, h2, h3, h4, h5, h6 { font-weight: normal; font-size: 100%; }
  body, input, textarea, select, button { font: 12px/1.5 "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif; }
  img { border: 0; }
  a { color: #333; text-decoration: none; }
  ul, ol { list-style: none; }
  span, i, b { display: inline-block;}
</style>
