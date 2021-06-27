<template>
  <div class="r-popup-base">123</div>
</template>
<script lang="ts">
import {
  App,
  VNode,
  createVNode,
  isVNode,
  defineComponent,
  PropType
} from 'vue'

export default defineComponent({
  name: 'rPopupBase',
  props: {
    /**
     * 动画类型
     */
    animateType: {
      type: String,
      default: 'fade'
    },
    ele: {
      type: Element,
      default: null
    },
    content: {
      type: [String, Object] as PropType<string | VNode>,
      default: ''
    }
  },
  methods: {}
})
</script>
