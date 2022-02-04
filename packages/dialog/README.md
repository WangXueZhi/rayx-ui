<!-- type: 弹出层 -->

# Dialog

对话框，在模态窗的基础上增加了反馈交互

## 示例

基础

```vue demo
<template>
  <div class="demo-wrapper">
    <r-dialog v-model:show="show" title="Header">
      确定打开Dialog？
    </r-dialog>
    <r-button @click="show = true">显示</r-button>
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

动画

```vue demo
<template>
  <div class="demo-wrapper">
    <r-dialog v-model:show="show" title="Header" animateIn="bounceIn"
      animateOut="bounceOut">
      bounceIn + bounceOut
    </r-dialog>
    <r-button @click="show = true">显示</r-button>
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

其他属性同[model](./#/docs/components/modal)组件

<!-- events -->
