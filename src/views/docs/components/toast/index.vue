<template>
  <div class="ra-docs-wrapper">
    <!-- type: 交互 -->
<h1>Toast 轻提示</h1>
<p>组件描述</p>
<h2>示例</h2>
<h4>基本用法</h4>
<div class="ra-docs-demo-examp">
            <div class="ra-docs-demo-comps">
                <demo0></demo0>
            </div>
            <div class="ra-docs-demo-code" :class="{showCode: demoControlShowCode[0] && !!demoControlShowCode[0].show}">
                <pre><code class="hljs" v-pre><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { Button } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;rayx-ui&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">components</span>: [<span class="hljs-string">&#x27;Button&#x27;</span>]
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
<td>type</td>
<td>类型</td>
<td>String</td>
<td>default</td>
</tr>
<tr>
<td>duration</td>
<td>持续时间</td>
<td>Number</td>
<td>1000</td>
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
<tbody>
<tr>
<td>show</td>
<td>显示toast</td>
</tr>
</tbody>
</table>

  </div>
</template>

<script>
import demo0 from "./demo0.vue";

export default {
  name: "views.docs.components.toast",
  components: {
    demo0
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
