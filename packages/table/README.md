<!-- type: 展示 -->

# Table 表格
用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

## 示例

#### 基本用法
基本用法的描述
```html demo
<template>
  <Table :column="column" :data="data"></Table>
</template>
<script>
import { Table } from "rayx-ui";
export default {
  components: {
    Table
  },
  data() {
    return {
      column: [
        {
          prop: "name",
          label: "姓名",
        },
        {
          prop: "sex",
          label: "性别",
        },
        {
          prop: "age",
          label: "年龄",
        }
      ],
      data: [
        {
          name: 'jack',
          sex: 'm',
          age: '10'
        },
        {
          name: 'may',
          sex: 'w',
          age: '10'
        }
      ]
    };
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
| disabled | 按钮失效状态1 | [] |