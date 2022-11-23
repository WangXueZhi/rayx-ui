<template>
  <div
    class="r-virtual-list"
    ref="listRef"
  >
    <div
      class="r-virtual-list-wrapper"
      :style="{
        height: `${wrapperHeight}px`
      }"
    >
      <div
        class="r-virtual-list-options"
        :style="{
          transform: `translateY(${transformY}px)`
        }"
      >
        <div
          class="r-virtual-list-option"
          :ref="`optionRef${index}`"
          v-for="(item, index) in optionsData"
          :key="item.key || index"
        >
          <slot name="option" :optionData="item"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  computed,
  defineComponent,
  onMounted,
  onBeforeUnmount,
  ref,
  getCurrentInstance
} from 'vue'
export default defineComponent({
  name: 'rVirtualList',
  props: {
    /**
     * 列表数据
     */
    data: {
      type: Array,
      default: () => []
    },
    /**
     * 每项高度
     */
    itemHeight: {
      type: [Number, String],
      default: 0
    }
  }
})
</script>
<script setup>
const { proxy } = getCurrentInstance()

const scrollTop = ref(0)

// 可视容器位移
const transformY = computed(() => {
  return startIndex.value * proxy.itemHeight
})

// 显示的 option 数量
const optionsNumber = computed(() => {
  return Math.ceil(screenHeight.value / proxy.itemHeight) + 1
})

// 显示的 option 数据
const optionsData = computed(() => {
  return proxy.data.slice(startIndex.value, endIndex.value)
})

// 滚动容器的实际高度
const wrapperHeight = computed(() => {
  return proxy.data.length * proxy.itemHeight
})

const listRef = ref(0)
// 可视区域高度
const screenHeight = computed(() => {
  return listRef.value?.clientHeight || 0
})

// 开始数据的索引
const startIndex = computed(() => {
  return Math.floor(scrollTop.value / proxy.itemHeight)
})

// 结束数据的索引
const endIndex = computed(() => {
  return startIndex.value + optionsNumber.value
})

const scrollForVirtualList = function () {
  scrollTop.value = listRef.value?.scrollTop || 0
}

onMounted(() => {
  listRef.value?.addEventListener('scroll', scrollForVirtualList)
})

onBeforeUnmount(() => {
  listRef.value?.removeEventListener('scroll', scrollForVirtualList)
})
</script>
