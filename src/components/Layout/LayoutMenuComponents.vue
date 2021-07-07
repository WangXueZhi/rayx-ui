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
import { defineComponent, computed } from 'vue'
import {
  useRouter
} from 'vue-router'

export default defineComponent({
  name: 'LayoutMenuComponents',
  data () {
    return {
      list: [{ type: '基础', list: ['button', 'grid', 'icon'] }, { type: '弹出层', list: ['dialog', 'modal', 'popup-base'] }, { type: '交互', list: ['draggable'] }, { type: '表单', list: ['input'] }, { type: '通用', list: ['scroll-bar'] }]
    }
  },
  setup: () => {
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
