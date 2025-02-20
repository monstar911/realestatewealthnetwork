<template>
  <section class="w-full my-8">
    <div
      id="col-left-103-112"
      class="col-md-6 innerContent col_left ui-resizable outline-none"
    >
      <div
        class="col-inner bg-cover border-0 border-solid border-3 rounded-none shadow-none py-0 mt-0 px-[10px]"
      >
        <div
          class="de elVideoWrapper de-video-block w-full m-0 ui-droppable de-editable mt-[30px] outline-none cursor-pointer"
          data-video-type="wistia"
          data-wistia-url="https://camerondirect-1.wistia.com/medias/cgaql4wt0t"
          data-wistia-autoplay="yes"
        >
          <div class="relative pb-[56.25%] pt-[25px] h-0 mb-0 z-[1]">
            <div
              class="absolute top-0 w-full h-full box-border bg-[#2b2b2b] border border-black/20 text-center bg-[url('/images/videoplaceholderbg.png')] bg-center bg-no-repeat shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)]"
            ></div>
          </div>
          <div class="hidden">
            <iframe
              width="640"
              height="360"
              allow="autoplay; fullscreen"
              src="https://fast.wistia.net/embed/iframe/cgaql4wt0t?muted=true&amp;autoplay=1&amp;&amp;wmode=transparent"
              allowtransparency="true"
              class="w-full h-full absolute top-0"
              name="wistia_embed"
              wmode="opaque"
            >
            </iframe>
          </div>
        </div>
      </div>
      <div class="text-black">
        We have the documentation to prove it, in the form of HUD statements.
        Don't miss out on this incredible opportunity.
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

const loadWistiaScript = () => {
  // Load Wistia main script
  const wistiaScript = document.createElement("script");
  wistiaScript.id = "wistia-ev";
  wistiaScript.src = "//fast.wistia.com/assets/external/E-v1.js";
  wistiaScript.async = true;

  // Load playback control script
  const playbackScript = document.createElement("script");
  playbackScript.id = "wistia-playback";
  playbackScript.src =
    "//dlbf54swf3l6o.cloudfront.net/scripts/wistia-playback-control.js";
  playbackScript.async = true;

  // Append scripts only if they don't exist
  if (!document.getElementById("wistia-ev")) {
    document.body.appendChild(wistiaScript);
  }
  if (!document.getElementById("wistia-playback")) {
    document.body.appendChild(playbackScript);
  }
};

onMounted(loadWistiaScript);
</script>

<style scoped>
/* Some styles that can't be directly converted to Tailwind */
.elVideoWrapper {
  @apply hidden;
}

.de-editable {
  @apply relative cursor-auto;
}

.wistia_responsive_padding {
  @apply pt-[56.25%] relative;
}

.wistia_responsive_wrapper {
  @apply h-full absolute w-full;
}

.wistia_video_foam_dummy {
  @apply border-0 block static invisible w-auto;
}

.elVideo {
  @apply relative overflow-hidden block;
}

.elAudio {
  @apply block;
}
</style>
