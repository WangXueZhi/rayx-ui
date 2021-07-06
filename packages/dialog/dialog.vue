<template>
  <div class="r-dialog">123</div>
</template>
<script>
export default {
  name: 'rDialog',
  props: {
    /**
     * 属性介绍
     */
    props1: {
      type: String,
      default: 'default'
    }
  },
  methods: {
    click () {
      if (!this.disabled) {
        this.$emit('click')
      }
    }
  }
}
</script>
