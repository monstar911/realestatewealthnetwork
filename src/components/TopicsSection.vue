<template>
  <section class="p-8 my-8">
    <div class="flex flex-col gap-16">
      <!-- Live Calling Topic -->
      <div
        class="grid grid-cols-2 gap-8 items-center max-w-7xl mx-auto md:grid-cols-1"
      >
        <div class="[direction:ltr]">
          <h3 class="text-primary text-3xl mb-6 md:text-2xl">
            Live Seller Calling Session
          </h3>
          <p class="mb-6 leading-relaxed">
            Cold calling seems scary...but not the way we do it. Watch as we
            dial sellers and make money in real-time.
          </p>
          <p class="mb-6 leading-relaxed">
            In this session you will see and hear LIVE conversations and learn
            from our experts as they show you how to talk effectively with
            sellers. This hands-on experience will help you feel more confident
            in your own seller discussions. Your anxiety about picking up the
            phone and talking with prospects will melt away after this.
          </p>
          <CallToAction
            buttonText="Secure Your Spot For This 3-Day Masterclass Now!"
          />
        </div>
        <!-- <div class="text-center">
          <img src="./assets/caller.jpg" alt="Live Caller" class="w-full rounded-lg shadow-md" />
        </div> -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CallToAction from "./CallToAction.vue";
</script>

<style scoped>
/* Removed traditional CSS in favor of Tailwind classes */
</style>
