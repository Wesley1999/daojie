<template>
  page1111
</template>

<script>

import axios from "~/utils/request";

export default {
  data() {
    return {
      aaa: null
    }
  },
  methods: {
    f1() {
      let formData = new FormData();
      formData.append("xx", "123")
      axios({
        method: 'POST',
        url: "/api/xxx",
        data: formData
      }).then(res => {
        this.aaa = res.data.data;
      })
    }
  },
  mounted() {
    // this.f1()
  }
}
</script>

<style scoped>
</style>
