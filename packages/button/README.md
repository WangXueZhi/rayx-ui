<!-- type: 通用 -->

# Button 按钮
基础组件，触发业务逻辑时使用

## 示例

#### 基本用法
基本用法的示例
```html demo
<template>
  <Button>按钮</Button>
</template>
<script>
import { Button } from "rayx-ui";
export default {
  components: {
    Button
  }
}
</script>
```
不带示例的用法
```html
<template>
  <Button>按钮</Button>
</template>
<script>
import { Button } from "rayx-ui";
export default {
  components: {
    Button
  }
}
</script>
```

<!-- prop -->
<!-- method -->

## slot
| 名称 | 说明 |
| --- | --- |
| disabled | 按钮失效状态 |

## event
| 名称 | 说明 | 返回值 |
| --- | --- | --- |
| disabled | 按钮失效状态 | [] |