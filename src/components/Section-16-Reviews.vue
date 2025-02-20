<template>
  <section class="p-8 my-8 bg-black">
    <!-- Reviews Section -->
    <div>
      <h2 class="text-white text-4xl text-center mb-8">
        Over
        <span class="border-b-2 border-white">FIVE Star Reviews</span> Can't Be
        Wrong...
      </h2>
      <div
        class="flex justify-center gap-8 mb-8 md:flex-row flex-col items-center"
      >
        <img
          data-src="//dlbf54swf3l6o.cloudfront.net/images/funnels/5-star-review-1.webp"
          data-fallback="//dlbf54swf3l6o.cloudfront.net/images/funnels/5-star-review-1.png"
          class="lazy p-6 max-h-[350px] max-w-full md:max-w-[400px] rounded-lg"
          alt="5-Star Reviews"
          src="//dlbf54swf3l6o.cloudfront.net/images/funnels/5-star-review-1.webp"
        />
        <img
          data-src="//dlbf54swf3l6o.cloudfront.net/images/funnels/5-star-review-2.webp"
          data-fallback="//dlbf54swf3l6o.cloudfront.net/images/funnels/5-star-review-2.png"
          class="lazy p-6 max-h-[350px] max-w-full md:max-w-[400px] rounded-lg"
          alt="5-Star Reviews"
          src="//dlbf54swf3l6o.cloudfront.net/images/funnels/5-star-review-2.webp"
        />
      </div>
      <div
        class="max-w-[800px] mx-auto max-h-[400px] overflow-y-auto p-4 pb-8 scrollbar scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
      >
        <div class="bg-white rounded-lg p-6 mb-4 shadow-md">
          <div class="flex justify-between items-start mb-4">
            <div class="flex gap-4 items-center">
              <img
                src="../assets/hud-statements.png"
                alt="Tea West"
                class="w-12 h-12 rounded-full object-cover"
              />
              <div class="flex flex-col">
                <span class="font-bold text-lg">TEA WEST</span>
                <span class="text-gray-600 text-sm"
                  >February 6th, 2025 5:28 PM (EST)</span
                >
              </div>
            </div>
            <div class="text-yellow-400 text-lg">★★★★★</div>
          </div>
          <p class="my-4 leading-relaxed text-gray-700">
            Sitting at the feet of the great Cam Dunlap was a pleasure! He & His
            staff are candid, knowledgeable, and well-versed in the REI
            industry. I highly recommend
          </p>
          <div class="flex items-center gap-2 text-gray-600 text-sm">
            <img
              src="../assets/hud-statements.png"
              alt="Google"
              class="w-5 h-5"
            />
            <span>Posted on Google</span>
          </div>
        </div>
        <div class="bg-white rounded-lg p-6 mb-4 shadow-md">
          <div class="flex justify-between items-start mb-4">
            <div class="flex gap-4 items-center">
              <img
                src="../assets/hud-statements.png"
                alt="John Daniel"
                class="w-12 h-12 rounded-full object-cover"
              />
              <div class="flex flex-col">
                <span class="font-bold text-lg">John Daniel</span>
                <span class="text-gray-600 text-sm"
                  >February 6th, 2025 5:19 PM (EST)</span
                >
              </div>
            </div>
            <div class="text-yellow-400 text-lg">★★★★★</div>
          </div>
          <p class="my-4 leading-relaxed text-gray-700">
            This program is highly educational and innovatively prepared by a
            very professional group and loaded with lots of worthwhile business
            information and materials. It is a very affordable offering given
            the benefits of the content are considered.
          </p>
          <div class="flex items-center gap-2 text-gray-600 text-sm">
            <img
              src="../assets/hud-statements.png"
              alt="Google"
              class="w-5 h-5"
            />
            <span>Posted on Google</span>
          </div>
        </div>

        <!-- Additional Review Cards -->
        <div class="bg-white rounded-lg p-6 mb-4 shadow-md">
          <div class="flex justify-between items-start mb-4">
            <div class="flex gap-4 items-center">
              <img
                src="../assets/hud-statements.png"
                alt="Juan Velasquez"
                class="w-12 h-12 rounded-full object-cover"
              />
              <div class="flex flex-col">
                <span class="font-bold text-lg">Juan Velasquez</span>
                <span class="text-gray-600 text-sm"
                  >February 6th, 2025 5:13 PM (EST)</span
                >
              </div>
            </div>
            <div class="text-yellow-400 text-lg">★★★★★</div>
          </div>
          <p class="my-4 leading-relaxed text-gray-700">
            Thank you Cam! Great team, great training!
          </p>
          <div class="flex items-center gap-2 text-gray-600 text-sm">
            <img
              src="../assets/hud-statements.png"
              alt="Google"
              class="w-5 h-5"
            />
            <span>Posted on Google</span>
          </div>
        </div>

        <div class="bg-white rounded-lg p-6 mb-4 shadow-md">
          <div class="flex justify-between items-start mb-4">
            <div class="flex gap-4 items-center">
              <img
                src="../assets/hud-statements.png"
                alt="Monique Leal"
                class="w-12 h-12 rounded-full object-cover"
              />
              <div class="flex flex-col">
                <span class="font-bold text-lg">Monique Leal</span>
                <span class="text-gray-600 text-sm"
                  >February 6th, 2025 5:08 PM (EST)</span
                >
              </div>
            </div>
            <div class="text-yellow-400 text-lg">★★★★★</div>
          </div>
          <p class="my-4 leading-relaxed text-gray-700">
            The training was excellent and very informative. I learned a lot of
            new strategies and techniques that I can apply to my business
            immediately.
          </p>
          <div class="flex items-center gap-2 text-gray-600 text-sm">
            <img
              src="../assets/hud-statements.png"
              alt="Google"
              class="w-5 h-5"
            />
            <span>Posted on Google</span>
          </div>
        </div>

        <!-- Add a few more review cards to ensure scrolling -->
        <div class="bg-white rounded-lg p-6 mb-4 shadow-md">
          <div class="flex justify-between items-start mb-4">
            <div class="flex gap-4 items-center">
              <img
                src="../assets/hud-statements.png"
                alt="Sarah Johnson"
                class="w-12 h-12 rounded-full object-cover"
              />
              <div class="flex flex-col">
                <span class="font-bold text-lg">Sarah Johnson</span>
                <span class="text-gray-600 text-sm"
                  >February 6th, 2025 4:55 PM (EST)</span
                >
              </div>
            </div>
            <div class="text-yellow-400 text-lg">★★★★★</div>
          </div>
          <p class="my-4 leading-relaxed text-gray-700">
            Outstanding program! The depth of knowledge shared and the practical
            applications make this invaluable for anyone in real estate
            investing.
          </p>
          <div class="flex items-center gap-2 text-gray-600 text-sm">
            <img
              src="../assets/hud-statements.png"
              alt="Google"
              class="w-5 h-5"
            />
            <span>Posted on Google</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
