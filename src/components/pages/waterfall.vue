// waterfall.vue
<template>
  <vue-waterfall-easy class="waterfall-info" ref="waterfall" :imgsArr="imgsArr" @scrollReachBottom="fetchImgsData"
  @imgError="imgErrorFn">
    <div slot="waterfall-head">
      <breadcrumb className="bdb" first="UI" second="瀑布流"></breadcrumb>
    </div>
    <div class="img-info" slot-scope="props">
      <p class="some-info fw mt5">第{{props.index + 1}}张图片</p>
      <p class="some-info">{{props.value.info}}</p>
    </div>
    <div slot="waterfall-over">已经到底了</div>
  </vue-waterfall-easy>
</template>

<script>
import breadcrumb from '@/components/breadcrumb'
import vueWaterfallEasy from 'vue-waterfall-easy'
export default {
  components: {
    breadcrumb,
    vueWaterfallEasy
  },
  data () {
    return {
      waterfallDataPath: 'static/waterfall_data.json',
      imgsArr: [],
      group: 0
    }
  },
  created () {
    this.fetchImgsData()
  },
  methods: {
    fetchImgsData () {
      this.$http({
        url: this.waterfallDataPath,
        method: 'GET'
      }).then(response => {  // 请求成功回调
        console.log(response)
        this.group++
        if (this.group === 5) { // 模拟已经无新数据，显示 slot="waterfall-over"
          this.$refs.waterfall.waterfallOver()
          return
        }
        this.imgsArr = this.imgsArr.concat(response.data)
      }).catch(error => {
        // 请求失败回调
        this.errorResponse(error)
      })
    },
    imgErrorFn (imgItem) {
      console.log('图片加载错误',imgItem)
    }
  }
}
</script>

<style>
.some-info {
  line-height: 1.6;
  text-align: center;
  font-size: 14px;
}
</style>
