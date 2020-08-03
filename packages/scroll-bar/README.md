---
version: 0.0.1
author: wangxuezhi
category: Components
type: 通用
title: ScrollBar
subtitle: 滚动条容器
---

# ScrollBar 滚动条容器
基础组件，代替原生滚动条

## 示例

#### 基本用法
基本用法的描述
```html demo
<template>
  <ScrollBar wrapperClass="test-scroll-wrapper">
    <div class="test-scroll-item" v-for="(item, i) in data">{{item}}</div>
  </ScrollBar>
</template>
<script>
import { ScrollBar } from "mvui";
export default {
  components: {
    ScrollBar
  },
  data(){
    return {
      data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    }
  }
}
</script>
<style lang="scss">
  .test-scroll-wrapper{
    width: 240px;
    height: 200px;
    border: 1px solid #969696;

    .test-scroll-item{
      text-align: center;
    }
  }

</style>
```

## slot
| 名称 | 说明 |
| --- | --- |
| slot | 容器内容 |

## event
| 名称 | 说明 | 返回值 |
| --- | --- | --- |
| on-scroll | 触发滚动 | 距顶部滚动距离：scrollTop |
| on-scroll-bottom | 触发滚动到底 | null |
| on-scroll-top | 触发滚动到顶 | null |