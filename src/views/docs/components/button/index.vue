<template>
  <div class="ra-docs-wrapper">
    <!-- type: 通用 -->
<h1>Button 按钮</h1>
<p>基础组件，触发业务逻辑时使用</p>
<h2>示例</h2>
<p>颜色和类型</p>
<div class="ra-docs-demo-examp">
            <div class="ra-docs-demo-comps">
                <demo0></demo0>
            </div>
            <div class="ra-docs-demo-code" :class="{showCode: demoControlShowCode[0] && !!demoControlShowCode[0].show}">
                <pre><code class="hljs" v-pre><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;demo-wrapper&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;demo-title&quot;</span>&gt;</span>
      颜色
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;demo-button-Type&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>&gt;</span>默认色<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">colorType</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>主色<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">colorType</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>信息色<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">colorType</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>成功色<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">colorType</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>警告色<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">colorType</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>错误色<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;demo-title&quot;</span>&gt;</span>
      类型
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;demo-button-Type&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">colorType</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;ghost&quot;</span>&gt;</span>幽灵按钮<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">colorType</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;dashed&quot;</span>&gt;</span>虚线边框<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;demo-title&quot;</span>&gt;</span>
      形状
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;demo-button-Type&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">colorType</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;ghost&quot;</span> <span class="hljs-attr">circle</span>&gt;</span>幽灵按钮<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">colorType</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;dashed&quot;</span> <span class="hljs-attr">circle</span>&gt;</span>按<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { Button } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;rayx-ui&quot;</span>;
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">components</span>: {
      Button,
    },
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.demo-title</span>{
    <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">10px</span>;
    <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">5px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
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
<td>colorType</td>
<td>颜色类型：<code>default</code>/<code>primary</code>/<code>info</code>/<code>success</code>/<code>warning</code>/<code>error</code></td>
<td>String</td>
<td>default</td>
</tr>
<tr>
<td>type</td>
<td>按钮类型：<code>default</code>/<code>ghost</code>/<code>dashed</code></td>
<td>String</td>
<td>default</td>
</tr>
<tr>
<td>circle</td>
<td>最大圆角</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用</td>
<td>Boolean</td>
<td>false</td>
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
<td>click</td>
<td>点击</td>
<td>null</td>
</tr>
</tbody>
</table>

  </div>
</template>

<script>
import demo0 from "./demo0.vue";

export default {
  name: "views.docs.components.button",
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
