---
version: 0.0.1
author: wangxuezhi
category: Components
type: 通用
title: Button
subtitle: 按钮
cover: https://gw.alipayobjects.com/zos/alicdn/fNUKzY1sk/Button.svg
---

# Button 按钮
基础组件，触发业务逻辑时使用

## 示例

#### 基本用法
基本用法的描述
```html demo
<template>
  <Button>按钮</Button>
</template>
<script>
import { Button } from "mvui";
export default {
  components: {
    Button
  }
}
</script>
```
#### 基本用法2
```html demo
<template>
  <Button>按钮</Button>
</template>
<script>
import { Button } from "mvui";
export default {
  components: {
    Button
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