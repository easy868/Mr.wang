<template>
  <div id="app">
    <p>
      <router-link to="/">home</router-link>
      <router-link to="/HelloWorld">HelloWorld</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
  import Home from './components/home';

  export default {
    name: 'app',
    data() {
      return {}
    },
    methods: {},
    computed: {}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 30px;
  }
</style>
