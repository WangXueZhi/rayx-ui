<template>
  <div>
    <Button @click="openModal">打开对话框</Button>
    <GrModal w="200" v-if="show" @on-visible-change="modalChange">
      <template slot="content">content</template>
    </GrModal>
  </div>
</template>
<script>
  import { GrModal, Button } from "rayx-ui";
  export default {
    components: {
      Button,
      GrModal,
    },
    data() {
      return {
        show: false,
      };
    },
    methods: {
      openModal() {
        this.show = true;
      },
      modalChange(isShow) {
        this.show = isShow;
      },
    },
  };
</script>
