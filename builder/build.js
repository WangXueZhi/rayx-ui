const vuePaserDoAst = require('./vue-paser').doAst
const mdPaserDoAst = require('./md-paser').doAst
const MarkdownIt = new require('markdown-it')
const md = new MarkdownIt();
const fs = require('fs')
const path = require('path')
const gulp = require("gulp");
const replace = require('gulp-replace');
const rename = require("gulp-rename");
const util = require('./util')
const beautify = require('js-beautify').html

// 获取组件数据
const getComponentsData = function () {
    const arr = []
    const files = fs.readdirSync('./packages')
    for (let i = 0; i < files.length; i++) {
        const stats = fs.statSync('./packages/' + files[i])
        if (stats.isDirectory()) {
            // vue
            const vueFileContent = fs.readFileSync('./packages/' + files[i] + '/' + files[i] + '.vue', 'utf-8')
            const matchReg = /<script(?:\s+[^>]*)?>([\s\S]+?)<\/script\s*>/
            const code = matchReg.exec(vueFileContent)[1]

            // md
            const mdFileContent = fs.readFileSync('./packages/' + files[i] + '/README.md', 'utf-8')
            let tokens = md.parseInline(mdFileContent, {})[0].children

            arr.push({
                fname: files[i],
                ...vuePaserDoAst(code),
                ...mdPaserDoAst(tokens)
            })
        }
    }
    return arr
}

const TPL_PATH_DEMO_CODE = path.resolve(__dirname, "../tpl/demo_code.html");
const TPL_PATH_DOC = path.resolve(__dirname, "../tpl/doc.vue");
const TPL_PATH_ROUTER = path.resolve(__dirname, "../tpl/router.js");

const BUILD_PATH_ROUTERS = path.resolve(__dirname, "../src/router/componentsRouters.js");

// 示例内容
const getExamplesData = function (examples) {
    let demoRunArr = []
    let demoImportArr = []
    let demoComponentsArr = []
    examples.forEach((exam, i) => {
        demoRunArr.push(fs.readFileSync(TPL_PATH_DEMO_CODE, 'utf-8')
            .replace(/__DEMO_NAME__/g, exam.title)
            .replace(/__DEMO_DESC__/g, exam.desc)
            .replace(/__DEMO_NUM__/g, i))
        demoImportArr.push(`import demo${i} from "./demo${i}.vue";`)
        demoComponentsArr.push(`demo${i}`)
    })
    return {
        demoRunText: demoRunArr.join('\r\n'),
        demoImportText: demoImportArr.join('\r\n'),
        demoComponentsText: demoComponentsArr.join(',\r\n')
    }
}

// 创建demo示例组件
const buildDemos = function (examples, buildPath) {
    examples.forEach((exam, i) => {
        fs.openSync(`${buildPath}/demo${i}.vue`, 'w+')
        fs.writeFileSync(`${buildPath}/demo${i}.vue`, exam.code)
    })
}

// 美化代码格式
const beautifyExampleCode = function(examples){
    return examples.map((exam, i) => {
        exam.code = beautify(exam.code, {
            indent_size: "2",
        })
        return exam
    })
}

const main = function () {
    const datas = getComponentsData()

    const routersContent = []

    datas.forEach(item => {
        // 创建组件路由数组
        routersContent.push(fs.readFileSync(TPL_PATH_ROUTER, 'utf-8')
            .replace(/__COMPNENT_NAME__/g, item.fname))

        // 创建docs
        const DOC_PATH = path.resolve(__dirname, `../src/views/docs/${item.fname}`)
        if (!fs.existsSync(DOC_PATH)) {
            fs.mkdirSync(DOC_PATH);
        }
        let {
            demoRunText,
            demoImportText,
            demoComponentsText
        } = getExamplesData(item.examples)

        const butifyedExamples = beautifyExampleCode(item.examples)

        const docText = fs.readFileSync(TPL_PATH_DOC, 'utf-8')
            .replace(/__DEMO_LIST__/g, demoRunText)
            .replace(/__DEMO_IMPORT__/g, demoImportText)
            .replace(/__COMPNENT_NAME__/g, item.fname)
            .replace(/__DEMO_COMPONENT_LIST__/g, demoComponentsText)
            .replace(/__TITLE_DESC__/g, JSON.stringify(item.titleAndDesc))
            .replace(/__PROPS__/g, JSON.stringify(item.props))
            .replace(/__SLOTS__/g, JSON.stringify(item.slot))
            .replace(/__EVENTS__/g, JSON.stringify(item.event))
            .replace(/__DEMOS_DATA__/g, JSON.stringify(butifyedExamples).replace(/<\//g,'<\\/'))

        fs.openSync(`${DOC_PATH}/index.vue`, 'w+')
        fs.writeFileSync(`${DOC_PATH}/index.vue`, docText)

        buildDemos(butifyedExamples, DOC_PATH)
    })

    // 组件路由
    const routersText = `export default [${routersContent.join(',')}]`
    fs.openSync(BUILD_PATH_ROUTERS, 'w+')
    fs.writeFileSync(BUILD_PATH_ROUTERS, routersText)
}

module.exports = main