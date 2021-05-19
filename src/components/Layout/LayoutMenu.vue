<template>
  <ScrollBar wrapperClass="layout-menu">
    <div class="layout-menu-list">
      <div v-if="currentPath.indexOf('/docs/')===0">
        <div
          class="layout-menu-item"
          :class="{'layout-menu-item-active':currentPath===`/docs/start`}"
          @click="docChange('/docs/start')"
        >快速开始</div>
        <div
          class="layout-menu-item"
          :class="{'layout-menu-item-active':currentPath===`/docs/design`}"
          @click="docChange('/docs/design')"
        >自定义主题</div>
        <LayoutMenuComponents />
      </div>
      <div v-if="currentPath.indexOf('/development/')===0">
        <div
          class="layout-menu-item"
          :class="{'layout-menu-item-active':currentPath==='/development/base'}"
          @click="docChange('/development/base')"
        >创建组件</div>
        <div
          class="layout-menu-item"
          :class="{'layout-menu-item-active':currentPath==='/development/component'}"
          @click="docChange('/development/component')"
        >组件编写说明</div>
        <div
          class="layout-menu-item"
          :class="{'layout-menu-item-active':currentPath==='/development/md'}"
          @click="docChange('/development/md')"
        >markdown编写说明</div>
      </div>
      <div v-if="currentPath.indexOf('/architecture/')===0">
        <div
          class="layout-menu-item"
          :class="{'layout-menu-item-active':currentPath==='/architecture/base'}"
          @click="docChange('/architecture/base')"
        >概览</div>
        <div
          class="layout-menu-item"
          :class="{'layout-menu-item-active':currentPath==='/architecture/vue'}"
          @click="docChange('/architecture/vue')"
        >vue解析</div>
        <div
          class="layout-menu-item"
          :class="{'layout-menu-item-active':currentPath==='/architecture/md'}"
          @click="docChange('/architecture/md')"
        >md解析</div>
      </div>
    </div>
  </ScrollBar>
</template>

<script>
import { ScrollBar } from 'rayx-ui'
import LayoutMenuComponents from './LayoutMenuComponents.vue'

export default {
  name: 'LayoutMenu',
  components: { ScrollBar, LayoutMenuComponents },
  data () {
    return {
      currentPath: ''
    }
  },
  mounted () {
    // this.currentPath = this.$router.history.current.path
  },
  methods: {
    docChange (path) {
      this.$router.push(path)
    }
  },
  watch: {
    $route (to, from) {
      console.log(to.path)
      this.currentPath = to.path
    }
  },
  beforeRouteEnter (to, from) {
    console.log('beforeRouteEnter', to)
    // 在渲染该组件的对应路由被验证前调用
    // 不能获取组件实例 `this` ！
    // 因为当守卫执行时，组件实例还没被创建！
  },
  beforeRouteUpdate (to, from) {
    console.log('beforeRouteUpdate', to)
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
    // 由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 因为在这种情况发生的时候，组件已经挂载好了，导航守卫可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from) {
    console.log('beforeRouteLeave', to)
    // 在导航离开渲染该组件的对应路由时调用
    // 与 `beforeRouteUpdate` 一样，它可以访问组件实例 `this`
  }
}
</script>
