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
          <i class="el-icon-a-drag curp fs26" @click="screenfullClick"></i>
        </el-tooltip>
      </li>
      <li>
        <el-tooltip effect="dark" content="颜色选择器" placement="bottom">
          <el-color-picker v-model="colorDefault" @change="colorPickerChange"></el-color-picker>
        </el-tooltip>
      </li>
      <li>
        <el-popover placement="bottom" title="" width="200" :visible-arrow="false" trigger="click">
          <ul class="popover-list">
            <li>用户信息</li>
            <li>手机号：18533333333</li>
          </ul>
          <ul class="popover-list mt10">
            <li>企业信息</li>
            <li>所在企业：九恒星</li>
          </ul>
          <img class="curp" src="@/assets/img/b1.jpg" slot="reference" alt="">
        </el-popover>
      </li>
    </ul>
  </el-header>
</template>

<script>
import bus from './bus';
import screenfull from 'screenfull'
export default {
  name: 'headerBar',
  data () {
    return {
      collapseState: true,
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
