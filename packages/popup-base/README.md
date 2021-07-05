<!-- type: 组件分类 -->

# PopupBase 测试

组件介绍

## 示例

基础用法

```vue demo
<template>
  <div class="demo-wrapper">
    <r-popup-base v-model:visible="show" closeOnClickOutside>
      <div class="demo-popup-base-simple">123</div>
    </r-popup-base>
    <r-button @click="showPopup">弹窗</r-button>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        show: false
      }
    },
    methods:{
      showPopup(){
        console.log('showPopup >>')
        this.show = !this.show
      }
    }
  };
</script>
<style>
  .demo-popup-base-simple{
    width: 200px;
    height: 80px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding-top: 20px;
  }
</style>
```

<!-- props -->

