const babelParser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const fs = require('fs')

const getValueFromCodeByRange = function (code, start, end) {
  return code.slice(start, end).replace(/\s/g, '').replace(/\|/g, '&#124;')
}

const isFunctionType = function (type) {
  return ['ArrowFunctionExpression', 'FunctionExpression'].includes(type)
}

const parseObjectExpression = function (objectExpressionNode, code, compath) {
  const data = {
    cname: '',
    props: [],
    methods: []
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
        const commentBlock = getCommentBlockItem(propertyInProps.leadingComments)
        if (commentBlock) {
          k.comment = commentBlock.value.replace(/\s|\*/g, '').replace(/\|/g, '&#124;')
        }
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
      })
    }
    // 处理method
    if (property.key.name === 'methods' && property.value.type === 'ObjectExpression') {
      // 遍历每个属性
      property.value.properties.forEach(methodItem => {
        const k = {}
        // 解析注释
        const commentBlock = getCommentBlockItem(methodItem.leadingComments)
        if (commentBlock) {
          k.comment = commentBlock.value.replace(/\s|\*/g, '').replace(/\|/g, '&#124;')
        }

        k.name = methodItem.key.name

        // 键值对的形式需要检查一下
        if (methodItem.type === 'ObjectProperty') {
          if (!isFunctionType(methodItem.value.type)) {
            throw new Error(`type of method ${k.name} is not a FunctionExpression`)
          }
        }

        data.methods.push(k)
      })
    }
  })

  return data
}

const paresExportDefault2 = function (node, code, compath) {
  // 如果默认导出的是对象表达式
  if (node.declaration.type === 'ObjectExpression') {
    return parseObjectExpression(node.declaration, code, compath)
  }

  if (node.declaration.type === 'CallExpression' && node.declaration.callee && node.declaration.callee.name === 'defineComponent' && node.declaration.arguments && node.declaration.arguments.length && node.declaration.arguments.length > 0 && node.declaration.arguments[0].type === 'ObjectExpression') {
    return parseObjectExpression(node.declaration.arguments[0], code, compath)
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
  let data
  const ast = babelParser.parse(code, {
    // 允许模块化
    sourceType: 'module'
  })
  traverse(ast, {
    ExportDefaultDeclaration: ({ node }) => {
      data = paresExportDefault2(node, code, compath)
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
