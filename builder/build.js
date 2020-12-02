const vuePaserDoAst = require('./vue-paser').doAst
const fs = require('fs')
const path = require('path')
const util = require('./util')
const mdRender = require('./md-render')

// 获取组件数据
const getComponentsData = function () {
    const arr = []
    const files = fs.readdirSync('./packages')
    for (let i = 0; i < files.length; i++) {
        const stats = fs.statSync('./packages/' + files[i])
        if (stats.isDirectory() && files[i] !== 'styles') {
            let compData = {
                fname: files[i]
            }

            let conmponentVueData

            // // index.js
            // const indexPath = path.resolve(__dirname, '../packages/' + files[i] + '/' + 'index.js')
            // if (!fs.existsSync(indexPath)) {
            //     throw new Error(`组件${files[i]}缺少index.js`);
            // }

            // vue
            const vuePath = path.resolve(__dirname, '../packages/' + files[i] + '/' + files[i] + '.vue')

            if (fs.existsSync(vuePath)) {
                // console.log(vuePath + '>>>' + i)
                const vueFileContent = fs.readFileSync(vuePath, 'utf-8')
                const matchReg = /<script(?:\s+[^>]*)?>([\s\S]+?)<\/script\s*>/
                const code = matchReg.exec(vueFileContent)[1]
                conmponentVueData = vuePaserDoAst(code, vuePath + '>>>' + i)
                compData = {
                    ...compData,
                    ...conmponentVueData
                }
            }

            // md
            const mdPath = path.resolve(__dirname, '../packages/' + files[i] + '/README.md')
            const hasMarkdown = fs.existsSync(mdPath)
            if (hasMarkdown) {
                let mdContent = fs.readFileSync(mdPath, 'utf-8')
                let propsTableMd = `## props\n| 参数 | 说明 | 类型 | 默认值 |\n| --- | --- | --- | --- |\n`
                let methodsTableMd = `## methods\n| 方法名 | 说明 |\n| --- | --- |\n`

                if (conmponentVueData && conmponentVueData.props && Array.isArray(conmponentVueData.props) && conmponentVueData.methods && Array.isArray(conmponentVueData.methods)) {
                    conmponentVueData.props.forEach(item => {
                        propsTableMd += `| ${item.name} | ${item.comment} | ${item.type} | ${item.default} |\n`
                    })

                    conmponentVueData.methods.forEach(item => {
                        methodsTableMd += `| ${item.name} | ${item.comment} |\n`
                    })
                }

                if (propsTableMd) {
                    mdContent = mdContent.replace(/<!-- props -->/gm, propsTableMd)
                }
                if (methodsTableMd) {
                    mdContent = mdContent.replace(/<!-- methods -->/gm, methodsTableMd)
                }

                const typeMatch = mdContent.match(/(?<=<!-- type:\s*).*(?=-->)/m)
                const type = typeMatch ? typeMatch[0].replace(/\s/gm, '') : ''
                compData = {
                    ...compData,
                    type,
                    ...mdRender(mdContent)
                }
            }

            arr.push(compData)
        }
    }
    return arr
}

const TPL_PATH_DOC = path.resolve(__dirname, "../tpl/doc.vue");
const TPL_PATH_ROUTER = path.resolve(__dirname, "../tpl/router.js");
const TPL_PATH_COMPONENTS_LIST = path.resolve(__dirname, "../tpl/LayoutMenuComponents.vue");
const TPL_PATH_WEBPACK_COMPONENTS_ENTRYS = path.resolve(__dirname, "../tpl/webpack.components.entrys.js");
const TPL_PATH_PACKAGE_INDEX = path.resolve(__dirname, "../tpl/package.index.js");
const TPL_PATH_PACKAGE_INDEX_STYLE = path.resolve(__dirname, "../tpl/package.style.scss");

const BUILD_PATH_ROUTERS = path.resolve(__dirname, "../src/router/componentsRouters.js");
const BUILD_PATH_COMPONENTS_LIST = path.resolve(__dirname, "../src/components/Layout/LayoutMenuComponents.vue");
const BUILD_PATH_WEBPACK_COMPONENTS_ENTRYS = path.resolve(__dirname, "../webpack.components.entrys.js");
const BUILD_PATH_PACKAGE_INDEX = path.resolve(__dirname, "../packages/index.js");
const BUILD_PATH_PACKAGE_INDEX_STYLE = path.resolve(__dirname, "../packages/index.scss");

