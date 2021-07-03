<template>
  <transition
    :name="`r-popup-base-${animateType}`"
    @before-leave="onClose"
    @after-leave="afterLeave"
  >
    <div v-if="visible" :class="['r-popup-base', ...customClass]">
      <div v-if="showMask" class="r-popup-base-mask"></div>
      <div class="r-popup-base-content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import { VNode, defineComponent, PropType } from 'vue'
import ClickOutside from '../directives/click-outside'
import { PostionStyle } from './types'

// const defaultPostionStyle: PostionStyle = {
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)'
// }

export default defineComponent({
  name: 'rPopupBase',
  props: {
    /**
     * 显示弹窗
     */
    visible: {
      type: Boolean,
      default: false
    },
    /**
     * 动画类型
     */
    animateType: {
      type: String,
      default: 'fade'
    },
    /**
     * 插入位置，元素选择器，exp: #app
     */
    to: {
      type: String,
      default: ''
    },
    /**
     * 内容， string或者vnode
     */
    content: {
      type: [String, Object] as PropType<string | VNode>,
      default: ''
    },
    /**
     * 自定义class
     */
    customClass: {
      type: Array,
      default: (): string[] => []
    },
    /**
     * 显示遮罩层
     */
    showMask: {
      type: Boolean,
      default: false
    },
    /**
     * 位置样式设置
     */
    postionStyle: {
      type: Object,
      default: (): PostionStyle => {
        return {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }
      }
    }
  },
  directives: {
    clickOutside: ClickOutside
  },
  methods: {
    afterLeave () {
      this.$emit('onClose')
    }
  }
})
</script>
