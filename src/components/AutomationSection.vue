<template>
  <section class="automation-section">
    <div class="automation-content">
      <div class="automation-content reverse">
        <div class="content-text">
          <h2>Automate Your Business With Low-Cost, Virtual Assistants</h2>
          <p>
            Many entrepreneurs suffer from the "I'll just do it myself" or "I'm
            the only one that does it right" syndrome, which massively hampers
            your ability to earn and get things done.
          </p>
          <p>
            A virtual assistant can handle things like scheduling, talking to
            clients, and managing your workflow, which frees up your time to
            focus on the bigger parts of your business. This way, you can make
            your business run smoother and faster without spending a lot of
            money.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

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
