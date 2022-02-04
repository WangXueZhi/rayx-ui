<template>
  <button
    class="r-button"
    @click="handleClick"
    :class="{
      [`r-button-${type}`]: type,
      'r-button-circle': circle,
      'r-button-disabled': disabled,
      'r-button-ghost': ghost,
      'r-button-dashed': dashed,
      'r-button-lite': lite,
      'r-button-liter': liter,
      [`r-button-${size}`]: size !== 'default'
    }"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent, toRefs, PropType } from 'vue'
import { props } from './types'

export default defineComponent({
  name: 'rButton',
  props: {
    /**
     * 颜色类型：default | primary | info | success | warning | error
     */
    type: {
      type: String,
      default: 'default'
    },
    /**
     * 幽灵按钮
     */
    ghost: {
      type: Boolean,
      default: false
    },
    /**
     * 虚线按钮
     */
    dashed: {
      type: Boolean,
      default: false
    },
    /**
     * 最大圆角
     */
    circle: {
      type: Boolean,
      default: false
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * 尺寸: lg | nm | sm
     */
    size: {
      type: String,
      default: 'nm'
    },
    /**
     * 轻淡一点
     */
    lite: {
      type: Boolean,
      default: false
    },
    /**
     * 更轻淡一点
     */
    liter: {
      type: Boolean,
      default: false
    }
  },

  emits: {
    /**
     * 点击
     */
    click: null
  },
  setup (props, { emit }) {
    const { disabled } = toRefs(props)

    const handleClick = (e: Event) => {
      if (!disabled.value) {
        emit('click', e)
      }
    }

    return {
      handleClick
    }
  }
})
</script>
