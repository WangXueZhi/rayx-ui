<!-- type: 基础 -->

# Button 按钮

基础组件，触发业务逻辑时使用

## 示例

颜色

```vue demo
<template>
  <div class="demo-wrapper">
    <div class="demo-button-Type">
      <Button hide>默认色</Button>
      <Button colorType="primary">主色</Button>
      <Button colorType="info">信息色</Button>
      <Button colorType="success">成功色</Button>
      <Button colorType="warning">警告色</Button>
      <Button colorType="error">错误色</Button>
    </div>
  </div>
</template>
<script>
  import { Button } from "rayx-ui";
  export default {
    components: {
      Button,
    },
  };
</script>
```

类型

```vue demo
<template>
  <div class="demo-wrapper">
    <div class="demo-button-Type">
      <Button colorType="primary" type="ghost">幽灵按钮</Button>
      <Button colorType="primary" type="dashed">虚线边框</Button>
    </div>
  </div>
</template>
<script>
  import { Button } from "rayx-ui";
  export default {
    components: {
      Button,
    },
  };
</script>
```

形状

```vue demo
<template>
  <div class="demo-wrapper">
    <div class="demo-button-Type">
      <Button colorType="primary" type="ghost" circle>幽灵按钮</Button>
      <Button colorType="primary" type="dashed" circle>按</Button>
    </div>
  </div>
</template>
<script>
  import { Button } from "rayx-ui";
  export default {
    components: {
      Button,
    },
  };
</script>
```
<!-- props -->

## event

| 名称  | 说明 | 返回值 |
| ----- | ---- | ------ |
| click | 点击 | null   |
