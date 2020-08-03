<template>
  <button>
    <span class=bt>123</span>
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
    /**
     * hello
     */
    hello () {
      console.log('hello')
      this.$emit('on-change')
    }
  }
}
</script>
