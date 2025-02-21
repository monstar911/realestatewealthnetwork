<template>
  <section class="p-8 my-8 bg-black">
    <!-- Reviews Section -->
    <div>
      <h2 class="text-white text-4xl text-bold text-center mb-8">
        Over
        <span class="border-b-2 border-white">FIVE Star Reviews</span> Can't Be
        Wrong...
      </h2>
      <div
        class="flex justify-center gap-8 mb-8 lg:flex-row md:flex-col sm:flex-col items-center"
      >
        <img
          data-src="//dlbf54swf3l6o.cloudfront.net/images/funnels/5-star-review-1.webp"
          data-fallback="//dlbf54swf3l6o.cloudfront.net/images/funnels/5-star-review-1.png"
          class="lazy p-6 max-h-[350px] lg:max-w-full md:max-w-full rounded-lg"
          alt="5-Star Reviews"
          src="//dlbf54swf3l6o.cloudfront.net/images/funnels/5-star-review-1.webp"
        />
        <img
          data-src="//dlbf54swf3l6o.cloudfront.net/images/funnels/5-star-review-2.webp"
          data-fallback="//dlbf54swf3l6o.cloudfront.net/images/funnels/5-star-review-2.png"
          class="lazy p-6 max-h-[350px] lg:max-w-full md:max-w-full rounded-lg"
          alt="5-Star Reviews"
          src="//dlbf54swf3l6o.cloudfront.net/images/funnels/5-star-review-2.webp"
        />
      </div>
      <div
        class="max-w-[1200px] mx-auto max-h-[600px] pb-8 overflow-auto no-scrollbar rounded-lg bg-[#efefef] p-4"
      >
        <div
          v-for="(review, index) in revieList"
          :key="index"
          class="bg-white rounded-lg p-6 mb-4 shadow-md"
        >
          <div class="flex justify-between items-start mb-4">
            <div class="flex gap-4 items-center">
              <img
                src="https://lh3.googleusercontent.com/a-/ALV-UjXDVp1SEq_rLNWX3jEOugvNyzNdNdEEfmC0UY0nzC4XDBLgEYLvVg=s120-c-rp-mo-br100"
                alt="Tea West"
                class="w-12 h-12 rounded-full object-cover"
              />
              <div class="flex flex-col">
                <p class="font-bold text-md text-gray-700 text-left">
                  {{ review.name }}
                </p>
                <div class="flex items-center gap-2">
                  <div class="flex items-center">
                    <img
                      v-for="i in review.rating"
                      :key="i"
                      src="https://dlbf54swf3l6o.cloudfront.net/images/icons/review-star-yellow.png"
                    />
                  </div>
                  <span class="text-gray-400 text-sm text-[12px] italic">{{
                    review.date
                  }}</span>
                </div>
              </div>
            </div>
          </div>
          <p
            class="my-4 leading-tight tracking-[-0.1px] text-gray-700 text-left text-[14px] font-['Arial',Helvetica,sans-serif]"
          >
            {{ review.review }}
          </p>
          <div class="flex items-center gap-2 text-gray-600 text-sm">
            <img
              src="//dlbf54swf3l6o.cloudfront.net/images/logos/google.png"
              alt="Google"
              class="w-7 h-7"
            />
            <div class="text-left text-[12px]">
              <p class="italic leading-[1.2]">Posted on</p>
              <div class="leading-[1.2]">
                <a href="https://www.google.com" class="font-bold">Google</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const revieList = [
  {
    name: "TEA WEST",
    date: "February 6th, 2025 5:28 PM (EST)",
    rating: 5,
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjUJYe1XjvOMgHVglgWsx1XLtYJHgaL_xEoLQH40D6DCplGo7ko=s120-c-rp-mo-br100",
    review:
      "Sitting at the feet of the great Cam Dunlap was a pleasure! He & His staff are candid, knowledgeable, and well-versed in the REI industry. I highly recommend",
  },
  {
    name: "John Daniel",
    date: "February 6th, 2025 5:19 PM (EST)",
    rating: 5,
    avatar: "https://dlbf54swf3l6o.cloudfront.net/images/avatars/avatar2.jpg",
    review:
      "This program is highly educational and innovatively prepared by a very professional group and loaded with lots of worthwhile business information and materials. It is a very affordable offering given the benefits of the content are considered.",
  },
  {
    name: "Juan Velasquez",
    date: "February 6th, 2025 5:13 PM (EST)",
    rating: 5,
    avatar: "https://dlbf54swf3l6o.cloudfront.net/images/avatars/avatar3.jpg",
    review: "Thank you Cam! Great team, great training!",
  },
  {
    name: "Monique Leal",
    date: "February 6th, 2025 5:08 PM (EST)",
    rating: 5,
    avatar: "https://dlbf54swf3l6o.cloudfront.net/images/avatars/avatar4.jpg",
    review:
      "The training was excellent and very informative. I learned a lot of new strategies and techniques that I can apply to my business immediately.",
  },
  {
    name: "Sarah Johnson",
    date: "February 6th, 2025 4:55 PM (EST)",
    rating: 5,
    avatar: "https://dlbf54swf3l6o.cloudfront.net/images/avatars/avatar5.jpg",
    review:
      "Outstanding program! The depth of knowledge shared and the practical applications make this invaluable for anyone in real estate investing.",
  },
];
</script>
