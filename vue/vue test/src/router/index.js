import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld';
import index from '../components/index';
import pageButton from '../components/pageButton';
import pageList from '../components/pageList';
import pageNav from '../components/pageNav';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/pageButton',
      name: 'pageButton',
      component: pageButton
    }, {
      path: '/pageList',
      name: 'pageList',
      component: pageList
    }, {
      path: '/pageNav',
      name: 'pageNav',
      component: pageNav
    }
  ]
})
