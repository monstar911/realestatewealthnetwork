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
import PricingSection from "./components/PricingSection.vue";
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

      <section class="academy-info">
        <WhenIsSection />
        <div
          class="col-md-6 innerContent col_right ui-resizable"
          style="outline: none"
        >
          <div
            class="col-inner bgCover noBorder borderSolid border3px cornersAll radius0 shadow0 P0-top P0-bottom P0H noTopMargin"
            style="padding: 0 10px"
          >
            <div
              class="de elHeadlineWrapper ui-droppable de-editable"
              style="margin-top: 0px; outline: none; cursor: pointer"
            >
              <h1
                class="ne elHeadline hsSize3 lh4 elMargin0 elBGStyle0 hsTextShadow0"
                style="text-align: left; font-size: 32px; color: #2f2f2f"
              >
                <b>WHEN Is The Virtual Wholesaling Academy</b>
              </h1>
            </div>
            <div
              class="de elHeadlineWrapper ui-droppable de-editable"
              style="
                margin-top: 15px;
                outline: none;
                cursor: pointer;
                font-family: 'Open Sans', Helvetica, sans-serif !important;
              "
            >
              <h2
                class="ne elHeadline hsSize2 lh3 elMargin0 elBGStyle0 hsTextShadow0"
                style="text-align: left; font-size: 20px; color: #2f2f2f"
              >
                <p>
                  This three-day LIVE training is happening on March 18th thru
                  20th, 2025 from about 12pm to 6pm ET. It's not like any Zoom
                  meeting you've been to before.
                </p>
                <p>
                  It's live & interactive, which means we can explore topics in
                  detail. We've got tools and handouts to give you, plus we're
                  also giving away hundreds of dollars in prizes throughout the
                  event too!
                </p>
              </h2>
            </div>
            <div
              class="de elBTN elMargin0 ui-droppable elAlign_left de-editable"
              style="margin-top: 35px; outline: none; cursor: pointer"
            >
              <a
                href="setup.php"
                class="elButton elButtonSize1 elButtonColor1 elButtonRounded elButtonPadding2 elBtnVP_10 elButtonCorner3 elButtonFluid elBtnHP_25 elBTN_b_1 elButtonShadowN1 elButtonTxtColor1 elBTNone elButtonBlock"
                style="
                  color: rgb(255, 255, 255);
                  background: #30a05c;
                  font-size: 20px;
                "
                rel="noopener noreferrer"
                id="undefined-127-153-205"
              >
                <CallToAction />
                <!-- <span class="elButtonMain bodyBtn"
                  >I'm Ready To Become a Virtual Wholesaler!<br /><span
                    >Secure Your Spot For This 3-Day Masterclass Now!</span
                  ></span
                > -->
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="academy-info">
        <VideoSection />
        <VideoSection />
      </section>

      <WhyNowSection />

      <p class="proof-caption">
        We have the documentation to prove it, in the form of HUD statements.
        Don't miss out on this incredible opportunity.
      </p>
      <section class="academy-info">
        <VideoSectionHUD />
        <FundingSection />
      </section>

      <section class="academy-info">
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

      <section class="academy-info">
        <VideoSection />
        <VideoSection />
      </section>

      <section class="academy-info">
        <MakeMoneySection />
        <div
          class="col-md-6 innerContent col_right ui-resizable"
          style="outline: none"
        >
          <div
            class="col-inner bgCover noBorder borderSolid border3px cornersAll radius0 shadow0 P0-top P0-bottom P0H noTopMargin"
            style="padding: 0 10px"
          >
            <div
              class="de elHeadlineWrapper ui-droppable de-editable"
              style="margin-top: 0px; outline: none; cursor: pointer"
            >
              <h1
                class="ne elHeadline hsSize3 lh4 elMargin0 elBGStyle0 hsTextShadow0"
                style="text-align: left; font-size: 32px; color: #2f2f2f"
              >
                <b>3 Ways To Make Money With Any Wholesale Lead</b>
              </h1>
            </div>
            <div
              class="de elHeadlineWrapper ui-droppable de-editable"
              style="
                margin-top: 15px;
                outline: none;
                cursor: pointer;
                font-family: 'Open Sans', Helvetica, sans-serif !important;
              "
            >
              <h2
                class="ne elHeadline hsSize2 lh3 elMargin0 elBGStyle0 hsTextShadow0"
                style="text-align: left; font-size: 20px; color: #2f2f2f"
              >
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

      <section class="academy-info">
        <TopicsSection />
        <img
          data-src="//dlbf54swf3l6o.cloudfront.net/images/funnels/cold-calling.webp"
          data-fallback="//dlbf54swf3l6o.cloudfront.net/images/funnels/cold-calling.jpg"
          class="effect1 lazy"
          alt="Cold Calling"
          src="//dlbf54swf3l6o.cloudfront.net/images/funnels/cold-calling.webp"
        />
      </section>

      <section class="academy-info">
        <img
          data-src="//dlbf54swf3l6o.cloudfront.net/images/funnels/automate-your-business.webp"
          data-fallback="//dlbf54swf3l6o.cloudfront.net/images/funnels/automate-your-business.png"
          class="effect1 lazy"
          alt="Automate Your Business"
          src="//dlbf54swf3l6o.cloudfront.net/images/funnels/automate-your-business.webp"
        />
        <AutomationSection />
      </section>

      <section class="academy-info">
        <FindSection />
        <img
          data-src="//dlbf54swf3l6o.cloudfront.net/images/funnels/msdf_still1.webp"
          data-fallback="//dlbf54swf3l6o.cloudfront.net/images/funnels/msdf_still1.png"
          class="effect1 lazy"
          alt="Hungry Buyers"
          src="//dlbf54swf3l6o.cloudfront.net/images/funnels/msdf_still1.webp"
        />
      </section>

      <section class="academy-info">
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
:root {
  --chat-button-bg-color: #c2183f;
  --chat-button-shadow-color: rgba(194, 24, 63, 0.3);
  --chat-button-text-color: #ffffff;
  --client-bubble-bg: #c2183f;
  --client-transparent-bubble-bg: rgba(194, 24, 63, 0.08);
}
</style>
