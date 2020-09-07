<template>
  <vue-markdown>{{ start }}</vue-markdown>
</template>

<script>
import VueMarkdown from "@/components/VueMarkdown";
import start from "./start.md";
export default {
  name: "views.docs.start",
  components: {
    VueMarkdown,
  },
  data () {
    return {
      start: start
    }
  },
  computed: {},
  methods: {},
};
</script>
