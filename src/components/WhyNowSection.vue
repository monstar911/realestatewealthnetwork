<template>
  <section class="why-now-section">
    <h2>WHY Now?</h2>
    <div class="content">
      <p>
        Our economy is in a very interesting place. The FED has started lowering
        rates (for now), for the first time in a long time optimism is high (and
        getting higher by the day) and many of the key performance indicators we
        track are showing improvement.
      </p>
      <p>
        The reality is, our economy is changing and those that are prepared for
        that change and have the right systems and processes in place will be
        the ones who WIN.
      </p>
      <p>
        There is a tidal wave of opportunity approaching and this is good for
        real estate investors like us because more people than ever still need
        to sell their houses quickly. I'll show you how to capitalize on this
        economy using unlimited access to recession-proof, inflation-proof, and
        interest rate-proof funding for your deals.
      </p>
      <p>
        We might be looking at one of the best times ever to be involved in real
        estate.
      </p>
    </div>
    <CallToAction />
  </section>
</template>

<script setup lang="ts">
import CallToAction from "./CallToAction.vue";
</script>

<style scoped>
.why-now-section {
  padding: 2rem;
  margin: 2rem 0;
  color: #2f2f2f;
  text-align: left;
}

h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: #2f2f2f;
  text-align: left;
}

.content {
  max-width: 1280px;
  margin: 0 auto;
}

p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}
</style>
