<template>
  <div style="width: 1200px; margin: auto">
    <img src="https://pic-wsg-v2.oss-cn-shanghai.aliyuncs.com/picgo/20250326205040.png" style="height: 600px; width: 100%">
    <br>
    <br>
    <br>
    <br>
    <p style="font-size: 20px">OUR SERVICES</p>
    <p style="font-size: 40px"><span style="font-weight: bold">Best Solutions</span> For Your Business</p>
    <br>

    <el-card class="service-card" shadow="hover" @click="router.push('p2')"><div class="service-card-icon"><el-icon><Connection /></el-icon></div><div class="service-card-title">行情分析</div><div class="service-card-description">Thought leadership pass the clap hackathon wearables.</div><div class="service-card-more">More ></div></el-card>
    <el-card class="service-card" shadow="hover" @click="router.push('p3')"><div class="service-card-icon"><el-icon><Connection /></el-icon></div><div class="service-card-title">行业分析</div><div class="service-card-description">Thought leadership pass the clap hackathon wearables.</div><div class="service-card-more">More ></div></el-card>
    <el-card class="service-card" shadow="hover" @click="router.push('p4')"><div class="service-card-icon"><el-icon><Connection /></el-icon></div><div class="service-card-title">智能选股</div><div class="service-card-description">Thought leadership pass the clap hackathon wearables.</div><div class="service-card-more">More ></div></el-card>
    <el-card class="service-card" shadow="hover" @click="router.push('p5')"><div class="service-card-icon"><el-icon><Connection /></el-icon></div><div class="service-card-title">股票筛选</div><div class="service-card-description">Thought leadership pass the clap hackathon wearables.</div><div class="service-card-more">More ></div></el-card>
    <el-card class="service-card" shadow="hover" @click="router.push('#')"><div class="service-card-icon"><el-icon><Connection /></el-icon></div><div class="service-card-title">公司分析</div><div class="service-card-description">Thought leadership pass the clap hackathon wearables.</div><div class="service-card-more">More ></div></el-card>
    <el-card class="service-card" shadow="hover" @click="router.push('p6')"><div class="service-card-icon"><el-icon><Connection /></el-icon></div><div class="service-card-title">持仓组合</div><div class="service-card-description">Thought leadership pass the clap hackathon wearables.</div><div class="service-card-more">More ></div></el-card>
    <el-card class="service-card" shadow="hover" @click="router.push('p7')"><div class="service-card-icon"><el-icon><Connection /></el-icon></div><div class="service-card-title">监控预警</div><div class="service-card-description">Thought leadership pass the clap hackathon wearables.</div><div class="service-card-more">More ></div></el-card>
    <el-card class="service-card" shadow="hover" @click="router.push('p8')"><div class="service-card-icon"><el-icon><Connection /></el-icon></div><div class="service-card-title">每月推荐</div><div class="service-card-description">Thought leadership pass the clap hackathon wearables.</div><div class="service-card-more">More ></div></el-card>

  </div>
</template>

<script setup>

import {ref} from "vue";
import { useRouter } from 'vue-router';
const router = useRouter();

</script>

<style scoped>
.service-card {
  height: 288px;
  width: 278px;
  margin: 5px;
  display: inline-block;
  cursor: pointer;
  padding-left: 10px;
}
.service-card-icon {
  font-size: 40px;
  margin-top: 20px;
}
.service-card-title {
  font-size: 20px;
  font-weight: bold;
}
.service-card-description {
  margin-top: 20px;
}
.service-card-more {
  margin-top: 30px;
}
</style>
