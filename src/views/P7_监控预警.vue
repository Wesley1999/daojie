<template>
  <div style="width: 1200px; text-align: center; margin: auto">
    选择投资组合
    <el-select v-model="value1" placeholder="请选择" style="width: 300px">
      <el-option label="组合1" value="组合1"></el-option>
      <el-option label="组合2" value="组合2"></el-option>
      <el-option label="组合3" value="组合3"></el-option>
    </el-select>

    <el-table :data="tableData" style="margin-top: 30px">
      <el-table-column prop="d1" label="股票名称" />
      <el-table-column prop="d2" label="今日涨跌" />
      <el-table-column prop="d3" label="当前盈亏" />
      <el-table-column prop="d4" label="当前盈亏比例" />
      <el-table-column prop="d5" label="当前持仓数量" />
      <el-table-column prop="d6" label="买入均价" />
      <el-table-column prop="d7" label="总成本" />
      <el-table-column prop="d8" label="市值" />
      <el-table-column prop="d9" label="是否跌破180日均线" />
      <el-table-column prop="d10" label="是否跌破7日均线" />
      <el-table-column prop="d11" label="是否有并购事件" />
      <el-table-column prop="d12" label="当前收盘价" />
    </el-table>

    <el-tabs v-model="activeName" style="margin-top: 30px">
      <el-tab-pane label="重要新闻" name="first">重要新闻</el-tab-pane>
      <el-tab-pane label="新闻分析" name="second">新闻分析</el-tab-pane>
      <el-tab-pane label="预警新闻" name="third">预警新闻</el-tab-pane>
      <el-tab-pane label="买入卖出建议" name="fourth">买入卖出建议</el-tab-pane>
    </el-tabs>
  </div>




</template>

<script setup>

import {ref} from "vue";

const value1 = ref('组合1')
const activeName = ref('first')

const tableData = [
  {d1: 'TMM', d2: '+5.1%', d3: '+33651.78', d4: '+20.15%', d5: '336.12', d6: '53.66', d7: '62231.3', d8: '363.1e', d9: '否', d10: '否', d11: '否', d12: '53.66',},
  {d1: 'WMT', d2: '+3.1%', d3: '+33651.78', d4: '+20.15%', d5: '336.12', d6: '53.66', d7: '62231.3', d8: '363.1e', d9: '否', d10: '否', d11: '否', d12: '53.66',},
  {d1: 'AAPL', d2: '+2.1%', d3: '+33651.78', d4: '+20.15%', d5: '336.12', d6: '53.66', d7: '62231.3', d8: '363.1e', d9: '否', d10: '否', d11: '否', d12: '53.66',},
  {d1: 'TSLA', d2: '+1.1%', d3: '+33651.78', d4: '+20.15%', d5: '336.12', d6: '53.66', d7: '62231.3', d8: '363.1e', d9: '否', d10: '否', d11: '否', d12: '53.66',}]


</script>

<style scoped>
</style>
