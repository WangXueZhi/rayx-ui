<template>
  <div class="ra-docs-wrapper">
    <!-- type: 通用 -->
<h1>gr-modal 模态对话框</h1>
<p>需要用户处理事务，又不希望跳转页面以致打断工作流程时</p>
<h2>示例</h2>
<h3>基本用法</h3>
<div class="ra-docs-demo-examp">
            <div class="ra-docs-demo-comps">
                <demo0></demo0>
            </div>
            <div class="ra-docs-demo-code" :class="{showCode: demoControlShowCode[0] && !!demoControlShowCode[0].show}">
                <pre><code class="hljs" v-pre><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;openModal&quot;</span>&gt;</span>打开对话框<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">GrModal</span> <span class="hljs-attr">w</span>=<span class="hljs-string">&quot;200&quot;</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;show&quot;</span> @<span class="hljs-attr">on-visible-change</span>=<span class="hljs-string">&quot;modalChange&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>content<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">GrModal</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { GrModal, Button } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;rayx-ui&quot;</span>;
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">components</span>: {
      Button,
      GrModal,
    },
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">show</span>: <span class="hljs-literal">false</span>,
      };
    },
    <span class="hljs-attr">methods</span>: {
      openModal() {
        <span class="hljs-built_in">this</span>.show = <span class="hljs-literal">true</span>;
      },
      modalChange(isShow) {
        <span class="hljs-built_in">this</span>.show = isShow;
      },
    },
  };
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
<td>title</td>
<td>弹窗标题</td>
<td>String</td>
<td>弹窗</td>
</tr>
<tr>
<td>okText</td>
<td>确认按钮文本</td>
<td>String</td>
<td>确定</td>
</tr>
<tr>
<td>cancelText</td>
<td>取消按钮文本</td>
<td>String</td>
<td>取消</td>
</tr>
<tr>
<td>footerHide</td>
<td>是否隐藏脚</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>maskClosable</td>
<td>是否点击蒙层关闭</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>w</td>
<td>宽度</td>
<td>Number | String</td>
<td>auto</td>
</tr>
<tr>
<td>draggable</td>
<td>是否可拖拽</td>
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
<td>on-ok</td>
<td>点击确认按钮事件</td>
<td>null</td>
</tr>
<tr>
<td>on-cancel</td>
<td>点击取消按钮事件</td>
<td>null</td>
</tr>
<tr>
<td>on-visible-change</td>
<td>对话框显示状态改变</td>
<td>boolean</td>
</tr>
</tbody>
</table>

  </div>
</template>

<script>
import demo0 from "./demo0.vue";

export default {
  name: "views.docs.components.gr-modal",
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
