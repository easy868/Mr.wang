<template>
  <div class="btn">
    <button @click="showMsg">
      <slot name="icon"></slot>
      {{msg}}
    </button>
  </div>
</template>

<script>
  export default ({
    name: 'aButton',
    data() {
      return {}
    },
    props: {
      msg: {
        default: '下载'
      }
    },
    methods: {
      showMsg() {
        alert(this.msg);
        this.$emit('showMsg')
      }
    }
  })
</script>

<style scoped>

</style>
