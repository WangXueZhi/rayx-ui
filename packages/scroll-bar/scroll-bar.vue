<template>
  <div class="r-scrollbar" :class="{[wrapperClass]:wrapperClass, 'r-scrollbar-needShowBar': needShowBar}">
    <div
      class="r-scrollbar__wrap"
      style="margin-bottom: -17px; margin-right: -17px;"
      @scroll="scrollEvent"
      ref="scrollbar_wrap"
    >
      <div class="r-scrollbar__view">
        <slot></slot>
      </div>
    </div>
    <div class="r-scrollbar__bar is-horizontal">
      <div class="r-scrollbar__thumb" ref="scrollbar_horizontal"></div>
    </div>
    <div class="r-scrollbar__bar is-vertical">
      <div
        class="r-scrollbar__thumb"
        ref="scrollbar_vertical"
        :style="{height: `${scrollBarHeight}px`, transform: `translateY(${scrollBarTranslateTop}px)`}"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "rScrollBar",
  props: {
    /**
     * 类型
     */
    wrapperClass: {
      type: String,
      default: "",
    }
  },
  data() {
    return {
      scrollBarHeight: 0,
      scrollBarTranslateTop: 0,
      needShowBar: true
    };
  },
  computed: {},
  methods: {
    scrollEvent() {
      this.scrollBarTranslateTop =
        (this.$refs.scrollbar_wrap.scrollTop /
          (this.$refs.scrollbar_wrap.scrollHeight -
            this.$refs.scrollbar_wrap.clientHeight)) *
        (this.$refs.scrollbar_wrap.clientHeight - this.scrollBarHeight);
    },
  },
  mounted() {
    this.scrollBarHeight =
      (this.$refs.scrollbar_wrap.clientHeight /
        this.$refs.scrollbar_wrap.scrollHeight) *
      this.$refs.scrollbar_wrap.clientHeight;
    this.needShowBar = this.$refs.scrollbar_wrap.clientHeight !== this.$refs.scrollbar_wrap.scrollHeight
  },
};
</script>
