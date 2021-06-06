const babelParser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const fs = require('fs')

function getValueFromCodeByRange(code, start, end) {
  return code.slice(start, end).replace(/\s/g, '').replace(/\|/g, '&#124;')
}

function isFunctionType(type) {
  return ['ArrowFunctionExpression', 'FunctionExpression', 'ArrowFunctionExpression'].includes(type)
}

function parseComment(leadingComments) {
  const commentBlock = getCommentBlockItem(leadingComments)
  if (commentBlock) {
    return commentBlock.value.replace(/\s|\*/g, '').replace(/\|/g, '&#124;')
  }
  return ''
}

// 提取多行注释
function getCommentBlockItem(leadingComments) {
  if (!leadingComments) {
    return null
  }
  return leadingComments.filter(item => {
    return item.type === 'CommentBlock'
  })[0]
}

const parseObjectExpression = function (objectExpressionNode, code, compath) {
  const data = {
    cname: '',
    props: [],
    methods: [],
    emits: []
  }

  // 遍历对象键值对
  objectExpressionNode.properties.forEach(property => {
    // 处理name
    if (property.key.name === 'name') {
      data.cname = property.value.value
    }
    // 处理props，并且是对象表达式，组件严格要求属性必须是对象表达式，为了解析属性
    if (property.key.name === 'props' && property.value.type === 'ObjectExpression') {
      // 遍历每个属性
      property.value.properties.forEach(propertyInProps => {
        const k = {}
        // 解析注释
        k.comment = parseComment(propertyInProps.leadingComments)

        if (k.comment) {
          // 属性名
          k.name = propertyInProps.key.name
          // 解析属性值
          // 如果是对象表达式
          if (propertyInProps.value.type === 'ObjectExpression') {
            propertyInProps.value.properties.forEach(propertyOfProp => {
              // 类型
              if (propertyOfProp.key.name === 'type') {
                k.type = getValueFromCodeByRange(code, propertyOfProp.value.start, propertyOfProp.value.end)
              }
              // 默认值
              if (propertyOfProp.key.name === 'default') {
                if (k.type === 'Object' || k.type === 'Array') {
                  if (!isFunctionType(propertyOfProp.value.type)) {
                    throw new Error(`type of prop ${k.name} is ${k.type}, so the default value needs to be a FunctionExpression`)
                  }
                }
                k.default = getValueFromCodeByRange(code, propertyOfProp.value.start, propertyOfProp.value.end)
              }
            })
          } else {
            k.type = getValueFromCodeByRange(code, propertyInProps.value.start, propertyInProps.value.end)
            k.default = ''
          }

          data.props.push(k)
        }

      })
    }
    // 处理method
    if (property.key.name === 'methods' && property.value.type === 'ObjectExpression') {
      // 遍历每个属性
      property.value.properties.forEach(methodItem => {
        const k = {}
        // 解析注释
        k.comment = parseComment(methodItem.leadingComments)

        if (k.comment) {
          k.name = methodItem.key.name

          // 键值对的形式需要检查一下
          if (methodItem.type === 'ObjectProperty') {
            if (!isFunctionType(methodItem.value.type)) {
              throw new Error(`type of method ${k.name} is not a FunctionExpression`)
            }
          }

          data.methods.push(k)
        }
      })
    }
    // 处理emits
    if (property.key.name === 'emits' && property.value.type === 'ObjectExpression') {
      property.value.properties.forEach(emitItem => {
        const k = {}
        // 解析注释
        k.comment = parseComment(emitItem.leadingComments)

        if (k.comment) {
          if (emitItem.key.type === 'Identifier') {
            k.name = emitItem.key.name
          } else if (emitItem.key.type === 'StringLiteral') {
            k.name = emitItem.key.value
          }

          // 键值对的形式需要检查一下
          if (emitItem.type === 'ObjectProperty') {
            if (isFunctionType(emitItem.value.type)) {
              k.params = emitItem.value.params.map(param => {
                return getValueFromCodeByRange(code, param.start, param.end)
              }).join(',')
            } else if (emitItem.value.type === 'NullLiteral') {
              k.params = ''
            } else {
              throw new Error(`Error width value of emit ${k.name}`)
            }
          }

          data.emits.push(k)
        }
      })
    }
  })

  return data
}

const paresExportDefault = function (node, code, compath) {
  // 如果默认导出的是对象表达式
  if (node.declaration.type === 'ObjectExpression') {
    return parseObjectExpression(node.declaration, code, compath)
  }

  if (node.declaration.type === 'CallExpression' && node.declaration.callee && node.declaration.callee.name === 'defineComponent' && node.declaration.arguments && node.declaration.arguments.length && node.declaration.arguments.length > 0 && node.declaration.arguments[0].type === 'ObjectExpression') {
    return parseObjectExpression(node.declaration.arguments[0], code, compath)
  }

  return null
}

const doAst = function (code, compath) {
  let data
  const ast = babelParser.parse(code, {
    // 允许模块化
    sourceType: 'module',
    plugins: ['typescript']
  })
  traverse(ast, {
    // 默认导出节点
    ExportDefaultDeclaration: ({
      node
    }) => {
      data = paresExportDefault(node, code, compath)
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
      const data = doAst(code)
      data && arr.push(data)
    }
  }
  return arr
}

module.exports = {
  doAst,
  main
}