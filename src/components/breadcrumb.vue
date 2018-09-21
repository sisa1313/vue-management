// breadcrumb.vue
<template lang="html">
  <el-breadcrumb separator="/" :class="className">
    <el-breadcrumb-item :to="{ name: 'blank' }">空白页</el-breadcrumb-item>
    <el-breadcrumb-item>{{ first }}</el-breadcrumb-item>
    <el-breadcrumb-item>{{ second }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  props: {
    className: String,
    first: String,
    second: String
  }
}
</script>

<style lang="css">
.el-breadcrumb {
  padding: 10px 0 10px 10px;
}
</style>
