<template>
  <main class="layout-wrapper">
    <div class="layout-wrapper-page">
      <slot></slot>
    </div>
  </main>
</template>

<script>
export default {
  name: 'LayoutWrapper'
}
</script>
<style lang="scss" scoped>
  .layout-wrapper{
    margin: 0 15%;
    margin-top: 65px;
  }
</style>
