var MarkdownIt = new require('markdown-it')
var md = new MarkdownIt();
const fs = require('fs')

/**
 * 清除一个数组中值为空的项
 * @param {Array} array 
 * @return 处理后的数组
 */
const cleanEmptyInArray = function (array) {
  let [...newArray] = array;
  const count = newArray.length;
  for (let i = count - 1; i >= 0; i--) {
    if (newArray[i] === "" || newArray[i] === null || newArray[i] === undefined) {
      newArray.splice(i, 1);
    }
  }
  return newArray;
}

// 是否标题类型
const isTitleType = function(text){
  return text.indexOf('#') === 0
}

// 是否表格类型
const isTableType = function (text) {
  const arr = cleanEmptyInArray(text.split(' '))
  if (arr.slice(0, 1)[0] === '|' && arr.slice(-1)[0] === '|') {
    return true
  }
  return false
}

// 清空空白节点
const cleanSoftbreak = function (tokens) {
  return tokens.filter(item => {
    return item.type !== 'softbreak'
  })
}

// 获取基础信息
const getBaseInfo = function (tokens) {
  const baseInfo = {}
  let hasStart = false
  for (let i = 0; i < tokens.length; i++) {
    let item = tokens[i]
    if (!!hasStart && item.content !== '---') {
      const [key, value] = cleanEmptyInArray(item.content.split(': '))
      baseInfo[key] = value
    }
    if (item.content === '---' && !hasStart) {
      hasStart = true
      continue
    }
    if (item.content === '---' && !!hasStart) {
      return baseInfo
    }
  }
  return baseInfo
}

// 提取标题和描述
const getTitleAndDesc = function (tokens) {
  const titleAndDesc = {}
  for (let i = 0; i < tokens.length; i++) {
    let item = tokens[i]

    if (item.content.indexOf('# ') === 0) {
      titleAndDesc.title = item.content.replace('# ', '')
      const nextContent = tokens[i + 1] ? tokens[i + 1].content : ''
      if (!isTitleType(nextContent) && !isTableType(nextContent) ){
        titleAndDesc.desc = nextContent
      }
      return titleAndDesc
    }
  }
  return titleAndDesc
}

// 提取示例
const getExample = function (tokens) {
  const getExampleName = function (exampleNameItem) {
    if (exampleNameItem && exampleNameItem.content.includes('#### ')) {
      return exampleNameItem.content.replace('#### ', '')
    }
    return '用法' // 默认
  }
  const objs = []
  for (let i = 0; i < tokens.length; i++) {
    let item = tokens[i]

    if (item.type === 'code_inline' && item.content.indexOf('html demo ') === 0) {
      const code = item.content.replace('html demo ', '')
      let name = '' // 示例标题
      let desc = '' // 示例描述
      let exampleNameItem = tokens[i - 1]
      name = getExampleName(exampleNameItem)
      // 如果示例上一级不是示例标题，则认为是示例描述，再去上上级查找标题
      if (exampleNameItem && !exampleNameItem.content.includes('#### ')) {
        name = getExampleName(tokens[i - 2])
        desc = exampleNameItem.content
      }
      objs.push({
        title: name,
        code,
        desc
      })
    }
  }
  return objs
}

// 提取表格
const getTables = function (tokens, type) {
  const objs = []
  let isType = false
  for (let i = 0; i < tokens.length; i++) {
    let item = tokens[i]
    if (isType && isTableType(item.content)) {
      const arr = cleanEmptyInArray(item.content.replace(/\s/g, '').split('|'))
      objs.push(arr)
    }
    if (isType && !isTableType(item.content)) {
      return objs
    }

    if (item.content === `## ${type}`) {
      isType = true
    }
  }
  return objs
}

const doAst = function (tokens) {
  let newTokens = cleanSoftbreak(tokens)
  let baseInfo = getBaseInfo(newTokens)
  let titleAndDesc = getTitleAndDesc(newTokens)
  let examples = getExample(newTokens)
  let slot = getTables(newTokens, 'slot')
  let event = getTables(newTokens, 'event')

  return {
    baseInfo,
    titleAndDesc,
    examples,
    slot,
    event
  }
}

const main = function () {
  const arr = []
  const files = fs.readdirSync('./packages')
  for (let i = 0; i < files.length; i++) {
    const stats = fs.statSync('./packages/' + files[i])
    if (stats.isDirectory()) {
      const fileContent = fs.readFileSync('./packages/' + files[i] + '/README.md', 'utf-8')
      let tokens = md.parseInline(fileContent, {})[0].children
      arr.push(doAst(tokens))
    }
  }
  return arr
}

module.exports = {
  doAst,
  main
}