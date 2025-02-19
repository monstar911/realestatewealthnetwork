<template>
  <section class="p-8 my-8">
    <div class="px-10 border-3 border-solid rounded-none shadow-none p-0">
      <div class="mt-0 outline-none cursor-pointer">
        <h1 class="m-0 text-4xl font-bold">
          You'll Give Me $1,000,000...Really?
        </h1>
      </div>
      <div
        class="mt-4 outline-none cursor-pointer font-['Open_Sans',Helvetica,sans-serif]"
      >
        <h2 class="m-0 text-left text-xl text-primary">
          <p class="mb-6 leading-relaxed">
            Imagine having access to $1,000,000 to fund as many deals as you
            desire, all without having to pay any fees or interest. And there's
            no need to worry about qualifying or credit checks either– it's that
            easy!
          </p>
          <p class="mb-6 leading-relaxed">
            Our company has already funded over $91,166,873 in deals for our
            members.
          </p>
          <p class="mb-6 leading-relaxed">
            I know it sounds "too good to be true" but I assure you it is not.
            I'll explain exactly how it works and how you can start using these
            funds to do deals immediately during this training.
          </p>
        </h2>
      </div>
      <div class="mt-8 outline-none cursor-pointer text-left">
        <a
          href="setup.php"
          class="inline-block w-full px-6 py-2.5 text-xl text-white bg-[#30a05c] rounded-md shadow"
        >
        </a>
      </div>
    </div>

    <CallToAction />
  </section>
</template>

<script setup lang="ts">
import CallToAction from "./CallToAction.vue";
</script>
