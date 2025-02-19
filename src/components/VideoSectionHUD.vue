<template>
  <section class="video-section">
    <div
      id="col-left-103-112"
      class="col-md-6 innerContent col_left ui-resizable"
      style="outline: none"
    >
      <div
        class="col-inner bgCover noBorder borderSolid border3px cornersAll radius0 shadow0 P0-top P0-bottom P0H noTopMargin"
        style="padding: 0 10px"
      >
        <div
          class="de elVideoWrapper de-video-block elVideoWidth100 elMargin0 ui-droppable de-editable"
          data-video-type="wistia"
          style="margin-top: 30px; outline: none; cursor: pointer"
          data-wistia-url="https://camerondirect-1.wistia.com/medias/cgaql4wt0t"
          data-wistia-autoplay="yes"
        >
          <div class="elVideoplaceholder">
            <div class="elVideoplaceholder_inner"></div>
          </div>
          <div class="elVideo" style="display: none">
            <iframe
              width="640"
              height="360"
              allow="autoplay; fullscreen"
              src="https://fast.wistia.net/embed/iframe/cgaql4wt0t?muted=true&amp;autoplay=1&amp;&amp;wmode=transparent"
              allowtransparency="true"
              class="wistia_embed"
              name="wistia_embed"
              wmode="opaque"
            >
            </iframe>
          </div>
        </div>
      </div>
      <div class="subImageCpy">
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
.video-section {
  /* max-width: 800px; */
  width: 100%;
  margin: 2rem auto;
}
.elVideoplaceholder {
  position: relative;
  padding-bottom: 56.25% !important;
  padding-top: 25px !important;
  height: 0;
  margin-bottom: 0px;
  z-index: 1;
}
.elVideoplaceholder_inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #2b2b2b;
  border: 1px solid rgba(0, 0, 0, 0.2);
  text-align: center;
  background-image: url(/images/videoplaceholderbg.png);
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.3);
  -moz-box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.3);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.3);
}
.subImageCpy {
  color: black;
}
.elVideoWrapper {
  display: none !important;
}
.elVideoWidth100 {
  width: 100% !important;
}
.elMargin0 {
  margin-top: 0px;
}
.de-editable {
  position: relative;
}
.de-editable {
  cursor: auto !important;
}
.de-video-block {
  width: 100% !important;
}
.wistia_responsive_padding {
  padding: 56.25% 0 0 0;
  position: relative;
}

.wistia_responsive_wrapper {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.wistia_video_foam_dummy {
  border: 0;
  display: block;
  height: 0;
  margin: 0;
  padding: 0;
  position: static;
  visibility: hidden;
  width: auto;
}

.wistia_embed {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.elVideo {
  position: relative;
  overflow: hidden;
}
.elVideo,
.elAudio {
  display: block !important;
}
</style>
