import Vue from 'vue'
import Router from 'vue-router'
import pos from '@/components/page/pos'
import hello from '@/components/page/HelloWorld'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pos',
      component: pos
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: hello
    }
  ]
})
