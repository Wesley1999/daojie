<template>
  <div style="width: 1200px; margin: auto; text-align: center;">
    股票类别 <el-select style="width: 300px;"><el-option>港股</el-option><el-option>美股</el-option></el-select>
    股票名称 <el-select style="width: 300px;"><el-option>AAPL</el-option></el-select>
    日期范围 <el-date-picker type="daterange"></el-date-picker>
    <br>
    <br>
    <br>
    <br>
    <el-card style="width: 1000px; display: inline-block; margin: 1px 5px">
      开盘价: 4630 收盘价 4700 最高价 4750 最低价 4500 成交量 160000 MACD -12.5 RSI 55.3 月均价 4600 涨跌幅 1.5%
      <div ref="chart1Ref" style="width: 980px; height: 450px;"></div>
    </el-card>
    <br>
    <br>


    <el-tabs v-model="activeName">
      <el-tab-pane label="行业分析" name="1">行业分析</el-tab-pane>
      <el-tab-pane label="偿债能力" name="2">偿债能力</el-tab-pane>
      <el-tab-pane label="营运能力" name="3">营运能力</el-tab-pane>
      <el-tab-pane label="盈利能力" name="4">盈利能力</el-tab-pane>
      <el-tab-pane label="成长能力" name="5">成长能力</el-tab-pane>
      <el-tab-pane label="股票评级" name="6">股票评级</el-tab-pane>
    </el-tabs>
  </div>

</template>

<script setup>

import {onMounted, ref} from "vue";
import * as echarts from 'echarts';

const value = ref('MACD')
const activeName = ref('1')
const showAi = ref(true)

let chart1 = null;
let chart1Ref = ref(null);
let chart1Option = {
  xAxis: {
    data: ['2025-01-01', '2025-01-02', '2025-01-03', '2025-01-04', '2025-01-05', '2025-01-06', '2025-01-07', '2025-01-08', '2025-01-09', '2025-01-10', '2025-01-11', '2025-01-12']
  },
  yAxis: {},
  series: [
    {
      type: 'candlestick',
      data: [
        [20, 34, 10, 38],
        [40, 35, 30, 50],
        [31, 38, 33, 44],
        [38, 15, 5, 42],
        [20, 34, 10, 38],
        [40, 35, 30, 50],
        [31, 38, 33, 44],
        [38, 15, 5, 42],
        [20, 34, 10, 38],
        [40, 35, 30, 50],
        [31, 38, 33, 44],
        [38, 15, 5, 42],
      ]
    }
  ]
};

onMounted(() => {
  chart1 = echarts.init(chart1Ref.value);
  chart1.setOption(chart1Option);
});

</script>

<style scoped>
</style>
