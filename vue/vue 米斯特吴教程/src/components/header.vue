<template>
  <div>
    <header>
      <h1 @click="changeTitle">{{title}}</h1>
      <hr>
    </header>
  </div>
</template>
<script>
  export default {
    name: 'head',
    props: ['title'],
    data() {
      return {}
    },
    methods:{
      changeTitle(){
        this.$emit('change','我从子组件里发射出来')
      }
    }
  }
</script>
<style scoped>
  h1 { font-weight: normal; }
</style>
