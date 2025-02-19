<template>
  <section class="w-full text-center my-8">
    <div class="container">
      <h2
        class="text-[var(--highlight-color,rgb(255,277,0))] text-[34px] text-center italic font-bold leading-normal clear-both"
      >
        Hurry - This Event Will Sell Out Quickly!
      </h2>
      <div class="flex justify-center gap-4">
        <div
          v-for="(value, unit) in timeLeft"
          :key="unit"
          class="text-[var(--highlight-color,rgb(255,277,0))] p-4 min-w-[80px]"
        >
          <span class="text-5xl font-bold block">{{ value }}</span>
          <span class="text-[var(--text-color,white)] text-sm opacity-80">{{
            unit.toUpperCase()
          }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const props = defineProps<{
  deadline: Date;
}>();

const timeLeft = ref<TimeLeft>({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

const calculateTimeLeft = () => {
  const difference = props.deadline.getTime() - Date.now();

  if (difference > 0) {
    timeLeft.value = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
};

let timer: number;

onMounted(() => {
  calculateTimeLeft();
  timer = setInterval(calculateTimeLeft, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style scoped>
/* Converted to Tailwind classes */
</style>
