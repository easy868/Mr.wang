<template>
  <div id="home">
    <app-head :title="title" @change="changeFather($event)"></app-head>
    <users :users="users" :title="title"></users>
    <app-foot :title="title"></app-foot>
  </div>
</template>

<script>
  import users from './users';
  import appHead from './header';
  import appFoot from './footer';

  export default {
    name: 'home',
    components: {
      users,
      appHead,
      appFoot
    },
    data() {
      return {
        users: ['福张三', '李四', '王五'],
        title: '我是父组件的数据title'
      }
    },
    methods: {
      changeFather(tit) {
        this.title = tit;
      }
    }
  }
</script>

<style>

</style>
