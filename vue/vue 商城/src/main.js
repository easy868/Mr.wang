// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import foot from '@/components/common/foot';
import hello from '@/components/HelloWorld';

Vue.config.productionTip = false;
Vue.component('foot',foot);
Vue.component('hello',hello);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App}
});
