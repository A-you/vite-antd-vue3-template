/*
 * @Author: ymy
 * @Date: 2021-11-09 10:07:03
 * @LastEditors: ymy
 * @LastEditTime: 2021-11-09 14:18:32
 */
import { createStore } from 'vuex'
import modules from './modules/index'

const store = createStore({
  modules
})


export default store
