<template>
  <div class="mv-docs-wrapper">
    <div class="mv-docs-name">{{titleAndDesc.title}}</div>
    <div class="mv-docs-info">{{titleAndDesc.desc}}</div>
    <div class="mv-docs-demo">__DEMO_LIST__</div>
    <div class="mv-docs-props mv-docs-part">
      <div class="mv-docs-props-title mv-docs-part-title">props</div>
      <Table :column="propsColumn" :data="props"></Table>
    </div>
    <div class="mv-docs-slots mv-docs-part">
      <div class="mv-docs-props-title mv-docs-part-title">slots</div>
      <Table :column="slotsHead" :data="slotsData"></Table>
    </div>
    <div class="mv-docs-events mv-docs-part">
      <div class="mv-docs-props-title mv-docs-part-title">events</div>
      <Table :column="eventsHead" :data="eventsData"></Table>
    </div>
  </div>
</template>

<script>
import { Table } from "mvui";
import hljs from "highlight.js";
import "highlight.js/styles/color-brewer.css";

__DEMO_IMPORT__;

const demosData = __DEMOS_DATA__;

export default {
  name: "views.docs.__COMPNENT_NAME__",
  components: {
    Table,
    __DEMO_COMPONENT_LIST__,
  },
  data() {
    return {
      demoControlShowCode: [],
      demosData: demosData.map((item) => {
        const nitem = { ...item };
        nitem.code = hljs.highlightAuto(nitem.code).value;
        return nitem;
      }),
      propsColumn: [
        {
          prop: "name",
          label: "参数",
        },
        {
          prop: "comment",
          label: "说明",
        },
        {
          prop: "type",
          label: "类型",
        },
        {
          prop: "default",
          label: "默认值",
        },
      ],
      titleAndDesc: __TITLE_DESC__,
      props: __PROPS__,
      slots: __SLOTS__,
      events: __EVENTS__,
    };
  },
  computed: {
    slotsHead() {
      return this.mapTableHead(this.slots[0] || []);
    },
    slotsData() {
      return this.mapTableData(this.slots);
    },
    eventsHead() {
      return this.mapTableHead(this.events[0] || []);
    },
    eventsData() {
      return this.mapTableData(this.events);
    },
  },
  methods: {
    mapTableHead(tableRowItem) {
      return tableRowItem.map((item, i) => {
        return {
          prop: `a${i}`,
          label: item,
        };
      });
    },
    mapTableData(tableRowItemArr) {
      const nslots = tableRowItemArr.slice(1).filter((item) => {
        let isSplitLine = true;
        const pa = /[^-]/;
        item.forEach((element) => {
          if (pa.test(element)) {
            isSplitLine = false;
          }
        });
        return !isSplitLine;
      });

      return nslots.map((rowItem) => {
        // ["disabled", "按钮失效状态"]
        /**
         *  {
         *    a1: "disabled",
         *    a2: "按钮失效状态"
         *  }
         */
        const itemObj = {};
        rowItem.forEach((cellItem, i) => {
          itemObj[`a${i}`] = cellItem;
        });
        return itemObj;
      });
    },
    demoControlShowCodeTotgal(index) {
      if (this.demoControlShowCode[index]) {
        this.$set(this.demoControlShowCode[index], "show", !this.demoControlShowCode[index].show)
      } else {
        this.$set(this.demoControlShowCode, index, {
          show: true
        })
      }
    },
  },
};
</script>
