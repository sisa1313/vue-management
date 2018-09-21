// flight-order.vue
<template>
  <el-container>
    <headerBar></headerBar>
    <el-header v-show="false"></el-header>
    <el-container class="container-calc">
      <menuList></menuList>
      <el-container>
        <el-main>
          <el-form :inline="true" class="main-form-inline bdb">
            <el-form-item label="企业名称">
              <campanySelectComponent className="w180"></campanySelectComponent>
            </el-form-item>
            <el-form-item label="预订日期">
              <datePickerDaterange className="w210"></datePickerDaterange>
            </el-form-item>
            <el-form-item label="订单状态">
              <elSelect className="w90"></elSelect>
            </el-form-item>
          </el-form>
          <div class="main-table">
            <el-table :data="tableData" height="100%" header-row-class-name="c00"
            v-loading="formLoading" element-loading-text="拼命加载中">
              <el-table-column type="index" label="序号" align="center" width="50" fixed></el-table-column>
              <el-table-column v-for="(item, index) in tableColumnData" :key="index" :prop="item.prop" :label="item.label"
              :class-name="item.className" align="center" :fixed="item.fixed"></el-table-column>
              <el-table-column label="操作" align="center" fixed="right">
                <template slot-scope="scope">
                  <el-button type="text" size="mini">购买保险</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import headerBar from '@/components/header-bar'
import menuList from '@/components/menu-list'
import campanySelectComponent from '@/components/ui/campany-select-component'
import datePickerDaterange from '@/components/ui/date-picker-daterange'
import elSelect from '@/components/ui/el-select'
export default {
  name: 'flightOrder',
  data () {
    return {
      formLoading: false,
      tableData: [
        { value1: '测试' }
      ],
      tableColumnData: [
        { prop: 'value1', label: '来源', className: 'cFF4949P', fixed: 'fixed' },
        { prop: 'value1', label: '供应商', className: 'cFF4949P' },
        { prop: 'value1', label: '企业名称' },
        { prop: 'value1', label: '订单号' },
        { prop: 'value1', label: '预订日期' },
        { prop: 'value1', label: '起飞日期' },
        { prop: 'value1', label: '申请人' },
        { prop: 'value1', label: '乘机人' },
        { prop: 'value1', label: '航程' },
        { prop: 'value1', label: '航班' },
        { prop: 'value1', label: '险种', className: 'cFF4949P' },
        { prop: 'value1', label: '保险状态', className: 'cFF4949P' },
        { prop: 'value1', label: '保险金额', className: 'cFF4949P' },
        { prop: 'value1', label: '订单金额' },
        { prop: 'value1', label: '订单状态' }
      ]
    }
  },
  created () {
  },
  components: {
    headerBar,
    menuList,
    campanySelectComponent,
    datePickerDaterange,
    elSelect
  }
}
</script>

<style>
</style>
