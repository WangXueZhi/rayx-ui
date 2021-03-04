# 组件编写说明

## 样式命名
我们采用：前缀（prefix）- 块（block）- 元素（element）- 修饰符（modifier）的命名方式，元素和修饰符可根据使用场景选择是否使用，例如：```r-button```, ```r-button-primary```

## 注释
如果组件的props和methods要解析到文档中，必须加上多行形式的注释，单行形式的注释不会被解析，注释内容会作为属性说明

```html
<template>
  ...
</template>
<script>  
export default {
  name: "r-button",
  props: {
    /**
     * 这个属性将会被解析
     * 颜色类型：```default``` / ```primary``` / ```info``` / ```success``` / ```warning``` / ```error```
     */
    colorType: {
      type: String,
      default: "default",
    },
    // 这个属性将不会被解析
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    // 这个方法将不会被解析
    click() {
      if (!this.disabled) {
        this.$emit("click");
      }
    },
  },
};
</script>
```