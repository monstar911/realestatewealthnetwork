<script setup lang="ts">
import UrgentBanner from "./components/UrgentBanner.vue";
import MainHeading from "./components/MainHeading.vue";
import VideoSection from "./components/VideoSection.vue";
import CallToAction from "./components/CallToAction.vue";
import ProfitText from "./components/ProfitText.vue";
import TrustBadges from "./components/TrustBadges.vue";
import WhatIsSection from "./components/WhatIsSection.vue";
import WhenIsSection from "./components/WhenIsSection.vue";
import WhyNowSection from "./components/WhyNowSection.vue";
import FundingSection from "./components/FundingSection.vue";
import HostSection from "./components/HostSection.vue";
import TopicsSection from "./components/TopicsSection.vue";
import AutomationSection from "./components/AutomationSection.vue";
import WinningSection from "./components/WinningSection.vue";
import MakeMoneySection from "./components/MakeMoney.vue";
import VideoSectionHUD from "./components/VideoSectionHUD.vue";
import ReviewsSection from "./components/ReviewsSection.vue";
import FaqSection from "./components/FaqSection.vue";
import FooterSection from "./components/FooterSection.vue";
import FindSection from "./components/FindSection.vue";
import ChatBox from "./components/ChatBox.vue";
import CalandarSection from "./components/CalandarSection.vue";
const deadline = new Date("2024-03-20T23:59:59");
</script>

<template>
  <div class="landing-page w-full m-0 p-0 font-lato text-white">
    <!-- Top Section -->
    <section
      class="w-full bg-blend-darken bg-opacity-70 bg-black"
      style="
        background-image: url(https://dlbf54swf3l6o.cloudfront.net/images/backgrounds/vintage-grunge-blue-concrete-texture-studio-wall-background-with-vignette.jpg);
      "
    >
      <div class="container">
        <UrgentBanner
          message="This Special 'ALL HANDS' Training Is The Blueprint For Virtual Wholesaling During Uncertain Times..."
        />
        <MainHeading />
        <VideoSection />
        <CallToAction />
        <ProfitText />
      </div>
    </section>

    <!-- Main Content -->
    <section class="flex flex-col items-center w-full">
      <TrustBadges />

      <WinningSection />
      <section class="academy-info container">
        <WhatIsSection />
        <VideoSection />
      </section>

      <section class="academy-info container">
        <CalandarSection />
        <WhenIsSection />
      </section>

      <section class="academy-info container">
        <VideoSection />
        <VideoSection />
      </section>

      <WhyNowSection />

      <p class="proof-caption">
        We have the documentation to prove it, in the form of HUD statements.
        Don't miss out on this incredible opportunity.
      </p>

      <section class="academy-info container">
        <HostSection />
        <img
          data-src="//dlbf54swf3l6o.cloudfront.net/images/cameron/cam-brick-wall.webp"
          data-fallback="//dlbf54swf3l6o.cloudfront.net/images/cameron/cam-brick-wall.jpg"
          class="effect1 lazy"
          alt="Cam Dunlap"
          width="400"
          src="//dlbf54swf3l6o.cloudfront.net/images/cameron/cam-brick-wall.webp"
        />
      </section>

      <section class="academy-info container">
        <VideoSection />
        <VideoSection />
      </section>

      <section class="academy-info container">
        <MakeMoneySection />
        <div class="col-md-6 innerContent col_right ui-resizable outline-none">
          <div class="px-[10px]">
            <div class="mt-0 outline-none cursor-pointer">
              <h1 class="text-left text-[32px] text-[#2f2f2f]">
                <b>3 Ways To Make Money With Any Wholesale Lead</b>
              </h1>
            </div>
            <div
              class="mt-[15px] outline-none cursor-pointer font-['Open_Sans',Helvetica,sans-serif]"
            >
              <h2 class="text-left text-xl text-[#2f2f2f]">
                <p>
                  As a virtual wholesaler you'll be able to cherry pick deals.
                  In this session, we will explore strategies for making a
                  profit from properties that might not initially seem perfect
                  for a wholesale deal.
                </p>
                <p>
                  You'll learn how to identify and implement alternative
                  opportunities for making the most out of every lead.
                </p>
                <p>
                  This approach ensures that you can still earn from properties
                  even when they don't fit into a traditional wholesale box,
                  broadening your business scope and enhancing your investment
                  portfolio.
                </p>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section class="academy-info container">
        <TopicsSection />
        <img
          data-src="//dlbf54swf3l6o.cloudfront.net/images/funnels/cold-calling.webp"
          data-fallback="//dlbf54swf3l6o.cloudfront.net/images/funnels/cold-calling.jpg"
          class="effect1 lazy"
          alt="Cold Calling"
          src="//dlbf54swf3l6o.cloudfront.net/images/funnels/cold-calling.webp"
        />
      </section>

      <section class="academy-info container">
        <img
          data-src="//dlbf54swf3l6o.cloudfront.net/images/funnels/automate-your-business.webp"
          data-fallback="//dlbf54swf3l6o.cloudfront.net/images/funnels/automate-your-business.png"
          class="effect1 lazy"
          alt="Automate Your Business"
          src="//dlbf54swf3l6o.cloudfront.net/images/funnels/automate-your-business.webp"
        />
        <AutomationSection />
      </section>

      <section class="academy-info container">
        <FindSection />
        <img
          data-src="//dlbf54swf3l6o.cloudfront.net/images/funnels/msdf_still1.webp"
          data-fallback="//dlbf54swf3l6o.cloudfront.net/images/funnels/msdf_still1.png"
          class="effect1 lazy"
          alt="Hungry Buyers"
          src="//dlbf54swf3l6o.cloudfront.net/images/funnels/msdf_still1.webp"
        />
      </section>

      <section class="academy-info container">
        <VideoSection />
        <VideoSection />
      </section>

      <ReviewsSection />
      <FaqSection />
      <FooterSection />
    </section>

    <ChatBox />
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
