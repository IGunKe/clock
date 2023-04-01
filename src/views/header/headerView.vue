<template>
  <el-row justify="end" align="middle" :gutter="14">
    <el-col :span="0.5" @click="minwin">
      <el-card shadow="hover" class="minwin">
        <el-icon><Minus /></el-icon>
      </el-card>
    </el-col>
    <el-col :span="0.5" @click="maxwin">
      <el-card shadow="hover" class="maxwin">
        <el-icon><CopyDocument /></el-icon>
      </el-card>
    </el-col>
    <el-col :span="0.5" @click="closewin">
      <el-card shadow="hover" class="closewin">
        <el-icon><Close /></el-icon>
      </el-card>
    </el-col>
  </el-row>
</template>
<script lang="ts" setup name="headerView">
import {minwin, maxwin, closewin} from '@/api/renderer.controller';
</script>
<style lang="scss" scoped>
.el-row {
  width: 100%;
  height: 100%;
  -webkit-app-region: drag;
  .el-card {
    border: 0;
    background-color: transparent;
    -webkit-app-region: no-drag;
  }
  :deep(.el-card__body) {
    padding: 0;
  }
  .closewin:hover {
    background-color: red;
    color: aliceblue;
  }
}
</style>
