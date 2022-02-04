<template>
  <Modal
    :wrapperCustomClass="['r-dialog']"
    :contentCustomClass="['r-dialog-content']"
    @close="close"
  >
    <header class="r-dialog-header">
      <slot name="header">
        <div class="r-dialog-header_wrapper">
          <div class="r-dialog-header_wrapper--left">{{ title }}</div>
          <div class="r-dialog-header_wrapper--right">
            <slot name="header-right">
              <Icon
                @click="toCancel"
                name="icon-close-thin-halfradiu"
                :size="10"
              />
            </slot>
          </div>
        </div>
      </slot>
    </header>
    <main class="r-dialog-content">
      <div class="r-dialog-content_wrapper">
        <slot></slot>
      </div>
    </main>
    <footer class="r-dialog-footer">
      <slot name="footer">
        <div class="r-dialog-footer_wrapper">
          <Button
            v-for="(btn, index) in footerBtns.length > 0 ? footerBtns : btns"
            :key="index"
            v-bind="btn"
            class="r-dialog-footer_wrapper--btn"
            >{{ btn.text }}</Button
          >
        </div>
      </slot>
    </footer>
  </Modal>
</template>
<script lang="ts">
import { defineComponent, PropType, ref, nextTick, watch } from 'vue'
import Modal from '../modal'
import Icon from '../icon'
import Button from '../button'
import type { footerButtonOption } from './types'

export default defineComponent({
  name: 'rDialog',
  components: { Modal, Icon, Button },
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: ''
    },
    /**
     * 底部按钮数组: text => 按钮文案，click
     */
    footerBtns: {
      type: Array as PropType<footerButtonOption[]>,
      default: (): footerButtonOption[] => []
    }
  },
  emits: {
    /**
     * 确定按钮点击事件
     */
    ok: null,
    /**
     * 取消按钮点击事件
     */
    cancel: null,
    /**
     * 关闭事件
     */
    close: null,
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
    const close = function () {
      ctx.emit('close')
    }

    const toClose = function () {
      ctx.emit('update:show', false)
    }

    const toCancel = function () {
      toClose()
      ctx.emit('cancel')
    }

    const btns: footerButtonOption[] = [
      {
        text: '取消',
        onClick: () => {
          toCancel()
        },
        liter: true
      },
      {
        text: '确定',
        onClick: () => {
          ctx.emit('ok')
        },
        type: 'primary',
        lite: true
      }
    ]

    return {
      toCancel,
      toClose,
      close,
      btns
    }
  }
})
</script>
