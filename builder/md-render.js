var hljs = require('highlight.js');

// 启用所有
var md = require('markdown-it')({
    html: true,
    linkify: true,
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return '<pre><code class="hljs" v-pre>' +
                    hljs.highlight(lang, str, true).value +
                    '</code></pre>';
            } catch (__) {}
        }

        return '<pre><code class="hljs" v-pre>' + md.utils.escapeHtml(str) + '</code></pre>';
    }
});

const fs = require('fs')

var defaultFenceRender = md.renderer.rules.fence || function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
};

const defaultTableRender = md.renderer.rules.table_open || function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
};


module.exports = function (mdContent) {
    let demoIndex = 0
    const demoImportArr = []
    const demoComponentsArr = []
    const demoCodeArr = []


    md.renderer.rules.fence = function (tokens, idx, options, env, self) {
        tokens[idx].attrPush(['v-pre'])
        const text = `<div class="mv-docs-demo-examp">
    <div class="mv-docs-demo-comps">
        <demo${demoIndex}></demo${demoIndex}>
    </div>
    <div class="mv-docs-demo-code" :class="{showCode: demoControlShowCode[${demoIndex}] && !!demoControlShowCode[${demoIndex}].show}">
        ${defaultFenceRender(tokens, idx, options, env, self)}
    </div>
    <div class="mv-docs-demo-control" @click="demoControlShowCodeTotgal(${demoIndex})">
        {{demoControlShowCode[${demoIndex}] && demoControlShowCode[${demoIndex}].show?'隐藏代码':'显示代码'}}
    </div>
</div>`

        demoImportArr.push(`import demo${demoIndex} from "./demo${demoIndex}.vue";`)
        demoComponentsArr.push(`demo${demoIndex}`)
        demoCodeArr.push(tokens[idx].content)
        demoIndex++
        return text
        // 如果你确认其他的插件不能添加 `target` - 放弃以下检查：
        // var aIndex = tokens[idx].attrIndex('target');

        // if (aIndex < 0) {
        //     tokens[idx].attrPush(['target', '_blank']); // 添加新属性
        // } else {
        //     tokens[idx].attrs[aIndex][1] = '_blank'; // 替换已经存在的属性值
        // }

        // 传递 token 到默认的渲染器。
        // return defaultRender(tokens, idx, options, env, self);
    };

    md.renderer.rules.table_open = function (tokens, idx, options, env, self) {
        return defaultTableRender(tokens, idx, options, env, self)
    };

    return {
        demoText: md.render(mdContent, {}),
        demoImportText: demoImportArr.join('\r\n'),
        demoComponentsText: demoComponentsArr.join(',\r\n'),
        demoCodeArr
    }
}
// let tokens = md.parseInline(fileContent, {})[0].children
// console.log(tokens);