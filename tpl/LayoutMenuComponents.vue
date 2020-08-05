<template>
  <div class="layout-menu-list-part">
    __COMPONENTS_MENU_LIST__
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
