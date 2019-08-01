// 该模块是配置VueX的
import Vue from 'vue'
import Vuex from 'vuex'

import * as auth from '@/utils/auth.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 设置state中user 的初始值 -> 来源于本地储存
    user: auth.getUser()
  },
  mutations: {
    // 修改state中的user
    // 形参data就是新token所在的对象
    setUser (state, data) {
      // 更新本地存储中的token->data
      auth.setUser(data)
      // 更新state中的数据user6
      state.user = data
    }
  },
  actions: {

  }
})
export default store
