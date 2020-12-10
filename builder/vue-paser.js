const babelParser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const fs = require('fs')
// const path = require('path')

let isExportDefaultDeclaration = false // 是否进入默认导出部分
let isProps = false
let isMethods = false
let defaultExportType = 'ObjectExpression' // 默认导出类型

// 解析类型为BinaryExpression的节点
const parseBinaryExpression = function (node) {
  let str = ''
  if (node.type === 'BinaryExpression') {
    if (node.left.type === 'BinaryExpression') {
      str += parseBinaryExpression(node.left)
    } else {
      str += `${node.left.name}`
    }

    str += ` ${node.operator} ${node.right.name}`
  }

  return str
}

const paresExportDefault = function (path, data, code, compath) {
  
  if (path.node.type === 'ObjectProperty' && path.node.key.name === 'name' && !isProps) {
    data.cname = path.node.value.value
  }

  const commentBlock = getCommentBlockItem(path.node.leadingComments)

  // 属性
  if (isProps === true && path.type !== 'Identifier' && path.node.key && commentBlock) {
    const k = {}
    k.comment = commentBlock.value.replace(/\s|\*/g, '').replace(/\|/g, '&#124;')
    k.name = path.node.key.name

    // 定义类型
    if (path.node.value.type === 'Identifier') {
      k.type = path.node.value.name
    }

    if (path.node.value.type === 'ArrayExpression') {
      k.type = 'Array'
      k.default = code.slice(path.node.value.start, path.node.value.end).replace(/\s/g, '')
    }

    if(path.node.value.value){
      k.default = path.node.value.value
      k.type = typeof path.node.value.value
    }
    
    // 对象类型
    if (path.node.value.type === 'ObjectExpression') {
      path.node.value.properties.forEach(item => {

        let v = ''

        // 基本数据类型
        // if(item.value && (item.value.value || item.value.value===false)){
        //   v = item.value.value
        // }
        
        if(item.value){
          v = item.value.value
        }
        
        // 对象方法类型
        if(item.type === 'ObjectMethod'){
          for( let i = 0; i<item.body.body.length; i++){
            const subItem = item.body.body[i]
            if(subItem.type === 'ReturnStatement'){
              v = code.slice(subItem.argument.start, subItem.argument.end).replace(/\s/g, '').replace(/\|/g, '&#124;')
              break;
            }
          }
        }

        // 定义类型
        if (item.value && item.value.type === 'Identifier') {
          v = item.value.name
        }
        // 对象或数组类型
        if (item.value && (item.value.type === 'ObjectExpression' || item.value.type === 'ArrayExpression')) {
          v = code.slice(item.value.start, item.value.end).replace(/\s/g, '')
        }
        // 类型类型
        if (item.value && item.value.type === 'BinaryExpression') {
          v = parseBinaryExpression(item.value).replace(/\|/g, '&#124;')
        }
        // 箭头函数类型
        if (item.value && item.value.type === 'ArrowFunctionExpression') {
          for( let i = 0; i<item.value.body.body.length; i++){
            const subItem = item.value.body.body[i]
            if(subItem.type === 'ReturnStatement'){
              v = code.slice(subItem.argument.start, subItem.argument.end).replace(/\s/g, '')
              break;
            }
          }
        }

        k[item.key.name] = v

        k['default'] = k['default'] === undefined ? '未定义' : k['default']
      })
    }
    data.props.push(k)
  }

  

  // 方法
  if (isMethods === true && (path.node.type === 'ObjectMethod' || path.node.type === 'ObjectProperty') && commentBlock) {
    const k = {}
    k.comment = commentBlock.value.replace(/\s|\*/g, '')
    k.name = path.node.key.name
    data.methods.push(k)
  }

  if (path.node.type === 'ObjectProperty' && path.node.key.name === 'props') {
    isProps = true
  }
  if (path.node.type === 'ObjectProperty' && path.node.key.name === 'methods') {
    isMethods = true
  }
}

// 提取多行注释
const getCommentBlockItem = function (leadingComments) {
  if (!leadingComments) {
    return null
  }
  return leadingComments.filter(item => {
    return item.type === 'CommentBlock'
  })[0]
}

const doAst = function (code, compath) {
  console.log(compath)
  const data = {
    cname: '',
    props: [],
    methods: []
  }
  const ast = babelParser.parse(code, {
    // parse in strict mode and allow module declarations
    sourceType: 'module'
  })

  traverse(ast, {
    enter(path) {
      // 默认导出为对象表达式，直接解析
      if (isExportDefaultDeclaration === true && defaultExportType === 'ObjectExpression') {
        // console.log('cname: >>>>>>>> ',data.cname)
        // if(compath.includes('icon.vue')){
        //   console.log('icon.vue')
        // }
        paresExportDefault(path, data, code, compath)
      }

      if (path.node.type === 'ExportDefaultDeclaration') {
        isExportDefaultDeclaration = true
        defaultExportType = path.node.declaration.type
      }
    },
    exit(path) {
      // 结束-默认导出为对象表达式
      if (isExportDefaultDeclaration === true && defaultExportType === 'ObjectExpression') {
        if (path.node.type === 'ExportDefaultDeclaration') {
          isExportDefaultDeclaration = false
        }
        if (path.node.type === 'ObjectProperty' && path.node.key.name === 'props') {
          isProps = false
        }
        if (path.node.type === 'ObjectProperty' && path.node.key.name === 'methods') {
          isMethods = false
        }
      }
    }
  })

  return data
}

const main = function () {
  const arr = []
  const files = fs.readdirSync('./packages')
  for (let i = 0; i < files.length; i++) {
    const stats = fs.statSync('./packages/' + files[i])
    if (stats.isDirectory()) {
      const fileContent = fs.readFileSync('./packages/' + files[i] + '/' + files[i] + '.vue', 'utf-8')
      const matchReg = /<script(?:\s+[^>]*)?>([\s\S]+?)<\/script\s*>/
      const code = matchReg.exec(fileContent)[1]
      arr.push(doAst(code))
    }
  }
  return arr
}

module.exports = {
  doAst,
  main
}