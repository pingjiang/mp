<template>
  <div class="view-container">
    <Editor class="editor mp-editor" :content="content" :options="editorOptions"
      @input="handleChange"/>

    <el-dialog class="modal-noheader"
      :visible.sync="chooseFileModal" width="685px">
      <FileManager @uploaded="handleUploaded" />
    </el-dialog>

    <el-dialog title="预览" :visible.sync="isPreview" width="375px">
      <div v-if="isPreview" class="mp-content preview" v-html="content"></div>
    </el-dialog>

  </div>
</template>

<script>
import { Editor, defaultConfig } from 'editor';
import { FileManager } from 'gallery';
import CounterInput from '../../../components/CounterInput.vue';

export default {
  name: 'home',
  components: {
    CounterInput,
    Editor,
    FileManager,
  },
  data() {
    return {
      isPreview: false,
      chooseFileModal: false,
      choosedFiles: null,
      chooseFileType: null,
      _chooseFileToolbar: null,
      content: '',
      editorOptions: this.addHandlers(defaultConfig),
    };
  },
  methods: {
    addHandlers(opts) {
      const self = this;

      opts.modules.toolbar.handlers = {
        image: function() {
          self.choose('image', this);
        },
        video: function() {
          self.choose('video', this);
        },
      };

      return opts;
    },
    choose(type, toolbar) {
      this.chooseFileModal = true;
      this.chooseFileType = type;
      this._chooseFileToolbar = toolbar;
      this.choosedFiles = null;
    },
    handleChoose() {
      if (this.choosedFiles && this._chooseFileToolbar) {
        let value = this.choosedFiles;
        const quill = this._chooseFileToolbar.quill;
        const addImgRange = quill.getSelection();
        value = value.indexOf('http') != -1 ? value : ('http:' + value);
        const index = addImgRange != null ? addImgRange.index : 0;
        quill.insertEmbed(index, this.chooseFileType, value, 'user');
        quill.setSelection(index + 1);

        this.choosedFiles = null;
      }

      this.chooseFileType = null;
      this._chooseFileToolbar = null;
      this.chooseFileModal = false;
    },
    handleUploaded(file) {
      this.choosedFiles = file ? file.url : null;
      this.chooseFileModal = false;
    },
    handleChange(content) {
      this.content = content;
    },
  },
};
</script>

<style lang="scss">
.mb-sm {
  margin-bottom: 10px;
}

.modal-noheader {
  .el-dialog__header {
    padding: 0;
  }

  .el-dialog__body {
    padding: 8px 20px;
  }
}

.editor {
  height: 200px;
}

</style>
