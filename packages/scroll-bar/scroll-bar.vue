<template>
  <div
    class="r-scrollbar"
    :class="{
      [wrapperClass]: wrapperClass,
    }"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
  >
    <div
      class="r-scrollbar__wrap"
      style="margin-bottom: -17px; margin-right: -17px"
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
        :translateY="scrollBarTranslateTop"
      >
        <template slot="head">
          <div
            class="r-scrollbar__thumb"
            ref="scrollbar_vertical"
            :style="{
              height: `${scrollBarHeight}px`,
            }"
            @mousedown="mousedown"
          ></div>
        </template>
      </Draggable>
    </div>
  </div>
</template>
<script>
import Draggable from '../draggable'
export default {
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
  data () {
    return {
      scrollBarHeight: 0,
      scrollBarTranslateTop: 0,
      needShowBar: true,
      mousedownState: false,
      mouseenterState: false
    }
  },
  computed: {
    barShow () {
      return this.needShowBar && (this.mouseenterState || this.mousedownState)
    }
  },
  methods: {
    mousedown () {
      this.mousedownState = true
      if (!this.mouseupCallBack) {
        this.mouseupCallBack = this.mouseup.bind(this)
        document.addEventListener('mouseup', this.mouseupCallBack)
      }
    },
    mouseup () {
      this.mousedownState = false
    },
    mouseenter () {
      this.mouseenterState = true
      this.initScrollBarState()
    },
    mouseleave () {
      this.mouseenterState = false
    },
    moveChange (rect) {
      let { top } = rect
      if (top < 0) {
        top = 0
      }
      if (top > this.$refs.scrollbar_wrap.clientHeight - this.scrollBarHeight) {
        top = this.$refs.scrollbar_wrap.clientHeight - this.scrollBarHeight
      }
      const scrollTop =
        (top /
          (this.$refs.scrollbar_wrap.clientHeight - this.scrollBarHeight)) *
        (this.$refs.scrollbar_wrap.scrollHeight -
          this.$refs.scrollbar_wrap.clientHeight)
      this.$refs.scrollbar_wrap.scrollTop = scrollTop

      return {
        left: 0,
        top: top
      }
    },
    scrollEvent () {
      const translateTop =
        (this.$refs.scrollbar_wrap.scrollTop /
          (this.$refs.scrollbar_wrap.scrollHeight -
            this.$refs.scrollbar_wrap.clientHeight)) *
        (this.$refs.scrollbar_wrap.clientHeight - this.scrollBarHeight)

      this.scrollBarTranslateTop = translateTop
    },
    initScrollBarState () {
      this.scrollBarHeight =
        (this.$refs.scrollbar_wrap.clientHeight /
          this.$refs.scrollbar_wrap.scrollHeight) *
        this.$refs.scrollbar_wrap.clientHeight
      this.setNeedShowBar()
    },
    setNeedShowBar () {
      this.needShowBar =
        this.$refs.scrollbar_wrap.clientHeight !==
        this.$refs.scrollbar_wrap.scrollHeight
    }
  },
  mounted () {
    setTimeout(() => {
      this.initScrollBarState()
    })
    this.resizeCallBack = this.initScrollBarState.bind(this)
    window.addEventListener('resize', this.resizeCallBack)
  },
  destroyed () {
    window.removeEventListener('resize', this.resizeCallBack)
    if (this.mouseupCallBack) {
      document.removeEventListener('mouseup', this.mouseupCallBack)
    }
  }
}
</script>
