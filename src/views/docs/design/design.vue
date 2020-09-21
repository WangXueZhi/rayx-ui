<template>
  <vue-markdown>{{ design }}</vue-markdown>
</template>

<script>
import VueMarkdown from "@/components/VueMarkdown";
import design from "./design.md";
export default {
  name: "views.docs.design",
  components: {
    VueMarkdown,
  },
  data () {
    return {
      design: design
    }
  },
  computed: {},
  methods: {},
};
</script>
