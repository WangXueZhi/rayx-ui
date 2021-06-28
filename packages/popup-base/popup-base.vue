<template>
  <div class="r-popup-base">
    <div class="r-popup-base-mask"></div>
    <div class="r-popup-base-mask"></div>
  </div>
</template>
<script lang="ts">
import { VNode, defineComponent, PropType } from 'vue'

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
