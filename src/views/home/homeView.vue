<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <headerVue />
      </el-header>
      <el-container>
        <!-- <el-aside width="200px">Aside</el-aside> -->
        <el-aside width="20vw">
          <asideVue />
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup name="homeView">
import headerVue from "@/views/header/headerView.vue";
import asideVue from "@/views/aside/asideView.vue";
</script>
<style lang="scss" scoped>
.common-layout {
  width: 100vw;
  height: 100vh;
  -webkit-app-region: no-drag;
  background-color: hsla(0,0,100%, 0.5);
  .el-header {
    height: 6vh;
    --el-header-padding: 0;
  }
  .el-aside {
    height: 94vh;
  }
  .el-main {
    width: 80vw;
    height: 94vh;
  }
}
</style>
