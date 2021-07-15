<!-- type: 弹出层 -->

# PopupBase

组件介绍

## 示例

基础用法

```vue demo
<template>
  <div class="demo-wrapper">
    <r-popup-base v-model:show="show" class="demo-popup-base">
      基础用法
    </r-popup-base>
    <r-button @click="show = true">显示</r-button>
    <r-button @click="show = false">关闭</r-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>
<style>
.demo-popup-base {
  width: 200px;
  height: 80px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding-top: 20px;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-top: -40px;
  margin-left: -100px;
}
</style>
```

点击外部关闭

```vue demo
<template>
  <div class="demo-wrapper">
    <r-popup-base
      v-model:show="show"
      closeOnClickOutside
      class="demo-popup-base"
    >
      点击外部关闭
    </r-popup-base>
    <r-button @click="showPopup">弹窗</r-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    showPopup() {
      this.show = !this.show
    }
  }
}
</script>
```

动画效果

```vue demo
<template>
  <div class="demo-wrapper">
    <r-popup-base
      v-model:show="show"
      animateIn="bounceIn"
      animateOut="bounceOut"
      class="demo-popup-base"
    >
      动画效果
    </r-popup-base>
    <r-button @click="show = true">显示</r-button>
    <r-button @click="show = false">关闭</r-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>
```

静态方法调用

```vue demo
<template>
  <div class="demo-wrapper">
    <r-button @click="showPopupBase">显示</r-button>
    <r-button @click="closePopupBase">关闭</r-button>
    <r-button @click="cleanPopupBase">清除弹窗</r-button>
  </div>
</template>
<script>
import { defineComponent, getCurrentInstance, reactive } from 'vue'

let popupBaseHandle = null

export default defineComponent({
  data() {
    return {
      show: false
    }
  },
  setup() {
    const { proxy } = getCurrentInstance()

    const popupBaseHandleArr = reactive([])
    const showPopupBase = function () {

      const style = {
        left: `${Math.random()*(window.innerWidth-200)}px`,
        top: `${Math.random()*(window.innerHeight-80)}px`,
      }
      popupBaseHandleArr.push(
        proxy.$rPopupBase({
          animateIn: 'bounceIn',
          animateOut: 'bounceOut',
          content: '你好',
          class: 'demo-popup-base',
          style
        })
      )
    }
    const closePopupBase = function () {
      const popupBaseHandle = popupBaseHandleArr.pop()
      if (popupBaseHandle) {
        popupBaseHandle.close()
      }
    }
    const cleanPopupBase = function () {
      proxy.$rPopupBaseClean()
    }
    return {
      showPopupBase,
      closePopupBase,
      cleanPopupBase
    }
  }
})
</script>
```

<!-- props -->
<!-- events -->
