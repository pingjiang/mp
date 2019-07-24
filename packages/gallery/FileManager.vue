<template>
  <div class="file-manager">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="上传" name="upload">
        <Uploader @uploaded="handleUploaded" />
      </el-tab-pane>
      <el-tab-pane label="全部" name="all">
        <GridView :loading="loadingItems" :items="items" />
      </el-tab-pane>
      <el-tab-pane label="图片" name="image">
        <GridView :loading="loadingItems" :items="items" />
      </el-tab-pane>
      <el-tab-pane label="视频" name="video">
        <GridView :loading="loadingItems" :items="items" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import GridView from './GridView.vue';
import Uploader from './Uploader.vue';

export default {
  name: 'FileManager',
  components: {
    Uploader,
    GridView,
  },
  props: {
    filesUrl: String,
    uploadsUrl: String,
  },
  data() {
    return {
      activeName: 'upload',
      loadingItems: false,
      items: new Array(10).fill(0),
    };
  },
  methods: {
    handleClick(name) {
      this.activeName = name;
    },
    handleUploaded(file) {
      this.$emit('uploaded', file);
    },
  },
};
</script>

<style lang="scss">
.file-manager {
  .gridview {
    height: 200px;
  }
}
</style>
