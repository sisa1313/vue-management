// login.vue
<template lang="html">
  <div class="login" v-loading.fullscreen.lock="fullscreenLoading">
    <div class="login-box">
      <div class="pr">
        <p class="fw ta cff fs22 mb20">vue-management</p>
        <input type="text" class="login-uname" maxlength="40" placeholder="手机号 / 邮箱" v-model.trim="name" @keyup.enter="userLogin">
        <div class="input_close" @click="loginClear" v-if="loginClearShow"></div>
        <input type="password" class="login-pwd" maxlength="20" placeholder="密码" v-model.trim="password" @keyup.enter="userLogin">
        <el-button class="wd mt40 mb40" type="primary" @click="userLogin">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'admin',
      password: 'admin',
      fullscreenLoading: false,
      loginClearShow: false,
      loginPath: '',
      menuDataPath: 'static/menu_data.json'
    }
  },
  watch: {
    name () {
      this.initNameCloseShow(this.name)
    }
  },
  created () {
    this.initNameCloseShow(this.name)
  },
  methods: {
    loginClear () {
      this.name = ''
      this.password = ''
    },
    initNameCloseShow (val) {
      if (val === '') {
        this.loginClearShow = false
      } else {
        this.loginClearShow = true
      }
    },
    getMenuDataAjax () {  // 获取菜单列表数据
      this.$http({
        url: this.menuDataPath,
        method: 'GET'
      }).then(response => {  // 请求成功回调
        console.log(response)
        this.sessionSet('MENU_DATA', response.data)
      }).catch(error => {
        // 请求失败回调
        this.errorResponse(error)
      })
    },
    userLogin () {
      // 点击登录弹出loading效果
      this.fullscreenLoading = true
      let userName = this.name
      let userPwd = this.password
      if (userName !== '' && userPwd !== '') {
        if (userName === 'admin' && userPwd === 'admin') {
          this.getMenuDataAjax()
          // 成功后loading1200毫秒后跳转首页
          setTimeout(() => {
            // 关闭loading效果
            this.fullscreenLoading = false
            this.$store.commit('LOGIN_STATE', true) // 修改登录状态
            this.$router.push({ name: 'blank' }) // 登录成功后跳转
          }, 1200)
        }
      } else {
        this.$message.error('用户名或密码不能为空')
      }
    }
  }
}
</script>

<style lang="css">
</style>
