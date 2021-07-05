<template>
  <transition
    :enter-active-class="`animate__${animateIn}`"
    :leave-active-class="`animate__${animateOut}`"
    @before-leave="onClose"
    @after-leave="afterLeave"
  >
    <div
      v-if="visible"
      :class="['animate__animated', 'r-popup-base']"
      v-clickOutside="clickOutside"
    >
      <slot></slot>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ClickOutside from '../directives/click-outside'
import 'animate.css'

export default defineComponent({
  name: 'rPopupBase',
  props: {
    /**
     * 显示状态，v-model:visible
     */
    visible: {
      type: Boolean,
      default: false
    },
    /**
     * 入场动画：参考animate.css
     */
    animateIn: {
      type: String,
      default: 'fadeIn'
    },
    /**
     *  出场动画：参考animate.css
     */
    animateOut: {
      type: String,
      default: 'fadeOut'
    },
    // /**
    //  * 插入位置，元素选择器，exp: #app
    //  */
    // to: {
    //   type: String,
    //   default: ''
    // },
    // /**
    //  * 内容， string或者vnode
    //  */
    // content: {
    //   type: [String, Object] as PropType<string | VNode>,
    //   default: ''
    // },
    // /**
    //  * 显示遮罩层
    //  */
    // showMask: {
    //   type: Boolean,
    //   default: false
    // },
    // /**
    //  * 点击遮罩层关闭
    //  */
    // closeOnClickMask: {
    //   type: Boolean,
    //   default: false
    // },
    /**
     * 点击外部关闭
     */
    closeOnClickOutside: {
      type: Boolean,
      default: false
    }
  },
  directives: {
    clickOutside: ClickOutside
  },
  // watch: {
  //   visible (v: boolean) {
  //     if (v) {
  //       document.body.classList.add('r-popup-base-parent--hidden')
  //     } else {
  //       document.body.classList.remove('r-popup-base-parent--hidden')
  //     }
  //   }
  // },
  methods: {
    afterLeave () {
      this.$emit('onClose')
    },
    clickOutside () {
      if (this.closeOnClickOutside && this.visible) {
        this.$emit('update:visible', false)
      }
    }
  }
})
</script>
