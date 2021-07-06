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

<!-- props -->
