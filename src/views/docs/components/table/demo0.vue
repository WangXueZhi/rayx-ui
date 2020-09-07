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
