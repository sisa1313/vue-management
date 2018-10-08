// header-bar.vue
<template lang="html">
  <el-header :style="{'background': headerStyle}">
    <ul class="el-menu-header-left clearfix">
      <li>
        <i class="curp fs26" :class="collapseState ? 'el-icon-a-export' : 'el-icon-a-Import'" @click="collapseClick"></i>
      </li>
      <li>
        <p class="fw fs22">VUE 管理系统</p>
      </li>
    </ul>
    <ul class="el-menu-header-right clearfix">
      <li>
        <el-tooltip effect="dark" content="全屏" placement="bottom">
          <i class="el-icon-a-fullscreen curp fs26" @click="screenfullClick"></i>
        </el-tooltip>
      </li>
      <li>
        <el-tooltip effect="dark" content="颜色选择器" placement="bottom">
          <el-color-picker v-model="colorDefault" @change="colorPickerChange"></el-color-picker>
        </el-tooltip>
      </li>
      <li>
        <el-dropdown placement="bottom-end">
          <span class="el-dropdown-link curp">
            <img src="@/assets/img/b1.jpg" slot="reference" alt="">
            <span class="ml5">admin</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <a target="_blank" href="https://github.com/sisa1313/vue-management">github地址</a>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link tag="div" :to="{ name: 'login' }">退出登录</router-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
    </ul>
  </el-header>
</template>

<script>
import bus from './bus'
import screenfull from 'screenfull'
export default {
  name: 'headerBar',
  data () {
    return {
      collapseState: false,
      colorDefault: '#F0F2F5',
      headerStyle: 'linear-gradient(to right, #F0F2F5 0, #F0F2F5 100%)'
    }
  },
  methods: {
    colorPickerChange (data) {
      if (data) {
        this.colorDefault = data
        this.headerStyle = 'linear-gradient(to right, ' + this.colorDefault + ' 0, #F0F2F5 100%)'
      }
    },
    collapseClick () {
      this.collapseState = !this.collapseState
      bus.$emit('collapse_state', this.collapseState)
    },
    screenfullClick () {
      if (screenfull.enabled) {
        screenfull.request()
      }
    }
  }
}
</script>

<style lang="css">
.popover-list li {
  line-height: 30px;
  color: #606266;
}
.popover-list li:first-child {
  color: #909399;
  font-size: 12px;
}
</style>
