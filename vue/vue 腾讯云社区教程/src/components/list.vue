<template>
  <div class="a-list">
    <p>{{txt}}</p>
    <component :is="current" ref="children" :msg="msg" keep-alive></component>
  </div>
</template>

<script>
  import aButton from './button';
  import aArrow from './arrow';

  export default ({
    name: 'page-list',
    data() {
      return {}
    },
    props: {
      txt: {
        default: '默认文字'
      },
      msg: {
        default: 'list按钮'
      },
      current: {
        default: 'a-btn'
      }
    },
    components: {
      'a-btn': aButton,
      'a-arrow': aArrow
    }
  })
</script>

<style scoped>
</style>
