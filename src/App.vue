<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      menuDataPath: 'static/menu_data.json'
    }
  },
  created () {
    this.getMenuDataAjax()
  },
  methods: {
    getMenuDataAjax () {  // 获取菜单列表数据
      this.$http({
        url: this.menuDataPath,
        method: 'GET'
      }).then(response => {  // 请求成功回调
        this.sessionSet('MENU_DATA', response.data)
      }).catch(error => {
        // 请求失败回调
        this.errorResponse(error)
      })
    }
  }
}
</script>

<style lang="scss">
  @import './style/index'
</style>
