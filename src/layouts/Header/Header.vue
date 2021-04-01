<template>
  <div class="header">
    <div class="header-content">
      <el-menu
        :default-active="activeIndex"
        class="nav-menu"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item v-for="item in menuList" :key="item.routeName" :index="item.routeName">
          <div class="menu-item">
            <i :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </div>
        </el-menu-item>
      </el-menu>

      <div class="btn-group">
        <el-button type="primary" size="medium">登 录</el-button>
        <el-button type="success" size="medium" style="margin-left: 40px">注 册 </el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { useRouter } from 'vue-router'

  export default defineComponent({
    name: 'LayoutHeader',
    setup() {
      const router = useRouter()

      const handleSelect = (index) => {
        if (index === 'article') {
          router.push({ path: '/' })
        } else if (index === 'archive') {
          router.push({ path: '/archive' })
        } else if (index === 'project') {
          router.push({ path: '/project' })
        } else if (index === 'message') {
          router.push({ path: '/message' })
        }
      }

      return {
        handleSelect
      }
    },
    data() {
      return {
        activeIndex: 'article',
        menuList: [
          {
            name: '文章',
            routeName: 'article',
            icon: 'el-icon-document'
          },
          {
            name: '归档',
            routeName: 'archive',
            icon: 'el-icon-takeaway-box'
          },
          {
            name: '项目',
            routeName: 'project',
            icon: 'el-icon-tickets'
          },
          {
            name: '留言',
            routeName: 'message',
            icon: 'el-icon-edit-outline'
          }
        ]
      }
    }
  })
</script>

<style lang="less" scoped>
  .header {
    position: fixed;
    z-index: 1;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid rgb(238, 238, 238);

    &-content {
      display: flex;
      justify-content: space-between;
      width: 1200px;
      margin: 0 auto;
    }

    .btn-group {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
