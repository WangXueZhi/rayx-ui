<template>
  <div class="r-table">
    <div class="r-table-column-group">
      <div class="r-table-column" v-for="item in column" :key="item.prop + '-col'" :style="{width: `${item.width}px`}"></div>
    </div>
    <div class="r-table-header">
      <div class="r-table-row">
        <div v-for="item in column" :key="item.prop" class="r-table-cell">
          <div class="r-table-cell-content">{{item.label}}</div>
        </div>
      </div>
    </div>
    <div class="r-table-body">
      <div v-for="(item, i) in data" :key="i" class="r-table-row">
        <div v-for="columnItem in column" :key="columnItem.prop+'-row'" class="r-table-cell">
          <div class="r-table-cell-content">{{item[columnItem.prop]}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "./table.scss";
export default {
  name: "r-table",
  props: {
    /**
     * 字段名
     */
    column: {
      type: Array,
      default: [],
    },
    /**
     * 数据
     */
    data: {
      type: Array,
      default: [],
    },
  },
  methods: {},
};
</script>
