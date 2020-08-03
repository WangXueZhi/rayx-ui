<template>
  <div class="layout-menu-list-part">
    <div class="layout-menu-item" @click="docChange('/docs/button')">button</div>
    <div class="layout-menu-item" @click="docChange('/docs/toast')">toast</div>
    <div class="layout-menu-item" @click="docChange('/docs/table')">table</div>
    <div class="layout-menu-item" @click="docChange('/docs/scroll-bar')">scroll-bar</div>
  </div>
</template>

<script>
export default {
  name: "LayoutMenuComponents",
  methods: {
    docChange(componentName) {
      this.$router.push(componentName);
    },
  },
};
</script>
<style lang="scss" scoped>
.layout-menu-item {
  padding: 14px 24px;
  position: relative;
  cursor: pointer;
  z-index: 1;
  transition: all 0.2s ease-in-out;
}
</style>
