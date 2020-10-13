# 创建组件

## 组件命名
我们统一使用全小写命名组件，例如：```button```，如果是多单词命名，必须使用```kebab-case```（短横线分隔）的方式命名组件，比如 ```my-component```

## 组件目录
组件目录名就是组件名，里面必须包含四个文件：

1. 同组件名的```.vue```单文件组件
2. 同组件名的```.scss```文件，因为我们使用scss作为样式预处理
3. ```index.js```, 这里要完成对组件的注册函数和导出 
4. ```README.md```, 这里是组件的使用文档，会被解析成html，具体请查阅[组件的md编写规范](#/development/md)

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