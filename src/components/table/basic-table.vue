// basic-table.vue
<template>
  <div class="main-container">
    <breadcrumb className="bdb" first="表格" second="基础表格"></breadcrumb>
    <div class="container-padding height">
      <el-table :data="tableData" height="100%" header-row-class-name="table-header"
      v-loading="formLoading" element-loading-text="拼命加载中">
        <el-table-column type="index" label="序号" align="center" width="50" fixed></el-table-column>
        <el-table-column prop="name" label="姓名" align="center" class-name="cFF4949P" fixed></el-table-column>
        <el-table-column label="地址" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-tooltip class="item" effect="light" placement="right">
              <span slot="content" class="fs12 curp" type="text" @click="copyClick(scope.row)">点击复制</span>
              <span v-text="scope.row.address"></span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="日期" align="center" sortable></el-table-column>
        <el-table-column label="操作" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="modifyClick(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="deleteClick(scope.row)"><i class="el-icon-delete cFF4949"></i></el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="mt10 clearfix">
        <el-pagination class="fr mr10" background @size-change="handleSizeChange" @current-change="handleCurrentChange"
        :current-page.sync="page" :page-size="limit" layout="total, prev, pager, next, jumper" :total="total"></el-pagination>
      </div>
      <textarea id="input" style="position: absolute;top: 0;left: 0;opacity: 0;z-index: -10;"></textarea>
    </div>
    <el-dialog title="个人信息" width="30%" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="姓名：" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址：" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="日期：" :label-width="formLabelWidth">
          <el-input v-model="form.date" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmClick">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import breadcrumb from '@/components/breadcrumb'
export default {
  name: 'basicTable',
  components: {
    breadcrumb
  },
  data () {
    return {
      tableDataPath: 'static/table_data.json',
      formLoading: false,
      dialogFormVisible: false,
      formLabelWidth: '60px',
      tableData: [],
      form: {},
      page: 1,
      limit: 15,
      total: 0
    }
  },
  created () {
    this.getCityData(this.page)
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.page = val
      this.getCityData(this.page)
    },
    copyClick (row) {
      let copyText = row.address
      let input = document.getElementById("input")
      input.value = copyText
      input.select()
      document.execCommand('copy')
      this.$message.success('复制成功')
    },
    modifyClick (row) {
      console.log(row)
      this.dialogFormVisible = true
      this.form = this.objDeepCopy(row)
    },
    deleteClick (row) {
      this.$confirm('此操作将删除该数据, 是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        lockScroll: false,
        type: 'warning',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = '执行中...'
            setTimeout(() => {
              done()
              setTimeout(() => {
                instance.confirmButtonLoading = false
              }, 300)
            }, 600)
          } else {
            done()
          }
        }
      }).then(() => {
        this.$message.success('删除成功')
      }).catch(() => {
        this.$message.info('已取消删除')
      })
    },
    confirmClick () {
      this.dialogFormVisible = false
      this.$message.success('修改成功')
    },
    getCityData (page) {
      this.formLoading = true
      this.$http({
        url: this.tableDataPath,
        method: 'GET'
      }).then(response => {  // 请求成功回调
        setTimeout(() => {
          this.tableData = []
          this.formLoading = false
          let data = response.data
          let result = [], obj = {}
          for (let i = 0, len = data.length; i < len; i += 15) {
            result.push(data.slice(i, i + 15))
          }
          console.log(result)
          result.forEach((v, i) => {
            obj[i + 1] = v
          })
          this.tableData = obj[page].slice()
          this.total = data.length
        }, 600)
      }).catch(error => {
        // 请求失败回调
        this.errorResponse(error)
      })
    }
  }
}
</script>

<style scoped>
.container-padding.height {
  height: calc(100% - 97px);
}
</style>
