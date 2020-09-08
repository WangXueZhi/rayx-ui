<template>
  <div class="ra-docs-wrapper">
    <!-- type: 通用 -->
<h1>ScrollBar 滚动条容器</h1>
<p>基础组件，代替原生滚动条</p>
<h2>示例</h2>
<p>基本用法</p>
<div class="ra-docs-demo-examp">
            <div class="ra-docs-demo-comps">
                <demo0></demo0>
            </div>
            <div class="ra-docs-demo-code" :class="{showCode: demoControlShowCode[0] && !!demoControlShowCode[0].show}">
                <pre><code class="hljs" v-pre><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ScrollBar</span> <span class="hljs-attr">wrapperClass</span>=<span class="hljs-string">&quot;test-scroll-wrapper&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;test-scroll-item&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item, i) in data&quot;</span>&gt;</span>{{item}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ScrollBar</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { ScrollBar } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;rayx-ui&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">components</span>: {
    ScrollBar
  },
  data(){
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">data</span>: [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>,<span class="hljs-number">6</span>,<span class="hljs-number">7</span>,<span class="hljs-number">8</span>,<span class="hljs-number">9</span>,<span class="hljs-number">10</span>,<span class="hljs-number">11</span>,<span class="hljs-number">12</span>,<span class="hljs-number">13</span>,<span class="hljs-number">14</span>,<span class="hljs-number">15</span>,<span class="hljs-number">16</span>,<span class="hljs-number">17</span>,<span class="hljs-number">18</span>,<span class="hljs-number">19</span>,<span class="hljs-number">20</span>]
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span>&gt;</span>
  .test-scroll-wrapper{
    width: 240px;
    height: 200px;
    border: 1px solid #969696;

    .test-scroll-item{
      text-align: center;
    }
  }
<span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
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
<td>wrapperClass</td>
<td>类型</td>
<td>String</td>
<td></td>
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
<td>slot</td>
<td>容器内容</td>
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
<td>on-scroll</td>
<td>触发滚动</td>
<td>距顶部滚动距离：scrollTop</td>
</tr>
<tr>
<td>on-scroll-bottom</td>
<td>触发滚动到底</td>
<td>null</td>
</tr>
<tr>
<td>on-scroll-top</td>
<td>触发滚动到顶</td>
<td>null</td>
</tr>
</tbody>
</table>

  </div>
</template>

<script>
import demo0 from "./demo0.vue";

export default {
  name: "views.docs.components.scroll-bar",
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
