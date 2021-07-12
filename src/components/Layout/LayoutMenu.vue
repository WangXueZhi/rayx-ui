<template>
  <r-scroll-bar wrapperClass="layout-menu">
    <div class="layout-menu-list">
      <div v-if="currentPath.indexOf('/docs/') === 0">
        <div
          class="layout-menu-item"
          :class="{ 'layout-menu-item-active': currentPath === `/docs/start` }"
          @click="docChange('/docs/start')"
        >
          快速开始
        </div>
        <div
          class="layout-menu-item"
          :class="{ 'layout-menu-item-active': currentPath === `/docs/design` }"
          @click="docChange('/docs/design')"
        >
          自定义主题
        </div>
        <LayoutMenuComponents />
      </div>
      <div v-if="currentPath.indexOf('/development/') === 0">
        <div
          class="layout-menu-item"
          :class="{
            'layout-menu-item-active': currentPath === '/development/base'
          }"
          @click="docChange('/development/base')"
        >
          创建组件
        </div>
        <div
          class="layout-menu-item"
          :class="{
            'layout-menu-item-active': currentPath === '/development/component'
          }"
          @click="docChange('/development/component')"
        >
          组件编写说明
        </div>
        <div
          class="layout-menu-item"
          :class="{
            'layout-menu-item-active': currentPath === '/development/md'
          }"
          @click="docChange('/development/md')"
        >
          markdown编写说明
        </div>
      </div>
      <div v-if="currentPath.indexOf('/architecture/') === 0">
        <div
          class="layout-menu-item"
          :class="{
            'layout-menu-item-active': currentPath === '/architecture/base'
          }"
          @click="docChange('/architecture/base')"
        >
          概览
        </div>
        <div
          class="layout-menu-item"
          :class="{
            'layout-menu-item-active': currentPath === '/architecture/vue'
          }"
          @click="docChange('/architecture/vue')"
        >
          vue解析
        </div>
        <div
          class="layout-menu-item"
          :class="{
            'layout-menu-item-active': currentPath === '/architecture/md'
          }"
          @click="docChange('/architecture/md')"
        >
          md解析
        </div>
      </div>
    </div>
  </r-scroll-bar>
</template>

<script>
import LayoutMenuComponents from './LayoutMenuComponents.vue'
import { defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'LayoutMenu',
  components: { LayoutMenuComponents },
  setup () {
    const router = useRouter()
    const docChange = function (path) {
      router.push(path)
    }
    return {
      currentPath: computed(() => router.currentRoute.value.path),
      docChange
    }
  }
})
</script>
