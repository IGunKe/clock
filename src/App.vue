<template>
    <home-view />
</template>
<script lang="ts" setup name="App">
import homeView from './views/home/homeView.vue';
import { ref, onBeforeMount } from 'vue';
const colorStr = 'linear-gradient(202deg,rgba(34, 193, 195, 1) 0%,rgba(253, 187, 45, 1) 100%)';
const colorName = '--ipoke-bg-color';
onBeforeMount(() => {
    document.documentElement.style.setProperty(colorName, colorStr);
})
</script>
<style lang="scss"></style>
