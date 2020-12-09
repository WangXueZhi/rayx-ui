<template>
  <div
    class="r-input"
    :class="[
      size ? 'r-input--' + size : '',
      {
        'r-input-pend': $slots.prepend || $slots.append,
        'r-input-group': ($slots.prepend || $slots.append) && groupMode,
        'r-input-group--append': $slots.append && groupMode,
        'r-input-group--prepend': $slots.prepend && groupMode,
        'r-input--prefix': $slots.prefix,
        'r-input--suffix': $slots.suffix || showPasswordSwitch,
        'r-input--disabled': $attrs.disabled !== undefined,
      },
    ]"
  >
    <template v-if="type !== 'textarea'">
      <div class="r-input-pend__prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <input
        v-bind="$attrs"
        class="r-input-inner"
        :type="type"
        :placeholder="placeholder"
        ref="inputRef"
        :style="inputStyle"
        :value="value"
        @keydown="keydown"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      />
      <span class="r-input-inner--suffix" v-if="$slots.suffix" ref="suffixRef">
        <slot name="suffix"></slot>
      </span>
      <span class="r-input-inner--prefix" v-if="$slots.prefix" ref="prefixRef">
        <slot name="prefix"></slot>
      </span>
      <div class="r-input-pend__append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </template>
    <template v-else>
      <textarea
        v-bind="$attrs"
        class="r-input-inner"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
        @keydown="keydown"
      ></textarea>
    </template>
  </div>
</template>
<script>
export default {
  name: 'rInput',
  inheritAttrs: false,
  props: {
    /**
     * 值
     */
    value: {
      type: String | Number,
      default: '',
    },
    /**
     * 清除图标， 还不能用
     */
    clear: {
      type: Boolean,
      default: false,
    },
    /**
     * 占位提示
     */
    placeholder: {
      type: String,
      default: '请输入',
    },
    /**
     * 类型：text | password | textarea
     */
    type: {
      type: String,
      default: 'text',
    },
    /**
     * 显示密码开关，还不能用
     */
    showPasswordSwitch: {
      type: Boolean,
      default: true,
    },
    /**
     * 尺寸：big | medium | small
     */
    size: {
      type: String,
      default: 'medium',
    },
    /**
     * 分组模式，只有在有append或prepend的slot才有效
     */
    groupMode: {
      type: Boolean,
      default: false,
    },
    /**
     * 文字水平对齐方式
     */
    textAlign: {
      type: String,
      default: '',
    },
  },
  computed: {
    inputStyle() {
      const styles = {}
      if (this.textAlign) {
        styles.textAlign = this.textAlign
      }
      return styles
    },
  },
  methods: {
    keydown(e) {
      if (e.keyCode === 13) {
        this.$emit('enter', this.value)
      }
    },
    handleCompositionStart() {
      this.isComposing = true
    },
    handleCompositionEnd(event) {
      if (this.isComposing) {
        this.isComposing = false
        this.handleInput(event)
      }
    },
    handleInput(event) {
      if (this.isComposing) return
      this.$emit('input', event.target.value)
    },
    handleChange(event) {
      this.$emit('change', event.target.value)
    },
    handleFocus(event) {
      this.focused = true
      this.$emit('focus', event)
    },
    handleBlur(event) {
      this.focused = false
      this.$emit('blur', event)
    },
  },
  mounted() {
    window.inp = this
    console.log(this.$attrs)
    if (this.$refs.prefixRef) {
      // console.log(this.$refs.prefixRef.clientWidth)
      this.$refs.inputRef.style.paddingLeft =
        this.$refs.prefixRef.clientWidth + 'px'
    }
    if (this.$refs.suffixRef) {
      this.$refs.inputRef.style.paddingRight =
        this.$refs.suffixRef.clientWidth + 'px'
    }
  },
}
</script>
