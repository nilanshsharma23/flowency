<script setup lang="ts">
import { useStopwatch } from 'vue-timer-hook';
import { formatSecondsFromStopwatch, formatSecondsFromTotalSeconds } from '../helpers/formatSeconds';
import { ref } from 'vue';
import { useCountdown } from '@vueuse/core';
import { getBreakTime } from '../helpers/getBreakTime';
import { getTotalMinutes } from '../helpers/getTotalMinutes';

const stopwatch = useStopwatch(0, false);

const focusing = ref(false);
const headerText = ref("Start Focusing!!!!");

const { start, reset, remaining, } = useCountdown(0, {
    onComplete() {
        reset();
        focusing.value = true;
        headerText.value = "Focusing...";
        stopwatch.reset();
        stopwatch.start();
    },
})

const onButtonClicked = () => {
    if (focusing.value) {
        stopwatch.pause();
        start(getBreakTime(getTotalMinutes(stopwatch)) * 60);
        focusing.value = false;
        headerText.value = "Break Time!";
    } else {
        focusing.value = true;
        headerText.value = "Focusing...";
        stopwatch.reset();
        stopwatch.start();
    }
}
</script>

<template>
    <div class="w-64 h-full fixed bg-gray-200"></div>
    <div class="w-screen h-screen flex flex-col">
        <div class="w-full text-center py-4 text-2xl">{{ headerText }}</div>
        <div class="w-full h-full flex items-center justify-center">
            <button class="w-64 h-64 rounded-full border cursor-pointer" v-on:click="onButtonClicked()">
                <div v-if="focusing">
                    {{ formatSecondsFromStopwatch(stopwatch) }}
                </div>
                <div v-else>
                    {{ formatSecondsFromTotalSeconds(remaining) }}
                </div>
            </button>
        </div>
    </div>
</template>