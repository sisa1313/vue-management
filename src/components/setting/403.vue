// 403.vue
<template>
  <div class="main-container">
    <div class="ta mt100 animated swing">
      <p class="fs200 fw">403</p>
      <p class="fs30">您没有权限访问该页面</p>
      <el-button class="mt20" type="primary" @click="goBack">返回上一页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
</style>
