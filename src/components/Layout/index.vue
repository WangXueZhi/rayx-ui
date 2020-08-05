<template>
  <div class="layout-app">
    <LayoutHeader :logo="logo" />
    <LayoutMenu />
    <LayoutWrapper>
      <router-view />
    </LayoutWrapper>
  </div>
</template>

<script>
import LayoutHeader from './LayoutHeader'
import LayoutWrapper from './LayoutWrapper'
import LayoutMenu from './LayoutMenu'
import './index.scss'

export default {
  name: 'Layout',
  components: {
    LayoutHeader,
    LayoutWrapper,
    LayoutMenu
  },
  props: {
    logo: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      
    }
  },
  methods: {

  },
  mounted () {
    
  }
}
</script>

<style lang="scss">

</style>
