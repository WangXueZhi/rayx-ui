<template>
  <vue-markdown>{{ base }}</vue-markdown>
</template>

<script>
import VueMarkdown from "@/components/VueMarkdown";
import base from "./base.md";
export default {
  name: "views.architecture.base",
  components: {
    VueMarkdown,
  },
  data () {
    return {
      base: base
    }
  },
  computed: {},
  methods: {},
};
</script>
