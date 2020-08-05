<template>
  <div class="layout-menu-list-part">
    <div class="layout-menu-item" @click="docChange('/docs/components/button')">button</div>
<div class="layout-menu-item" @click="docChange('/docs/components/scroll-bar')">scroll-bar</div>
<div class="layout-menu-item" @click="docChange('/docs/components/table')">table</div>
<div class="layout-menu-item" @click="docChange('/docs/components/test')">test</div>
<div class="layout-menu-item" @click="docChange('/docs/components/toast')">toast</div>
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
