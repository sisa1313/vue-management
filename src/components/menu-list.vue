// menu-list.vue
<template lang="html">
  <el-aside style="width: auto;">
    <el-menu :default-active="$route.name" class="el-menu-vertical-aside" background-color="#409EFF" text-color="#fff"
     active-text-color="#fff" :default-openeds="defaultOpeneds" @select="handleSelect" @open="handleOpen" @close="handleClose"
     :collapse="collapseState" router unique-opened>
      <template v-for="item in menuTree">
        <el-submenu v-if="item.children" :key="item.name" :index="item.name">
          <template slot="title">
            <i :class="item.icon"></i><span slot="title" v-text="item.title"></span>
          </template>
          <el-menu-item v-for="(sItem, i) in item.children" :key="i" :index="sItem.name" v-text="sItem.title"></el-menu-item>
        </el-submenu>
        <el-menu-item v-else :key="item.name" :index="item.name">
          <i :class="item.icon"></i><span slot="title" v-text="item.title"></span>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
import bus from './bus';
export default {
  name: 'menuList',
  data () {
    return {
      collapseState: true,
      menuTree: this.sessionGet('MENU_DATA'),
      defaultOpeneds: [],
      submenuList: [],
      menuList: []
    }
  },
  created () {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on('collapse_state', data => {
      this.collapseState = data
    })
  },
  methods: {
    handleSelect (index) {
      console.log(index)
    },
    collapseClick () { // 点击收起/展开按钮
      this.collapseState = !this.collapseState
    },
    handleOpen(key, keyPath) {
      this.defaultOpeneds = keyPath
    },
    handleClose(key, keyPath) {
      this.defaultOpeneds = keyPath
    }
  }
}
</script>

<style lang="css">
</style>
