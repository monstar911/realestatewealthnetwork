<script setup lang="ts">
import SectionVideo from "./components/Section-Video.vue";
import SectionReady from "./components/Section-Ready.vue";
import Section01UrgentBanner from "./components/Section-01-UrgentBanner.vue";
import Section02MainHeading from "./components/Section-02-MainHeading.vue";
import Section03ProfitText from "./components/Section-03-ProfitText.vue";
import Section04TrustBadges from "./components/Section-04-TrustBadges.vue";
import Section05Winning from "./components/Section-05-Winning.vue";
import Section06What from "./components/Section-06-What.vue";
import Section07Calandar from "./components/Section-07-Calandar.vue";
import Section08When from "./components/Section-08-When.vue";
import Section09Why from "./components/Section-09-Why.vue";
import Section10Give from "./components/Section-10-Give.vue";
import Section11Host from "./components/Section-11-Host.vue";
import Section12MakeMoney from "./components/Section-12-MakeMoney.vue";
import Section13Seller from "./components/Section-13-Seller.vue";
import Section14Business from "./components/Section-14-Business.vue";
import Section15Find from "./components/Section-15-Find.vue";
import Section16Reviews from "./components/Section-16-Reviews.vue";
import Section17Faq from "./components/Section-17-Faq.vue";
import Section99Footer from "./components/Section-99-Footer.vue";
import ChatBox from "./components/ChatBox.vue";
const deadline = new Date("2024-03-20T23:59:59");
</script>

<template>
  <ChatBox />

  <div class="landing-page w-full m-0 p-0 font-lato text-white">
    <!-- Top Section -->
    <section
      class="w-full bg-blend-darken bg-opacity-80 bg-black"
      style="
        background-image: url(https://dlbf54swf3l6o.cloudfront.net/images/backgrounds/vintage-grunge-blue-concrete-texture-studio-wall-background-with-vignette.jpg);
      "
    >
      <div class="section-container">
        <Section01UrgentBanner
          message="This Special 'ALL HANDS' Training Is The Blueprint For Virtual Wholesaling During Uncertain Times..."
        />
        <Section02MainHeading />
        <SectionVideo />
        <SectionReady />
        <Section03ProfitText />
      </div>
    </section>

    <Section04TrustBadges />
    <Section05Winning />

    <!-- Main Contents -->
    <section class="flex flex-col items-center w-full">
      <section class="section-grid section-container">
        <Section06What />
        <SectionVideo />
      </section>

      <section class="section-grid section-container">
        <Section07Calandar />
        <Section08When />
      </section>

      <section class="section-grid section-container">
        <VideoSection />
        <VideoSection />
      </section>

      <Section09Why class="section-container" />

      <section class="section-grid section-container">
        <SectionVideo />
        <Section10Give />
      </section>

      <p class="proof-caption">
        We have the documentation to prove it, in the form of HUD statements.
        Don't miss out on this incredible opportunity.
      </p>

      <section class="section-grid section-container">
        <Section11Host />
        <div class="section-image">
          <img
            data-src="//dlbf54swf3l6o.cloudfront.net/images/cameron/cam-brick-wall.webp"
            data-fallback="//dlbf54swf3l6o.cloudfront.net/images/cameron/cam-brick-wall.jpg"
            class="effect1 lazy"
            alt="Cam Dunlap"
            width="400"
            src="//dlbf54swf3l6o.cloudfront.net/images/cameron/cam-brick-wall.webp"
          />
        </div>
      </section>

      <section class="section-grid section-container">
        <SectionVideo />
        <SectionVideo />
      </section>

      <section class="section-grid section-container">
        <div class="section-image">
          <img
            data-src="//dlbf54swf3l6o.cloudfront.net/images/funnels/investor-thoughts.webp"
            data-fallback="//dlbf54swf3l6o.cloudfront.net/images/funnels/investor-thoughts.jpg"
            class="lazy w-4/5"
            alt="Investor Thoughts"
            src="//dlbf54swf3l6o.cloudfront.net/images/funnels/investor-thoughts.webp"
          />
        </div>
        <Section12MakeMoney />
      </section>

      <section class="section-grid section-container">
        <Section13Seller />
        <div class="section-image">
          <img
            data-src="//dlbf54swf3l6o.cloudfront.net/images/funnels/cold-calling.webp"
            data-fallback="//dlbf54swf3l6o.cloudfront.net/images/funnels/cold-calling.jpg"
            class="effect1 lazy"
            alt="Cold Calling"
            src="//dlbf54swf3l6o.cloudfront.net/images/funnels/cold-calling.webp"
          />
        </div>
      </section>

      <section class="section-grid section-container">
        <div class="section-image">
          <img
            data-src="//dlbf54swf3l6o.cloudfront.net/images/funnels/automate-your-business.webp"
            data-fallback="//dlbf54swf3l6o.cloudfront.net/images/funnels/automate-your-business.png"
            class="effect1 lazy"
            alt="Automate Your Business"
            src="//dlbf54swf3l6o.cloudfront.net/images/funnels/automate-your-business.webp"
          />
        </div>
        <Section14Business />
      </section>

      <section class="section-grid section-container">
        <Section15Find />
        <div class="section-image">
          <img
            data-src="//dlbf54swf3l6o.cloudfront.net/images/funnels/msdf_still1.webp"
            data-fallback="//dlbf54swf3l6o.cloudfront.net/images/funnels/msdf_still1.png"
            class="effect1 lazy"
            alt="Hungry Buyers"
            src="//dlbf54swf3l6o.cloudfront.net/images/funnels/msdf_still1.webp"
          />
        </div>
      </section>

      <div class="section-container">
        <SectionReady />
      </div>

      <section class="section-grid section-container">
        <SectionVideo />
        <SectionVideo />
      </section>

      <Section16Reviews class="section-container" />
      <Section17Faq class="section-container" />
      <Section99Footer class="section-container" />
    </section>
  </div>
</template>

<style>
/* Move the layer definition to style.css and keep only the custom properties here */
:root {
  --chat-button-bg-color: theme("colors.red.600");
  --chat-button-shadow-color: theme("colors.red.600/30");
  --chat-button-text-color: theme("colors.white");
  --client-bubble-bg: theme("colors.red.600");
  --client-transparent-bubble-bg: theme("colors.red.600/8");
}
</style>
