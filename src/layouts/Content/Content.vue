<template>
  <div class="content">
    <div class="main-content">
      <router-view />
    </div>
    <layout-side-bar />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import LayoutSideBar from '../SideBar/SideBar.vue'

  export default defineComponent({
    name: 'LayoutContent',
    components: {
      LayoutSideBar
    }
  })
</script>

<style lang="less" scoped>
  .content {
    display: flex;
    width: 1200px;
    margin: 0 auto;
    padding-top: 100px;

    .main-content {
      flex: 1;
    }
  }
</style>
