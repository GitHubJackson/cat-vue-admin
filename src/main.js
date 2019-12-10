import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/style/index.less'

import * as filters from '@/utils/filter'
import components from '@/components'

Vue.use(ElementUI)
// 注册全局 filter
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
// 注册全局组件
Object.keys(components).forEach(key => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase())
  Vue.component('c' + name, components[key])
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
