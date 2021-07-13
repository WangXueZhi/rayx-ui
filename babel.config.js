// const pkg = require('./package.json')

module.exports = {
  // presets: [[
  //   '@babel/preset-env', // 添加preset-env预设做语法转换，preset-env能将最新的语法转换为ecmascript5的写法
  //   {
  //     modules: false,
  //     corejs: 3, // corejs版本，core-js@3废弃了babel-polyfill，实现了完全无污染的API转译
  //     useBuiltIns: 'usage' // 不需要手动在代码里写import‘@babel/polyfilll’，打包时会自动根据实际代码的使用情况，结合 .browserslistrc 引入代码里实际会用到 polyfilll部分模块
  //   }
  // ]],
  plugins: [
    // ['import', {
    //   libraryName: 'rayx-ui',
    //   libraryDirectory: 'packages',
    //   style: (name) => {
    //     return `${name}/${name.split('/').pop()}.scss`
    //   }
    // }, 'rayx-ui'],
    // @babel/plugin-proposal-decorators 和 @babel/plugin-proposal-class-properties 让项目中可以使用装饰器写法，但是Vue3中一般也不使用了
    // ['@babel/plugin-proposal-decorators', { // 装饰器插件
    //   legacy: true
    // }],
    // '@babel/plugin-proposal-class-properties', // 类属性插件
    [
      '@babel/plugin-transform-runtime', // 利用runtime做helpers跟regenerator设置, 效果同@babel/preset-env
      {
        corejs: 3,
        helpers: true,
        useESModules: false,
        regenerator: true,
        absoluteRuntime: './node_modules'
      }
    ]
  ],
  // 添加忽略项
  ignore: ['./lib']
}
