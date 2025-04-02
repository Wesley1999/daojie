<template>
  <div style="width: 1200px; text-align: center; margin: auto">
    <el-card style="margin-top: 10px; margin-bottom: 10px">
      <h1>AAPL 公司基础信息</h1>
      <div ref="chart1Ref" style="width: 980px; height: 350px;"></div>
      <h1>相关舆情</h1>
      苹果公司近期宣布与阿里巴巴达成合作，将在中国市场推出“苹果智能”（Apple Intelligence）人工智能功能。阿里巴巴董事局主席蔡崇信在阿联酋迪拜举办的World Governments Summit 2025峰会上确认了这一消息，表示苹果公司在中国市场需要本地化的合作伙伴，经过多家中国企业的洽谈后，最终选择了阿里巴巴。
      <h1>推荐理由 <el-button>一键分析</el-button></h1>
      <hr>
      <el-row>
        <el-col :offset="4" :span="2">财务状况</el-col><el-col :span="6">A</el-col>
        <el-col :offset="2" :span="2">行业前景</el-col><el-col :span="8">A</el-col>
        <el-col :offset="4" :span="2">公司竞争力</el-col><el-col :span="6">A</el-col>
        <el-col :offset="2" :span="2">宏观环境</el-col><el-col :span="8">A</el-col>
      </el-row>
      <div style="text-align: center; margin-top: 30px">
        <el-button>一键加入自选</el-button>
      </div>
    </el-card>
    <el-card style="margin-top: 10px; margin-bottom: 10px">
      <h1>AAPL 公司基础信息</h1>
      <div ref="chart2Ref" style="width: 980px; height: 350px;"></div>
      <h1>相关舆情</h1>
      苹果公司近期宣布与阿里巴巴达成合作，将在中国市场推出“苹果智能”（Apple Intelligence）人工智能功能。阿里巴巴董事局主席蔡崇信在阿联酋迪拜举办的World Governments Summit 2025峰会上确认了这一消息，表示苹果公司在中国市场需要本地化的合作伙伴，经过多家中国企业的洽谈后，最终选择了阿里巴巴。
      <h1>推荐理由 <el-button>一键分析</el-button></h1>
      <hr>
      <el-row>
        <el-col :offset="4" :span="2">财务状况</el-col><el-col :span="6">A</el-col>
        <el-col :offset="2" :span="2">行业前景</el-col><el-col :span="8">A</el-col>
        <el-col :offset="4" :span="2">公司竞争力</el-col><el-col :span="6">A</el-col>
        <el-col :offset="2" :span="2">宏观环境</el-col><el-col :span="8">A</el-col>
      </el-row>
      <div style="text-align: center; margin-top: 30px">
        <el-button>一键加入自选</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup>

import {onMounted, ref} from "vue";
import * as echarts from "echarts";

let chart1 = null;
let chart2 = null;
let chart1Ref = ref(null);
let chart2Ref = ref(null);
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
  chart2 = echarts.init(chart2Ref.value);
  chart2.setOption(chart1Option);
});

</script>

<style scoped>
</style>
