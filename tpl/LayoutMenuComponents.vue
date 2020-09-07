<template>
  <div class="layout-menu-list-part">
    <div class="layout-menu-list-component-part" v-for="typeItem in list" :key="typeItem.type">
      <div class="layout-menu-list-component-part-title">{{typeItem.type}}</div>
      <div class="layout-menu-list-component-items">
        <div
          class="layout-menu-list-component-item layout-menu-item"
          :class="{'layout-menu-item-active':currentPath===`/docs/components/${componentName}`}"
          v-for="componentName in typeItem.list"
          :key="componentName"
          @click="docChange(`/docs/components/${componentName}`)"
        >{{componentName}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutMenuComponents",
  mounted() {
    this.currentPath = this.$router.history.current.path;
  },
  data() {
    return {
      list: __LIST_DATA__,
      currentPath: "",
    };
  },
  methods: {
    docChange(componentName) {
      this.$router.push(componentName);
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
