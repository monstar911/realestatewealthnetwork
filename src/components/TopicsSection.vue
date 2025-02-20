<template>
  <section class="p-8 text-[#2f2f2f] text-left text-3xl">
    <div class="py-5 m-0 outline-none">
      <div class="col-md-6 innerContent col_left ui-resizable">
        <div class="px-[10px]">
          <div class="mt-0 outline-none cursor-pointer">
            <h1 class="text-left text-3xl">
              <b>Live Seller Calling Session</b>
            </h1>
          </div>
          <div
            class="mt-[15px] outline-none cursor-pointer font-['Open_Sans',Helvetica,sans-serif]"
          >
            <h2 class="text-left text-xl">
              <p class="mb-6 leading-relaxed">
                Cold calling seems scary...but not the way we do it. Watch as we
                dial sellers and make money in real-time.
              </p>
              <p class="mb-6 leading-relaxed">
                In this session you will see and hear LIVE conversations and
                learn from our experts as they show you how to talk effectively
                with sellers. This hands-on experience will help you feel more
                confident in your own seller discussions. Your anxiety about
                picking up the phone and talking with prospects will melt away
                after this.
              </p>
            </h2>
            <CallToAction
              buttonText="Secure Your Spot For This 3-Day Masterclass Now!"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CallToAction from "./CallToAction.vue";
</script>
