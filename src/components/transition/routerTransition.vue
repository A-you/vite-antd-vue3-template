<!--
 * @Author: ymy
 * @Date: 2021-11-10 13:13:45
 * @LastEditors: ymy
 * @LastEditTime: 2021-11-10 13:22:47
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
</style>