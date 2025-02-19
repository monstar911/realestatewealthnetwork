<template>
  <section class="countdown-section">
    <div class="container">
      <h2 class="hurry-text">Hurry - This Event Will Sell Out Quickly!</h2>
      <div class="countdown-container">
        <div
          v-for="(value, unit) in timeLeft"
          :key="unit"
          class="countdown-item"
        >
          <span class="number">{{ value }}</span>
          <span class="label">{{ unit.toUpperCase() }}</span>
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
.countdown-section {
  text-align: center;
  width: 100%;
  margin: var(--section-margin, 2rem 0);
}

.hurry-text {
  color: var(--highlight-color, rgb(255, 277, 0));
  text-align: center;
  font-size: var(--heading-size, 34px);
  font-style: italic;
  line-height: normal;
  font-weight: 700;
  clear: both;
}

.countdown-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.countdown-item {
  color: var(--highlight-color, rgb(255, 277, 0));
  padding: 1rem;
  min-width: 80px;
}

.number {
  font-size: 3rem;
  font-weight: bold;
  display: block;
}

.label {
  color: var(--text-color, white);
  font-size: 0.8rem;
  opacity: 0.8;
}
</style>
