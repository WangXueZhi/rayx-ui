<!-- type: 交互 -->

# Draggable 拖拽容器

## 示例

基本用法

```vue demo
<template>
  <div class="draggable-demo">
    <r-draggable :moveChange="moveChange">
      <template slot="head">
        <div class="drag-head">head</div>
      </template>
      <div class="drag-content">content</div>
    </r-draggable>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    moveChange(rect) {
      const { left, top } = rect;
      return {
        left: left > 100 ? 100 : left,
        top: top
      };
    },
  },
};
</script>
<style lang="scss">
.draggable-demo {
  width: 200px;
  height: 200px;
}
.drag-head {
  width: 100px;
  height: 50px;
  border: 1px solid #ccc;
}
.drag-content {
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
}
</style>
```

<!-- props -->

## slot

| 名称 | 说明     |
| ---- | -------- |
| head | 拖拽区域 |
