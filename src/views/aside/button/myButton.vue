<template>
    <div @click="toggleKey">
        <el-switch
            :model-value="switchColor"
            class="mt-2"
            style="margin-left: 24px"
            inline-prompt
            :active-icon="Check"
            :inactive-icon="Close"
            
        />
    </div>
</template>
<script setup lang="ts">
import { Check, Close } from '@element-plus/icons-vue';
import { ref, Ref, onMounted } from 'vue';
const switchColor: Ref<boolean> = ref(false);
const colorStr: string[] = [
    'linear-gradient(202deg,rgba(34, 193, 195, 1) 0%,rgba(253, 187, 45, 1) 100%)',
    'linear-gradient(340deg, rgba(238,174,202,1) 15%, rgba(15,109,219,1) 100%)'
];
const colorName: string = '--ipoke-bg-color';

const toggleKey = () => {
    if (switchColor.value) {
        document.documentElement.style.setProperty(colorName, colorStr[1]);
        switchColor.value = false;
    } else {
        document.documentElement.style.setProperty(colorName, colorStr[0]);
        switchColor.value = true;
    }
};
</script>
