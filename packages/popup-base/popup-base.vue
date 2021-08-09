<template>
  <transition
    :enter-active-class="`animate__${animateIn}`"
    :leave-active-class="`animate__${animateOut}`"
    @after-leave="afterLeave"
  >
    <div
      v-if="show"
      :class="['animate__animated', 'r-popup-base', { isShow: show }]"
      v-clickOutside="clickOutside"
    >
      <slot></slot>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ClickOutside from '../directives/click-outside'

export default defineComponent({
  name: 'rPopupBase',
  props: {
    /**
     * 显示状态，v-model:show
     */
    show: {
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
  watch: {
    show (v: boolean) {
      console.log('watch > show', v)
    }
  },
  emits: {
    /**
     * 关闭事件
     */
    destroy: null,
    /**
     * 更新显示状态
     */
    'update:show': (isShow: boolean) => isShow || true
  },
  methods: {
    afterLeave () {
      this.$emit('destroy')
    },
    clickOutside () {
      if (this.closeOnClickOutside && this.show) {
        this.close()
      }
    },
    close () {
      this.$emit('update:show', false)
    }
  },
  mounted () {
    console.log('mounted', this.show)
  }
})
</script>
