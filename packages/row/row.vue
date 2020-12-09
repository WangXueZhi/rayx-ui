<template>
  <div class="r-row" :class="{
    'r-row-flex': flexMode,
    'is-justify-center': flexMode && justify==='center',
    'is-justify-end': flexMode && justify==='end',
    'is-justify-space-around': flexMode && justify==='space-around',
    'is-justify-space-between': flexMode && justify==='space-between',
    'is-align-middle': flexMode && align==='middle',
    'is-align-bottom': flexMode && align==='bottom',
  }" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'rRow',
  props: {
    /**
     * 栅格间隔
     */
    gutter: {
      type: Number,
      default: 0,
    },
    /**
     * 是否启用flex布局
     */
    flexMode: {
      type: Boolean,
      default: false,
    },
    /**
     * flex 布局下的垂直对齐方式，可选值为top、middle、bottom
     */
    align: {
      type: String,
      default: '',
    },
    /**
     * flex 布局下的水平排列方式，可选值为start、end、center、space-around、space-between
     */
    justify: {
      type: String,
      default: '',
    }
  },
  mounted(){
    
  },
  computed: {
    styles(){
      const styles = {}
      if(this.gutter>0){
        styles.marginLeft = `-${this.gutter/2}px`
        styles.marginRight = styles.marginLeft
      }
      return styles
    }
  }
}
</script>
