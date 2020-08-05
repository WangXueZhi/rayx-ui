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
const TPL_PATH_COMPONENTS_LIST = path.resolve(__dirname, "../tpl/LayoutMenuComponents.vue");
const TPL_PATH_WEBPACK_COMPONENTS_ENTRYS = path.resolve(__dirname, "../tpl/webpack.components.entrys.js");
const TPL_PATH_PACKAGE_INDEX = path.resolve(__dirname, "../tpl/package.index.js");

const BUILD_PATH_ROUTERS = path.resolve(__dirname, "../src/router/componentsRouters.js");
const BUILD_PATH_COMPONENTS_LIST = path.resolve(__dirname, "../src/components/Layout/LayoutMenuComponents.vue");
const BUILD_PATH_WEBPACK_COMPONENTS_ENTRYS = path.resolve(__dirname, "../webpack.components.entrys.js");
const BUILD_PATH_PACKAGE_INDEX = path.resolve(__dirname, "../packages/index.js");

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
const beautifyExampleCode = function (examples) {
    return examples.map((exam, i) => {
        exam.code = beautify(exam.code, {
            indent_size: "2",
        })
        return exam
    })
}

/**
 * 替换模板内容并声称在目标文件中
 * @param {*} tplPath 模板路径
 * @param {*} replaceList 替换列表 [{tplText: String | Regexp, value: String}]
 * @param {*} targetPath 
 */
const replaceTplAndBuildToTarget = function (tplPath, replaceList, targetPath) {
    let content = fs.readFileSync(tplPath, 'utf-8')
    replaceList.forEach(function (item) {
        content = content.replace(item.tplText, item.value)
    })

    fs.openSync(targetPath, 'w+')
    fs.writeFileSync(targetPath, content)
}

const main = function () {
    const datas = getComponentsData()

    const routersContent = [] // 组件路由数组
    const menuComponentsList = [] // 菜单中的组件列表
    const webpackComponentsList = [] // webpack构建入口列表
    const package_index_imports = [] // 组件入口导入列表
    const package_index_components = [] // 组件入口组件列表
    
    datas.forEach(item => {
        // 创建组件路由数组
        routersContent.push(fs.readFileSync(TPL_PATH_ROUTER, 'utf-8')
            .replace(/__COMPNENT_NAME__/g, item.fname))

        // 创建菜单中的组件列表
        menuComponentsList.push(`<div class="layout-menu-item" @click="docChange('/docs/components/${item.fname}')">${item.fname}</div>`)
        // webpack构建入口
        webpackComponentsList.push(`    '${item.fname}': './packages/${item.fname}/index.js',`)
        // 组件入口导入列表
        package_index_imports.push(`import ${util.cpNameTransfer(item.fname)} from './${item.fname}'`) 
        // 组件入口组件列表
        package_index_components.push(util.cpNameTransfer(item.fname))

        // 创建docs
        const DOC_PATH = path.resolve(__dirname, `../src/views/docs/components/${item.fname}`)
        if (!fs.existsSync(DOC_PATH)) {
            fs.mkdirSync(DOC_PATH);
        }
        let {
            demoRunText,
            demoImportText,
            demoComponentsText
        } = getExamplesData(item.examples)

        // 美化示例代码
        const butifyedExamples = beautifyExampleCode(item.examples)

        // 生成doc代码

        replaceTplAndBuildToTarget(TPL_PATH_DOC, [{
            tplText: /__DEMO_LIST__/g,
            value: demoRunText
        }, {
            tplText: /__DEMO_IMPORT__/g,
            value: demoImportText
        }, {
            tplText: /__COMPNENT_NAME__/g,
            value: item.fname
        }, {
            tplText: /__DEMO_COMPONENT_LIST__/g,
            value: demoComponentsText
        }, {
            tplText: /__TITLE_DESC__/g,
            value: JSON.stringify(item.titleAndDesc)
        }, {
            tplText: /__PROPS__/g,
            value: JSON.stringify(item.props)
        }, {
            tplText: /__SLOTS__/g,
            value: JSON.stringify(item.slot)
        }, {
            tplText: /__EVENTS__/g,
            value: JSON.stringify(item.event)
        }, {
            tplText: /__DEMOS_DATA__/g,
            value: JSON.stringify(butifyedExamples).replace(/<\//g, '<\\/')
        }], `${DOC_PATH}/index.vue`)

        buildDemos(butifyedExamples, DOC_PATH)
    })

    // package组件入口
    replaceTplAndBuildToTarget(TPL_PATH_PACKAGE_INDEX, [{
        tplText: /__PACKAGE_IMPORT_LIST__/g,
        value: package_index_imports.join('\n')
    },{
        tplText: /__PACKAGE_COMPONENTS_LIST__/g,
        value: package_index_components.join(', ')
    }], BUILD_PATH_PACKAGE_INDEX)

    // webpack构建入口
    replaceTplAndBuildToTarget(TPL_PATH_WEBPACK_COMPONENTS_ENTRYS, [{
        tplText: /__WEBPACK_COMPONENTS_ENTRYS__/g,
        value: webpackComponentsList.join('\n')
    }], BUILD_PATH_WEBPACK_COMPONENTS_ENTRYS)

    // 组件文档菜单列表
    replaceTplAndBuildToTarget(TPL_PATH_COMPONENTS_LIST, [{
        tplText: /__COMPONENTS_MENU_LIST__/g,
        value: menuComponentsList.join('\n')
    }], BUILD_PATH_COMPONENTS_LIST)

    // 组件路由
    const routersText = `export default [${routersContent.join(',')}]`
    fs.openSync(BUILD_PATH_ROUTERS, 'w+')
    fs.writeFileSync(BUILD_PATH_ROUTERS, routersText)
}

module.exports = main