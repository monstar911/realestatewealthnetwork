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
    <div class="container">
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
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

const WISTIA_SCRIPT_ID = "wistia-ev";
const PLAYBACK_SCRIPT_ID = "wistia-playback";
const WISTIA_BASE_URL = "//fast.wistia.com/assets/external/E-v1.js";
const PLAYBACK_SCRIPT_URL =
  "//dlbf54swf3l6o.cloudfront.net/scripts/wistia-playback-control.js";

const loadScript = (id: string, src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (document.getElementById(id)) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = true;

    script.onload = () => resolve();
    script.onerror = (error) => reject(error);

    document.body.appendChild(script);
  });
};

const loadWistiaScripts = async () => {
  try {
    await Promise.all([
      loadScript(WISTIA_SCRIPT_ID, WISTIA_BASE_URL),
      loadScript(PLAYBACK_SCRIPT_ID, PLAYBACK_SCRIPT_URL),
    ]);
  } catch (error) {
    console.error("Failed to load Wistia scripts:", error);
  }
};

onMounted(loadWistiaScripts);
</script>

<style scoped>
.video-section {
  width: 100%;
  margin: 2rem auto;
}

.container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
}

.wistia_responsive_padding {
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  position: relative;
}

.wistia_responsive_wrapper {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.wistia_video_foam_dummy {
  display: none;
}

.wistia_embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
