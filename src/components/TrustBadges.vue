<template>
  <section class="trust-badges">
    <div class="container">
      <div class="badges">
        <p class="featured-text">Featured On</p>
        <img
          data-src="//dlbf54swf3l6o.cloudfront.net/images/misc/time2.webp"
          data-fallback="//dlbf54swf3l6o.cloudfront.net/images/misc/time2.png"
          class="lazy"
          alt="TIME"
          src="//dlbf54swf3l6o.cloudfront.net/images/misc/time2.webp"
        />
        <img
          data-src="//dlbf54swf3l6o.cloudfront.net/images/misc/ent2.webp"
          data-fallback="//dlbf54swf3l6o.cloudfront.net/images/misc/ent2.png"
          class="lazy"
          alt="Entrepreneur"
          src="//dlbf54swf3l6o.cloudfront.net/images/misc/ent2.webp"
        />
        <img
          data-src="//dlbf54swf3l6o.cloudfront.net/images/misc/USWeekly-2.webp"
          data-fallback="//dlbf54swf3l6o.cloudfront.net/images/misc/USWeekly-2.png"
          class="lazy"
          alt="US Weekly"
          width="100"
          src="//dlbf54swf3l6o.cloudfront.net/images/misc/USWeekly-2.webp"
        />
        <img
          data-src="//dlbf54swf3l6o.cloudfront.net/images/misc/wash2.webp"
          data-fallback="//dlbf54swf3l6o.cloudfront.net/images/misc/wash2.png"
          class="lazy"
          alt="The Washington Times"
          src="//dlbf54swf3l6o.cloudfront.net/images/misc/wash2.webp"
        />
        <img
          data-src="//dlbf54swf3l6o.cloudfront.net/images/misc/usnews2.webp"
          data-fallback="//dlbf54swf3l6o.cloudfront.net/images/misc/usnews2.png"
          class="lazy"
          alt="U.S. News"
          src="//dlbf54swf3l6o.cloudfront.net/images/misc/usnews2.webp"
        />
        <CountdownTimer :deadline="new Date('2025-03-19')" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CountdownTimer from "./CountdownTimer.vue";
</script>

<style scoped>
.trust-badges {
  background-color: rgb(96, 96, 96);
  text-align: center;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.featured-text {
  color: #888;
  margin-bottom: 1rem;
  width: 12%;
}

.badges {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  width: 1170px;
}

.badge {
  color: #fff;
  opacity: 0.7;
  font-size: 1.2rem;
  font-weight: bold;
}

img {
  width: 12%;
}
</style>
