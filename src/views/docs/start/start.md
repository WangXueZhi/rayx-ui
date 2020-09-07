# 快速开始

## 安装

```
yarn add rayx-ui
```

## 使用

#### 全量导入

```js
import Vue from "vue";
import VueRouter from "vue-router";
import App from "components/app.vue";
import Routers from "./router.js";

// 主要是这里
import RayxUI from "rayx-ui";
import "rayx-ui/dist/index/style.css";
Vue.use(RayxUI);

Vue.use(VueRouter);

// The routing configuration
const RouterConfig = {
  routes: Routers,
};
const router = new VueRouter(RouterConfig);

new Vue({
  el: "#app",
  router: router,
  render: (h) => h(App),
});
```

#### 按需导入

先安装 babel-plugin-import 插件

```
yarn add babel-plugin-import
```

配置 babel.config.js

```js
module.exports = {
  ...
  plugins: [
    ['import', {
      libraryName: 'rayx-ui',
      style: true,
      libraryDirectory: '/'
    }, 'rayx-ui']
  ]
}
```

导入指定组件

```html
<template>
  <Button>按钮</Button>
</template>
<script>
import { Button } from "rayx-ui";
export default {
  components: {
    Button
  }
}
```
