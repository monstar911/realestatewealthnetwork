<template>
  <div class="urgent-banner">
    <b class="urgent-text">URGENT:</b>
    {{ message }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message: string;
}>();
</script>

<style scoped>
.urgent-banner {
  color: white;
  padding: 35px 50px 10px 50px;
  text-align: center;
  font-weight: 700;
  font-size: 22px;
  font-style: italic;
}

.urgent-text {
  color: rgb(228, 59, 44);
  font-weight: 700;
  font-style: italic;
}
</style>
