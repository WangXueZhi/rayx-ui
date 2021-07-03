<template>
  <div
    class="r-scrollbar"
    :class="{
      [wrapperClass]: wrapperClass
    }"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
    ref="scrollbar"
  >
    <div
      class="r-scrollbar__wrap"
      :style="{
        marginBottom: `-${barWidth}px`,
        marginRight: `-${barWidth}px`
      }"
      @scroll="scrollEvent"
      ref="scrollbar_wrap"
    >
      <div class="r-scrollbar__view">
        <slot></slot>
      </div>
    </div>
    <!-- <div class="r-scrollbar__bar is-horizontal">
      <div class="r-scrollbar__thumb" ref="scrollbar_horizontal"></div>
    </div> -->
    <div
      class="r-scrollbar__bar is-vertical"
      :class="{ 'r-scrollbar__bar__show': barShow }"
    >
      <Draggable
        :moveChange="moveChange"
        :translateX="0"
        :translateY="data.scrollBarTranslateTop"
      >
        <template v-slot:dragBar>
          <div
            class="r-scrollbar__thumb"
            ref="scrollbar_vertical"
            :style="{
              height: `${data.scrollBarHeight}px`
            }"
            @mousedown="mousedown"
          ></div>
        </template>
      </Draggable>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  computed
} from 'vue'
import Draggable from '../draggable'
import { DRAGGABLE, DocumentEventCallback } from '../typings/util'

// 获取滚动条宽度
function getBarWidth () {
  const scroll = document.createElement('div')
  const scrollIn = document.createElement('div')
  scroll.appendChild(scrollIn)
  scroll.style.width = '100px'
  scroll.style.height = '50px'
  scroll.style.overflow = 'scroll'
  scroll.style.marginLeft = '-100000px'
  document.body.appendChild(scroll)
  const scrollInWidth = scrollIn.offsetWidth
  const scrollWidth = scroll.offsetWidth
  const tmp = setTimeout(() => {
    document.body.removeChild(scroll)
    clearTimeout(tmp)
  }, 10)
  return scrollWidth - scrollInWidth
}

export default defineComponent({
  name: 'rScrollBar',
  components: { Draggable },
  props: {
    /**
     * 类型
     */
    wrapperClass: {
      type: String,
      default: ''
    }
  },
  emits: {
    /**
     * 滚动中
     */
    'on-scroll': (payload: { left: number; top: number }) => {
      if (payload.left && payload.top) {
        return true
      } else {
        console.warn('Invalid on-scroll event payload!')
        return false
      }
    },
    /**
     * 滚动到底
     */
    'on-scroll-bottom': null,
    /**
     * 滚动到顶
     */
    'on-scroll-top': null
  },
  setup () {
    const scrollbar = ref(null)
    const scrollbar_wrap = ref(null)

    const data = reactive({
      scrollBarHeight: 0,
      scrollBarTranslateTop: 0,
      needShowBar: true,
      mousedownState: false,
      mouseenterState: false
    })

    let mouseupCallBack: DocumentEventCallback
    function mousedown () {
      data.mousedownState = true
      if (!mouseupCallBack) {
        mouseupCallBack = mouseup.bind(this)
        document.addEventListener('mouseup', mouseupCallBack)
      }
    }

    function mouseup () {
      data.mousedownState = false
    }

    function mouseenter () {
      data.mouseenterState = true
      initScrollBarState()
    }

    function mouseleave () {
      data.mouseenterState = false
    }

    function moveChange (rect: DRAGGABLE.RECT) {
      let { top } = rect
      if (top < 0) {
        top = 0
      }
      if (top > scrollbar_wrap.value.clientHeight - data.scrollBarHeight) {
        top = scrollbar_wrap.value.clientHeight - data.scrollBarHeight
      }
      const scrollTop =
        (top / (scrollbar_wrap.value.clientHeight - data.scrollBarHeight)) *
        (scrollbar_wrap.value.scrollHeight - scrollbar_wrap.value.clientHeight)
      scrollbar_wrap.value.scrollTop = scrollTop

      return {
        left: 0,
        top: top
      }
    }

    function scrollEvent () {
      const translateTop =
        (scrollbar_wrap.value.scrollTop /
          (scrollbar_wrap.value.scrollHeight -
            scrollbar_wrap.value.clientHeight)) *
        (scrollbar_wrap.value.clientHeight - data.scrollBarHeight)

      data.scrollBarTranslateTop = translateTop
    }

    function initScrollBarState () {
      // scrollbar.value.style.height = 'auto'
      // scrollbar.value.style.height = scrollbar_wrap.value.clientHeight + 'px'
      // console.log(
      //   scrollbar_wrap.value.clientHeight,
      //   scrollbar_wrap.value.scrollHeight,
      // )
      data.scrollBarHeight =
        (scrollbar_wrap.value.clientHeight /
          scrollbar_wrap.value.scrollHeight) *
        scrollbar_wrap.value.clientHeight
      data.needShowBar =
        scrollbar_wrap.value.clientHeight !== scrollbar_wrap.value.scrollHeight
    }

    let resizeCallBack: DocumentEventCallback
    onMounted(() => {
      setTimeout(() => {
        initScrollBarState()
      })
      resizeCallBack = initScrollBarState.bind(this)
      window.addEventListener('resize', resizeCallBack)
    })
    onUnmounted(() => {
      window.removeEventListener('resize', resizeCallBack)
      if (mouseupCallBack) {
        document.removeEventListener('mouseup', mouseupCallBack)
      }
    })

    return {
      barShow: computed(
        () => data.needShowBar && (data.mouseenterState || data.mousedownState)
      ),
      barWidth: computed(getBarWidth),
      data,
      scrollbar,
      scrollbar_wrap,
      mousedown,
      mouseenter,
      mouseleave,
      moveChange,
      scrollEvent
    }
  }
})
</script>
