<!-- type: 基础 -->

# Icon 图标

语义化的矢量图形

## 示例

```vue demo
<template>
  <div class="demo-wrapper">
    <Icon name="iconcanshupeizhi1" class="demo-icon" />
  </div>
</template>
<script>
import { Icon } from "rayx-ui";
export default {
  components: {
    Icon,
  },
};
</script>
<style>
.demo-icon {
  font-size: 25px;
}
</style>
```

## 所有图标

```vue run
<template>
  <div class="demo-wrapper">
    <div class="demo-wrapper-all-icons-search">
      <Input size="big" style="width: 500px" textAlign="center" placeholder="搜索图标，输入名称或描述" v-model="searchText" />
    </div>
    <Row v-for="(rowItem, index) in icons" :key="index" class="demo-icon-row">
      <Col
        v-for="item in rowItem"
        :key="item.name"
        :span="6"
        class="demo-icon-col"
      >
        <div>
          <div><Icon :name="item.name" class="demo-icon" /></div>
          <div>
            <div class="demo-icon-desc">{{ item.desc }}</div>
            <div class="demo-icon-name">{{ item.name }}</div>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
import { Icon, Row, Col, Input } from "rayx-ui";
const iconList = [
  { name: "iconyunhangmoni1", desc: "运行模拟" },
  { name: "iconpeizhidaochu1", desc: "配置导出" },
  { name: "iconzantingmoni1", desc: "暂停模拟" },
  { name: "iconhengduanmian1", desc: "横断面" },
  { name: "iconzongduanmian1", desc: "纵断面" },
  { name: "iconxiazai1", desc: "下载" },
  { name: "iconzidongshuaiding1", desc: "自动率定" },
  { name: "iconzidongshuaidingrizhi1", desc: "自动率定日志" },
  { name: "iconzidongshuaidingjieguo1", desc: "自动率定结果" },
  { name: "iconmonirizhi1", desc: "模拟日志" },
  { name: "iconmonijieguo1", desc: "模拟结果" },
  { name: "iconshoudongshuaiding1", desc: "手动率定" },
  { name: "iconcanshupeizhi1", desc: "参数配置" },
  { name: "iconshoudongshuaidingrizhi1", desc: "手动率定日志" },
  { name: "iconshoudongshuaidingjieguo1", desc: "手动率定结果" },
  { name: "iconshanchuhang", desc: "删除行" },
  { name: "iconshangtianjiahang", desc: "上添加行" },
  { name: "iconshanchulie", desc: "删除列" },
  { name: "iconzuotianjialie", desc: "左添加列" },
  { name: "iconyoutianjialie", desc: "右添加列" },
  { name: "iconxiatianjiahang", desc: "下添加行" },
  { name: "iconshanchu", desc: "删除" },
  { name: "icondaoru", desc: "导入" },
];
export default {
  components: {
    Icon,
    Row,
    Col,
    Input
  },
  computed: {
    icons(){
      const arr = []

      const filterList = this.searchText ? iconList.filter((item)=>{
        return item.name.includes(this.searchText) || item.desc.includes(this.searchText)
      }) : iconList

      for(let i=0; i<filterList.length; i++){
          const item = filterList[i]
          if(arr.length < 1){
              arr[0] = []
          }
          if(arr[arr.length-1].length < 4){
              arr[arr.length-1].push(item)
          } else {
              arr[arr.length] = [item]
          }
      }
      return arr
    }
  },
  data() {
    return {
      searchText: ''
    };
  },
};
</script>
<style lang="scss">
.demo-icon-col {
  text-align: center;
}
.r-row.demo-icon-row {
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0px;
  }
}
.demo-icon {
  font-size: 25px;
}
.demo-icon-desc {
  font-size: 12px;
  color: #8c8c8c;
  margin-top: 10px;
}
.demo-icon-name {
  font-size: 12px;
}
.demo-wrapper-all-icons-search{
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
</style>
```

<!-- props -->
