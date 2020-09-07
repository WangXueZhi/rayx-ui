<template>
  <ScrollBar wrapperClass="layout-menu">
    <div class="layout-menu-list">
      <div
        class="layout-menu-item"
        :class="{'layout-menu-item-active':currentPath===`/docs/start`}"
        @click="docChange('/docs/start')"
      >快速开始</div>
      <LayoutMenuComponents />
    </div>
  </ScrollBar>
</template>

<script>
import { ScrollBar } from "rayx-ui";
import LayoutMenuComponents from "./LayoutMenuComponents.vue";

export default {
  name: "LayoutMenu",
  components: { ScrollBar, LayoutMenuComponents },
  data() {
    return {
      currentPath: "",
    };
  },
  mounted() {
    this.currentPath = this.$router.history.current.path;
  },
  methods: {
    docChange(path) {
      this.$router.push(path);
    },
  },
  watch: {
    $route(to, from) {
      console.log(to.path);
      this.currentPath = to.path;
    },
  },
};
</script>
