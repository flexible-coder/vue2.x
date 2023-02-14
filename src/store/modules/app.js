const app = {
  namespaced: true,
  state: {
    sidebar: {
      opened: true,
    },
    _routers: []
  },
  mutations: {
    //展开收起侧边栏
    TOGGLE_SIDEBAR: state => {
      state.sidebar.opened = !state.sidebar.opened
    },
    //设置路由
    SET_ROUTERS: (state, data) => {
      state.sidebar._routers = data
    }
  },
  actions: {
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
  }
}
export default app