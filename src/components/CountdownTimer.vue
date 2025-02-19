<template>
  <section class="countdown-section">
    <h2 class="hurry-text">Hurry - This Event Will Sell Out Quickly!</h2>
    <div class="countdown-container">
      <div class="countdown-item">
        <span class="number">{{ timeLeft.days }}</span>
        <span class="label">DAYS</span>
      </div>
      <div class="countdown-item">
        <span class="number">{{ timeLeft.hours }}</span>
        <span class="label">HOURS</span>
      </div>
      <div class="countdown-item">
        <span class="number">{{ timeLeft.minutes }}</span>
        <span class="label">MINUTES</span>
      </div>
      <div class="countdown-item">
        <span class="number">{{ timeLeft.seconds }}</span>
        <span class="label">SECONDS</span>
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
  const difference = props.deadline.getTime() - new Date().getTime();

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
  /* margin: 2rem 0; */
}

.hurry-text {
  color: #ffd700;
  /* margin-bottom: 1rem; */

  text-align: center;
  font-size: 34px;
  font-style: italic;
  line-height: normal;
  color: rgb(255, 277, 0);
  clear: both;
  /* padding-top: 25px; */
  font-weight: 700;
}

.countdown-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.countdown-item {
  color: #ffd700;
  color: rgb(255, 277, 0);
  /* background-color: rgba(0, 0, 0, 0.3); */
  padding: 1rem;
  /* border-radius: 8px; */
  min-width: 80px;
}

.number {
  font-size: 3rem;

  font-weight: bold;
  display: block;
}

.label {
  color: white;
  font-size: 0.8rem;
  opacity: 0.8;
}
</style>
