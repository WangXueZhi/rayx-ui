<template>
  <!-- <i
    class="r-icon iconfont"
    :class="{
      [name]: !!name,
    }"
  ></i> -->
  <svg class="r-icon" aria-hidden="true">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>
<script>
export default {
  name: 'r-icon',
  props: {
    /**
     * icon 名称
     */
    name: {
      type: String,
      default: '',
    },
  }
}
</script>
