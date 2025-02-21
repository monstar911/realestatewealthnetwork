<template>
  <section class="text-center mt-8">
    <button
      :style="{
        backgroundColor: hoverColor,
        fontSize: titleFontSize,
      }"
      class="bg-[hsl(144,54%,41%)] text-white font-bold px-[32px] py-[10px] cursor-pointer transition-colors duration-300 rounded-[3px]"
      :class="
        hoverColor == 'true' ? 'hover:bg-[#0085b2]' : 'hover:bg-[#44A96C]'
      "
      @click="handleClick"
    >
      I'm Ready To Become a Virtual Wholesaler!
      <div
        class="font-normal opacity-70"
        :style="{ fontSize: contentFontSize }"
      >
        Secure Your Spot For This 3-Day Masterclass Now!
      </div>
    </button>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const handleClick = () => {
  // Implement registration logic
  console.log("Registration button clicked");
};

defineProps<{
  titleFontSize: string;
  contentFontSize: string;
  hoverColor?: string;
}>();
</script>
