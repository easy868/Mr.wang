<template>
  <div class="page-button">
    <!--使用-->
    <a-btn msg="我是" @showMsg="doSome">
      <span slot="icon">♪</span>
    </a-btn>
  </div>
</template>

<script>
  import aButton from '../components/button';  //引入组件
  export default ({
    name: 'page-button',
    data() {
      return {}
    },
    components: {
      'a-btn': aButton   //注册自定义标签
    },
    methods:{
      doSome(){
        alert('你点击了孩子的按钮')
      }
    }
  })
</script>

<style scoped>

</style>
