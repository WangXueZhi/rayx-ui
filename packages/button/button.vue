<template>
  <button class="ra-button" @click="click">
    <slot></slot>
  </button>
</template>
<script>
import './button.scss'
export default {
  name: 'r-button',
  props: {
    /**
     * 类型
     */
    type: {
      type: String,
      default: 'default'
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click(){
      this.$emit('click')
    }
  }
}
</script>
