import { createStore } from 'vuex'

export default createStore({
  state: {
    workspaceFlag:0
  },
  mutations: {
    workspaceFlagUp(state){
      state.workspaceFlag = 1
    },
    workspaceFlagDown(state){
      state.workspaceFlag = 0
    }
  },
  actions: {
  },
  modules: {
  }
})
