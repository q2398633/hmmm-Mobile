import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js'
import Vant from 'vant'
import 'vant/lib/index.css'
import VeeValidate, { Validator } from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate)
Vue.use(Vant)
Vue.config.productionTip = false

Validator.localize('zh_CN', zh_CN)

// 自定义规则
Validator.extend('mobile', {
  getMessage: field => '请输入正确的手机号码',
  validate: value =>
    value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
