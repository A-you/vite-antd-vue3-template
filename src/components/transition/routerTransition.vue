<!--
 * @Author: ymy
 * @Date: 2021-11-10 13:13:45
 * @LastEditors: ymy
 * @LastEditTime: 2021-11-10 14:02:31
-->
<template>
  <router-view v-slot="{Component}">
    <transition
      name="zoom-fade"
      mode="out-in"
    >
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script>
export default {
  name: "routerTransition",
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
//路由动画
.zoom-fade-enter-active,
.zoom-fade-leave-active {
  transition: transform 0.35s, opacity 0.28s ease-in-out;
}

.zoom-fade-enter-from {
  opacity: 0;
  transform: scale(0.97);
}

.zoom-fade-leave-to {
  opacity: 0;
  transform: scale(1.03);
}
</style>