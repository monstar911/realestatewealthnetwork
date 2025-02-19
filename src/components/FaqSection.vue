<template>
  <section class="reviews-faq-section">
    <!-- FAQ Section -->
    <div class="faq-section">
      <h2>Frequently Asked Questions...</h2>
      <div class="faq-list">
        <div class="faq-item">
          <h3>Is the content of this training brand new?</h3>
          <p>
            Absolutely. This is a brand new event and unlike anything I've ever
            done before. The focus of the event is 100% designed to get you
            comfortable doing deals as a virtual wholesaler.
          </p>
        </div>

        <div class="faq-item">
          <h3>Will Cam actually be the one teaching?</h3>
          <p>
            YES. You're going to be spending 3 full days with me! I will have
            some members of my team helping out as well, but there are no
            outside speakers at all!
          </p>
        </div>

        <div class="faq-item">
          <h3>Will you be going through the software tools?</h3>
          <p>
            YES. We plan to do multiple LIVE software demo's and walkthroughs
            during the training.
          </p>
        </div>

        <div class="faq-item">
          <h3>Can Anyone Attend This Event?</h3>
          <p>
            YES. This training is appropriate for all levels of investors. If
            you have the desire to do more virtual wholesaling, then you're in
            the right place!
          </p>
        </div>

        <div class="faq-item">
          <h3>Can I Get A Refund If I Can't Attend?</h3>
          <p>
            Seat deposit refunds may be given up to 14 days prior to the event
            start date as we have limited space for this training. However,
            within 14 days we can transfer your seat deposit to a future event.
          </p>
        </div>

        <div class="faq-item">
          <h3>Any Other Questions?</h3>
          <p>Contact <a href="mailto:info@rewn.com">info@rewn.com</a></p>
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
.faq-section {
  margin-top: 4rem;
  color: black;
}

.faq-list {
  max-width: 800px;
  margin: 0 auto 2rem;
  color: black;
  text-align: left;
}

.faq-item {
  margin-bottom: 2rem;
  color: black;
  text-align: left;
}

.faq-item h3 {
  /* color: white; */
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-align: left;
}

.faq-item p {
  /* color: rgba(255, 255, 255, 0.9); */
  line-height: 1.6;
  text-align: left;
}

.faq-item a {
  /* color: white; */
  text-decoration: underline;
  text-align: left;
}

@media (max-width: 768px) {
  .reviews-images {
    flex-direction: column;
    align-items: center;
  }

  .reviews-images img {
    max-width: 100%;
  }

  h2 {
    font-size: 2rem;
  }
}
</style>
