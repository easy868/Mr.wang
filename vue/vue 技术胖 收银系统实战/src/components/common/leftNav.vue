<template>
  <div class="left-nav">
    <ul>
      <li>
        <router-link to="/"> <i class="iconfont icon-canyin"></i> <span>主页</span></router-link>
      </li>
      <li>
        <router-link to="/helloworld"> <i class="iconfont icon-liwu"></i> <span>Hello</span></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'left-nav',
    data() {
      return {}
    }
  }
</script>
<style scoped>
  .left-nav { float: left; width: 100px; height: 100%; font-size: 18px; border-right: 1px dashed #00b3ee; }
  .left-nav ul li { height: 60px; line-height: 60px; border-bottom: 1px dashed #00b3ee; }
  a{ padding-bottom:5px;display:inline-block;}
</style>
