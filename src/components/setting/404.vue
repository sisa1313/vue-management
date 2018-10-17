// 404.vue
<template lang="html">
  <div class="ht dis-ctr-flex ofz">
    <div v-if="flag" class="ta" :class="className" @mouseenter="enter">
      <img src="@/assets/img/404.png" alt="">
      <p class="fs30">您访问的页面不存在</p>
    </div>
    <router-link v-else to="/">
      <el-button class="animated zoomInDown" type="primary">返回首页</el-button>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      flag: true,
      className: 'animated swing'
    }
  },
  methods: {
    enter () {
      this.className = `animated hinge`
      setTimeout(() => {
        this.flag = false
      }, 1000)
    }
  }
}
</script>

<style lang="css">
</style>
