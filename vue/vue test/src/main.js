import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false; //控制台生产环境提示=false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
