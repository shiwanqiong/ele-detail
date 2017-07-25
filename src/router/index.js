import Vue from 'vue'
import Router from 'vue-router'
import goods from '../views/goods'
import seller from '../views/seller'
import ratings from '../views/ratings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path:'/ratings',
      name:'Ratings',
      component:ratings
    },
    {
      path:'/seller',
      name:'Seller',
      component:seller
    }
  ]
})
