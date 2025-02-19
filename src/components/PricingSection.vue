<template>
  <section class="pricing-section">
    <h2>Special "Seat Deposit Only" Pricing Is Currently Avaliable</h2>
    <div class="pricing-content">
      <div class="pricing-info">
        <p>
          I've been told by my peers and past attendees that I should be
          charging $997 or more for this training, but today you can reserve
          your spot for a small seat deposit of only $49. Don't worry
          though...as long as you show up I'll completely refund your seat
          deposit, effectively making this thousand dollar training...FREE!
        </p>
        <CallToAction />
      </div>
      <div class="ticket-image">
        <img src="./assets/ticket.png" alt="Event Ticket" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CallToAction from "./CallToAction.vue";
</script>

<style scoped>
.pricing-section {
  padding: 3rem 2rem;
  margin: 2rem 0;
  background-color: #1e88e5;
  border-radius: 8px;
}

h2 {
  color: white;
  margin-bottom: 2rem;
  font-size: 2rem;
  text-align: center;
}

.pricing-content {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
}

.pricing-info {
  color: white;
}

.pricing-info p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.ticket-image img {
  width: 100%;
  max-width: 400px;
  transform: rotate(15deg);
}

@media (max-width: 768px) {
  .pricing-content {
    grid-template-columns: 1fr;
  }

  .ticket-image {
    display: none;
  }
}
</style>
