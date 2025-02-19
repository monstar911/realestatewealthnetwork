<template>
  <section class="reviews-faq-section">
    <!-- Footer -->
    <footer class="site-footer">
      <img
        src="https://dlbf54swf3l6o.cloudfront.net/images/logos/rewn-logo-light.png"
        alt="Real Estate Wealth Network"
      />
    </footer>
  </section>
</template>

<style scoped>
.site-footer {
  margin-top: 4rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  background-color: #474747;
  display: block;
  width: 100%;
  max-width: 300px;
  height: auto;
  margin: 0 auto 15px;
  /* vertical-align: middle; */
  border: 0;
}

.footer-logo {
  max-width: 200px;
  margin-bottom: 1rem;
}

.footer-links {
  margin-bottom: 1rem;
}

.footer-links a {
  color: white;
  text-decoration: none;
}

.copyright,
.address,
.contact {
  margin: 0.5rem 0;
  font-size: 0.9rem;
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
