// upload.vue
<template>
  <div class="main-container">
    <breadcrumb className="bdb" first="表单" second="上传"></breadcrumb>
    <div class="container-padding">
      <el-row :gutter="20">
        <el-col :md="12">
          <el-card>
            <div slot="header" class="clearfix">
              <span>支持拖拽</span>
            </div>
            <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple
            :on-success="handleSuccess" :on-remove="handleRemove" :on-error="handleError" :before-upload="beforeUpload">
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过1mb</div>
            </el-upload>
          </el-card>
        </el-col>
        <el-col :md="12">
          <el-card>
            <div slot="header" class="clearfix">
              <span>支持裁剪</span>
            </div>
            <div class="crop-demo">
              <img :src="cropImg" class="pre-img">
              <div class="crop-demo-btn">选择图片
                <input class="crop-input" type="file" name="image" accept="image/*" @change="setImage"/>
              </div>
            </div>
            <el-dialog title="裁剪图片" :visible.sync="dialogVisible" width="50%" :before-close="cancelCrop" :close-on-click-modal="false">
              <el-row :gutter="20">
                <el-col :span="6">
                  <img :src="cropImg" class="pre-img">
                </el-col>
                <el-col :span="18">
                  <vue-cropper ref='cropper' :src="imgSrc" :cropmove="cropImage" style="width:100%;height:300px;"></vue-cropper>
                </el-col>
              </el-row>
              <span slot="footer" class="dialog-footer">
                <el-button @click="cancelCrop">取消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确定</el-button>
              </span>
            </el-dialog>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import breadcrumb from '@/components/breadcrumb'
import VueCropper from 'vue-cropperjs'
export default {
  name: 'basicForm',
  components: {
    breadcrumb,
    VueCropper
  },
  data () {
    return {
      defaultSrc: './static/img/default_img.png',
      imgSrc: '',
      cropImg: '',
      dialogVisible: false
    }
  },
  created () {
    this.cropImg = this.defaultSrc
  },
  methods: {
    handleSuccess (res, file) {
    },
    handleRemove (file, fileList) {
    },
    handleError (res, file, fileList) {
    },
    beforeUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isPNG = file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 1
      let flag = true
      if (!isJPG && !isPNG) {
        this.$message.error('上传附件只能是JPG/PNG格式!')
        flag = false
      }
      if (!isLt2M) {
        this.$message.error('上传附件大小不能超过 1MB!')
        flag = false
      }
      return flag && isLt2M
    },
    setImage (e) {
      const file = e.target.files[0]
      console.log(file)
      if (!file.type.includes('image/')) {
        return
      }
      const reader = new FileReader()
      reader.onload = (event) => {
        this.dialogVisible = true
        this.imgSrc = event.target.result
        this.cropImg = event.target.result
        this.$refs.cropper && this.$refs.cropper.replace(event.target.result)
      }
      reader.readAsDataURL(file)
    },
    cropImage () {
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL()
    },
    cancelCrop () {
      this.dialogVisible = false
      this.cropImg = this.defaultSrc
    }
  }
}
</script>

<style scoped>
.pre-img {
  width: 150px;
  height: 150px;
  background: #f8f8f8;
  border-radius: 5px;
}
.crop-demo {
  display: flex;
  align-items: flex-end;
}
.crop-demo-btn {
  position: relative;
  width: 100px;
  height: 40px;
  line-height: 40px;
  margin-left: 30px;
  background-color: #409eff;
  color: #fff;
  font-size: 14px;
  text-align: center;
  border-radius: 4px;
}
.crop-input {
  width: inherit;
  height: inherit;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
</style>
