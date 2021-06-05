<template>
  <button
    class="r-button"
    @click="click"
    :class="{
      [`r-button-${colorType}`]: colorType !== 'default',
      [`r-button-${type}`]: type !== 'default',
      'r-button-circle': circle,
      'r-button-disabled': disabled,
    }"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'rButton',
  props: {
    /**
     * 颜色类型：default | primary | info | success | warning | error
     */
    colorType: {
      type: String,
      default: 'default',
    },
    /**
     * 按钮类型：default | ghost | dashed
     */
    type: {
      type: String,
      default: 'default',
    },
    /**
     * 最大圆角
     */
    circle: {
      type: Boolean,
      default: false,
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    click() {
      if (!this.disabled) {
        this.$emit('click')
      }
    },
  },
  emits: {
    /**
     * 点击
     */
    click: null,
  },
})
</script>
