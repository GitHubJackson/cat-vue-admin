import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  sideBarSelected: 0 // 侧边栏选中项记忆
}

const mutations = {
  // 更新侧边栏选择状态
  updateSidebarSelected (state, val) {
    state.sideBarSelected = val
  }
}

export default new Vuex.Store({
  state,
  mutations
})
