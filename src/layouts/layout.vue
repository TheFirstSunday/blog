<template>
  <layout-header />
  <layout-content />
  <layout-footer />
  <!-- 回到顶部 -->
  <back-top />
</template>

<script lang="ts">
  import BackTop from '@/components/BackTop.vue'
  import LayoutContent from './Content/Content.vue'
  import LayoutHeader from './Header/Header.vue'
  import LayoutFooter from './Footer/Footer.vue'

  export default {
    name: 'Layout',
    components: {
      BackTop,
      LayoutContent,
      LayoutHeader,
      LayoutFooter
    }
  }
</script>

<style lang="less" scoped></style>
