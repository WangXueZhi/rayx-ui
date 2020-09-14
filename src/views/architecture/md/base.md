# md 解析

md 解析主要是用`markdown-it`来对 md 文件进行处理，处理了 props，分类等，并且对规则进行了拦截处理，用来生成代码运行示例

## 规则拦截

在代码块的规则中，如果代码块匹配到`demo`，会转换成示例代码

```js
md.renderer.rules.fence = function(tokens, idx, options, env, self) {
  const token = tokens[idx];
  let text = "";
  if (token.info.includes(" demo") || token.info.includes("demo ")) {
    text = `<div class="ra-docs-demo-examp">
            <div class="ra-docs-demo-comps">
                <demo${demoIndex}></demo${demoIndex}>
            </div>
            <div class="ra-docs-demo-code" :class="{showCode: demoControlShowCode[${demoIndex}] && !!demoControlShowCode[${demoIndex}].show}">
                ${defaultFenceRender(tokens, idx, options, env, self)}
            </div>
            <div class="ra-docs-demo-control" @click="demoControlShowCodeTotgal(${demoIndex})">
                {{demoControlShowCode[${demoIndex}] && demoControlShowCode[${demoIndex}].show?'隐藏代码':'显示代码'}}
            </div>
        </div>`;

    ...
  } else {
    text = defaultFenceRender(tokens, idx, options, env, self);
  }

  return text;
};
```
