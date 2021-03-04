var hljs = require('highlight.js');

// 初始化配置
var md = require('markdown-it')({
    html: true,
    linkify: true,
    highlight: function (str, lang) {
        lang = lang === 'vue' ? 'html' : lang
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
        const token = tokens[idx]
        let text = ''
        if (token.info.includes(' demo') || token.info.includes('demo ')) {
            text = `<div class="ra-docs-demo-examp">
            <div class="ra-docs-demo-comps">
                <demo${demoIndex}></demo${demoIndex}>
            </div>
            ${
                (token.info.includes(' hidecode') || token.info.includes('hidecode ')) ? 
                '' : 
                `<div class="ra-docs-demo-code" :class="{showCode: demoControlShowCode[${demoIndex}] && !!demoControlShowCode[${demoIndex}].show}">
                    ${defaultFenceRender(tokens, idx, options, env, self)}
                </div>
                <div class="ra-docs-demo-control" @click="demoControlShowCodeTotgal(${demoIndex})">
                    {{demoControlShowCode[${demoIndex}] && demoControlShowCode[${demoIndex}].show?'隐藏代码':'显示代码'}}
                </div>`
            }
        </div>`

            demoImportArr.push(`import demo${demoIndex} from "./demo${demoIndex}.vue";`)
            demoComponentsArr.push(`demo${demoIndex}`)
            demoCodeArr.push(tokens[idx].content)
            demoIndex++
        } else {
            text = defaultFenceRender(tokens, idx, options, env, self)
        }

        return text
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