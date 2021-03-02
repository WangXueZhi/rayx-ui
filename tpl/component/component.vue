<template>
  <div class="r-_component_">123</div>
</template>
<script>
export default {
  name: 'r_COMPONENT_',
  props: {
    /**
     * 属性介绍
     */
    props1: {
      type: String,
      default: 'default',
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
