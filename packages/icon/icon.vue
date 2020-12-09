<template>
  <svg
    class="r-icon"
    aria-hidden="true"
    :width="size"
    :height="size"
    :style="{ fontSize: size }"
  >
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>
<script>
export default {
  name: "rIcon",
  props: {
    /**
     * icon 名称
     */
    name: {
      type: String,
      default: ""
    },
    size: {
      type: Number,
      default: 16
    }
  },
  created() {
    window.R_ICON_FONT_COMPONENT.loadScript();
  }
};
</script>
