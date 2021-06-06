<!-- type: 通用 -->

# ScrollBar 滚动条容器
代替原生滚动条

## 示例

基本用法
```vue demo
<template>
  <r-scroll-bar wrapperClass="test-scroll-wrapper">
    <div class="test-scroll-item" v-for="(item, i) in data">{{item}}</div>
  </r-scroll-bar>
</template>
<script>
export default {
  data(){
    return {
      data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    }
  }
}
</script>
<style lang="scss">
  .test-scroll-wrapper{
    width: 240px;
    height: 200px;
    border: 1px solid #969696;

    .test-scroll-item{
      text-align: center;
    }
  }
</style>
```

<!-- props -->
<!-- events -->

## slot
| 名称 | 说明 |
| --- | --- |
| slot | 容器内容 |