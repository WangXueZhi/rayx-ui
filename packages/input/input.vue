<template>
  <div
    v-bind="$attrs"
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
        'r-input--disabled': $attrs.disabled !== undefined
      }
    ]"
  >
    <template v-if="type !== 'textarea'">
      <div class="r-input-pend__prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <input
        class="r-input-inner"
        :type="type"
        :placeholder="placeholder"
        ref="inputRef"
        :style="inputStyle"
        :value="modelValue"
        @keydown="keydown"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        v-focus="shouldFocus"
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
        class="r-input-inner"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @keydown="keydown"
        v-focus="shouldFocus"
      ></textarea>
    </template>
  </div>
</template>
<script>
import { defineComponent, computed, onMounted, ref } from 'vue'
import AutoFocus from '../directives/auto-focus'
export default defineComponent({
  name: 'rInput',
  inheritAttrs: false,
  props: {
    /**
     * 值
     */
    modelValue: {
      type: [String, Number],
      default: ''
    },
    /**
     * 清除图标， 还不能用
     */
    clear: {
      type: Boolean,
      default: false
    },
    /**
     * 占位提示
     */
    placeholder: {
      type: String,
      default: '请输入'
    },
    /**
     * 类型：text | password | textarea
     */
    type: {
      type: String,
      default: 'text'
    },
    /**
     * 显示密码开关，还不能用
     */
    showPasswordSwitch: {
      type: Boolean,
      default: true
    },
    /**
     * 尺寸：big | medium | small
     */
    size: {
      type: String,
      default: 'medium'
    },
    /**
     * 分组模式，只有在有append或prepend的slot才有效
     */
    groupMode: {
      type: Boolean,
      default: false
    },
    /**
     * 文字水平对齐方式
     */
    textAlign: {
      type: String,
      default: ''
    },
    /**
     * 自动聚焦
     */
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    /**
     * 输入
     */
    input: null,
    /**
     * 按键按下
     */
    keydown: null,
    /**
     * 聚焦
     */
    focus: null,
    /**
     * 失焦
     */
    blur: null,
    /**
     * 改变
     */
    change: null
  },
  setup (props) {
    const inputStyle = computed(() => {
      const styles = {}
      if (props.textAlign) {
        styles.textAlign = props.textAlign
      }
      return styles
    })

    const inputRef = ref(null)
    const prefixRef = ref(null)
    const suffixRef = ref(null)

    onMounted(() => {
      if (prefixRef.value && inputRef.value) {
        inputRef.value.style.paddingLeft = prefixRef.value.clientWidth + 'px'
      }
      if (suffixRef.value && inputRef.value) {
        inputRef.value.style.paddingRight = suffixRef.value.clientWidth + 'px'
      }
    })

    return {
      inputStyle,
      inputRef,
      prefixRef,
      suffixRef
    }
  },
  methods: {
    shouldFocus () {
      return this.autofocus
    },
    keydown (e) {
      if (e.keyCode === 13) {
        this.$emit('enter', this.value)
      }
    },
    handleCompositionStart () {
      this.isComposing = true
    },
    handleCompositionEnd (event) {
      if (this.isComposing) {
        this.isComposing = false
        this.handleInput(event)
      }
    },
    handleInput (event) {
      if (this.isComposing) return
      this.$emit('update:modelValue', event.target.value)
      this.$emit('input', event.target.value)
    },
    handleChange (event) {
      this.$emit('change', event.target.value)
    },
    handleFocus (event) {
      this.focused = true
      this.$emit('focus', event)
    },
    handleBlur (event) {
      this.focused = false
      this.$emit('blur', event)
    }
  },
  directives: {
    focus: AutoFocus
  }
})
</script>
