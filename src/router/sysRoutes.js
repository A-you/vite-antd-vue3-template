/*
 * @Author: ymy
 * @Date: 2021-11-10 13:10:04
 * @LastEditors: ymy
 * @LastEditTime: 2021-11-10 13:46:25
 */
import routerTransition from '@/components/transition/routerTransition.vue'

const routes = [
  {
    path: 'sys',
    name: 'Sys',
    component: routerTransition,
    children: [
      {
        path: "user_list",
        name: "userList",
        meta: {
          title: "用户列表"
        },
        component: () => import(/* webpackChunkName: "sys" */ '@/pages/sysConfig/user/userList.vue'),
      },
      {
        path: "role_list",
        name: "roleList",
        meta: {
          title: "角色列表",
        },
        component: () => import(/* webpackChunkName: "sys" */ '@/pages/sysConfig/role/roleList.vue'),
      },
      {
        path: "resource_list",
        name: "resourceList",
        meta: {
          title: "资源列表"
        },
        component: () => import(/* webpackChunkName: "sys" */ '@/pages/sysConfig/resource/index.vue'),
      },
      {
        path: "org_manage",
        name: "orgManage",
        meta: {
          title: "组织管理"
        },
        component: () => import(/* webpackChunkName: "sys" */ '@/pages/sysConfig/org/index.vue'),
      }
    ]
  }
]

export default routes