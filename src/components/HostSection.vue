<template>
  <section class="host-section">
    <h2>Meet Your Host - Cam Dunlap</h2>
    <div class="host-content">
      <div class="host-info">
        <p>
          Cam is a seasoned real estate investor with over 30 years of
          experience in the industry. He has not only made a fortune as a
          full-time investor, but has also excelled as a virtual investor in
          various markets for years.
        </p>
        <p>
          During this training, Cam will share his extensive knowledge and
          expertise with you. He will guide you step-by-step towards your first
          or next real estate profit check. Don't miss this opportunity to learn
          from a highly successful investor and take your own real estate
          journey to new the next level.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.host-section {
  padding: 2rem;
  margin: 2rem 0;
  color: #2f2f2f;
}

h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-size: 2rem;
  text-align: center;
  color: #2f2f2f;
}

/* .host-content {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
} */

.host-info p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: #2f2f2f;
}

.host-image {
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #2f2f2f;
}

@media (max-width: 768px) {
  .host-content {
    grid-template-columns: 1fr;
  }

  .host-image {
    margin: 0 auto;
  }
}
</style>
