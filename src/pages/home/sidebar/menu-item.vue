<!--
 * @Author: ymy
 * @Date: 2021-11-09 15:05:10
 * @LastEditors: ymy
 * @LastEditTime: 2021-11-09 16:10:20
-->
<template>
  <a-sub-menu
    v-if="menuInfo.is_dir"
    :key="menuInfo.id"
    v-bind="$attrs"
  >
    <template #title>
      <span>
        <!-- <a-icon type="mail" /> -->
        <!-- <i class="el-icon-menu menu-icon"></i> -->
        <icon-font
          v-if="menuInfo.icon"
          :type="menuInfo.icon"
        />
        <SettingOutlined v-else></SettingOutlined>
        <span>{{menuInfo.name}}</span>
      </span>
    </template>
    <template
      v-for="subItem in menuInfo.subs"
      :key="subItem.id"
    >
      <template v-if="subItem.is_dir">
        <menu-item :menu-info="subItem"></menu-item>
      </template>
      <a-menu-item
        v-else
        :key="subItem.route"
      >
        <icon-font
          v-if="subItem.icon"
          :type="subItem.icon"
        />
        <SettingOutlined v-else></SettingOutlined>
        <span>{{subItem.name}}</span>
      </a-menu-item>
    </template>
  </a-sub-menu>
  <a-menu-item
    v-else
    :key="menuInfo.route"
  >
    <!-- <a-icon type="mail" /> -->
    <icon-font
      v-if="menuInfo.icon"
      :type="menuInfo.icon"
    />
    <SettingOutlined v-else></SettingOutlined>
    <span>{{menuInfo.name}}</span>
  </a-menu-item>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { Menu } from "ant-design-vue";
import { SettingOutlined } from '@ant-design/icons-vue'
export default {
  name: "menuItem",
  components: {
    'a-sub-menu': Menu.SubMenu,
    'a-menu-item': Menu.Item,
    SettingOutlined
    // 'a-icon': Icon.Icon
  },
  props: {
    menuInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup () {
    const state = reactive({
      count: 0,
    })

    return {
      ...toRefs(state),
    }
  }
}
</script>

<style lang="scss" scoped>
</style>