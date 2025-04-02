<template>
  <div style="width: 1200px; text-align: center; margin: auto">
    <div class="top">
      <el-select v-model="value1" placeholder="请输入公司代码" style="width: 240px" allow-create filterable>
        <el-option v-for="item in symbols" :key="item" :label="item" :value="item"/>
      </el-select>

      <el-select v-model="value2" placeholder="年份" style="width: 240px; margin-left: 20px" allow-create filterable>
        <el-option v-for="item in [2020, 2021, 2022, 2023, 2024, 2025]" :key="item" :label="item" :value="item"/>
      </el-select>

      <el-select v-model="value3" placeholder="季度" style="width: 240px; margin-left: 20px" allow-create filterable>
        <el-option v-for="item in ['Q1', 'Q2', 'Q3', 'Q4']" :key="item" :label="item" :value="item"/>
      </el-select>

      <el-button type="primary" style="margin-left: 20px">开始分析</el-button>
      <el-button type="primary" style="margin-left: 20px">下载完整报告</el-button>
    </div>

    <div class="main" style="margin-top: 50px">

      <el-card style="text-align: left">
        <div style="text-align: center; font-weight: bold">2025.02.18</div><br><br>
        <el-row>
          <el-col class="data-label" :span="4">代码</el-col><el-col :span="4">{{ value1 }}</el-col>
          <el-col class="data-label" :span="4">价格</el-col><el-col :span="4">244.6 USD</el-col>
          <el-col class="data-label" :span="4">评级</el-col><el-col :span="4">稳定增长型</el-col>
          <el-col class="data-label" :span="4">建议</el-col><el-col :span="4">购买</el-col>
          <el-col class="data-label" :span="4">行业</el-col><el-col :span="4">Technology</el-col>
        </el-row>
        <el-row>
          <el-col class="data-label" :span="4">描述</el-col><el-col :span="20">......</el-col>
          <el-col class="data-label" :span="4">产品</el-col><el-col :span="20">......</el-col>
        </el-row>
        <hr>
        <el-row>
          <el-col class="data-label" :span="4">ris</el-col><el-col :span="4">123.456</el-col>
          <el-col class="data-label" :span="4">12个月收益率</el-col><el-col :span="4">123.456</el-col>
          <el-col class="data-label" :span="4">6个月收益率</el-col><el-col :span="4">123.456</el-col>
          <el-col class="data-label" :span="4">3个月收益率</el-col><el-col :span="4">123.456</el-col>
          <el-col class="data-label" :span="4">总资产净值roa</el-col><el-col :span="4">123.456</el-col>
          <el-col class="data-label" :span="4">市销率</el-col><el-col :span="4">123.456</el-col>
          <el-col class="data-label" :span="4">净利润</el-col><el-col :span="4">123.456</el-col>
          <el-col class="data-label" :span="4">每股资本支出</el-col><el-col :span="4">123.456</el-col>
          <el-col class="data-label" :span="4">资产总额增长(季度)</el-col><el-col :span="4">123.456</el-col>
          <el-col class="data-label" :span="4">投入资本回报率</el-col><el-col :span="4">123.456</el-col>
          <el-col class="data-label" :span="4">市净值fb</el-col><el-col :span="4">123.456</el-col>
          <el-col class="data-label" :span="4">利息覆盖率</el-col><el-col :span="4">123.456</el-col>
          <el-col class="data-label" :span="4">收入增长率</el-col><el-col :span="4">123.456</el-col>
          <el-col class="data-label" :span="4">企业价值与EBITDA比率</el-col><el-col :span="4">123.456</el-col>
          <el-col class="data-label" :span="4">应收账款周转率</el-col><el-col :span="4">123.456</el-col>
          <el-col class="data-label" :span="4">自由现金流收益率</el-col><el-col :span="4">123.456</el-col>
          <el-col class="data-label" :span="4">市盈率PE</el-col><el-col :span="4">123.456</el-col>
          <el-col class="data-label" :span="4">净资产收益roe</el-col><el-col :span="4">123.456</el-col>
          <el-col class="data-label" :span="4">资产负债率</el-col><el-col :span="4">123.456</el-col>
          <el-col class="data-label" :span="4">总之产增长率(1年)</el-col><el-col :span="4">123.456</el-col>
          <el-col class="data-label" :span="4">毛利率</el-col><el-col :span="4">123.456</el-col>
          <el-col class="data-label" :span="4">财报分析</el-col><el-col :span="4">123.456</el-col>
          <el-col class="data-label" :span="4">舆情</el-col><el-col :span="4">123.456</el-col>
          <el-col class="data-label" :span="4">市值</el-col><el-col :span="4">123.456</el-col>
          <el-col class="data-label" :span="4">是否半年净利润为正</el-col><el-col :span="4">123.456</el-col>
          <el-col class="data-label" :span="4">是否营收环比增长</el-col><el-col :span="4">123.456</el-col>
          <el-col class="data-label" :span="4">是否营收同比增长</el-col><el-col :span="4">123.456</el-col>
          <el-col class="data-label" :span="4">是否净利润环比增长</el-col><el-col :span="4">123.456</el-col>
          <el-col class="data-label" :span="4">是否净利润同比增长</el-col><el-col :span="4">123.456</el-col>
        </el-row>
      </el-card>
    </div>

    <el-tabs v-model="activeName" style="margin-top: 30px">
      <el-tab-pane label="行业分析" name="first">
        <el-row>
          <el-col :span="6">
            近期{行业}相关新闻:
            <ul>
              <li>...</li>
              <li>...</li>
              <li>...</li>
              <li>...</li>
              <li>...</li>
            </ul>
          </el-col>
          <el-col :span="6">
            近期{行业}相关新闻:
            <ul>
              <li>...</li>
              <li>...</li>
              <li>...</li>
              <li>...</li>
              <li>...</li>
            </ul>
          </el-col>
          <el-col :span="6">
            近期{{value1}}相关新闻:
            <ul>
              <li>...</li>
              <li>...</li>
              <li>...</li>
              <li>...</li>
              <li>...</li>
            </ul>
          </el-col>
          <el-col :span="6">
            近期{{value1}}相关公司新闻:
            <ul>
              <li>...</li>
              <li>...</li>
              <li>...</li>
              <li>...</li>
              <li>...</li>
            </ul>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="公司营运分析" name="second">
        <el-row>
          <el-col :span="6">
            {{value1}}产品历史销售额:
            <ul>
              <li>...</li>
            </ul>
          </el-col>
          <el-col :span="6">
            {{value1}}供应链公司相关新闻:
            <ul>
              <li>...</li>
            </ul>
          </el-col>
          <el-col :span="6">
            {{value1}}ROE:
            <ul>
              <li>...</li>
            </ul>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="财务分析" name="third">
        {{value1}} 财务报告:<br>
        1. ...<br>
        2. ...<br>
        3. ...<br>
        4. ...<br>
        5. ...<br>
      </el-tab-pane>
      <el-tab-pane label="决策分析" name="fourth">决策分析</el-tab-pane>
    </el-tabs>

  </div>
</template>

<script setup>
import {ref} from "vue";
import {getSymbols} from "~/utils/symbol_utils";
let symbols = getSymbols()

const value1 = ref("AAPL")
const value2 = ref("2025")
const value3 = ref("Q1")
const showPage = ref("行业分析")
const activeName = ref('first')

</script>

<style scoped>
.data-label {
  font-weight: bold;
}
</style>
