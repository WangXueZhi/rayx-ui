# markdown编写说明

## 对组件进行分类
组件文档会对组件的菜单进行分类展示，需要再组件的```README.md```内添加分类的注释：

```md
<!-- type: 通用 -->
```

## 在文档中展示组建的props和methods
如果组件内已经对props和methods添加了多行类型的注释，则会在构建的时候被解析出来，可以在```README.md```中添加对应的注释，props和methods将会以表格的形式被展示在对应的位置。当然，如果你想自己写也行。
```md
<!-- props -->  将被替换成 =>
## props
| 参数 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| disabled | boolean | 禁用 | false |

<!-- methods -->  将被替换成 =>
## methods
| 方法名 | 说明 |
| --- | --- |
| click | 点击 |
```

## 示例代码和demo
默认代码块是不会被转换成demo示例的

```md
// ```vue
// 
// ```
```
加上demo标识，会被转成示例，并展示代码
```md
// ```vue demo
// 
// ```
```
加上hidecode标识，会被转成示例，并隐藏代码
```md
// ```vue demo hidecode
// 
// ```
```