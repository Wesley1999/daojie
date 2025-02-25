<template>
  <div>
    <el-config-provider namespace="ep">
      <div style="text-align: center; margin-top: 10px">
        <nav>
          <router-link class="router-link" active-class="active" to="/">首页</router-link>
          <router-link class="router-link" active-class="active" to="/page1">页面1</router-link>
          <router-link class="router-link" active-class="active" to="/page2">页面2</router-link>
        </nav>
      </div>
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script>

export default {
  data() {
    return {

    };
  },
  methods: {

  },
  mounted() {

  },
}
</script>

<style>
.active {
  color: #608bd2;
  pointer-events: none;
  opacity: 1;
}

.router-link {
  margin: 0 20px;
}
</style>

