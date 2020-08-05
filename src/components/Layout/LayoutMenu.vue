<template>
  <ScrollBar wrapperClass="layout-menu">
    <div class="layout-menu-list">
      <div class="layout-menu-item" @click="docChange('/docs/start')">快速开始</div>
      <LayoutMenuComponents />
    </div>
  </ScrollBar>
</template>

<script>
import { ScrollBar } from "mvui";
import LayoutMenuComponents from "./LayoutMenuComponents.vue"

export default {
  name: "LayoutMenu",
  components: { ScrollBar, LayoutMenuComponents },
  methods: {
    docChange(path) {
      this.$router.push(path);
    },
  },
};
</script>
