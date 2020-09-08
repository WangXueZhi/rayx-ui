<template>
  <div class="home">
    <div class="ui-name">rayx-ui</div>
    <!-- <div class="ui-button">
      <Button>组件文档</Button>
    </div>
    <GrModal>
      <template slot="content">content</template>
      <template slot="footer">footer</template>
    </GrModal> -->
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
    align-content: center;
    justify-self: center;
    flex-direction: column;
  }
</style>
