<template>
  <ScrollBar wrapperClass="layout-menu">
    <div class="layout-menu-list">
      <LayoutMenuComponents />
    </div>
  </ScrollBar>
</template>

<script>
import { ScrollBar } from "mvui";
import LayoutMenuComponents from "./LayoutMenuComponents.vue"

export default {
  name: "LayoutMenu",
  components: { ScrollBar, LayoutMenuComponents }
};
</script>
<style lang="scss" scoped>
.layout-menu {
  width: 14%;
  position: fixed;
  top: 0;
  bottom: 0;
  margin-top: 65px;

  .layout-menu-list {
    
  }
}
</style>
