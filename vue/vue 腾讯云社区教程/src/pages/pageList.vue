<template>
  <div class="page-list">
    <a-list current="a-arrow"></a-list>
    <a-list txt="我是父组件TXT"></a-list>
  </div>
</template>

<script>
  import aButton from '../components/button';
  import aArrow from '../components/arrow';
  import aList from '../components/list';

  export default ({
    name: 'page-list',
    data() {
      return {}
    },
    components: {
      'a-btn': aButton,
      'a-arrow': aArrow,
      'a-list': aList
    }
  })
</script>

<style scoped>

</style>
