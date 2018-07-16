import Vue from 'vue'
import Router from 'vue-router'
import TitleNav from '@/components/TitleNav.vue'
// import '/node_modules/_bootstrap@4.1.1@bootstrap/dist/css/bootstrap.min.css'
// import '/node_modules/_bootstrap@4.1.1@bootstrap/dist/js/bootstrap.min.js'
Vue.use(Router)

//引入组件
import Line from '../components/lineChart/line1.vue'
import Bar from '../components/barChart/bar.vue'
import Pie from '../components/pie/pie.vue'

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'TitleNav',
    //   component: TitleNav
    // },
    {
    	path:'/line',
    	name:'Line',
    	component:Line
    },
    {
      path:'/bar',
      name:'bar',
      component:Bar
    },
    {
      path:'/pie',
      name:'pie',
      component:Pie
    }
  ]
})
