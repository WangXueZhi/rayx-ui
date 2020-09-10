<template>
  <div class="home">
    <div class="ui-name-en">Component Producer For <span>Vue</span></div>
    <div class="ui-name-cn">快速搭建文档<br />一套基于Vue的组件库脚手架</div>
    <div class="ui-button">
      <Button type="ghost" circle disabled>架构</Button>
      <Button type="ghost" circle disabled>组件开发规范</Button>
      <Button colorType="primary" type="ghost" circle @click="componentDoc">组件文档</Button>
    </div>
  </div>
</template>

<script>
// import nvui from 'rayx-ui'
// console.log(nvui)
import { GrModal, Button } from "rayx-ui";
export default {
  name: 'views.index',
  components: {
    GrModal,
    Button
  },
  methods: {
    componentDoc(){
      this.$router.push('/docs/start');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .home{
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .ui-name-en{
      font-size: 26px;
      span{
        color: #4fc08d;
      }
    }

    .ui-name-cn{
      font-size: 20px;
      margin-top: 10px;
      line-height: 1.5;
      text-align: center;
    }

    .ui-button{
      margin-top: 20px;
      width: 300px;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
