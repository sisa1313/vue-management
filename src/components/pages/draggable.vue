// draggable.vue
<template>
  <el-main>
    <breadcrumb className="bdb" first="UI" second="拖拽"></breadcrumb>
    <el-form :inline="true" class="main-form-inline">
      <el-form-item label="启用拖拽">
        <el-switch v-model="editable"></el-switch>
      </el-form-item>
      <el-form-item label="">
        <el-button size="mini" @click="orderList">重新排序</el-button>
      </el-form-item>
    </el-form>
    <el-row>
      <el-col :span="6">
        <draggable class="list-group" element="ul" v-model="list" :options="dragOptions" :move="onMove" @start="isDragging = true" @end="isDragging = false">
          <transition-group type="transition" :name="'flip-list'">
            <li class="list-group-item" v-for="element in list" :key="element.order">
              <i :class="element.fixed? 'el-icon-error' : 'el-icon-success'" @click=" element.fixed=! element.fixed"></i>
              {{element.name}}
              <span class="badge">{{element.order}}</span>
            </li>
          </transition-group>
        </draggable>
      </el-col>
      <el-col :span="6">
        <draggable element="span" v-model="list2" :options="dragOptions" :move="onMove">
          <transition-group name="no" class="list-group" tag="ul">
            <li class="list-group-item" v-for="element in list2" :key="element.order">
              <i :class="element.fixed? 'el-icon-error' : 'el-icon-success'" @click=" element.fixed=! element.fixed"></i>
              {{element.name}}
              <span class="badge">{{element.order}}</span>
            </li>
          </transition-group>
        </draggable>
      </el-col>
      <el-col :span="6" class="list-group">
        <pre>{{listString}}</pre>
      </el-col>
      <el-col :span="6" class="list-group">
        <pre>{{list2String}}</pre>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import breadcrumb from '@/components/breadcrumb'
import draggable from 'vuedraggable'
const message = [
  "vue",
  "axios",
  "vuex",
  "element-ui",
  "component",
  "waterfall",
  "draggable",
  "nprogress",
  "screenfull",
  "test"
]
export default {
  components: {
    breadcrumb,
    draggable
  },
  data () {
    return {
      list: message.map((name, index) => {
        return { name, order: index + 1, fixed: false }
      }),
      list2: [],
      editable: true,
      isDragging: false,
      delayedDragging: false
    }
  },
  created () {
  },
  methods: {
    orderList () {
      this.list2 = []
      this.list = message.map((name, index) => {
        return { name, order: index + 1, fixed: false }
      }).sort((one, two) => {
        return one.order - two.order
      })
    },
    onMove ({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      )
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 0,
        group: "description",
        disabled: !this.editable,
        ghostClass: "ghost"
      }
    },
    listString () {
      return JSON.stringify(this.list, null, 2)
    },
    list2String () {
      return JSON.stringify(this.list2, null, 2)
    }
  },
  watch: {
    isDragging (newValue) {
      if (newValue) {
        this.delayedDragging = true
        return
      }
      this.$nextTick(() => {
        this.delayedDragging = false
      })
    }
  }
}
</script>

<style>
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0.5s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 40px;
  padding: 10px;
}
.list-group-item {
  border: 1px solid #ddd;
  padding: 10px 15px;
  background-color: #fff;
  cursor: move;
  /* 防止边框重合 */
  margin-bottom: -1px;
  position: relative;
  z-index: 0;
}
/* 防止边框重合 */
.list-group-item:hover {
  z-index: 1;
}
.list-group-item i {
  cursor: pointer;
}
.list-group-item > .badge {
  float: right;
}
.badge {
  display: inline-block;
  vertical-align: middle;
  min-width: 10px;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: bold;
  color: #777;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 10px;
}
pre {
  display: block;
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
