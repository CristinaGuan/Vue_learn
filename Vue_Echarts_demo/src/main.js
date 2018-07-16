// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import $ from 'jquery'
import TitleNav from './components/TitleNav.vue'
import DatePicker from './components/global/date.vue'

//引入饿了么UI
import ElementUI from 'element-ui';

Vue.use(ElementUI);
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 

Vue.config.productionTip = false

Vue.component('title-nav',TitleNav);
Vue.component('date-picker',DatePicker);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
