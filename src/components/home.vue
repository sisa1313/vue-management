// home.vue
<template lang="html">
  <el-container>
    <headerBar></headerBar>
    <el-header v-show="false"></el-header>
    <el-container >
      <menuList></menuList>
      <el-main>
        <tags></tags>
        <transition name="move" mode="out-in">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </el-main>
    </el-container>
</el-container>
</template>

<script>
import headerBar from '@/components/header-bar'
import menuList from '@/components/menu-list'
import tags from '@/components/tags'
import bus from './bus'
export default {
  components: {
    headerBar,
    menuList,
    tags
  },
  data () {
    return {
      tagsList: [],
      collapse: false
    }
  },
  created () {
    // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
    bus.$on('tags', msg => {
      let arr = []
      for(let i = 0, len = msg.length; i < len; i ++){
          msg[i].name && arr.push(msg[i].name)
      }
      this.tagsList = arr
    })
  },
  methods: {
  }
}
</script>

<style lang="css">
</style>
