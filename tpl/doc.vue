<template>
  <div class="ra-docs-wrapper">
    __DEMO_TEXT__
  </div>
</template>

<script>
__DEMO_IMPORT__

export default {
  name: "views.docs.components.__COMPNENT_NAME__",
  components: {
    __DEMO_COMPONENT_LIST__
  },
  data() {
    return {
      demoControlShowCode: []
    };
  },
  methods: {
    demoControlShowCodeTotgal(index) {
      if (this.demoControlShowCode[index]) {
        this.$set(this.demoControlShowCode[index], "show", !this.demoControlShowCode[index].show)
      } else {
        this.$set(this.demoControlShowCode, index, {
          show: true
        })
      }
    },
  },
};
</script>
