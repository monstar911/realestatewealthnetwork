<template>
  <section class="reviews-faq-section">
    <!-- FAQ Section -->
    <div class="mt-16 text-black">
      <h2>Frequently Asked Questions...</h2>
      <div class="max-w-[800px] mx-auto mb-8 text-black text-left">
        <div class="mb-8 text-black text-left">
          <h3 class="text-lg mb-2 text-left">
            Is the content of this training brand new?
          </h3>
          <p class="leading-relaxed text-left">
            Absolutely. This is a brand new event and unlike anything I've ever
            done before. The focus of the event is 100% designed to get you
            comfortable doing deals as a virtual wholesaler.
          </p>
        </div>

        <div class="mb-8 text-black text-left">
          <h3 class="text-lg mb-2 text-left">
            Will Cam actually be the one teaching?
          </h3>
          <p class="leading-relaxed text-left">
            YES. You're going to be spending 3 full days with me! I will have
            some members of my team helping out as well, but there are no
            outside speakers at all!
          </p>
        </div>

        <div class="mb-8 text-black text-left">
          <h3 class="text-lg mb-2 text-left">
            Will you be going through the software tools?
          </h3>
          <p class="leading-relaxed text-left">
            YES. We plan to do multiple LIVE software demo's and walkthroughs
            during the training.
          </p>
        </div>

        <div class="mb-8 text-black text-left">
          <h3 class="text-lg mb-2 text-left">Can Anyone Attend This Event?</h3>
          <p class="leading-relaxed text-left">
            YES. This training is appropriate for all levels of investors. If
            you have the desire to do more virtual wholesaling, then you're in
            the right place!
          </p>
        </div>

        <div class="mb-8 text-black text-left">
          <h3 class="text-lg mb-2 text-left">
            Can I Get A Refund If I Can't Attend?
          </h3>
          <p class="leading-relaxed text-left">
            Seat deposit refunds may be given up to 14 days prior to the event
            start date as we have limited space for this training. However,
            within 14 days we can transfer your seat deposit to a future event.
          </p>
        </div>

        <div class="mb-8 text-black text-left">
          <h3 class="text-lg mb-2 text-left">Any Other Questions?</h3>
          <p class="leading-relaxed text-left">
            Contact
            <a href="mailto:info@rewn.com" class="underline">info@rewn.com</a>
          </p>
        </div>
      </div>
      <CallToAction />
    </div>
  </section>
</template>

<script setup lang="ts">
import CallToAction from "./CallToAction.vue";
</script>

<style scoped>
@media (max-width: 768px) {
  .reviews-images {
    @apply flex-col items-center;
  }

  .reviews-images img {
    @apply max-w-full;
  }
}
</style>
