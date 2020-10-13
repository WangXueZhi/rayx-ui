# 自定义主题

默认提供了一套主题变量，```/lib/styles/var.scss```, 覆盖变量即可

```scss
$--color-primary: #030508;
@import "rayx-ui/lib/index";
```

### 注意

自定义主题样式必须以全量的方式导入，如果你是以按需方式导入组件，需要去掉```babel.config.js```中的style，然后使用上面的方式覆盖变量

```js
// babel.config.js
module.exports = {
  ...
  plugins: [
    ['import', {
      libraryName: 'rayx-ui',
      libraryDirectory: 'packages',
      // 此处去掉
      // style: (name) => {
      //   return `${name}/${name.split('/').pop()}.css`;
      // },
    }, 'rayx-ui']
  ]
}
```
