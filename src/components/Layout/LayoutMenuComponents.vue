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
import {
  useRouter
} from 'vue-router'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LayoutMenuComponents',
  mounted () {
    console.log(123)
    // this.currentPath = this.$router.history.current.path
  },
  data () {
    return {
      list: [{ type: '基础', list: ['button', 'icon'] }, { type: '交互', list: ['draggable'] }, { type: '表单', list: ['input'] }, { type: '通用', list: ['scroll-bar'] }],
      currentPath: ''
    }
  },
  methods: {
    docChange (componentName) {
      this.$router.push(componentName)
    }
  },
  watch: {
    $route (to, from) {
      console.log(to.path)
      this.currentPath = to.path
    }
  },
  setup () {
    console.log(123)
    const router = useRouter()
    console.log(router)
    return {
      // currentPath: computed(() => router.history)
    }
  }
})
</script>
