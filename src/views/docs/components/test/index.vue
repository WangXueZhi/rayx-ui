<template>
  <div class="ra-docs-wrapper">
    <!-- type: 通用 -->
<h1>Test test</h1>
<p>基础组件，触发业务逻辑时使用</p>
<h2>示例</h2>
<h4>基本用法</h4>
<p>基本用法的描述</p>
<div class="ra-docs-demo-examp">
            <div class="ra-docs-demo-comps">
                <demo0></demo0>
            </div>
            <div class="ra-docs-demo-code" :class="{showCode: demoControlShowCode[0] && !!demoControlShowCode[0].show}">
                <pre><code class="hljs" v-pre><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Test</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">Test</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { Test } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;rayx-ui&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">components</span>: {
    Test
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>

            </div>
            <div class="ra-docs-demo-control" @click="demoControlShowCodeTotgal(0)">
                {{demoControlShowCode[0] && demoControlShowCode[0].show?'隐藏代码':'显示代码'}}
            </div>
        </div><h4>基本用法2</h4>
<div class="ra-docs-demo-examp">
            <div class="ra-docs-demo-comps">
                <demo1></demo1>
            </div>
            <div class="ra-docs-demo-code" :class="{showCode: demoControlShowCode[1] && !!demoControlShowCode[1].show}">
                <pre><code class="hljs" v-pre><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Test</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">Test</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { Test } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;rayx-ui&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">components</span>: {
    Test
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>

            </div>
            <div class="ra-docs-demo-control" @click="demoControlShowCodeTotgal(1)">
                {{demoControlShowCode[1] && demoControlShowCode[1].show?'隐藏代码':'显示代码'}}
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
<td>hello</td>
<td>hello</td>
</tr>
</tbody>
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
<td>按钮失效状态</td>
<td>[]</td>
</tr>
</tbody>
</table>

  </div>
</template>

<script>
import demo0 from "./demo0.vue";
import demo1 from "./demo1.vue";

export default {
  name: "views.docs.components.test",
  components: {
    demo0,
demo1
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
