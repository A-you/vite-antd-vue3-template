/*
 * @Author: ymy
 * @Date: 2021-11-09 13:59:24
 * @LastEditors: ymy
 * @LastEditTime: 2021-11-09 14:02:35
 */


export default {
  namespaced: true,
  state: {
    name: "张三",
    age: 18
  },
  getters: {
    getName (state) {
      return `${state.name}是通过gatter获取`
    }
  },
  mutations: {
    addAge (state, size) {
      state.age += size
    },
    subAge (state, size) {
      state.age -= size
    }
  },
  actions: {

  },

}