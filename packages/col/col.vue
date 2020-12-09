<template>
  <div class="r-col" :class="{
    [`r-col-${span}`]: true,
    [`r-col-offset-${offset}`]: offset,
    [`r-col-pull-${pull}`]: pull,
    [`r-col-push-${push}`]: push,
    [`r-col-order-${order}`]: order,
  }" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'rCol',
  props: {
    /**
     * 栅格的占位格数，可选值为0~24的整数，为 0 时，相当于display:none
     */
    span: {
      type: Number | String,
      default: 0,
    },
    /**
     * 栅格的顺序
     */
    order: {
      type: String,
      default: '',
    },
    /**
     * 栅格左侧的间隔格数，间隔内不可以有栅格
     */
    offset: {
      type: Number | String,
      default: '',
    },
    /**
     * 栅格向右移动格数
     */
    push: {
      type: Number | String,
      default: '',
    },
    /**
     * 栅格向左移动格数
     */
    pull: {
      type: Number | String,
      default: '',
    }
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      
      while (parent && parent.$vnode.componentOptions.Ctor.options.name !== 'rRow') {
        parent = parent.$parent;
      }
      
      return parent ? parent.gutter : 0;
    },
    styles(){
      const styles = {}
      console.log(this.gutter)
      if(this.gutter>0){
        styles.paddingLeft = `${this.gutter/2}px`
        styles.paddingRight = styles.paddingLeft
      }
      return styles
    }
  },
}
</script>
