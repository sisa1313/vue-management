// login.vue
<template lang="html">
  <div class="login" v-loading.fullscreen.lock="fullscreenLoading">
    <div class="login-box">
      <div class="pr">
        <p class="fw ta cff fs22 mb20">vue-management</p>
        <input type="text" class="login-uname" maxlength="40" placeholder="管理员输入admin，游客随意" autocomplete="off"
        v-model.trim="name" @keyup.enter="userLogin">
        <div class="input_close" @click="loginClear" v-if="loginClearShow"></div>
        <input type="password" class="login-pwd" maxlength="20" placeholder="管理员输入admin，游客随意" autocomplete="off"
        v-model.trim="password" @keyup.enter="userLogin">
        <el-button class="wd mt40 mb40" type="primary" @click="userLogin">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      password: '',
      fullscreenLoading: false,
      loginClearShow: false,
      loginPath: ''
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
    userLogin () {
      let userName = this.name
      let userPwd = this.password
      if (userName !== '' && userPwd !== '') {
        // 点击登录弹出loading效果
        this.fullscreenLoading = true
        if (userName === 'admin' && userPwd === 'admin') {
          this.$store.commit('LOGIN_STATE', true) // 修改登录状态
        } else {
          this.$store.commit('LOGIN_STATE', false) // 修改登录状态
        }
        // 成功后loading1200毫秒后跳转首页
        setTimeout(() => {
          // 关闭loading效果
          this.fullscreenLoading = false
          this.$router.push({ name: 'blank' }) // 登录成功后跳转
          this.sessionSet('userName', userName)
        }, 1200)
      } else {
        this.$message.error('用户名或密码不能为空')
      }
    }
  }
}
</script>

<style lang="css">
</style>
