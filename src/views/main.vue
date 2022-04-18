<!--
 * @Autor: GeekMzy
 * @Date: 2022-04-18 09:43:52
 * @LastEditors: GeekMzy
 * @LastEditTime: 2022-04-18 09:51:42
 * @FilePath: \vite_vue3_ts\src\views\main.vue
 * @Author: desktop-1llkr2o
-->
<template>
  <div>用户名:{{ mainStore.name }}<br />长度:{{ mainStore.nameLength }}</div>
  <hr />
  <button @click="updateName">修改store中的name</button>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/main'

const mainStore = useMainStore()

const updateName = () => {
  // $patch 修改 store 中的数据
  mainStore.$patch({
    name: '名称被修改了,nameLength也随之改变了',
  })
}
</script>
