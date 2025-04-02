<template>
  <div style="width: 1200px; margin: auto; text-align: center;">
    <el-card style="margin-top: 10px; margin-bottom: 10px; height: 500px">市场宏观分析</el-card>
    <el-card style="margin-top: 10px; margin-bottom: 10px; height: 500px">AI分析</el-card>
  </div>

</template>

<script setup>

import {ref} from "vue";

const value = ref('MACD')
const activeName = ref('first')
const showAi = ref(true)

</script>

<style scoped>
</style>
