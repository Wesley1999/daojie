<template>
  <div style="width: 1200px; text-align: center; margin: auto">

    <el-row>
      <el-col :span="3">股票类别</el-col><el-col :span="3"><el-select></el-select></el-col>
      <el-col :span="3">年份</el-col><el-col :span="3"><el-select></el-select></el-col>
      <el-col :span="3">月份</el-col><el-col :span="3"><el-select></el-select></el-col>
      <el-col :span="3">州</el-col><el-col :span="3"><el-select></el-select></el-col>
      <el-col :span="3">产业</el-col><el-col :span="3"><el-select></el-select></el-col>
      <el-col :span="3">行业</el-col><el-col :span="3"><el-select></el-select></el-col>
      <el-col :span="3">市值</el-col><el-col :span="3"><el-select></el-select></el-col>
      <el-col :span="3">营收环比增长</el-col><el-col :span="3"><el-select></el-select></el-col>
      <el-col :span="3">营收同比增长</el-col><el-col :span="3"><el-select></el-select></el-col>
      <el-col :span="3">净利润环比增长</el-col><el-col :span="3"><el-select></el-select></el-col>
      <el-col :span="3">净利润同比增长</el-col><el-col :span="3"><el-select></el-select></el-col>
      <el-col :span="3">收入</el-col><el-col :span="3"><el-select></el-select></el-col>
      <el-col :span="3">毛利率</el-col><el-col :span="3"><el-select></el-select></el-col>
      <el-col :span="3">营业利润率</el-col><el-col :span="3"><el-select></el-select></el-col>
      <el-col :span="3">净利润率</el-col><el-col :span="3"><el-select></el-select></el-col>
      <el-col :span="3">EBITDA利润率</el-col><el-col :span="3"><el-select></el-select></el-col>
      <el-col :span="3">每股收益</el-col><el-col :span="3"><el-select></el-select></el-col>
      <el-col :span="3">流动资产总额</el-col><el-col :span="3"><el-select></el-select></el-col>
      <el-col :span="3">流动负债总额</el-col><el-col :span="3"><el-select></el-select></el-col>
      <el-col :span="3">净债务</el-col><el-col :span="3"><el-select></el-select></el-col>
    </el-row>



    <div style="margin-top: 30px"></div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="symbol" label="Symbol" />
      <el-table-column prop="date" label="日期" />
      <el-table-column prop="open" label="开盘价" />
      <el-table-column prop="close" label="收盘价" />
      <el-table-column prop="high" label="最高价" />
      <el-table-column prop="low" label="最低价" />
    </el-table>

    <div style="margin-top: 30px">
      因子importance展示
      <br>
      <img src="https://pic-wsg-v2.oss-cn-shanghai.aliyuncs.com/picgo/20250307190508.png" style="width: 400px">
    </div>

    <div style="margin-top: 30px">
      <el-tabs v-model="activeName">
        <el-tab-pane label="下载CSV" name="1"><el-button>下载CSV</el-button></el-tab-pane>
        <el-tab-pane label="加入组合" name="2">
          加入组合 <el-select style="width: 150px;"></el-select>
          <el-button>提交</el-button></el-tab-pane>
        <el-tab-pane label="一键更新选股模块" name="3"><el-button>一键更新选股模块</el-button></el-tab-pane>
      </el-tabs>
    </div>
  </div>

</template>

<script setup>

import {ref} from "vue";

const activeName = ref('1')

const tableData = [
  {
    symbol: 'AAPL',
    date: '2016-05-03',
    open: 93.99,
    close: 94.19,
    high: 94.64,
    low: 93.57,
  },
  {
    symbol: 'ABEO',
    date: '2016-05-02',
    open: 6.25,
    close: 6.25,
    high: 6.25,
    low: 6.25,
  },
  {
    symbol: 'BTGN',
    date: '2016-05-04',
    open: 0.0001,
    close: 0.0001,
    high: 0.0001,
    low: 0.0001,
  },
  {
    symbol: 'BTGN',
    date: '2016-05-01',
    open: 6.25,
    close: 6.25,
    high: 6.25,
    low: 6.25,
  },
  {
    symbol: 'BTGN',
    date: '2016-05-01',
    open: 6.25,
    close: 6.25,
    high: 6.25,
    low: 6.25,
  },
  {
    symbol: 'BTGN',
    date: '2016-05-01',
    open: 6.25,
    close: 6.25,
    high: 6.25,
    low: 6.25,
  },
]

</script>

<style scoped>
</style>
