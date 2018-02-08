import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import foot from '@/components/common/foot';
import home from '@/components/home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/foot',
      name: foot,
      component: foot
    }
  ]
})
