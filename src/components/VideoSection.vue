<!-- <template>
  <section class="video-section">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div
          class="wistia_responsive_padding"
          style="padding: 56.25% 0 0 0; position: relative"
        >
          <div
            class="wistia_responsive_wrapper"
            style="
              height: 100%;
              left: 0;
              position: absolute;
              top: 0;
              width: 100%;
            "
          >
            <div
              class="wistia_video_foam_dummy"
              data-source-container-id=""
              style="
                border: 0px;
                display: block;
                height: 0px;
                margin: 0px;
                padding: 0px;
                position: static;
                visibility: hidden;
                width: auto;
              "
            ></div>
            <iframe
              src="https://fast.wistia.net/embed/iframe/idwknzjwun?seo=false&amp;videoFoam=true&amp;resumeable=true"
              title=""
              allow="autoplay; fullscreen"
              allowtransparency="true"
              frameborder="0"
              scrolling="no"
              class="wistia_embed"
              name="wistia_embed"
              msallowfullscreen=""
              width="1071"
              height="602"
              style="width: 1071px; height: 602px"
            ></iframe>
          </div>
        </div>

        <script>
          var handleWistia = function () {
            if (!document.querySelector("#wistia-ev")) {
              var el = document.createElement("script");
              el.setAttribute("id", "wistia-ev");
              el.setAttribute("type", "text/javascript");
              el.setAttribute(
                "src",
                "//fast.wistia.com/assets/external/E-v1.js"
              );
              document.body.append(el);
            }
            if (!document.querySelector("#wistia-playback")) {
              var el = document.createElement("script");
              el.setAttribute("id", "wistia-playback");
              el.setAttribute("type", "text/javascript");
              el.setAttribute(
                "src",
                "//dlbf54swf3l6o.cloudfront.net/scripts/wistia-playback-control.js"
              );
              document.body.append(el);
            }
          };
          window.addEventListener("load", handleWistia);
        </script>
      </div>
    </div> -->

<!-- <div class="video-container">
      <video
        data-v-850c51fb=""
        id="wistia_simple_video_92"
        crossorigin="anonymous"
        poster="https://fast.wistia.net/assets/images/blank.gif"
        aria-label="Video"
        src="https://fast.wistia.net/a187f492-f69e-43c3-abea-33c47fe82cef"
        controls=""
        controlslist="nodownload"
        playsinline=""
        preload="auto"
        type="video/m3u8"
        x-webkit-airplay="allow"
        style="
          background: transparent;
          display: block;
          height: 100%;
          max-height: none;
          max-width: none;
          position: static;
          visibility: visible;
          width: 100%;
          object-fit: contain;
        "
      ></video>
    </div> -->
<!-- </section> -->
<!-- </template> -->

<!-- <style scoped>
.video-section {
  max-width: 800px;
  margin: 2rem auto;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
  /* border-radius: 8px; */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.video-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
}
</style> -->
<template>
  <section class="video-section">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div class="wistia_responsive_padding">
          <div class="wistia_responsive_wrapper">
            <div
              class="wistia_video_foam_dummy"
              data-source-container-id=""
            ></div>
            <iframe
              src="https://fast.wistia.net/embed/iframe/idwknzjwun?seo=false&videoFoam=true&resumeable=true"
              title="Wistia video player"
              allow="autoplay; fullscreen"
              allowtransparency="true"
              frameborder="0"
              scrolling="no"
              class="wistia_embed"
              name="wistia_embed"
              msallowfullscreen
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
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
</style>
