<template>
  <div class="r-draggable" :style="`transform:translate(${left}px,${top}px)`">
    <div class="r-draggable-head" @mousedown="onMouseDown">
      <slot name="head" />
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'rDraggable',
  props: {
    /**
     * 移动检测，入参是{left,top}偏移信息的对象，返回同样的对象，表示要偏移的位置
     */
    moveChange: {
      type: Function,
      default: null
    },
    /**
     * 位移X，值改变会触发moveChange规则
     */
    translateX: {
      type: Number,
      default: 0
    },
    /**
     * 位移Y, 值改变会触发moveChange规则
     */
    translateY: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      left: 0,
      top: 0
    }
  },
  computed: {},
  methods: {
    mouseUp () {},
    onMouseDown (e) {
      // 鼠标起始位置
      const mX = e.clientX
      const mY = e.clientY

      const originLeft = this.left
      const originTop = this.top

      const mouseMove = (e) => {
        // 计算鼠标的位移
        const mleft = e.clientX - mX
        const mtop = e.clientY - mY
        // 计算元素的位移
        const elLeft = originLeft + mleft
        const elTop = originTop + mtop

        let moveData = {
          left: elLeft,
          top: elTop
        }

        moveData = this.moveChange
          ? this.moveChange(moveData)
          : moveData

        if (typeof moveData === 'object') {
          if (!moveData.left && moveData.left !== 0) {
            throw new Error('偏移信息缺少 left 属性')
          }
          if (!moveData.top && moveData.top !== 0) {
            throw new Error('偏移信息缺少 top 属性')
          }
          this.left = moveData.left
          this.top = moveData.top
        }
      }

      const mouseUp = () => {
        document.removeEventListener('mousemove', mouseMove)
        document.removeEventListener('mouseup', mouseUp)
      }

      document.addEventListener('mousemove', mouseMove)
      document.addEventListener('mouseup', mouseUp)

      return false
    }
  },
  mounted () {},
  watch: {
    translateX (newV, oldV) {
      if (this.moveChange) {
        const { left } = this.moveChange({
          left: newV,
          top: this.top
        })
        this.left = left
      } else {
        this.left = newV
      }
    },
    translateY (newV, oldV) {
      if (this.moveChange) {
        const { top } = this.moveChange({
          left: this.left,
          top: newV
        })
        this.top = top
      } else {
        this.top = newV
      }
    }
  }
}
</script>
