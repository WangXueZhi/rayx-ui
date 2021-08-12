<template>
  <i
    v-if="mode !== 'svg'"
    class="iconfont"
    :class="`${name}`"
    :style="{ fontSize: `${size}px` }"
  ></i>
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
<script lang="ts">
import type { PropType } from './types'
export default {
  name: 'rIcon',
  props: {
    /**
     * icon 名称
     */
    name: {
      type: String,
      default: ''
    },
    /**
     * 尺寸
     */
    size: {
      type: Number,
      default: 16
    },
    /**
     * 模式，svg | font-class
     */
    mode: {
      type: String,
      default: 'svg'
    }
  },
  setup (props: PropType): void {
    if (props.mode === 'svg') {
      window.R_ICON.loadScript()
    } else {
      window.R_ICON.loadStyle()
    }
  }
}
</script>
