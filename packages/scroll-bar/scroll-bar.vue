<template>
  <div
    class="r-scrollbar"
    :class="{
      [wrapperClass]: wrapperClass,
    }"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
    ref="scrollbar"
  >
    <div
      class="r-scrollbar__wrap"
      :style="{
        marginBottom: `-${barWidth}px`,
        marginRight: `-${barWidth}px`,
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
        :translateY="scrollBarTranslateTop"
      >
        <template v-slot:dragBar>
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
import Draggable from "../draggable";
export default {
  name: "rScrollBar",
  components: { Draggable },
  props: {
    /**
     * 类型
     */
    wrapperClass: {
      type: String,
      default: "",
    },
  },
  data () {
    return {
      scrollBarHeight: 0,
      scrollBarTranslateTop: 0,
      needShowBar: true,
      mousedownState: false,
      mouseenterState: false,
    };
  },
  computed: {
    barShow () {
      console.log(this.mouseenterState || this.mousedownState)
      return this.needShowBar && (this.mouseenterState || this.mousedownState);
    },
    barWidth () {
      const scroll = document.createElement("div");
      const scrollIn = document.createElement("div");
      scroll.appendChild(scrollIn);
      scroll.style.width = "100px";
      scroll.style.height = "50px";
      scroll.style.overflow = "scroll";
      scroll.style.marginLeft = "-100000px";
      document.body.appendChild(scroll);
      const scrollInWidth = scrollIn.offsetWidth;
      const scrollWidth = scroll.offsetWidth;
      const tmp = setTimeout(() => {
        document.body.removeChild(scroll);
        clearTimeout(tmp);
      }, 10);
      return scrollWidth - scrollInWidth;
    },
  },
  methods: {
    mousedown () {
      this.mousedownState = true;
      if (!this.mouseupCallBack) {
        this.mouseupCallBack = this.mouseup.bind(this);
        document.addEventListener("mouseup", this.mouseupCallBack);
      }
    },
    mouseup () {
      this.mousedownState = false;
    },
    mouseenter () {
      this.mouseenterState = true;
      this.initScrollBarState();
    },
    mouseleave () {
      this.mouseenterState = false;
    },
    moveChange (rect) {
      let { top } = rect;
      if (top < 0) {
        top = 0;
      }
      if (top > this.$refs.scrollbar_wrap.clientHeight - this.scrollBarHeight) {
        top = this.$refs.scrollbar_wrap.clientHeight - this.scrollBarHeight;
      }
      const scrollTop =
        (top /
          (this.$refs.scrollbar_wrap.clientHeight - this.scrollBarHeight)) *
        (this.$refs.scrollbar_wrap.scrollHeight -
          this.$refs.scrollbar_wrap.clientHeight);
      this.$refs.scrollbar_wrap.scrollTop = scrollTop;

      return {
        left: 0,
        top: top,
      };
    },
    scrollEvent () {
      const translateTop =
        (this.$refs.scrollbar_wrap.scrollTop /
          (this.$refs.scrollbar_wrap.scrollHeight -
            this.$refs.scrollbar_wrap.clientHeight)) *
        (this.$refs.scrollbar_wrap.clientHeight - this.scrollBarHeight);

      this.scrollBarTranslateTop = translateTop;
    },
    initScrollBarState () {
      this.$refs.scrollbar.style.height = 'auto'
      this.$refs.scrollbar.style.height =
        this.$refs.scrollbar.clientHeight + "px";
      this.scrollBarHeight =
        (this.$refs.scrollbar_wrap.clientHeight /
          this.$refs.scrollbar_wrap.scrollHeight) *
        this.$refs.scrollbar_wrap.clientHeight;
      console.log(this.scrollBarHeight)
      this.needShowBar =
        this.$refs.scrollbar_wrap.clientHeight !==
        this.$refs.scrollbar_wrap.scrollHeight;
    },
  },
  mounted () {
    setTimeout(() => {
      this.initScrollBarState();
    });
    this.resizeCallBack = this.initScrollBarState.bind(this);
    window.addEventListener("resize", this.resizeCallBack);
  },
  unmounted () {
    window.removeEventListener("resize", this.resizeCallBack);
    if (this.mouseupCallBack) {
      document.removeEventListener("mouseup", this.mouseupCallBack);
    }
  },
};
</script>
