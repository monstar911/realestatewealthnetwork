<template>
  <section class="w-full my-8">
    <div class="max-w-[var(--container-width)] mx-auto px-0 pb-8 w-full">
      <div class="relative pt-[56.25%]">
        <div class="absolute top-0 left-0 h-full w-full">
          <div class="hidden" data-source-container-id=""></div>
          <iframe
            src="https://fast.wistia.net/embed/iframe/idwknzjwun?seo=false&videoFoam=true&resumeable=true"
            title="Wistia video player"
            allow="autoplay; fullscreen"
            allowtransparency="true"
            frameborder="0"
            scrolling="no"
            class="absolute top-0 left-0 w-full h-full border-0"
            name="wistia_embed"
            msallowfullscreen
          ></iframe>
        </div>

        <p
          class="text-center text-[#2f2f2f] text-xl my-2 font-['Open_Sans',Helvetica,sans-serif]"
        >
          {{ title }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, defineProps } from "vue";

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

const props = defineProps<{
  title: string;
}>();
</script>
