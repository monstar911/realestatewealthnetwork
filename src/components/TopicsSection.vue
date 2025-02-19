<template>
  <section class="topics-section">
    <div class="topics">
      <!-- Live Calling Topic -->
      <div class="topic">
        <div class="topic-content">
          <h3>Live Seller Calling Session</h3>
          <p>
            Cold calling seems scary...but not the way we do it. Watch as we
            dial sellers and make money in real-time.
          </p>
          <p>
            In this session you will see and hear LIVE conversations and learn
            from our experts as they show you how to talk effectively with
            sellers. This hands-on experience will help you feel more confident
            in your own seller discussions. Your anxiety about picking up the
            phone and talking with prospects will melt away after this.
          </p>
          <CallToAction
            buttonText="Secure Your Spot For This 3-Day Masterclass Now!"
          />
        </div>
        <!-- <div class="topic-image">
          <img src="./assets/caller.jpg" alt="Live Caller" />
        </div> -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CallToAction from "./CallToAction.vue";
</script>

<style scoped>
.topics-section {
  padding: 2rem;
  margin: 2rem 0;
}

h2 {
  color: var(--primary-color);
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
}

.subtitle {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  color: #888;
}

.topics {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.topic {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.topic:nth-child(even) {
  direction: rtl;
}

.topic-content {
  direction: ltr;
}

h3 {
  color: var(--primary-color);
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.topic-content p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.topic-image {
  text-align: center;
}

.topic-image img {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.image-caption {
  font-style: italic;
  color: #888;
  margin-top: 1rem;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .topic {
    grid-template-columns: 1fr;
    direction: ltr;
  }

  .topic-image {
    order: -1;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }
}
</style>
