<template>
  <div class="home">
    <div class="home-base">
      <div class="ui-name-en">
        Component Producer For
        <span>Vue</span>
      </div>
      <div class="ui-name-cn">
        快速搭建vue组件库
        <br />开箱即用的组件库脚手架
      </div>
      <div class="ui-button">
        <Button colorType="primary" type="ghost" circle @click="componentDoc">组件文档</Button>
        <Button colorType="primary" type="ghost" circle @click="architectureDoc">架构说明</Button>
        <Button colorType="primary" type="ghost" circle @click="developmentDoc">组件开发</Button>
      </div>
    </div>
    <div class="home-markdown">
      <div class="home-markdown-title">快速开始开发组件</div>
      <vue-markdown>{{ start }}</vue-markdown>
    </div>
  </div>
</template>

<script>
import { Button } from "rayx-ui";
import VueMarkdown from "@/components/VueMarkdown";
import start from "./start.md";
export default {
  name: "views.index",
  components: {
    Button,
    VueMarkdown,
  },
  data() {
    return {
      start: start,
    };
  },
  methods: {
    componentDoc() {
      this.$router.push("/docs/start");
    },
    developmentDoc() {
      this.$router.push("/development/base");
    },
    architectureDoc() {
      this.$router.push("/architecture/base");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  .home-base {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    padding-top: 100px;

    .ui-name-en {
      font-size: 26px;
      font-weight: bolder;
      span {
        color: #4fc08d;
      }
    }

    .ui-name-cn {
      font-size: 20px;
      margin: 30px 0;
      line-height: 1.5;
      text-align: center;
    }

    .ui-button {
      margin-top: 20px;
      width: 300px;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
    }
  }

  .home-markdown{
    width: 500px;
    margin: 50px auto;
    padding-top: 1px;

    .home-markdown-title{
      font-size: 23px;
      text-align: center;
      
      margin: 20px 0;
    }
  }
}
</style>
