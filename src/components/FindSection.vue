<template>
  <section class="automation-section">
    <div class="automation-content">
      <div class="automation-content reverse">
        <div class="content-text">
          <h2>Find The BEST Sellers & Hungry Buyers In Every Market...</h2>
          <p>
            We'll show you how to use our proprietary software to effortlessly
            find ultra motivated sellers in any market. This tool will allow you
            to fire off marketing, find and contact sellers WITH motivation, and
            reach out and connect with them....before your competition!
          </p>
          <p>
            We'll also dig deep into finding hungry investor buyers in every
            market. The ones currently buying deals where you're doing business!
            Which means you'll never struggle to sell a deal again.
          </p>
          <CallToAction />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CallToAction from "./CallToAction.vue";
</script>

<style scoped>
.automation-section {
  padding: 2rem;
  margin: 2rem 0;
}

.automation-content {
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  gap: 3rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto 4rem;
}

.automation-content.reverse {
  direction: rtl;
}

.content-text {
  direction: ltr;
}

h2 {
  color: var(--primary-color);
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.content-text p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.content-image img {
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* @media (max-width: 768px) {
  .automation-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    direction: ltr;
  }

  .automation-content.reverse {
    direction: ltr;
  }

  .content-image {
    order: -1;
  }

  h2 {
    font-size: 1.8rem;
  }
} */
</style>
