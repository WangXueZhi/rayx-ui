<template>
  <button>
    <span class=bt>123</span>
    <slot></slot>
  </button>
</template>
<script>
import './test.scss'
export default {
  name: 'r-test',
  props: {
    /**
     * 类型
     */
    type: {
      type: String,
      default: 'default'
    },
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
