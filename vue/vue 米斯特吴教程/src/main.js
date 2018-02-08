// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import HelloWorld from './components/HelloWorld';
import Home from './components/home';

Vue.config.productionTip = false;
Vue.use(VueRouter);  //使用vue-router

// 配置路由
const router = new VueRouter({
  routes: [
    {path: '/', component: Home},
    {path: '/HelloWorld', component: HelloWorld},
  ],
  mode: 'history'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
