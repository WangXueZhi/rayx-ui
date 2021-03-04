<template>
  <i v-if="mode !== 'svg'" class="iconfont" :class="`${name}`"></i>
  <svg
    v-else
    class="r-icon"
    aria-hidden="true"
    :width="size"
    :height="size"
    :style="{ fontSize: size }"
  >
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>
<script>
export default {
  name: 'rIcon',
  props: {
    /**
     * icon 名称
     */
    name: {
      type: String,
      default: '',
    },
    /**
     * 尺寸
     */
    size: {
      type: Number,
      default: 16,
    },
    /**
     * 模式，svg | font-class
     */
    mode: {
      type: String,
      default: 'svg',
    },
  },
  created() {
    if (this.mode === 'svg') {
      window.R_ICON_FONT_COMPONENT.loadScript()
    } else {
      window.R_ICON_FONT_COMPONENT.loadStyle()
    }
  },
}
</script>
