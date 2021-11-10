<!--
 * @Author: ymy
 * @Date: 2021-11-09 14:48:43
 * @LastEditors: ymy
 * @LastEditTime: 2021-11-10 15:41:25
-->
<template>
  <!-- <menu-item :menu-info="item" /> -->
  <div>{{collapsed}}</div>
  <a-menu
    mode="inline"
    theme="dark"
    :inline-collapsed="collapsed"
    class="sidebar"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    @click="clickMenuItem"
  >
    <template
      v-for="item in menus"
      :key="item.id"
    >
      <menu-item :menu-info="item" />
    </template>
  </a-menu>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Menu } from 'ant-design-vue'
import MenuItem from "./menu-item.vue";
import { useStore } from "vuex";
export default {
  name: "vSidebar",
  components: {
    [Menu.name]: Menu,
    MenuItem
  },
  setup () {
    //定义打开和激活的菜单
    const state = reactive({
      openKeys: [],
      selectedKeys: []
    })

    const currentRoute = useRoute()
    const router = useRouter()

    const store = useStore()
    const { collapsed, menus } = toRefs(store.state.config)


    const clickMenuItem = ({ key }) => {
      if (/http(s)?:/.test(key)) {
        window.open(key)
      } else {
        router.push(key)
      }
    }

    return {
      clickMenuItem,
      menus,
      collapsed,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 65px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
// .sidebar-el-menu:not(.el-menu--collapse) {
//   width: 250px;
// }
// .sidebar > ul {
//   height: 100%;
// }
</style>