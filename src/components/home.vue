// home.vue
<template lang="html">
  <el-container>
    <headerBar></headerBar>
    <el-header v-show="false"></el-header>
    <el-container >
      <menuList></menuList>
      <transition name="move" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </el-container>
</el-container>
</template>

<script>
import headerBar from '@/components/header-bar'
import menuList from '@/components/menu-list'
export default {
  components: {
    headerBar,
    menuList
  }
}
</script>

<style lang="css">
</style>
