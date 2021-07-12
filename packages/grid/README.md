<!-- type: 基础 -->

# Grid 栅格

24 栅格系统

## 示例

基础布局

```vue demo
<template>
  <div class="demo-wrapper">
    <r-row>
      <r-col :span="12"><div class="col-block-primary">span-12</div></r-col>
      <r-col :span="12"><div class="col-block-primary">span-12</div></r-col>
    </r-row>
    <r-row>
      <r-col :span="8"><div class="col-block-primary">span-8</div></r-col>
      <r-col :span="8"><div class="col-block-primary">span-8</div></r-col>
      <r-col :span="8"><div class="col-block-primary">span-8</div></r-col>
    </r-row>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="scss">
@import "rayx-ui/styles/var.scss";
.demo-wrapper {
  .r-row {
    margin-bottom: 10px;
  }
  .r-col {
    &:nth-child(even) {
      .col-block-primary {
        opacity: 0.8;
      }
    }
    .col-block-primary {
      background: $--color-primary;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
  }
}
</style>
```

区块间隔

```vue demo
<template>
  <div class="demo-wrapper">
    <r-row :gutter="10">
      <r-col :span="8"><div class="col-block-primary">span-8</div></r-col>
      <r-col :span="8"><div class="col-block-primary">span-8</div></r-col>
      <r-col :span="8"><div class="col-block-primary">span-8</div></r-col>
    </r-row>
    <r-row :gutter="10">
      <r-col :span="8"><div class="col-block-primary">span-8</div></r-col>
      <r-col :span="8"><div class="col-block-primary">span-8</div></r-col>
      <r-col :span="8"><div class="col-block-primary">span-8</div></r-col>
    </r-row>
  </div>
</template>
<script>
export default {
};
</script>
<style lang="scss">
@import "rayx-ui/styles/var.scss";
.demo-wrapper {
  .r-row {
    margin-bottom: 10px;
  }
  .r-col {
    &:nth-child(even) {
      .col-block-primary {
        opacity: 0.8;
      }
    }
    .col-block-primary {
      background: $--color-primary;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
  }
}
</style>
```

混合布局

```vue demo
<template>
  <div class="demo-wrapper">
    <r-row :gutter="10">
      <r-col :span="12"><div class="col-block-primary">span-12</div></r-col>
      <r-col :span="12"><div class="col-block-primary">span-12</div></r-col>
    </r-row>
    <r-row :gutter="10">
      <r-col :span="4"><div class="col-block-primary">span-4</div></r-col>
      <r-col :span="4"><div class="col-block-primary">span-4</div></r-col>
      <r-col :span="4"><div class="col-block-primary">span-4</div></r-col>
      <r-col :span="6"><div class="col-block-primary">span-6</div></r-col>
      <r-col :span="6"><div class="col-block-primary">span-6</div></r-col>
    </r-row>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="scss">
@import "rayx-ui/styles/var.scss";
.demo-wrapper {
  .r-row {
    margin-bottom: 10px;
  }
  .r-col {
    &:nth-child(even) {
      .col-block-primary {
        opacity: 0.8;
      }
    }
    .col-block-primary {
      background: $--color-primary;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
  }
}
</style>
```

区块偏移

```vue demo
<template>
  <div class="demo-wrapper">
    <p>距左偏移</p>
    <r-row>
      <r-col :span="6"><div class="col-block-primary">span-6</div></r-col>
      <r-col :span="6" :offset="6"><div class="col-block-primary">span-6 offset-6</div></r-col>
    </r-row>
    <r-row>
      <r-col :span="6" :offset="6"><div class="col-block-primary">span-6 offset-6</div></r-col>
      <r-col :span="6" :offset="6"><div class="col-block-primary">span-6 offset-6</div></r-col>
    </r-row>
    <p>通过设置push和pull来改变栅格的顺序</p>
    <r-row>
      <r-col :span="18" :push="6"><div class="col-block-primary">span-18 push-6</div></r-col>
      <r-col :span="6" :pull="18"><div class="col-block-primary">span-6 pull-18</div></r-col>
    </r-row>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="scss">
@import "rayx-ui/styles/var.scss";
.demo-wrapper {
  .r-row {
    margin-bottom: 10px;
  }
  .r-col {
    &:nth-child(even) {
      .col-block-primary {
        opacity: 0.8;
      }
    }
    .col-block-primary {
      background: $--color-primary;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
  }
}
</style>
```

