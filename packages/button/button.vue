<template>
  <button
    class="ra-button"
    @click="click"
    :class="{
      [`ra-button-${colorType}`]:colorType!=='default',
      [`ra-button-${type}`]:type!=='default',
      'ra-button-circle': circle,
      'ra-button-disabled': disabled
    }"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
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
    }
  },
  methods: {
    click() {
      if (!this.disabled) {
        this.$emit('click')
      }
    },
  },
}
</script>
