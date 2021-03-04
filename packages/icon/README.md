<!-- type: 基础 -->

# Icon 图标

语义化的矢量图形

## 示例

svg 模式，支持多色，不支持颜色修改

```vue demo
<template>
  <div class="demo-wrapper">
    <r-icon name="icon-email" class="demo-icon" />
  </div>
</template>
<style>
.demo-icon {
  font-size: 25px;
}
</style>
```

font-class 模式，支持样式自定义颜色

```vue demo
<template>
  <div class="demo-wrapper">
    <r-icon name="icon-email" class="demo-icon" mode="font-class" />
  </div>
</template>
<style>
.demo-icon {
  font-size: 25px;
  color: red;
}
</style>
```

## 所有图标

```vue demo hidecode
<template>
  <div class="demo-wrapper">
    <div class="demo-wrapper-all-icons-search">
      <r-input
        size="big"
        style="width: 500px"
        textAlign="center"
        placeholder="搜索图标，输入名称或描述"
        v-model="searchText"
      />
    </div>
    <r-row v-for="(rowItem, index) in icons" :key="index" class="demo-icon-row">
      <r-col
        v-for="item in rowItem"
        :key="item.name"
        :span="6"
        class="demo-icon-col"
      >
        <div>
          <div><r-icon :name="item.name" class="demo-icon" /></div>
          <div>
            <div class="demo-icon-desc">{{ item.desc }}</div>
            <div class="demo-icon-name">{{ item.name }}</div>
          </div>
        </div>
      </r-col>
    </r-row>
  </div>
</template>
<script>
const iconList = [
  { name: "icon-email", desc: "email" },
  { name: "icon-copy", desc: "copy" },
  { name: "icon-user", desc: "user" },
  { name: "icon-international", desc: "international" },
  { name: "icon-refresh", desc: "refresh" },
  { name: "icon-close_filled", desc: "close_filled" },
  { name: "icon-check", desc: "check" },
  { name: "icon-close", desc: "close" },
  { name: "icon-check_filled", desc: "check_filled" },
  { name: "icon-info_filled", desc: "info_filled" },
  { name: "icon-info", desc: "info" },
  { name: "icon-help_filled", desc: "help_filled" },
  { name: "iconicon-test34", desc: "help" },
  { name: "iconicon-test35", desc: "caution" },
  { name: "iconicon-test36", desc: "caution_filled" },
  { name: "iconicon-test37", desc: "star" },
  { name: "iconicon-test38", desc: "star_filled" },
  { name: "iconicon-test39", desc: "arrow_up" },
  { name: "iconicon-test40", desc: "arrow_left" },
  { name: "iconicon-test41", desc: "arrow_down" },
  { name: "iconicon-test42", desc: "arrow_right" },
  { name: "iconicon-test43", desc: "page_turning_left" },
  { name: "iconicon-test44", desc: "page_turning_right" },
  { name: "iconicon-test45", desc: "show_less" },
  { name: "iconicon-test46", desc: "show_more" },
  { name: "iconicon-test47", desc: "social_fb" },
  { name: "iconicon-test48", desc: "social_linkedin" },
  { name: "iconicon-test49", desc: "social_sina" },
  { name: "iconicon-test50", desc: "social_google" },
  { name: "iconicon-test51", desc: "social_github" },
  { name: "iconicon-test52", desc: "social_twitter" },
  { name: "iconicon-test53", desc: "applets" },
  { name: "iconicon-test54", desc: "social_wechat" },
  { name: "iconicon-test55", desc: "go-to-link" },
  { name: "iconicon-test56", desc: "benefits" },
  { name: "icondingtalk", desc: "dingtalk" },
  { name: "iconalipay", desc: "alipay" },
  { name: "icontaobao", desc: "taobao" },
  { name: "iconicon-test57", desc: "1688" },
  { name: "iconicon-test", desc: "view" },
  { name: "iconicon-test1", desc: "view_off" },
  { name: "iconicon-test2", desc: "message" },
  { name: "iconicon-test3", desc: "message_unread" },
  { name: "iconicon-test4", desc: "order" },
  { name: "iconicon-test5", desc: "cart_empty" },
  { name: "iconicon-test6", desc: "cart" },
  { name: "iconicon-test7", desc: "search" },
  { name: "iconicon-test8", desc: "edit" },
  { name: "iconicon-test9", desc: "link" },
  { name: "iconicon-test10", desc: "share" },
  { name: "iconicon-test11", desc: "setting" },
  { name: "iconicon-test12", desc: "upload" },
  { name: "iconicon-test13", desc: "download" },
  { name: "iconicon-test14", desc: "play" },
  { name: "iconicon-test15", desc: "region" },
  { name: "iconicon-test16", desc: "lock" },
  { name: "iconicon-test17", desc: "unlock" },
  { name: "iconicon-test18", desc: "flow" },
  { name: "iconicon-test19", desc: "filter" },
  { name: "iconicon-test20", desc: "calculator" },
  { name: "iconicon-test21", desc: "image" },
];
export default {
  computed: {
    icons() {
      const arr = [];

      const filterList = this.searchText
        ? iconList.filter((item) => {
            return (
              item.name.includes(this.searchText) ||
              item.desc.includes(this.searchText)
            );
          })
        : iconList;

      for (let i = 0; i < filterList.length; i++) {
        const item = filterList[i];
        if (arr.length < 1) {
          arr[0] = [];
        }
        if (arr[arr.length - 1].length < 4) {
          arr[arr.length - 1].push(item);
        } else {
          arr[arr.length] = [item];
        }
      }
      return arr;
    },
  },
  data() {
    return {
      searchText: "",
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
.demo-wrapper-all-icons-search {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
</style>
```

<!-- props -->
