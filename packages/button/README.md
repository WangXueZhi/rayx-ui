<!-- type: 基础 -->

# Button 按钮

基础组件，触发业务逻辑时使用

## 示例

颜色

```vue demo
<template>
  <div class="demo-wrapper">
    <div class="demo-button-Type">
      <r-button hide>默认色</r-button>
      <r-button colorType="primary">主色</r-button>
      <r-button colorType="info">信息色</r-button>
      <r-button colorType="success">成功色</r-button>
      <r-button colorType="warning">警告色</r-button>
      <r-button colorType="error">错误色</r-button>
    </div>
  </div>
</template>
```

类型

```vue demo
<template>
  <div class="demo-wrapper">
    <div class="demo-button-Type">
      <r-button colorType="primary" type="ghost">幽灵按钮</r-button>
      <r-button colorType="primary" type="dashed">虚线边框</r-button>
    </div>
  </div>
</template>
```

形状

```vue demo
<template>
  <div class="demo-wrapper">
    <div class="demo-button-Type">
      <r-button colorType="primary" type="ghost" circle>幽灵按钮</r-button>
      <r-button colorType="primary" type="dashed" circle>按</r-button>
    </div>
  </div>
</template>
```
<!-- props -->

## event

| 名称  | 说明 | 返回值 |
| ----- | ---- | ------ |
| click | 点击 | null   |
