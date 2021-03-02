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
  },
  data() {
    return {
      left: 0,
      top: 0,
    }
  },
  computed: {},
  methods: {
    mouseUp() {},
    onMouseDown(e) {
      //鼠标起始位置
      const mX = e.clientX
      const mY = e.clientY

      const originLeft = this.left
      const originTop = this.top

      const mouseMove = (e) => {
        //计算鼠标的位移
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

          console.log(moveData)

        if (typeof moveData === 'object') {
          if(!moveData.left && moveData.left != 0){
            throw new Error('偏移信息缺少 left 属性')
          }
          if(!moveData.top && moveData.top != 0){
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
    },
  },
  mounted() {},
}
</script>
