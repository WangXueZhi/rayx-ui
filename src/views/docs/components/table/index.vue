<template>
  <div class="ra-docs-wrapper">
    <!-- type: 展示 -->
<h1>Table 表格</h1>
<p>用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。</p>
<h2>示例</h2>
<h4>基本用法</h4>
<p>基本用法的描述</p>
<div class="ra-docs-demo-examp">
            <div class="ra-docs-demo-comps">
                <demo0></demo0>
            </div>
            <div class="ra-docs-demo-code" :class="{showCode: demoControlShowCode[0] && !!demoControlShowCode[0].show}">
                <pre><code class="hljs" v-pre><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Table</span> <span class="hljs-attr">:column</span>=<span class="hljs-string">&quot;column&quot;</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { Table } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;rayx-ui&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">components</span>: {
    Table
  },
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">column</span>: [
        {
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&quot;name&quot;</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;姓名&quot;</span>,
        },
        {
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&quot;sex&quot;</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;性别&quot;</span>,
        },
        {
          <span class="hljs-attr">prop</span>: <span class="hljs-string">&quot;age&quot;</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;年龄&quot;</span>,
        }
      ],
      <span class="hljs-attr">data</span>: [
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;jack&#x27;</span>,
          <span class="hljs-attr">sex</span>: <span class="hljs-string">&#x27;m&#x27;</span>,
          <span class="hljs-attr">age</span>: <span class="hljs-string">&#x27;10&#x27;</span>
        },
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;may&#x27;</span>,
          <span class="hljs-attr">sex</span>: <span class="hljs-string">&#x27;w&#x27;</span>,
          <span class="hljs-attr">age</span>: <span class="hljs-string">&#x27;10&#x27;</span>
        }
      ]
    };
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>

            </div>
            <div class="ra-docs-demo-control" @click="demoControlShowCodeTotgal(0)">
                {{demoControlShowCode[0] && demoControlShowCode[0].show?'隐藏代码':'显示代码'}}
            </div>
        </div><h2>props</h2>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>column</td>
<td>字段名</td>
<td>Array</td>
<td>[]</td>
</tr>
<tr>
<td>data</td>
<td>数据</td>
<td>Array</td>
<td>[]</td>
</tr>
</tbody>
</table>
<h2>methods</h2>
<table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
</tr>
</thead>
<tbody></tbody>
</table>
<h2>slot</h2>
<table>
<thead>
<tr>
<th>名称</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>disabled</td>
<td>按钮失效状态</td>
</tr>
</tbody>
</table>
<h2>event</h2>
<table>
<thead>
<tr>
<th>名称</th>
<th>说明</th>
<th>返回值</th>
</tr>
</thead>
<tbody>
<tr>
<td>disabled</td>
<td>按钮失效状态1</td>
<td>[]</td>
</tr>
</tbody>
</table>

  </div>
</template>

<script>
import demo0 from "./demo0.vue";

export default {
  name: "views.docs.components.table",
  components: {
    demo0,
  },
  data() {
    return {
      demoControlShowCode: []
    };
  },
  methods: {
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
