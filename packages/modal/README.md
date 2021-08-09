<!-- type: 弹出层 -->

# Modal

模态框，在弹出层上展示一些内容

## 示例

基础用法

```vue demo
<template>
  <div class="modal-demo-wrapper">
    <r-modal v-model:show="show" :bodyOverflow="false">
      <div class="modal-content-demo0">
        <div class="modal-content-demo0-head">模态框基础用法</div>
        <div class="modal-content-demo0-foot">
          <r-button colorType="error" @click="show = false">关闭</r-button>
        </div>
      </div>
    </r-modal>
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
<style>
.modal-content-demo0 {
  min-width: 200px;
  background: #fff;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 2px;
}
.modal-content-demo0-foot {
  display: flex;
  margin-top: 20px;
  justify-content: flex-end;
}
</style>
```

模态框动画

```vue demo
<template>
  <div class="modal-demo-wrapper">
    <r-modal
      v-model:show="show"
      :bodyOverflow="false"
      animateIn="bounceIn"
      animateOut="bounceOut"
    >
      <div class="modal-content-demo1">
        <div class="modal-content-demo1-head">模态框基础用法</div>
        <div class="modal-content-demo1-foot">
          <r-button colorType="error" @click="show = false">关闭</r-button>
        </div>
      </div>
    </r-modal>
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
<style>
.modal-content-demo1 {
  min-width: 200px;
  background: #fff;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 2px;
}
.modal-content-demo1-foot {
  display: flex;
  margin-top: 20px;
  justify-content: flex-end;
}
</style>
```

点击遮罩层关闭

```vue demo
<template>
  <div class="modal-demo-wrapper">
    <r-modal
      v-model:show="show"
      :bodyOverflow="false"
      animateIn="bounceIn"
      animateOut="bounceOut"
      closeOnClickMask
    >
      <div class="modal-content-demo1">
        <div class="modal-content-demo1-head">点击遮罩层关闭</div>
        <div class="modal-content-demo1-content">没有关闭按钮可咋整？</div>
      </div>
    </r-modal>
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
<style>
.modal-content-demo1 {
  min-width: 200px;
  background: #fff;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 2px;
}
.modal-content-demo1-head{
  font-size: 16px;
}
.modal-content-demo1-content{
  margin-top: 20px;
  padding-bottom: 20px;
}
</style>
```

静态方法调用, 内容可支持```string | vnode```, 如果是插入html，需要设置```dangerInnerHtml```为true

```vue demo
<template>
  <div class="demo-wrapper">
    <r-button @click="showByHtml">插入html方式</r-button>
    <r-button @click="showByVnode">插入Vnode方式</r-button>
  </div>
</template>
<script>
import { defineComponent, getCurrentInstance, reactive, ref, createVNode, onUnmounted } from 'vue'
export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance()
    const showByHtml = function () {
      proxy.$rModal({
        animateIn: 'bounceIn',
        animateOut: 'bounceOut',
        content: `<div class="modal-content-demo1">
          <div class="modal-content-demo1-head">点击遮罩层关闭</div>
          <div class="modal-content-demo1-content">没有关闭按钮可咋整？</div>
        </div>`,
        dangerInnerHtml: true,
        bodyOverflow: false,
        closeOnClickMask: true
      })
    }
    const showByVnode = function () {
      proxy.$rModal({
        animateIn: 'bounceIn',
        animateOut: 'bounceOut',
        content: createVNode('div',
          {
          class: 'modal-content-demo1',
          },
          [createVNode('div', {class: 'modal-content-demo1-head'}, '点击遮罩层关闭'), createVNode('div', {class: 'modal-content-demo1-content'}, '没有关闭按钮可咋整？')]
        ),
        bodyOverflow: false,
        closeOnClickMask: true
      })
    }
    return {
      showByHtml,
      showByVnode
    }
  }
})

/**
 * 
*/
</script>

```

<!-- props -->
<!-- events -->
