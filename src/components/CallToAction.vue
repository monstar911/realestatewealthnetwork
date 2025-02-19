<template>
  <section class="text-center">
    <button
      class="bg-[rgb(48,160,92)] text-white text-[30px] font-bold cursor-pointer transition-colors duration-300 hover:bg-[#0085b2] rounded-[2px]"
      @click="handleClick"
    >
      I'm Ready To Become a Virtual Wholesaler!
      <div class="text-[24px] font-normal opacity-70 mt-4">
        Secure Your Spot For This 3-Day Masterclass Now!
      </div>
    </button>
  </section>
</template>

<script setup lang="ts">
const handleClick = () => {
  // Implement registration logic
  console.log("Registration button clicked");
};
</script>
