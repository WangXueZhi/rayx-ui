<template>
  <div class="mv-docs-wrapper">
    <div class="mv-docs-name">{{titleAndDesc.title}}</div>
    <div class="mv-docs-info">{{titleAndDesc.desc}}</div>
    <div class="mv-docs-demo"><div class="mv-docs-part">
    <div class="mv-docs-part-title">基本用法</div>
    <div class="mv-docs-part-desc">基本用法的描述</div>
    <div class="mv-docs-demo-examp">
        <div class="mv-docs-demo-comps">
            <demo0></demo0>
        </div>
        <div class="mv-docs-demo-code" :class="{showCode: demoControlShowCode[0] && !!demoControlShowCode[0].show}">
            <pre><code class="html hljs xml" v-html="demosData[0].code"></code></pre>
        </div>
        <div class="mv-docs-demo-control" @click="demoControlShowCodeTotgal(0)">
            {{demoControlShowCode[0] && demoControlShowCode[0].show?'隐藏代码':'显示代码'}}
        </div>
    </div>
</div></div>
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

import demo0 from "./demo0.vue";;

const demosData = [{"title":"基本用法","code":"<template>\n  <ScrollBar wrapperClass=\"test-scroll-wrapper\">\n    <div class=\"test-scroll-item\" v-for=\"(item, i) in data\">{{item}}<\/div>\n  <\/ScrollBar>\n<\/template>\n<script>\n  import {\n    ScrollBar\n  } from \"mvui\";\n  export default {\n    components: {\n      ScrollBar\n    },\n    data() {\n      return {\n        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]\n      }\n    }\n  }\n<\/script>\n<style lang=\"scss\">\n  .test-scroll-wrapper {\n    width: 240px;\n    height: 200px;\n    border: 1px solid #969696;\n\n    .test-scroll-item {\n      text-align: center;\n    }\n  }\n<\/style>","desc":"基本用法的描述"}];

export default {
  name: "views.docs.scroll-bar",
  components: {
    Table,
    demo0,
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
      titleAndDesc: {"title":"ScrollBar 滚动条容器","desc":"基础组件，代替原生滚动条"},
      props: [{"comment":"类型","name":"wrapperClass","type":"String","default":""}],
      slots: [["名称","说明"],["---","---"],["slot","容器内容"]],
      events: [["名称","说明","返回值"],["---","---","---"],["on-scroll","触发滚动","距顶部滚动距离：scrollTop"],["on-scroll-bottom","触发滚动到底","null"],["on-scroll-top","触发滚动到顶","null"]],
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
