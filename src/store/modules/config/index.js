/*
 * @Author: ymy
 * @Date: 2021-11-09 14:58:49
 * @LastEditors: ymy
 * @LastEditTime: 2021-11-09 16:02:04
 */
export default {
  namespaced: true,
  state: {
    collapsed: true, //菜单是否折叠
    age: 18
  },
  getters: {
  },
  mutations: {
    addAge (state, size) {
      state.age += size
    },
    subAge (state, size) {
      state.age -= size
    },
    //侧边栏折叠
    handleCollapse (state, data) {
      state.collapsed = data
    }
  },
  actions: {

  },

}