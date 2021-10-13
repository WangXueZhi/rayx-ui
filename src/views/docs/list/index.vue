<template>
  <vue-markdown>{{ list }}</vue-markdown>
</template>

<script>
import VueMarkdown from '@/components/VueMarkdown'
import list from './list.md'
export default {
  name: 'views.docs.list',
  components: {
    VueMarkdown
  },
  data () {
    return {
      list: list
    }
  },
  computed: {},
  methods: {}
}
</script>
