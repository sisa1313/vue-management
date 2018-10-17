// permissions.vue
<template>
  <div class="main-container">
    <breadcrumb className="bdb" first="设置" second="权限"></breadcrumb>
    <div class="ta mt100">
      <p class="fs50 fw">管理员权限</p>
      <p class="fs30 mt20">只有admin帐号登录的才能看到这个页面</p>
    </div>
  </div>
</template>

<script>
import breadcrumb from '@/components/breadcrumb'
export default {
  components: {
    breadcrumb
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style>
</style>
