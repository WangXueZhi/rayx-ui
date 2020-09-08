<!-- type: 通用 -->

# gr-modal 模态对话框

需要用户处理事务，又不希望跳转页面以致打断工作流程时

## 示例

#### 基本用法

```html demo
<template>
  <div>
    <Button @click="openModal">打开对话框</Button>
    <GrModal w="200" v-if="show" @on-visible-change="modalChange">
      <template slot="content">content</template>
    </GrModal>
  </div>
</template>
<script>
  import { GrModal, Button } from "rayx-ui";
  export default {
    components: {
      Button,
      GrModal,
    },
    data() {
      return {
        show: false,
      };
    },
    methods: {
      openModal() {
        this.show = true;
      },
      modalChange(isShow) {
        this.show = isShow;
      },
    },
  };
</script>
```

<!-- prop -->

## event

| 名称              | 说明               | 返回值  |
| ----------------- | ------------------ | ------- |
| on-ok             | 点击确认按钮事件   | null    |
| on-cancel         | 点击取消按钮事件   | null    |
| on-visible-change | 对话框显示状态改变 | boolean |
