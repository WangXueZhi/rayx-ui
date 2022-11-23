<!-- type: 通用 -->

# VirtualList 虚拟列表

用于实现高性能的长列表

## 示例

基础

```vue demo
<template>
  <div class="demo-wrapper">
    <r-virtual-list :data="data" :itemHeight="26">
      <template #option="{optionData}">
        <div class="option-data-item">{{optionData}}</div>
      </template>
    </r-virtual-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: []
    }
  },
  mounted(){
    const arr = []
    const max = 9999
    let index = 0
    while(index<=max){
      arr.push(index++)
    }
    this.data = arr
  }
}
</script>
<style lang="less">
  .option-data-item{
    background: #b4bccc;
    border-bottom: 1px solid #fff;
    padding: 5px 0;
    text-align: center;
  }
</style>
```

带checkbox

```vue demo
<template>
  <div class="demo-wrapper">
    <r-virtual-list :data="data" :itemHeight="26">
      <template #option="{optionData}">
        <div class="option-data-item2">
          <Checkbox v-model="optionData.checked">{{optionData.label}}</Checkbox>
        </div>
      </template>
    </r-virtual-list>
  </div>
</template>
<script>
import { Checkbox } from 'element-ui'
export default {
  components: {Checkbox},
  data() {
    return {
      data: []
    }
  },
  mounted(){
    const arr = []
    const max = 9999
    let index = 0
    while(index<=max){
      arr.push({
        label: index,
        key: index,
        checked: false
      })
      index++
    }
    this.data = arr
  }
}
</script>
<style lang="less">
  .option-data-item2{
    border-bottom: 1px solid #fff;
    padding: 5px 0;
    text-align: center;
  }
</style>
```

<!-- props -->
<!-- events -->
