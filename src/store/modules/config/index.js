/*
 * @Author: ymy
 * @Date: 2021-11-09 14:58:49
 * @LastEditors: ymy
 * @LastEditTime: 2021-11-10 13:59:07
 */
export default {
  namespaced: true,
  state: {
    collapsed: false, //菜单是否折叠
    tag_list: [], //缓冲标签
    menus: [
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
          },
          {
            id: 10,
            parnet_id: 2,
            is_dir: false,
            name: "菜单管理",
            route: "/sys/resource_list"
          },
          {
            id: 22,
            parent_id: 2,
            is_dir: false,
            name: "资源管理",
            route: "/sys/org_manage"
          }
        ],
      },
    ]
  },
  getters: {
  },
  mutations: {
    //侧边栏折叠
    handleCollapse (state, data) {
      state.collapsed = data
    }
  },
  actions: {

  },

}