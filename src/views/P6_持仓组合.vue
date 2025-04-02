<template>
  <div style="width: 1200px; text-align: center; margin: auto">
    <div class="top">
      选择投资组合
      <el-select v-model="portfolioId" style="width: 200px">
        <el-option value="1" label="组合1"></el-option>
        <el-option value="2" label="组合2"></el-option>
        <el-option value="3" label="组合3"></el-option>
        <el-option value="4" label="组合4"></el-option>
      </el-select>
      <el-button @click="dialogManageVisible=true" style="margin-left: 20px">管理当前组合</el-button>
      <el-button>删除当前组合</el-button>
      <el-button type="success" @click="dialogCreateVisible=true">创建组合</el-button><br>

    </div>
    <div class="main" style="margin-top: 30px">
      <div class="left" style="width: 100%; float: left">
        <el-table :data="tableData">
          <el-table-column label="序号" prop="d1" />
          <el-table-column label="证券代码" prop="d2" />
          <el-table-column label="证券名称" prop="d3" />
          <el-table-column label="当前持仓数" prop="d4" />
          <el-table-column label="买入均价" prop="d5" />
          <el-table-column label="购买成本" prop="d6" />
          <el-table-column label="持仓盈亏" prop="d7" />
          <el-table-column label="分红或利息" prop="d8" />
          <el-table-column label="盈亏比" prop="d9" />
          <el-table-column label="前一日收盘价" prop="d10" />
          <el-table-column label="实时报价" prop="d11" />
        </el-table>
      </div>

    </div>
  <el-dialog v-model="dialogCreateVisible" title="创建组合" width="600">
    组合名称 <el-input></el-input>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogCreateVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogCreateVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
  <el-dialog v-model="dialogManageVisible" title="管理组合" width="600">
    组合名称 <el-input style="margin-left: 20px; width: 300px"></el-input><el-button type="primary" style="margin-left: 20px;" @click="dialogManageVisible = false">保存名称</el-button>
    <br>
    <br>
    <hr>
    <br>
    证券 <el-select style="margin-left: 20px; width: 200px"></el-select><br><br>
    数量 <el-input style="margin-left: 20px; width: 200px"></el-input><br><br>
    价格 <el-input style="margin-left: 20px; width: 200px"></el-input><br><br>
    <el-button>买入</el-button>
    <el-button>卖出</el-button>

  </el-dialog>
  <el-dialog v-model="dialogVisible" title="添加证券" width="600">
    证券代码 <el-select></el-select>
    买入股数 <el-input></el-input>
    买入价格 <el-input></el-input>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
  </div>
</template>

<script setup>

import {ref} from "vue";

const portfolioId = ref('1')

const tableData = [
  {d1: '1', d2: 'AAPL', d3: 'Apple Inc.', d4: '100', d5: '100', d6: '10000', d7: '1000', d8: '100', d9: '10%', d10: '100', d11: '100',},
  {d1: '2', d2: 'SFM', d3: 'Sprouts Farmers Market Inc.', d4: '100', d5: '100', d6: '10000', d7: '1000', d8: '100', d9: '10%', d10: '100', d11: '100',},
  {d1: '3', d2: 'TSLA', d3: 'Tesla Inc.', d4: '100', d5: '100', d6: '10000', d7: '1000', d8: '100', d9: '10%', d10: '100', d11: '100',},
  {d1: '4', d2: 'GOOGL', d3: 'Alphabet Inc.', d4: '100', d5: '100', d6: '10000', d7: '1000', d8: '100', d9: '10%', d10: '100', d11: '100',},
  {d1: '5', d2: 'AMZN', d3: 'Amazon.com Inc.', d4: '100', d5: '100', d6: '10000', d7: '1000', d8: '100', d9: '10%', d10: '100', d11: '100',},
]

const dialogVisible = ref(false)
const dialogCreateVisible = ref(false)
const dialogManageVisible = ref(false)

</script>

<style scoped>
</style>
