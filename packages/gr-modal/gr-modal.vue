<template>
  <div class="bg-modal-box">
    <Modal
      class-name="gr-modal"
      v-model="show"
      :mask-closable="maskClosable"
      :title="title"
      @on-ok="ok"
      @on-cancel="cancel"
      @on-visible-change="visibleChange"
      :width="w"
      :draggable="draggable"
    >
      <slot name="content" />
      <footer slot="footer" v-if="!footerHide && customFooter === undefined">
        <Button @click="ok">
          {{okText}}
        </Button>
        <Button @click="cancel">
          {{cancelText}}
        </Button>
        <!-- <i-button class="gr-modal-ok-btn" @click="ok" v-text="okText" />
        <i-button
          class="gr-modal-cancel-btn"
          @click="cancel"
          v-text="cancelText"
        /> -->
      </footer>
      <footer v-else slot="footer">
        <slot name="footer"></slot>
      </footer>
    </Modal>
  </div>
</template>

<script>
import { Modal } from 'view-design'
import {Button} from 'rayx-ui'

export default {
  name: "gr-modal",
  components: {
    Modal,
    Button
  },
  data() {
    return {
      show: false
    };
  },
  props: {
    /**
     * 弹窗标题
     */
    title: {
      type: String,
      default: "弹窗"
    },
    /**
     * 确认按钮文本
     */
    okText: {
      type: String,
      default: "确定"
    },
    /**
     * 取消按钮文本
     */
    cancelText: {
      type: String,
      default: "取消"
    },
    /**
     * 是否隐藏脚
     */
    footerHide: {
      type: Boolean,
      default: false
    },
    /**
     * 是否点击蒙层关闭
     */
    maskClosable: {
      type: Boolean,
      default: false
    },
    /**
     * 宽度
     */
    w: {
      type: Number | String,
      default: "auto"
    },
    /**
     * 是否可拖拽
     */
    draggable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    customFooter() {
      return this.$slots.footer;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.show = true;
    });
  },
  methods: {
    ok() {
      this.$emit("on-ok");
    },
    cancel() {
      this.$emit("on-cancel");
    },
    visibleChange(bool) {
      this.$emit("on-visible-change", bool);
    }
  },
  beforeDestroy() {}
};
</script>

<style lang="scss" src="./gr-modal.scss"></style>
