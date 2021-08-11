<template>
  <PopupBase v-bind:show="showPopupBase" class="r-modal" @onClose="onClose">
    <div v-if="showMask" class="r-modal-mask" @click="clickMask"></div>
    <div
      class="r-modal-wrapper"
      :class="[
        `r-modal-wrapper-position-${position}`,
        { ...wrapperCustomClass }
      ]"
    >
      <transition
        :enter-active-class="`animate__${animateIn}`"
        :leave-active-class="`animate__${animateOut}`"
      >
        <div
          :class="[
            'r-modal-content',
            'animate__animated',
            ...contentCustomClass
          ]"
          v-if="showModalContent"
        >
          <slot>
            <div v-if="dangerInnerHtml" v-html="content"></div>
            <div v-else>{{ content }}</div>
          </slot>
        </div>
      </transition>
    </div>
  </PopupBase>
</template>
<script lang="ts">
import { defineComponent, ref, nextTick, watch } from 'vue'
import PopupBase from '../popup-base'
export default defineComponent({
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
      default: true
    },
    /**
     * 点击遮罩层关闭
     */
    closeOnClickMask: {
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
     *  是否给body设置overflow: hidden
     */
    bodyOverflow: {
      type: Boolean,
      default: true
    },
    /**
     *  模态窗内容容器自定义class， r-modal-content
     */
    contentCustomClass: {
      type: Array,
      default: (): string[] => []
    },
    /**
     *  模态窗包裹容器自定义class，也就是r-modal-wrapper
     */
    wrapperCustomClass: {
      type: Array,
      default: (): string[] => []
    },
    /**
     *  内容
     */
    content: {
      type: String,
      default: ''
    },
    /**
     *  以html形式插入内容
     */
    dangerInnerHtml: {
      type: Boolean,
      default: false
    },
    /**
     *  模态窗容器位置，top | center | bottom
     */
    position: {
      type: String,
      default: 'center'
    }
  },
  emits: {
    /**
     * 关闭事件
     */
    onClose: null,
    /**
     * 更新显示状态
     */
    'update:show': (isShow: boolean) => isShow,
    /**
     * 点击遮罩层
     */
    clickMask: null
  },
  setup (props, ctx) {
    const showModalContent = ref(false)
    const showPopupBase = ref(false)
    const modalContentRef = ref(null)

    watch(
      () => props.show,
      async (show, prevShow) => {
        if (show !== prevShow) {
          if (show === true) {
            showPopupBase.value = true
            await nextTick()
            showModalContent.value = true
          } else {
            showModalContent.value = false
            await nextTick()
            showPopupBase.value = false
          }

          if (props.bodyOverflow) {
            show
              ? document.body.classList.add('r-modal-parent--hidden')
              : document.body.classList.remove('r-modal-parent--hidden')
          }
        }
      }
    )

    // 点击遮罩层
    const clickMask = () => {
      ctx.emit('clickMask')
      if (props.closeOnClickMask) {
        ctx.emit('update:show', false)
      }
    }

    const onClose = () => {
      ctx.emit('onClose')
    }

    return {
      showPopupBase,
      showModalContent,
      modalContentRef,
      clickMask,
      onClose
    }
  }
})
</script>
