// basic-animation.vue
<template>
  <div class="main-container">
    <breadcrumb className="bdb" first="动画" second="基础动画"></breadcrumb>
    <div class="container-padding bgF0F2F5">
      <el-row class="mb10">
        <el-switch v-model="animated" inactive-text="全部关闭" active-text="全部开启" @change="animatedAll(animated)"></el-switch>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="6" v-for="(v, i) in animations" :key="i">
          <div class="gutter-box" :class="[animated || (animatedOne === i) ? 'animated infinite ' + v : '']"
          @mouseenter="animatedOneFun(i)" @mouseleave="animatedOneOverFun">
            <el-card shadow="hover">
              <div class="text-center" v-text="v"></div>
            </el-card>
          </div>
        </el-col>
      </el-row>
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
      animations: [
        'bounce', 'flash', 'rubberBand', 'shake', 'headShake',
        'swing', 'tada', 'wobble', 'jello', 'bounceIn', 'bounceInDown',
        'bounceInLeft', 'bounceInRight', 'bounceOut', 'bounceOutDown', 'bounceOutLeft',
        'bounceOutLeft', 'bounceOutUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft',
        'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'fadeOut',
        'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig',
        'fadeOutUp', 'fadeOutUpBig', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY',
        'lightSpeedIn', 'lightSpeedOut', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft',
        'rotateInUpRight', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight',
        'hinge', 'jackInTheBox', 'rollIn', 'rollOut','zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp',
        'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp', 'slideInDown',
        'slideInLeft', 'slideInRight', 'slideInUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'
      ],
      animated: false,
      animatedOne: -1
    }
  },
  created () {
  },
  methods: {
    animatedAll (animated) {
      animated = !animated
    },
    animatedOneFun (i) {
      this.animatedOne = i
    },
    animatedOneOverFun () {
      this.animatedOne = -1
    },
  }
}
</script>

<style scoped>
.gutter-box {
  padding: 5px 0;
}
.el-card {
  display: flex;
  align-vs: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  /* -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s; */
}
.text-center {
  padding: 1rem;
}
</style>
