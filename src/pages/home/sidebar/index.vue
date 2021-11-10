<!--
 * @Author: ymy
 * @Date: 2021-11-09 14:48:43
 * @LastEditors: ymy
 * @LastEditTime: 2021-11-10 12:50:51
-->
<template>
  <!-- <menu-item :menu-info="item" /> -->
  <div>{{collapsed}}</div>
  <a-menu
    mode="inline"
    theme="dark"
    :inline-collapsed="collapsed"
    class="sidebar"
    :selectedKeys="['/sys/company_list']"
    :openKeys=[2]
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
    // 菜单
    const menus = [
      {
        id: 1,
        name: "仪表盘",
        is_dir: false,
        parnet_id: null,
        route: "/dashbord",
      },
      {
        id: 2,
        is_dir: true,
        parnet_id: null,
        name: "系统设置",
        subs: [
          {
            id: 10,
            parnet_id: 2,
            is_dir: false,
            name: "菜单管理",
            route: "/sys/menu_privately_list"
          },
          {
            id: 3,
            parnet_id: 2,
            is_dir: false,
            route: "/sys/user_list",
            name: "用户管理",
          },
          {
            id: 11,
            parnet_id: 2,
            is_dir: false,
            route: '/sys/role_list',
            name: '角色管理'
          }

        ],
      },
      {
        id: 6,
        parnet_id: null,
        name: "通用数据配置",
        is_dir: true,
        subs: [
          {
            id: 7,
            parnet_id: 6,
            is_dir: false,
            name: "轮位别名",
            route: "/wheel_alias_list",
          },
          {
            id: 8,
            parnet_id: 6,
            is_dir: false,
            name: "车型配置",
            route: "/car_type",
          },
        ],
      },
    ]
    const store = useStore()
    const { collapsed } = toRefs(store.state.config)

    return {
      menus,
      collapsed,
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