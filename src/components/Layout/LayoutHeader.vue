<template>
  <header class="layout-header">
    <div class="layout-header-left">
      <div class="layout-header-logo">
        <img :src="logo" />
        mvui
      </div>
    </div>
    <div class="layout-header-right">

    </div>
  </header>
</template>

<script>

export default {
  name: 'LayoutHeader',
  data () {
    return {

    }
  },
  props: {
    logo: {
      type: String,
      default: ''
    }
  },
  components: {
  },
  methods: {

  }
}
</script>
