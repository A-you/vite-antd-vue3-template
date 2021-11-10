/*
 * @Author: ymy
 * @Date: 2021-11-10 13:10:04
 * @LastEditors: ymy
 * @LastEditTime: 2021-11-10 13:28:01
 */
import routerTransition from '@/components/transition/routerTransition.vue'

const routes = [
  {
    path: '/sys',
    name: 'Sys',
    component: routerTransition,
    children: [
      {
        path: "user/list",
        name: "userList",
        component: () => import(/* webpackChunkName: "sys" */ '@/pages/sysConfig/user/userList.vue'),
      }
    ]
  }
]

export default routes