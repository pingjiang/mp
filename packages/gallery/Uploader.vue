<template>
<el-upload
  class="uploader"
  drag
  action="/api/files/upload"
  name="files"
  :with-credentials="true"
  multiple
  :on-success="handleSuccess"
  :on-error="handleError">
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</template>

<script>
function trimHost(url) {
  const found = url.indexOf('//');

  if (found !== -1) {
    const got = url.indexOf('/', found + 2);

    if (got !== -1) {
      return got.substr(got + 1);
    }
  }

  return url;
}

export default {
  name: 'Uploader',
  props: {
    msg: String,
  },
  methods: {
    handleSuccess (res, file, fileList) {
      console.log('uploader', res, file, fileList);
      // fileDownloadUri: "http://localhost:8081/downloadFile/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-21%20%E4%B8%8A%E5%8D%888.13.46.png"
      // fileName: "屏幕快照 2019-07-21 上午8.13.46.png"
      // fileType: "image/png"
      // size: 597226
      // file.url = res ? trimHost(res.fileDownloadUri) : null;
      file.url = res ? ('/api/files/download/' + res.fileName) : null;
      file.name = res ? res.fileName : null;

      this.$emit('uploaded', file);
    },
    handleError(err, file, fileList) {
      this.$Notice.error({
        title: '上传文件失败',
        desc: '上传文件失败，错误信息：' + err.message,
      });
    },
  },
};
</script>

<style lang="scss">
.uploader {
  .el-upload {
    display: block;
  }

  .el-upload-dragger {
    width: 100%;
  }
}
</style>
