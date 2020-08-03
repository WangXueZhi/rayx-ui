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
</div>
<div class="mv-docs-part">
    <div class="mv-docs-part-title">基本用法2</div>
    <div class="mv-docs-part-desc"></div>
    <div class="mv-docs-demo-examp">
        <div class="mv-docs-demo-comps">
            <demo1></demo1>
        </div>
        <div class="mv-docs-demo-code" :class="{showCode: demoControlShowCode[1] && !!demoControlShowCode[1].show}">
            <pre><code class="html hljs xml" v-html="demosData[1].code"></code></pre>
        </div>
        <div class="mv-docs-demo-control" @click="demoControlShowCodeTotgal(1)">
            {{demoControlShowCode[1] && demoControlShowCode[1].show?'隐藏代码':'显示代码'}}
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

import demo0 from "./demo0.vue";
import demo1 from "./demo1.vue";;

const demosData = [{"title":"基本用法","code":"<template> <Button>按钮<\/Button> <\/template>\n<script>\n  import {\n    Button\n  } from \"mvui\";\n  export default {\n    components: {\n      Button\n    }\n  }\n<\/script>","desc":"基本用法的描述"},{"title":"基本用法2","code":"<template> <Button>按钮<\/Button> <\/template>\n<script>\n  import {\n    Button\n  } from \"mvui\";\n  export default {\n    components: {\n      Button\n    }\n  }\n<\/script>","desc":""}];

export default {
  name: "views.docs.button",
  components: {
    Table,
    demo0,
demo1,
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
      titleAndDesc: {"title":"Button 按钮","desc":"基础组件，触发业务逻辑时使用"},
      props: [{"comment":"类型","name":"type","type":"String","default":"default"},{"comment":"禁用","name":"disabled","type":"Boolean","default":false}],
      slots: [["名称","说明"],["---","---"],["disabled","按钮失效状态"]],
      events: [["名称","说明","返回值"],["---","---","---"],["disabled","按钮失效状态","[]"]],
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
