<template>
  <div class="a-nav">
    <nav>
      <span v-for="(item,idx) in items" :class="item.active?activeClass:''" @click="navClick(items,idx)">{{item.text}}</span>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'a-nav',
    data() {
      return {
        activeClass: 'active',
        items: [
          {
            text: '首页',
            active: true
          },
          {
            text: '列表',
            active: false
          },
          {
            text: '关于',
            active: false
          },
          {
            text: '招聘',
            active: false
          }
        ]
      }
    },
    methods: {
      navClick(items, idx) {
        items.forEach(e => {
          e.active = false;
        });
        items[idx].active = true;
        this.$emit('navClick', items, idx)
      }
    }
  }
</script>

<style scoped>
  nav { background: #333; }
  nav span { padding: 10px 15px; color: #fff; cursor: pointer; display: inline-block; }
  nav span.active { border-bottom: 2px solid #00bfff; }
</style>
