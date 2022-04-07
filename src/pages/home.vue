<template>
  <a-layout class="vvt-layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" @click="menuClick">
        <a-menu-item key="1">
          <home-outlined />
          <span>首页</span>
        </a-menu-item>
        <a-menu-item key="2">
          <setting-outlined />
          <span>系统管理</span>
        </a-menu-item>
        <a-menu-item key="3">
          <heart-outlined />
          <span>关于软件</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px'
        }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import { HomeOutlined, SettingOutlined, HeartOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue"

const selectedKeys = ref<string[]>(["1"])
const collapsed = ref<boolean>(false)

const menuClick = (e: any) => {
  console.log(e.key)
}
</script>

<style lang="less" scoped>
.vvt-layout {
  height: 100%;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  .trigger:hover {
    color: #1890ff;
  }
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
  }
  .site-layout-background {
    background: #000;
  }
}
</style>
