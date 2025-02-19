<template>
  <section class="cta-section">
    <button class="cta-button" @click="handleClick">
      I'm Ready To Become a Virtual Wholesaler!
      <div class="sub-text">
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

<style scoped>
.cta-section {
  text-align: center;
  /* margin: 2rem 0; */
}

.cta-button {
  background-color: rgb(48, 160, 92);
  color: white;
  /* border: none; */
  /* padding: 1.5rem 3rem; */
  font-size: 30px;
  font-weight: bold;
  /* border-radius: 8px; */
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #0085b2;
}

.sub-text {
  font-size: 24px;
  font-weight: normal;
  opacity: 0.7;
}
</style>
