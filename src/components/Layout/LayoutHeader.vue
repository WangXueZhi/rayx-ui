<template>
  <header class="layout-header">
    <div class="layout-header-left">
      <div class="layout-header-logo">
        <img :src="logo" />
        mvui
      </div>
    </div>
    <div class="layout-header-right">

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
<style lang="scss" scoped>
  .layout-header{
    width: 100%;
    height: 65px;
    padding: 0 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #dcdfe6;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    z-index: 10;

    .layout-header-left{
      display: flex;
      justify-content: center;
      .layout-header-logo{
        display: flex;
        align-items: center;
      }
    }
  }
</style>