// 创建demo示例组件
const buildDemos = function (examples, buildPath) {
    examples.forEach((exam, i) => {
        fs.openSync(`${buildPath}/demo${i}.vue`, 'w+')
        fs.writeFileSync(`${buildPath}/demo${i}.vue`, exam)
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
    if (!fs.existsSync(targetPath)) {
        fs.openSync(targetPath, 'w+')
    }

    fs.writeFileSync(targetPath, content)
}

// 操作组件列表数据
const addMenuComponentsListData = function (sourceArr, data) {
    for (let i = 0; i < sourceArr.length; i++) {
        if (sourceArr[i].type === data.type) {
            if (!sourceArr[i].list.includes(data.fname)) {
                sourceArr[i].list.push(data.fname)
            }
            return sourceArr
        }
    }
    sourceArr.push({
        type: data.type,
        list: [data.fname]
    })
    return sourceArr
}

const build = function (cb) {
    const datas = getComponentsData()
    // console.log(datas)
    // return

    const routersContent = [] // 组件路由数组
    const menuComponentsList = [] // 菜单中的组件列表
    const webpackComponentsList = [] // webpack构建入口列表
    const package_index_imports = [] // 组件入口导入列表
    const package_index_components = [] // 组件入口组件列表
    const package_index_imports_style = [] // 组件入口导入样式列表
    let menuComponentsListData = [] // 组件列表数据

    datas.forEach(item => {

        if (item.cname) {
            // webpack构建入口
            webpackComponentsList.push(`    '${item.fname}': './packages/${item.fname}/index.js',`)
            // 组件入口导入列表
            package_index_imports.push(`import ${util.cpNameTransfer(item.fname)} from './${item.fname}'`)
            // 组件入口组件列表
            package_index_components.push(util.cpNameTransfer(item.fname))
            // 组件入口导入样式列表
            package_index_imports_style.push(`@import "./${item.fname}/${item.fname}";`)
        }

        // 创建demos目录
        const DEMO_PATH = path.resolve(__dirname, `../demos`)
        if (!fs.existsSync(DEMO_PATH)) {
            fs.mkdirSync(DEMO_PATH);
        }

        // demo 和 菜单列表
        if (item.demoText) {
            // 菜单列表数据
            menuComponentsListData = addMenuComponentsListData(menuComponentsListData, {
                type: item.type,
                fname: item.fname
            })
            // 菜单代码
            menuComponentsList.push(`<div class="layout-menu-item" @click="docChange('/docs/components/${item.fname}')">${item.fname}</div>`)

            const DOC_PATH = path.resolve(__dirname, `../demos/${item.fname}`)
            if (!fs.existsSync(DOC_PATH)) {
                fs.mkdirSync(DOC_PATH);
            }

            // 生成doc代码
            replaceTplAndBuildToTarget(TPL_PATH_DOC, [{
                tplText: /__DEMO_TEXT__/g,
                value: item.demoText
            }, {
                tplText: /__DEMO_IMPORT__/g,
                value: item.demoImportText
            }, {
                tplText: /__COMPNENT_NAME__/g,
                value: item.fname
            }, {
                tplText: /__DEMO_COMPONENT_LIST__/g,
                value: item.demoComponentsText
            }], `${DOC_PATH}/index.vue`)

            if (item.demoCodeArr && Array.isArray(item.demoCodeArr)) {
                buildDemos(item.demoCodeArr, DOC_PATH)

                // 创建组件路由数组
                routersContent.push(fs.readFileSync(TPL_PATH_ROUTER, 'utf-8')
                    .replace(/__COMPNENT_NAME__/g, item.fname))
            }
        }

        // // 美化示例代码
        // const butifyedExamples = beautifyExampleCode(item.examples)
    })

    // package组件入口
    replaceTplAndBuildToTarget(TPL_PATH_PACKAGE_INDEX, [{
        tplText: /__PACKAGE_IMPORT_LIST__/g,
        value: package_index_imports.join('\n')
    }, {
        tplText: /__PACKAGE_COMPONENTS_LIST__/g,
        value: package_index_components.join(', ')
    }], BUILD_PATH_PACKAGE_INDEX)

    // package组件入口
    replaceTplAndBuildToTarget(TPL_PATH_PACKAGE_INDEX_STYLE, [{
        tplText: /__IMPORT_STYLE_LIST__/g,
        value: package_index_imports_style.join('\n')
    }], BUILD_PATH_PACKAGE_INDEX_STYLE)

    // webpack构建入口
    webpackComponentsList.push(`    'index': './packages/index.js',`)
    replaceTplAndBuildToTarget(TPL_PATH_WEBPACK_COMPONENTS_ENTRYS, [{
        tplText: /__WEBPACK_COMPONENTS_ENTRYS__/g,
        value: webpackComponentsList.join('\n')
    }], BUILD_PATH_WEBPACK_COMPONENTS_ENTRYS)

    // 组件文档菜单列表
    replaceTplAndBuildToTarget(TPL_PATH_COMPONENTS_LIST, [{
        tplText: /__COMPONENTS_MENU_LIST__/g,
        value: menuComponentsList.join('\n')
    }, {
        tplText: /__LIST_DATA__/g,
        value: JSON.stringify(menuComponentsListData)
    }], BUILD_PATH_COMPONENTS_LIST)

    // 组件路由
    const routersText = `export default [${routersContent.join(',')}]`
    fs.openSync(BUILD_PATH_ROUTERS, 'w+')
    fs.writeFileSync(BUILD_PATH_ROUTERS, routersText)

    cb && cb()
}

const main = function (cb) {
    // 删除lib目录
    // const LIB_PATH = path.resolve(__dirname, `../lib`)
    // if (fs.existsSync(LIB_PATH)) {
    //     util.rmdirSync(LIB_PATH, build)
    // }
    build(cb)
}

module.exports = main