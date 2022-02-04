<!-- type: 基础 -->

# Button 按钮

基础组件，触发业务逻辑时使用

## 示例

类型 type

```vue demo
<template>
  <div class="demo-wrapper">
    <div class="demo-button-Type">
      <r-button>默认色</r-button>
      <r-button type="primary">主色</r-button>
      <r-button type="info">信息色</r-button>
      <r-button type="success">成功色</r-button>
      <r-button type="warning">警告色</r-button>
      <r-button type="error">错误色</r-button>
    </div>
  </div>
</template>
<style>
.demo-button-Type button{
  margin: 0 0.5rem;
}
</style>
```

清淡 lite

```vue demo
<template>
  <div class="demo-wrapper">
    <div class="demo-button-Type">
      <r-button lite>默认色</r-button>
      <r-button lite type="primary">主色</r-button>
      <r-button lite type="info">信息色</r-button>
      <r-button lite type="success">成功色</r-button>
      <r-button lite type="warning">警告色</r-button>
      <r-button lite type="error">错误色</r-button>
    </div>
  </div>
</template>
```

更清淡 liter

```vue demo
<template>
  <div class="demo-wrapper">
    <div class="demo-button-Type">
      <r-button liter>默认色</r-button>
      <r-button liter type="primary">主色</r-button>
      <r-button liter type="info">信息色</r-button>
      <r-button liter type="success">成功色</r-button>
      <r-button liter type="warning">警告色</r-button>
      <r-button liter type="error">错误色</r-button>
    </div>
  </div>
</template>
```

幽灵按钮 ghost

```vue demo
<template>
  <div class="demo-wrapper">
    <div class="demo-button-Type">
      <r-button ghost>默认色</r-button>
      <r-button type="primary" ghost>主色</r-button>
      <r-button type="info" ghost>信息色</r-button>
      <r-button type="success" ghost>成功色</r-button>
      <r-button type="warning" ghost>警告色</r-button>
      <r-button type="error" ghost>错误色</r-button>
    </div>
  </div>
</template>
```

虚线按钮 dashed

```vue demo
<template>
  <div class="demo-wrapper">
    <div class="demo-button-Type">
      <r-button dashed>默认色</r-button>
      <r-button type="primary" dashed>主色</r-button>
      <r-button type="info" dashed>信息色</r-button>
      <r-button type="success" dashed>成功色</r-button>
      <r-button type="warning" dashed>警告色</r-button>
      <r-button type="error" dashed>错误色</r-button>
    </div>
  </div>
</template>
```

圆角 circle

```vue demo
<template>
  <div class="demo-wrapper">
    <div class="demo-button-Type">
      <r-button type="primary" circle>按</r-button>
      <r-button type="primary" circle>圆角</r-button>
      <r-button type="primary" circle>圆角按钮</r-button>
    </div>
  </div>
</template>
```

尺寸 size

```vue demo
<template>
  <div class="demo-wrapper">
    <div class="demo-button-Type">
      <r-button type="primary" size="sm">小按钮</r-button>
      <r-button type="primary">中按钮</r-button>
      <r-button type="primary" size="lg">大按钮</r-button>
    </div>
  </div>
</template>
```

<!-- props -->

<!-- events -->
