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
      <a href="#/docs/start" :class="{active: activePath.indexOf('/docs')===0}">组件</a>
      <a href="#/architecture/base" :class="{active: activePath.indexOf('/architecture')===0}">脚手架说明</a>
      <a href="#/development/base" :class="{active: activePath.indexOf('/development')===0}">组件开发说明</a>
    </div>
  </header>
</template>

<script>
export default {
  name: "LayoutHeader",
  data() {
    return {
      activePath: "",
    };
  },
  props: {
    logo: {
      type: String,
      default: "",
    },
  },
  components: {},
  watch: {
    $route: {
      handler(to, from) {
        this.activePath = to.path;
      },
      immediate: true,
    },
  },
};
</script>
