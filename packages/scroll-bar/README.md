<!-- type: 通用 -->

# ScrollBar 滚动条容器

代替原生滚动条

## 示例

基本用法

```vue demo
<template>
  <div>
    <r-scroll-bar wrapperClass="test-scroll-wrapper">
      <div class="test-scroll-item" v-for="(item, i) in data">{{ item }}</div>
    </r-scroll-bar>
    <r-button @click="add">添加项</r-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [1, 2, 3, 4, 5],
    };
  },
  methods:{
    add(){
      this.data.push('1')
    }
  }
};
</script>
<style lang="scss">
.test-scroll-wrapper {
  width: 240px;
  height: 200px;
  border: 1px solid #969696;

  .test-scroll-item {
    text-align: center;
  }
}
</style>
```

<!-- props -->
<!-- methods -->

## slot

| 名称 | 说明     |
| ---- | -------- |
| slot | 容器内容 |

## event

| 名称             | 说明         | 返回值                    |
| ---------------- | ------------ | ------------------------- |
| on-scroll        | 触发滚动     | 距顶部滚动距离：scrollTop |
| on-scroll-bottom | 触发滚动到底 | null                      |
| on-scroll-top    | 触发滚动到顶 | null                      |
