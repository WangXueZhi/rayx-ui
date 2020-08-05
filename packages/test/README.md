---
version: 0.0.1
author: wangxuezhi
category: Components
type: 通用
title: Test
subtitle: test
---

# Test test
基础组件，触发业务逻辑时使用

## 示例

#### 基本用法
基本用法的描述
```html demo
<template>
  <Test>按钮</Test>
</template>
<script>
import { Test } from "mvui";
export default {
  components: {
    Test
  }
}
</script>
```
#### 基本用法2
```html demo
<template>
  <Test>按钮</Test>
</template>
<script>
import { Test } from "mvui";
export default {
  components: {
    Test
  }
}
</script>
```

## slot
| 名称 | 说明 |
| --- | --- |
| disabled | 按钮失效状态 |

## event
| 名称 | 说明 | 返回值 |
| --- | --- | --- |
| disabled | 按钮失效状态 | [] |