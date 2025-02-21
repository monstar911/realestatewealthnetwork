<template>
  <section
    class="bg-[rgb(96,96,96)] text-center py-6 flex justify-center items-center w-full"
  >
    <div class="section-container">
      <div
        class="flex justify-center items-center gap-8 flex-wrap max-w-[1200px]"
      >
        <p class="text-[#888] mb-4 w-[12%]">Featured On</p>
        <img
          data-src="//dlbf54swf3l6o.cloudfront.net/images/misc/time2.webp"
          data-fallback="//dlbf54swf3l6o.cloudfront.net/images/misc/time2.png"
          class="lazy w-[12%] opacity-100"
          alt="TIME"
          src="//dlbf54swf3l6o.cloudfront.net/images/misc/time2.webp"
        />
        <img
          data-src="//dlbf54swf3l6o.cloudfront.net/images/misc/ent2.webp"
          data-fallback="//dlbf54swf3l6o.cloudfront.net/images/misc/ent2.png"
          class="lazy w-[12%] opacity-100"
          alt="Entrepreneur"
          src="//dlbf54swf3l6o.cloudfront.net/images/misc/ent2.webp"
        />
        <img
          data-src="//dlbf54swf3l6o.cloudfront.net/images/misc/USWeekly-2.webp"
          data-fallback="//dlbf54swf3l6o.cloudfront.net/images/misc/USWeekly-2.png"
          class="lazy w-[12%] opacity-100"
          alt="US Weekly"
          width="100"
          src="//dlbf54swf3l6o.cloudfront.net/images/misc/USWeekly-2.webp"
        />
        <img
          data-src="//dlbf54swf3l6o.cloudfront.net/images/misc/wash2.webp"
          data-fallback="//dlbf54swf3l6o.cloudfront.net/images/misc/wash2.png"
          class="lazy w-[12%] opacity-100"
          alt="The Washington Times"
          src="//dlbf54swf3l6o.cloudfront.net/images/misc/wash2.webp"
        />
        <img
          data-src="//dlbf54swf3l6o.cloudfront.net/images/misc/usnews2.webp"
          data-fallback="//dlbf54swf3l6o.cloudfront.net/images/misc/usnews2.png"
          class="lazy w-[12%] opacity-100"
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
