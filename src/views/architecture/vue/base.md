# vue 解析

对 vue 组件的解析，使用`@babel/parser`将代码转换成 AST 进行处理，提取出 name，props，methods，再提交给 builder 进行输出

## 匹配vue中的script内容 

```js
const vueFileContent = fs.readFileSync(
  "./packages/" + files[i] + "/" + files[i] + ".vue",
  "utf-8"
);
const matchReg = /<script(?:\s+[^>]*)?>([\s\S]+?)<\/script\s*>/;
const code = matchReg.exec(vueFileContent)[1];

const conmponentData = vuePaserDoAst(code);

// 后面交由builder对conmponentData处理输出
```
