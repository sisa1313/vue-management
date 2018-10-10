// case-animation.vue
<template>
  <div class="main-container">
    <breadcrumb className="bdb" first="动画" second="动画案例"></breadcrumb>
    <div class="container-padding height">
      <el-button class="mb10" size="small" @click="addClick">Add</el-button>
      <el-table :data="tableData" height="100%" :row-class-name="rowClassName">
        <el-table-column type="index" label="序号" align="center"></el-table-column>
        <el-table-column prop="name" label="电影" align="center"></el-table-column>
        <el-table-column prop="product" label="出品公司" align="center"></el-table-column>
        <el-table-column label="操作" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" @click="deleteClick(scope)"><i class="el-icon-delete cFF4949"></i></el-button>
          </template>
        </el-table-column>
      </el-table>
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
      formLoading: false,
      tableData: [{
        key: 0,
        name: '复仇者联盟 NO.1',
        product: '漫威影业'
      }, {
        key: 1,
        name: '复仇者联盟 NO.2',
        product: '漫威影业'
      }, {
        key: 2,
        name: '复仇者联盟 NO.3',
        product: '漫威影业'
      }],
      count: 3,
      deleteIndex: -1
    }
  },
  created () {
  },
  // watch: {
  //   $route (newValue, oldValue) { // 当路由变化时重置tableData数据
  //     this.tableData = [{
  //       key: 0,
  //       name: '复仇者联盟 NO.1',
  //       product: '漫威影业'
  //     }, {
  //       key: 1,
  //       name: '复仇者联盟 NO.2',
  //       product: '漫威影业'
  //     }, {
  //       key: 2,
  //       name: '复仇者联盟 NO.3',
  //       product: '漫威影业'
  //     }]
  //   }
  // },
  methods: {
    rowClassName ({row, rowIndex}) {
      if (this.deleteIndex === row.key) return 'animated zoomOutLeft'
      return 'animated fadeInRight'
    },
    addClick () {
      const newData = {
        key: this.count,
        name: '复仇者联盟 NO.' + (this.count + 1),
        product: '漫威影业'
      }
      this.tableData = [...this.tableData, newData]
      this.count += 1
    },
    deleteClick (scope) {
      let index = scope.$index
      let row = scope.row
      const tableData = [...this.tableData]
      tableData.splice(index, 1)
      this.deleteIndex = row.key
      setTimeout(() => {
        this.tableData = tableData
      }, 500)
      // this.$confirm('此操作将删除该数据, 是否继续？', '提示', {
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消',
      //   lockScroll: false,
      //   type: 'warning',
      //   beforeClose: (action, instance, done) => {
      //     if (action === 'confirm') {
      //       instance.confirmButtonLoading = true
      //       instance.confirmButtonText = '执行中...'
      //       setTimeout(() => {
      //         done()
      //         setTimeout(() => {
      //           instance.confirmButtonLoading = false
      //         }, 0)
      //       }, 0)
      //     } else {
      //       done()
      //     }
      //   }
      // }).then(() => {
      // }).catch(() => {
      //   this.$message.info('已取消删除')
      // })
    }
  }
}
</script>

<style scoped>
.container-padding.height {
  height: calc(100% - 97px);
}
</style>
