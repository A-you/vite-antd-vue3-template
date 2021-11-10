<!--
 * @Author: ymy
 * @Date: 2021-11-08 17:00:13
 * @LastEditors: ymy
 * @LastEditTime: 2021-11-10 15:51:14
-->
<script setup>
</script>

<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<style>
@import url("./assets/css/main.css");
</style>
