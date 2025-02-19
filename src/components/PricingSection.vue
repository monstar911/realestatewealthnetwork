<template>
  <section class="p-8 my-8 bg-blue-500 rounded-lg">
    <h2 class="text-white mb-8 text-4xl text-center">
      Special "Seat Deposit Only" Pricing Is Currently Avaliable
    </h2>
    <div
      class="max-w-[1000px] mx-auto grid grid-cols-2 gap-8 items-center md:grid-cols-1"
    >
      <div class="text-white">
        <p class="text-xl leading-relaxed mb-8">
          I've been told by my peers and past attendees that I should be
          charging $997 or more for this training, but today you can reserve
          your spot for a small seat deposit of only $49. Don't worry
          though...as long as you show up I'll completely refund your seat
          deposit, effectively making this thousand dollar training...FREE!
        </p>
        <CallToAction />
      </div>
      <div class="md:hidden">
        <img
          src="./assets/ticket.png"
          alt="Event Ticket"
          class="w-full max-w-[400px] rotate-15"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CallToAction from "./CallToAction.vue";
</script>
