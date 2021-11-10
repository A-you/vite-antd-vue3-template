<!--
 * @Author: ymy
 * @Date: 2021-11-09 09:43:39
 * @LastEditors: ymy
 * @LastEditTime: 2021-11-10 13:27:04
-->
<template>
  <!-- 顶部header -->
  <v-header></v-header>
  <!-- 坐标菜单 -->
  <v-sidebar></v-sidebar>
  <!-- 主体内容区 -->
  <div
    class="content-container"
    :class="{'content-collapse':collapsed}"
  >
    <!-- 内容 -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { toRef } from 'vue'
import vHeader from "./header/index.vue";
import vSidebar from './sidebar/index.vue'
import { useStore } from 'vuex'
const store = useStore()
const collapsed = toRef(store.state.config, 'collapsed')

</script>

<style lang="scss" scoped>
.content-container {
  position: absolute;
  left: 250px;
  right: 0;
  top: 65px;
  bottom: 0;
  padding-bottom: 30px;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
  background: #f0f0f0;
}
.content {
  width: auto;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
  box-sizing: border-box;
}
.content-collapse {
  left: 80px;
}
</style>