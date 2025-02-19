<template>
  <div
    class="text-white py-[35px] px-[50px] pb-[10px] text-center font-bold text-[22px] italic"
  >
    <b class="text-[rgb(228,59,44)] font-bold italic">URGENT:</b>
    {{ message }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message: string;
}>();
</script>
