<template>
  <button>
    <slot></slot>
  </button>
</template>
<script>
import './toast.scss'
export default {
  name: 'r-toast',
  props: {
    /**
     * 类型
     */
    type: {
      type: String,
      default: 'default'
    },
    /**
     * 持续时间
     */
    duration: {
      type: Number,
      default: 1000
    }
  },
  methods: {
    /**
     * 显示toast
     */
    show () {
      console.log('hello')
    }
  }
}
</script>
