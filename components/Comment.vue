<template>
  <div class="tinymce-container">
    <textarea :id="tinymceId" ref="textarea" class="tinymce-textarea" />
  </div>
</template>

<script>
import '@/assets/tinymce/tinymce.min.js'
import '@/assets/tinymce/themes/silver/theme.min.js'
import '@/assets/tinymce/icons/default/icons.min.js'
import '@/assets/tinymce/plugins/paste/plugin.min.js'
import '@/assets/tinymce/plugins/emoticons/plugin.min.js'
export default {
  name: 'Comment',
  props: {
    id: {
      type: String,
      default: function () {
        return 'vue-tinymce-' + (Math.random() * 1000).toFixed(0)
      },
    },
    value: {
      type: String,
      default: '',
    },
    height: {
      type: [Number, String],
      required: false,
      default: 200,
    },
    width: {
      type: [Number, String],
      required: false,
      default: 'auto',
    },
  },
  data() {
    return {
      hasChange: false,
      hasInit: false,
      tinymceId: this.id,
    }
  },
  watch: {
    value(val) {
      if (!this.hasChange && this.hasInit) {
        this.$nextTick(() =>
          window.tinymce.get(this.tinymceId).setContent(val || '')
        )
      }
    },
  },
  mounted() {
    this.init()
  },
  created() {
    this.$on('change', (content) => {
      window.tinyMCE.activeEditor.setContent(content)
    })
  },
  beforeDestroy() {
    this.$off('change')
    window.tinyMCE.activeEditor.destroy()
  },
  activated() {
    if (window.tinymce) {
      this.initTinymce()
    }
  },
  deactivated() {
    this.destroyTinymce()
  },
  destroyed() {
    this.destroyTinymce()
  },
  methods: {
    init() {
      this.initTinymce()
    },
    initTinymce() {
      const _this = this
      window.tinymce.init({
        selector: `#${this.tinymceId}`,
        theme: 'silver', // 主题 必须引入
        skin_url: '/tinymce/skins/ui/oxide', // 主题路径
        emoticons_database_url: '/tinymce/plugins/emoticons/js/emojis.min.js',
        emoticons_images_url:
          '/tinymce/plugins/emoticons/js/emojiimages.min.js',
        content_css: '/tinymce/skins/content/default/content.min.css', // 富文本编辑器内容区域样式
        //language: 'zh_CN', // 设置富文本编辑器语言
        // fontsize_formats: '12px 14px 16px 18px 20px 26px 30px', // 工具栏自定义字体大小选项
        plugins: 'emoticons paste',
        elementpath: false, //编辑器底部的状态栏
        menubar: false, // 最上方menu
        branding: false, // 去底部tinymce水印链接
        toolbar: 'emoticons', // 工具栏配置
        height: this.height,
        body_class: 'panel-body',
        statusbar: false,
        resize: false,
        paste_as_text: true,
        init_instance_callback: (editor) => {
          if (_this.value) {
            editor.setContent(_this.value)
          }
          _this.hasInit = true
          editor.on('NodeChange Change KeyUp SetContent', () => {
            this.hasChange = true
            this.$emit('input', editor.getContent())
          })
        },
        images_upload_handler: function (blobInfo, success, failure) {
          let data = new FormData()
          data.append('file', blobInfo.blob(), blobInfo.filename())
          uploadImage(data).then((res) => {
            success(res.image_src)
          })
        },
      })
    },
    destroyTinymce() {
      const tinymce = window.tinymce.get(this.tinymceId)
      if (tinymce) {
        tinymce.destroy()
      }
    },
    setContent(value) {
      window.tinymce.get(this.tinymceId).setContent(value)
    },
    getContent() {
      window.tinymce.get(this.tinymceId).getContent()
    },
  },
}
</script>

<style lang="scss" scoped>
.tinymce-container {
	position: relative;

	line-height: normal;
}

.tinymce-container {
	::v-deep {
		.mce-fullscreen {
			z-index: 10000;
		}
	}
}
.tinymce-textarea {
	z-index: -1;

	visibility: hidden;
}

.editor-custom-btn-container {
	position: absolute;
	top: 4px;
	right: 4px;
}

.editor-upload-btn {
	display: inline-block;
}

</style>
