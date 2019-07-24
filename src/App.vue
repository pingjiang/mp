<template>
<el-container id="app" class="flex flex-vertical">
  <el-header class="header flex flex-middle root-container">
    <a class="logo" href="/">媒体发布平台</a>
    <div class="flex-fill"></div>
    <el-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
  </el-header>

  <el-container class="flex-fill root-container">
    <el-aside class="main-aside" width="200px">
      <el-menu class="panel" default-active="home" @select="handleSelect">
        <el-menu-item index="home">首页</el-menu-item>
        <el-menu-item index="mp/post">发文章</el-menu-item>
        <el-menu-item index="mp/list">内容管理</el-menu-item>
        <el-menu-item index="mp/media">素材管理</el-menu-item>
        <el-menu-item index="about">关于</el-menu-item>
      </el-menu>
    </el-aside>
    <el-main class="main-content">
      <router-view/>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  methods: {
    handleSelect(key) {
      this.$router.push({ name: key });
    },
  },
};
</script>
