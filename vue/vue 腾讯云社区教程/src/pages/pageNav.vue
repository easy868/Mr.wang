<template>
  <div class="page-nav">
    <a-nav></a-nav>
  </div>
</template>

<script>
  import pageNav from '../components/nav';

  export default ({
    name: 'page-nav',
    data() {
      return {}
    },
    components: {
      'a-nav': pageNav
    }
  })
</script>

<style scoped>

</style>
