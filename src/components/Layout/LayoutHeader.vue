<template>
  <header class="layout-header">
    <div class="layout-header-left">
      <div class="layout-header-logo">
        <img :src="logo" />
        rayx-ui <span>v{{ version }}</span>
      </div>
    </div>
    <div class="layout-header-right">
      <a href="#/">首页</a>
      <a
        href="#/docs/start"
        :class="{ active: activePath.indexOf('/docs') === 0 }"
        >组件</a
      >
      <a
        href="#/architecture/base"
        :class="{ active: activePath.indexOf('/architecture') === 0 }"
        >脚手架说明</a
      >
      <a
        href="#/development/base"
        :class="{ active: activePath.indexOf('/development') === 0 }"
        >组件开发说明</a
      >
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import {
  useRouter
} from 'vue-router'

export default defineComponent({
  name: "LayoutHeader",
  data() {
    return {
      activePath: "",
      // @ts-ignore
      version: PKG_VERSION,
    };
  },
  props: {
    logo: {
      type: String,
      default: "",
    },
  },
  components: {},
  setup() {
    const router = useRouter()
    return{
      activePath: computed(() => router.currentRoute.value.path),
    }
  },
});
</script>
