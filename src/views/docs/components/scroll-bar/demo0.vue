<template>
  <ScrollBar wrapperClass="test-scroll-wrapper">
    <div class="test-scroll-item" v-for="(item, i) in data">{{item}}</div>
  </ScrollBar>
</template>
<script>
import { ScrollBar } from "mvui";
export default {
  components: {
    ScrollBar
  },
  data(){
    return {
      data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    }
  }
}
</script>
<style lang="scss">
  .test-scroll-wrapper{
    width: 240px;
    height: 200px;
    border: 1px solid #969696;

    .test-scroll-item{
      text-align: center;
    }
  }
</style>
