// echarts.vue
<template>
  <el-main>
    <breadcrumb className="bdb" first="UI" second="图表"></breadcrumb>
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <!-- <div slot="header" class="clearfix">
            <span>堆叠区域图</span>
          </div> -->
          <div id="drawChart1" style="height:260px;"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-card class="box-card">
          <div id="drawChart2" style="height:280px;"></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div id="drawChart3" style="height:280px;"></div>
        </el-card>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
let echarts = require('echarts')
import breadcrumb from '@/components/breadcrumb'
export default {
  components: {
    breadcrumb
  },
  data () {
    return {

    }
  },
  created () {
  },
  mounted () {
    this.drawChart1()
    this.drawChart2()
    this.drawChart3()
  },
  methods: {
    drawChart1 () {
      let myChart = echarts.init(document.getElementById('drawChart1'))
      let option = {
        title: {
          text: '堆叠区域图'
        },
        tooltip : {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis : [
          {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[120, 132, 101, 134, 90, 230, 210]
          },
          {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[220, 182, 191, 234, 290, 330, 310]
          },
          {
            name:'视频广告',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[150, 232, 201, 154, 190, 330, 410]
          },
          {
            name:'直接访问',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[320, 332, 301, 334, 390, 330, 320]
          },
          {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: {normal: {}},
            data:[820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },
    drawChart2 () {
      let myChart = echarts.init(document.getElementById('drawChart2'))
      var data = [
        [5000, 10000, 6785.71],
        [4000, 10000, 6825],
        [3000, 6500, 4463.33],
        [2500, 5600, 3793.83],
        [2000, 4000, 3060],
        [2000, 4000, 3222.33],
        [2500, 4000, 3133.33],
        [1800, 4000, 3100],
        [2000, 3500, 2750],
        [2000, 3000, 2500],
        [1800, 3000, 2433.33],
        [2000, 2700, 2375],
        [1500, 2800, 2150],
        [1500, 2300, 2100],
        [1600, 3500, 2057.14],
        [1500, 2600, 2037.5],
        [1500, 2417.54, 1905.85],
        [1500, 2000, 1775],
        [1500, 1800, 1650]
      ]
      var cities = ['北京', '上海', '深圳', '广州', '苏州', '杭州', '南京', '福州', '青岛', '济南', '长春', '大连',
      '温州', '郑州', '武汉', '成都', '东莞', '沈阳', '烟台']
      var barHeight = 50
      let option = {
        title: {
          text: '在中国租个房子有多贵？',
          subtext: ''
        },
        legend: {
          show: true,
          data: ['价格范围', '均值']
        },
        grid: {
          top: 30
        },
        angleAxis: {
          type: 'category',
          data: cities
        },
        tooltip: {
          show: true,
          formatter: function (params) {
            var id = params.dataIndex;
            return cities[id] + '<br>最低：' + data[id][0] + '<br>最高：' + data[id][1] + '<br>平均：' + data[id][2];
          }
        },
        radiusAxis: {
        },
        polar: {
        },
        series: [{
          type: 'bar',
          itemStyle: {
            normal: {
              color: 'transparent'
            }
          },
          data: data.map(function (d) {
            return d[0];
          }),
          coordinateSystem: 'polar',
          stack: '最大最小值',
          silent: true
        }, {
          type: 'bar',
          data: data.map(function (d) {
            return d[1] - d[0];
          }),
          coordinateSystem: 'polar',
          name: '价格范围',
          stack: '最大最小值'
        }, {
          type: 'bar',
          itemStyle: {
            normal: {
              color: 'transparent'
            }
          },
          data: data.map(function (d) {
            return d[2] - barHeight;
          }),
          coordinateSystem: 'polar',
          stack: '均值',
          silent: true,
          z: 10
        }, {
          type: 'bar',
          data: data.map(function (d) {
            return barHeight * 2
          }),
          coordinateSystem: 'polar',
          name: '均值',
          stack: '均值',
          barGap: '-100%',
          z: 10
        }],
        legend: {
          show: true,
          data: ['A', 'B', 'C']
        }
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },
    drawChart3 () {
      let myChart = echarts.init(document.getElementById('drawChart3'))
      let option = {
        title : {
          text: '某站点用户访问来源',
          subtext: '纯属虚构',
          x:'center'
        },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series : [
          {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
              {value:335, name:'直接访问'},
              {value:310, name:'邮件营销'},
              {value:234, name:'联盟广告'},
              {value:135, name:'视频广告'},
              {value:1548, name:'搜索引擎'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
}
</script>

<style>
</style>
