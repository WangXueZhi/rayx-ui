<!-- type: 表单 -->

# Input 输入框

基本表单组件，支持 input 和 textarea，并在原生控件基础上进行了功能扩展，可以组合使用。

## 示例

### 类型

```vue demo
<template>
  <div class="demo-wrapper">
    <p>默认输入框</p>
    <r-input style="width: 300px" />
    <p>密码输入框</p>
    <r-input type="password" style="width: 300px" placeholder="请输入密码" />
    <p>文本域</p>
    <r-input type="textarea" style="width: 300px" />
  </div>
</template>
```

### 尺寸

```vue demo
<template>
  <div class="demo-wrapper">
    <r-input style="width: 200px" size="big" placeholder="大" />
    <r-input style="width: 200px" placeholder="默认" />
    <r-input style="width: 200px" size="small" placeholder="小" />
  </div>
</template>
```

### 输入框内前置和后置内容

```vue demo
<template>
  <div class="demo-wrapper">
    <r-input style="width: 200px">
      <div slot="prefix">面积</div>
      <div slot="suffix">m²</div>
    </r-input>
    <r-input style="width: 200px">
      <r-icon name="icon-email" slot="prefix" />
    </r-input>
  </div>
</template>
```

### 输入框外前置和后置内容，组模式

```vue demo
<template>
  <div class="demo-wrapper">
    <p>默认模式</p>
    <r-input style="width: 200px">
      <div slot="prepend">面积</div>
      <div slot="append">m²</div>
    </r-input>
    <p>组模式</p>
    <r-input style="width: 200px" groupMode>
      <div slot="prepend">面积</div>
      <div slot="append">m²</div>
    </r-input>
    <r-input style="width: 200px" groupMode>
      <div slot="prepend">面积</div>
    </r-input>
    <r-input style="width: 200px" groupMode>
      <div slot="append">m²</div>
    </r-input>
  </div>
</template>
```

### 文字居中

```vue demo
<template>
  <div class="demo-wrapper">
    <r-input style="width: 300px" textAlign="center" />
  </div>
</template>
```

### 双向绑定

```vue demo
<template>
  <div class="demo-wrapper">
    <r-input style="width: 300px" v-model="inputValue" />
    <p>{{ inputValue }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputValue: 123,
    };
  },
};
</script>
```

### 事件

```vue demo
<template>
  <div class="demo-wrapper">
    <div class="demo-input-event">
      <div>
        <p>enter</p>
        <r-input style="width: 300px" @enter="onEnter" />
        <p>change</p>
        <r-input style="width: 300px" @change="onChange" />
        <p>聚焦</p>
        <r-input style="width: 300px" @focus="onFocus" />
        <p>失焦</p>
        <r-input style="width: 300px" @blur="onBlur" />
        <p>清空</p>
        <r-input style="width: 300px" @clear="onClear" />
        <p>输入</p>
        <r-input style="width: 300px" @input="onInput"/>
      </div>
      <div class="demo-input-event-name">
        <p>触发事件：{{eve || '无'}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      eve: "",
      value: ''
    };
  },
  methods: {
    onInput(v) {
      this.eve = 'input'
    },
    onEnter(v) {
      this.eve = 'enter'
    },
    onChange(v) {
      this.eve = 'change'
    },
    onFocus(v) {
      this.eve = 'focus'
    },
    onBlur(v) {
      this.eve = 'blur'
    },
    onClear(v) {
      this.eve = 'clear'
    },
  },
};
</script>
<style lang="scss">
  .demo-input-event{
    display: flex;
  }
  .demo-input-event-name{
    margin-left: 50px;
    p{
      font-size: 25px;
    }
  }
</style>
```

<!-- props -->

## slots

| 名称    | 说明                                                                      |
| ------- | ------------------------------------------------------------------------- |
| prepend | input 外的前置内容，groupMode 属性需要有 prepend 或 append 的 slot 才有效 |
| append  | input 外的后置内容，groupMode 属性需要有 prepend 或 append 的 slot 才有效 |
| prefix  | input 内的前置内容                                                        |
| suffix  | input 内的后置内容                                                        |
