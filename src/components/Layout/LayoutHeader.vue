<template>
  <header class="layout-header">
    <div class="layout-header-left">
      <div class="layout-header-logo">
        <img :src="logo" />
        rayx-ui
      </div>
    </div>
    <div class="layout-header-right">
      <a href="#/">首页</a>
      <a>架构</a>
      <a>组件开发规范</a>
    </div>
  </header>
</template>

<script>

export default {
  name: 'LayoutHeader',
  data () {
    return {

    }
  },
  props: {
    logo: {
      type: String,
      default: ''
    }
  },
  components: {
  },
  methods: {

  }
}
</script>
