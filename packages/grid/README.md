<!-- type: 基础 -->

# Grid 栅格

24 栅格系统

## 示例

基础布局

```vue demo
<template>
  <div class="demo-wrapper">
    <Row>
      <Col :span="12"><div class="col-block-primary">span-12</div></Col>
      <Col :span="12"><div class="col-block-primary">span-12</div></Col>
    </Row>
    <Row>
      <Col :span="8"><div class="col-block-primary">span-8</div></Col>
      <Col :span="8"><div class="col-block-primary">span-8</div></Col>
      <Col :span="8"><div class="col-block-primary">span-8</div></Col>
    </Row>
  </div>
</template>
<script>
import { Row, Col } from "rayx-ui";
export default {
  components: {
    Row,
    Col,
  },
};
</script>
<style lang="scss">
@import "rayx-ui/packages/styles/var.scss";
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
    <Row :gutter="10">
      <Col :span="8"><div class="col-block-primary">span-8</div></Col>
      <Col :span="8"><div class="col-block-primary">span-8</div></Col>
      <Col :span="8"><div class="col-block-primary">span-8</div></Col>
    </Row>
    <Row :gutter="10">
      <Col :span="8"><div class="col-block-primary">span-8</div></Col>
      <Col :span="8"><div class="col-block-primary">span-8</div></Col>
      <Col :span="8"><div class="col-block-primary">span-8</div></Col>
    </Row>
  </div>
</template>
<script>
import { Row, Col } from "rayx-ui";
export default {
  components: {
    Row,
    Col,
  },
};
</script>
<style lang="scss">
@import "rayx-ui/packages/styles/var.scss";
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
    <Row :gutter="10">
      <Col :span="12"><div class="col-block-primary">span-12</div></Col>
      <Col :span="12"><div class="col-block-primary">span-12</div></Col>
    </Row>
    <Row :gutter="10">
      <Col :span="4"><div class="col-block-primary">span-4</div></Col>
      <Col :span="4"><div class="col-block-primary">span-4</div></Col>
      <Col :span="4"><div class="col-block-primary">span-4</div></Col>
      <Col :span="6"><div class="col-block-primary">span-6</div></Col>
      <Col :span="6"><div class="col-block-primary">span-6</div></Col>
    </Row>
  </div>
</template>
<script>
import { Row, Col } from "rayx-ui";
export default {
  components: {
    Row,
    Col,
  },
};
</script>
<style lang="scss">
@import "rayx-ui/packages/styles/var.scss";
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
    <Row>
      <Col :span="6"><div class="col-block-primary">span-6</div></Col>
      <Col :span="6" :offset="6"><div class="col-block-primary">span-6 offset-6</div></Col>
    </Row>
    <Row>
      <Col :span="6" :offset="6"><div class="col-block-primary">span-6 offset-6</div></Col>
      <Col :span="6" :offset="6"><div class="col-block-primary">span-6 offset-6</div></Col>
    </Row>
    <p>通过设置push和pull来改变栅格的顺序</p>
    <Row>
      <Col :span="18" :push="6"><div class="col-block-primary">span-18 push-6</div></Col>
      <Col :span="6" :pull="18"><div class="col-block-primary">span-6 pull-18</div></Col>
    </Row>
  </div>
</template>
<script>
import { Row, Col } from "rayx-ui";
export default {
  components: {
    Row,
    Col,
  },
};
</script>
<style lang="scss">
@import "rayx-ui/packages/styles/var.scss";
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
    <Row flexMode>
      <Col :span="6"><div class="col-block-primary">span-6</div></Col>
      <Col :span="6"><div class="col-block-primary">span-6</div></Col>
    </Row>
    <p>justify-content: flex-end</p>
    <Row flexMode justify="end">
      <Col :span="6"><div class="col-block-primary">span-6</div></Col>
      <Col :span="6"><div class="col-block-primary">span-6</div></Col>
    </Row>
    <p>justify-content: center</p>
    <Row flexMode justify="center">
      <Col :span="6"><div class="col-block-primary">span-6</div></Col>
      <Col :span="6"><div class="col-block-primary">span-6</div></Col>
    </Row>
    <p>justify-content: space-around</p>
    <Row flexMode justify="space-around">
      <Col :span="6"><div class="col-block-primary">span-6</div></Col>
      <Col :span="6"><div class="col-block-primary">span-6</div></Col>
    </Row>
    <p>justify-content: space-between</p>
    <Row flexMode justify="space-between">
      <Col :span="6"><div class="col-block-primary">span-6</div></Col>
      <Col :span="6"><div class="col-block-primary">span-6</div></Col>
    </Row>
    <p>align-items: center</p>
    <Row flexMode align="middle">
      <Col :span="6"><div style="height: 70px" class="col-block-primary">span-6</div></Col>
      <Col :span="6"><div style="height: 100px" class="col-block-primary">span-6</div></Col>
      <Col :span="6"><div class="col-block-primary">span-6</div></Col>
    </Row>
    <p>align-items: flex-end</p>
    <Row flexMode align="bottom">
      <Col :span="6"><div style="height: 70px" class="col-block-primary">span-6</div></Col>
      <Col :span="6"><div style="height: 100px" class="col-block-primary">span-6</div></Col>
      <Col :span="6"><div class="col-block-primary">span-6</div></Col>
    </Row>
    <p>order 排序</p>
    <Row flexMode>
      <Col :span="6" order="3"><div class="col-block-primary">1 | order-3</div></Col>
      <Col :span="6" order="2"><div class="col-block-primary">2 | order-2</div></Col>
      <Col :span="6" order="1"><div class="col-block-primary">3 | order-1</div></Col>
    </Row>
  </div>
</template>
<script>
import { Row, Col } from "rayx-ui";
export default {
  components: {
    Row,
    Col,
  },
};
</script>
<style lang="scss">
@import "rayx-ui/packages/styles/var.scss";
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