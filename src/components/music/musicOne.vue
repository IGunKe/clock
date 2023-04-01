<template>
    <div class="musicOne">
        <div class="container">
            <div class="clock">
                <div
                    class="hour"
                    :style="{ transform: 'rotate(' + hourAngle + 'deg)' }"
                ></div>
                <div
                    class="minute"
                    :style="{ transform: 'rotate(' + minuteAngle + 'deg)' }"
                ></div>
                <div
                    class="second"
                    :style="{ transform: 'rotate(' + secondAngle + 'deg)' }"
                ></div>
                <div class="point"></div>
            </div>
            <div class="detail">
                <el-descriptions>
                    <el-descriptions-item label="Hour" align="center">{{
                        h_t
                    }}</el-descriptions-item>
                    <el-descriptions-item label="Minute" align='center'>{{
                        m_t
                    }}</el-descriptions-item>
                    <el-descriptions-item label="Seconds" align="center">{{
                        s_t
                    }}</el-descriptions-item>
                </el-descriptions>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup name="musicOne">
import { ref, computed, watch, reactive, Ref, onMounted } from 'vue';
import { s_t, h_t, m_t, getTime } from '@/api/renderAPI/time';
const hourAngle: Ref<number> = ref(0);
const minuteAngle: Ref<number> = ref(0);
const secondAngle: Ref<number> = ref(0);
getTime();
watch(
    h_t,
    () => {
        hourAngle.value = h_t.value * 30 + 180;
    },
    {
        immediate: true
    }
);
watch(
    m_t,
    () => {
        minuteAngle.value = m_t.value * 6 + 180;
    },
    {
        immediate: true
    }
);
watch(
    s_t,
    () => {
        secondAngle.value = s_t.value * 6 + 180;
    },
    {
        immediate: true
    }
);
</script>
<style lang="scss" scoped>
.musicOne {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.container {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    .detail {
        height: 10vh;
        width: 50vw;
        // background-color: red;
        .el-descriptions {
            background-color: transparent;
            & > :deep(.el-descriptions__body) {
                background-color: transparent;
            }
        }
    }
}

.clock {
    position: relative;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    // border: 2px solid #333;
    box-shadow: 5px 5px 5px
        linear-gradient(
            340deg,
            rgba(238, 174, 202, 1) 11%,
            rgba(15, 109, 219, 1) 100%
        );
    background-image: url('@/assets/clock03.png');
    background-size: cover;
    // object-fit: cover;
}

.hour {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 50px;
    border-radius: 3px;
    transform: translate(-50%, -100%);
    background-color: #333;
    transform-origin: top center;
}

.minute {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 80px;
    border-radius: 2px;
    transform: translate(-50%, -100%);
    background-color: #333;
    transform-origin: top center;
}
.second {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 100px;
    transform: translate(-50%, -100%);
    background-color: red;
    transform-origin: top center;
}
.point {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: aliceblue;
    transform: translate(-50%, -50%);
}
</style>
