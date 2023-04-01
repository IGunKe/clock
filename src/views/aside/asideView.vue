<!--
 * @Author: 向德剑
 * @Date: 2023-03-22 15:18:27
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-31 19:42:51
 * @FilePath: \clock\src\views\aside\asideView.vue
-->
<template>
    <el-row>
        <el-col :span="24">
            <!-- <el-aside>aside</el-aside> -->
            <!-- header -->
            <el-menu default-active="2" class="el-menu-vertical-demo" router>
                <el-menu-item index="01">
                    <el-avatar
                        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    />
                    <div class="my-btn">
                        <myButton />
                    </div>
                </el-menu-item>
                <el-menu-item index="02">
                    <span>导航三</span>
                </el-menu-item>
                <el-menu-item index="03">
                    <span>导航四</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>
<script lang="ts" setup name="asideView">
// import useClock from '@/components/clock/useClock.vue';
import myButton from '@/views/aside/button/myButton.vue';
</script>

<style lang="scss" scoped>
.el-row {
    height: 100%;
    box-sizing: border-box;
    -webkit-app-region: no-drag;
}
.el-menu {
    height: 100%;
    background-color: transparent;
    border: 0;
}
</style>
