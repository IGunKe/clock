<template>
    <div>{{ s_t }}</div>
</template>
<script lang="ts" setup name="useClock">
import {getTime, s_t} from '@/api/renderAPI/time';
getTime();
</script>
<style lang="scss" scoped></style>
