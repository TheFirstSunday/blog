<template>
  <header>Header</header>
  <router-view />
  <footer>footer</footer>
  <!-- 回到顶部 -->
  <back-top />
</template>

<script lang="ts">
  import BackTop from '@/components/BackTop.vue'

  export default {
    name: 'Layout',
    components: {
      BackTop
    }
  }
</script>

<style lang="less" scoped></style>
