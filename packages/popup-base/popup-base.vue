<template>
  <teleport :to="to" :disabled="!to">
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
  </teleport>
</template>
<script lang="ts">
import { VNode, defineComponent, PropType } from 'vue'
import ClickOutside from '../directives/click-outside'

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
