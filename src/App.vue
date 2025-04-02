<template>
    <el-config-provider namespace="ep">
      <div>
        <div style="position: fixed; top: 0; left: 0; width: 100%; z-index: 1000; user-select: none">
          <div style="height: 58px; background: #2c724f; color: white; line-height: 58px;">
            <span style="margin-left: 50px">xxxxxxxxxxx@xx.com</span>
            <span style="margin-left: 50px">+86 133 3333 3333</span>
            <span style="float: right; margin-right: 50px">注册</span>
            <span style="float: right; margin-right: 30px">登录</span>
          </div>
          <div v-if = 'route.path != "/login"' style="width: 100%;">
            <img src="https://pic-wsg-v2.oss-cn-shanghai.aliyuncs.com/picgo/20250225235340.png" style="width: 200px; height: 60px;">

            <el-menu :router="true" :default-active="activate_menu()" mode="horizontal" background-color="#fff" text-color="#000" active-text-color="#409eff" style="width: calc(100% - 200px); height: 60px; position: absolute; left: 200px; top: 58px">
              <el-menu-item index="/p1">首页</el-menu-item>
              <el-menu-item index="/p2">行情分析</el-menu-item>
              <el-menu-item index="/p3">行业分析</el-menu-item>
              <el-menu-item index="/p4">智能选股</el-menu-item>
              <el-menu-item index="/p5">公司分析</el-menu-item>
              <el-menu-item index="/p6">持仓组合</el-menu-item>
              <el-menu-item index="/p7">监控预警</el-menu-item>
              <el-menu-item index="/p8">每月推荐</el-menu-item>
            </el-menu>
          </div>
        </div>
        <div style="margin-top: 150px">
          <div>
            <router-view></router-view>
          </div>
        </div>
      </div>
    </el-config-provider>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import router from "~/router/routes";
import {onMounted} from "vue";
let route = useRoute();

const activate_menu = () => {
  return location.pathname
}

</script>

<style scoped>

.ep-menu--horizontal > .ep-menu-item.is-active {
  color: #2c724f !important;
}

.ep-menu--horizontal.ep-menu {
  font-weight: bold;
}

.ep-menu--horizontal > .ep-menu-item:hover {
  color: #2c724f !important;
  background-color: white !important;
}

.ep-menu--horizontal {
  background-color: white !important;
}

.ep-menu--horizontal > .ep-menu-item.is-active {
  border-bottom: 2px solid #2c724f !important;
}

</style>

