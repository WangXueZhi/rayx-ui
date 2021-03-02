# 创建组件

## 用命令创建组件模板
```
npm run create -- --name=compnent-name
```

## 组件命名
我们统一使用全小写命名组件，例如：```button```，如果是多单词命名，必须使用```kebab-case```（短横线分隔）的方式命名组件，比如 ```my-component```, 使用命令创建可使用小驼峰、大驼峰、短横线任意一种方式，内部会转换成短横线的命名

## 组件目录
组件目录名就是组件名，里面必须包含```.vue```，```.scss```，```index.js```三个文件：

1. 同组件名的```.vue```单文件组件
2. 同组件名的```.scss```文件，因为我们使用scss作为样式预处理
3. ```index.js```, 这里要完成对组件的注册函数和导出 
4. ```README.md```, 这里是组件的使用文档，会被解析成html，具体请查阅[组件的md编写规范](#/development/md), 如果不展示文档，该文件可以没有

目录示例：

```
packages
└─my-component
│   │ my-component.vue
│   │ my-component.scss
│   │ index.js
│   │ README.md
```

```index.js```文件的示例：
```js
import Button from './button.vue'

// 为组件提供 install 安装方法，供按需引入
Button.install = function (Vue) {
  Vue.component(Button.name, Button)
}

// 默认导出组件
export default Button
```

## 注意
1. 如果只需要展示文档，在目录下编写markdown就行，不需要组件文件，参考packages目录下的```grid```
2. 如果不需要展示文档，单纯增加组件，在目录下编写组件的文件就行