<!--
 * @Author: ymy
 * @Date: 2021-11-09 14:46:24
 * @LastEditors: ymy
 * @LastEditTime: 2021-11-10 12:52:22
-->
<template>
  <div class="layout-header">
    <div class="left-options">
      <span
        class="menu-fold"
        @click="handleCollapse(!collapsed)"
      >
        <component :is="collapsed ? 'menu-unfold-outlined' : 'menu-fold-outlined'" />
      </span>
    </div>
    <div class="right-options">
      {{collapsed}}
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons-vue'

export default {
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined
  },
  setup () {
    const store = useStore()
    const { collapsed } = toRefs(store.state.config)
    console.log("是否折叠", collapsed)
    const { "config/handleCollapse": [handleCollapse] } = store._mutations
    return {
      collapsed,
      handleCollapse
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-header {
  width: 100%;
  height: 65px;
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
}
.menu-fold {
  padding: 0 15px;
  font-size: 20px;
  cursor: pointer;
}
</style>