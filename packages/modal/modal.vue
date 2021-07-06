<template>
  <transition
    enter-active-class="animate__fadeIn"
    leave-active-class="animate__fadeOut"
    @before-leave="onClose"
    @after-leave="afterLeave"
  >
    <div v-if="show" :class="['r-modal', { 'r-modal-mask': showMask }]">
      <div class="r-modal-wrapper" style="">
        <PopupBase
          v-bind:show="show"
          @update:show="(value) => $emit('update:show', value)"
        >
        </PopupBase>
      </div>
    </div>
  </transition>
</template>
<script>
import PopupBase from '../popup-base'
export default {
  name: 'rModal',
  components: { PopupBase },
  props: {
    /**
     * 显示状态，v-model:show
     */
    show: {
      type: Boolean,
      default: false
    },
    /**
     * 显示遮罩层
     */
    showMask: {
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
    }
  },
  methods: {}
}
</script>
