import { ref, onMounted, Ref } from 'vue';
import dayjs from 'dayjs';
export const s_t: Ref<number> = ref(dayjs().second());
export const m_t: Ref<number> = ref(dayjs().minute());
export const h_t: Ref<number> = ref(dayjs().hour());
export const getTime = () => {
    onMounted(() => {
        setInterval(() => {
            s_t.value = dayjs().second();
            m_t.value = dayjs().minute();
            h_t.value = dayjs().hour();
        }, 1000);
    });
}