Flex布局

```vue demo
<template>
  <div class="demo-wrapper">
    <p>justify-content: flex-start</p>
    <r-row flexMode>
      <r-col :span="6"><div class="col-block-primary">span-6</div></r-col>
      <r-col :span="6"><div class="col-block-primary">span-6</div></r-col>
    </r-row>
    <p>justify-content: flex-end</p>
    <r-row flexMode justify="end">
      <r-col :span="6"><div class="col-block-primary">span-6</div></r-col>
      <r-col :span="6"><div class="col-block-primary">span-6</div></r-col>
    </r-row>
    <p>justify-content: center</p>
    <r-row flexMode justify="center">
      <r-col :span="6"><div class="col-block-primary">span-6</div></r-col>
      <r-col :span="6"><div class="col-block-primary">span-6</div></r-col>
    </r-row>
    <p>justify-content: space-around</p>
    <r-row flexMode justify="space-around">
      <r-col :span="6"><div class="col-block-primary">span-6</div></r-col>
      <r-col :span="6"><div class="col-block-primary">span-6</div></r-col>
    </r-row>
    <p>justify-content: space-between</p>
    <r-row flexMode justify="space-between">
      <r-col :span="6"><div class="col-block-primary">span-6</div></r-col>
      <r-col :span="6"><div class="col-block-primary">span-6</div></r-col>
    </r-row>
    <p>align-items: center</p>
    <r-row flexMode align="middle">
      <r-col :span="6"><div style="height: 70px" class="col-block-primary">span-6</div></r-col>
      <r-col :span="6"><div style="height: 100px" class="col-block-primary">span-6</div></r-col>
      <r-col :span="6"><div class="col-block-primary">span-6</div></r-col>
    </r-row>
    <p>align-items: flex-end</p>
    <r-row flexMode align="bottom">
      <r-col :span="6"><div style="height: 70px" class="col-block-primary">span-6</div></r-col>
      <r-col :span="6"><div style="height: 100px" class="col-block-primary">span-6</div></r-col>
      <r-col :span="6"><div class="col-block-primary">span-6</div></r-col>
    </r-row>
    <p>order 排序</p>
    <r-row flexMode>
      <r-col :span="6" order="3"><div class="col-block-primary">1 | order-3</div></r-col>
      <r-col :span="6" order="2"><div class="col-block-primary">2 | order-2</div></r-col>
      <r-col :span="6" order="1"><div class="col-block-primary">3 | order-1</div></r-col>
    </r-row>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="scss">
@import "rayx-ui/styles/var.scss";
.demo-wrapper {
  .r-row {
    margin-bottom: 10px;
  }
  .r-col {
    &:nth-child(even) {
      .col-block-primary {
        opacity: 0.8;
      }
    }
    .col-block-primary {
      background: $--color-primary;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
  }
}
</style>
```

## Row props

| 名称    | 说明     | 类型    | 默认值 |
| ------- | -------- | --------- | --------- |
| gutter    | 栅格间隔 | Number | 0 |
| flexMode | 是否启用flex布局 | Boolean  | false |
| align | flex 布局下的垂直对齐方式，可选值为top、middle、bottom | String  | '' |
| justify | flex 布局下的水平排列方式，可选值为start、end、center、space-around、space-between | String  | '' |

## Col props

| 名称    | 说明     | 类型    | 默认值 |
| ------- | -------- | --------- | --------- |
| span    | 栅格的占位格数，可选值为0~24的整数，为 0 时，相当于display:none | Number &#124; String | 0 |
| order | 栅格的顺序 | String &#124; Number  | '' |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格 | String &#124; Number  | '' |
| push | 栅格向右移动格数 | String &#124; Number  | '' |
| pull | 栅格向左移动格数 | String &#124; Number  | '' |