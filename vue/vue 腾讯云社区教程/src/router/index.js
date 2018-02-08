import Vue from 'vue'
import Router from 'vue-router'
// 引用页面模板->供路由使用
import index from '../pages/index';
import pageButton from '../pages/pageButton'
import pageList from '../pages/pageList'
import pageNav from '../pages/pageNav'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/btn',
      name: 'pageButton',
      component: pageButton
    },
    {
      path: '/list',
      name: 'pageList',
      component: pageList
    },
    {
      path: '/nav',
      name: 'pageNav',
      component: pageNav
    }
  ]
})
