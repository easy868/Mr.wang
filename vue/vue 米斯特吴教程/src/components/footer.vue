<template>
  <div class="foot-box">
    <footer>
      <p>{{copyRight}}------{{title}}</p>
    </footer>
  </div>
</template>
<script>
  export default {
    name: 'head',
    props: ['title'],
    data() {
      return {
        copyRight: '版权信息：2017/12/11©UNO'
      }
    }
  }
</script>
<style scoped>
  #app{ display: flex;}
  .foot-box { min-height: 60px; }
  footer { position: fixed; left: 0; bottom: 0; width: 100%; }
  p { padding: 15px 10px; background: #333; color: #fff; border-radius: 3px; }
</style>
