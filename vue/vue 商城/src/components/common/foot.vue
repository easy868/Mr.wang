<template>
  <footer class="foot">
    <nav class="foot-nav">
      <a href="" class="active"><i class="iconfont icon-all"></i> <p>精选</p></a>
      <a href=""><i class="iconfont icon-favorite"></i> 最新</a>
      <a href=""><i class="iconfont icon-cart"></i> 购物车</a>
      <a href=""><i class="iconfont icon-account"></i> 我的</a>
    </nav>
  </footer>
</template>
<script>
  export default ({
    name: 'foot',
    data() {
      return {}
    }
  })
</script>
<style lang="scss" scoped>
  .foot { height: 60px;
    .iconfont{ font-size:18px;}
    .foot-nav { position: fixed; left:0; bottom:0; width:100%; display: flex; height: 50px; background: #fff;box-shadow:0 -2px 10px -10px rgba(0,0,0,.4);
      .active{ color: #d01d47;}
      a {flex: 1; text-align: center; display: flex; flex-direction: column;justify-content: center; font-size: 14px;
      }
    }
  }
</style>
