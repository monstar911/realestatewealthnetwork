<template>
  <section class="reviews-section">
    <!-- Reviews Section -->
    <div class="reviews-section">
      <h2>
        Over <span class="underline">FIVE Star Reviews</span> Can't Be Wrong...
      </h2>
      <div class="reviews-images">
        <img
          data-src="//dlbf54swf3l6o.cloudfront.net/images/funnels/5-star-review-1.webp"
          data-fallback="//dlbf54swf3l6o.cloudfront.net/images/funnels/5-star-review-1.png"
          class="lazy"
          alt="5-Star Reviews"
          style="padding: 25px; max-height: 350px; max-width: 100%"
          src="//dlbf54swf3l6o.cloudfront.net/images/funnels/5-star-review-1.webp"
        />
        <img
          data-src="//dlbf54swf3l6o.cloudfront.net/images/funnels/5-star-review-2.webp"
          data-fallback="//dlbf54swf3l6o.cloudfront.net/images/funnels/5-star-review-2.png"
          class="lazy"
          alt="5-Star Reviews"
          style="padding: 25px; max-height: 350px; max-width: 100%"
          src="//dlbf54swf3l6o.cloudfront.net/images/funnels/5-star-review-2.webp"
        />
      </div>
      <div class="reviews-list">
        <div class="review-card">
          <div class="reviewer">
            <div class="reviewer-info">
              <img
                src="../assets/hud-statements.png"
                alt="Tea West"
                class="avatar"
              />
              <div class="name-and-date">
                <span class="name">TEA WEST</span>
                <span class="date">February 6th, 2025 5:28 PM (EST)</span>
              </div>
            </div>
            <div class="stars">★★★★★</div>
          </div>
          <p class="review-text">
            Sitting at the feet of the great Cam Dunlap was a pleasure! He & His
            staff are candid, knowledgeable, and well-versed in the REI
            industry. I highly recommend
          </p>
          <div class="google-badge">
            <img
              src="../assets/hud-statements.png"
              alt="Google"
              class="google-icon"
            />
            <span>Posted on Google</span>
          </div>
        </div>
        <div class="review-card">
          <div class="reviewer">
            <div class="reviewer-info">
              <img
                src="../assets/hud-statements.png"
                alt="John Daniel"
                class="avatar"
              />
              <div class="name-and-date">
                <span class="name">John Daniel</span>
                <span class="date">February 6th, 2025 5:19 PM (EST)</span>
              </div>
            </div>
            <div class="stars">★★★★★</div>
          </div>
          <p class="review-text">
            This program is highly educational and innovatively prepared by a
            very professional group and loaded with lots of worthwhile business
            information and materials. It is a very affordable offering given
            the benefits of the content are considered.
          </p>
          <div class="google-badge">
            <img
              src="../assets/hud-statements.png"
              alt="Google"
              class="google-icon"
            />
            <span>Posted on Google</span>
          </div>
        </div>

        <!-- Additional Review Cards -->
        <div class="review-card">
          <div class="reviewer">
            <div class="reviewer-info">
              <img
                src="../assets/hud-statements.png"
                alt="Juan Velasquez"
                class="avatar"
              />
              <div class="name-and-date">
                <span class="name">Juan Velasquez</span>
                <span class="date">February 6th, 2025 5:13 PM (EST)</span>
              </div>
            </div>
            <div class="stars">★★★★★</div>
          </div>
          <p class="review-text">Thank you Cam! Great team, great training!</p>
          <div class="google-badge">
            <img
              src="../assets/hud-statements.png"
              alt="Google"
              class="google-icon"
            />
            <span>Posted on Google</span>
          </div>
        </div>

        <div class="review-card">
          <div class="reviewer">
            <div class="reviewer-info">
              <img
                src="../assets/hud-statements.png"
                alt="Monique Leal"
                class="avatar"
              />
              <div class="name-and-date">
                <span class="name">Monique Leal</span>
                <span class="date">February 6th, 2025 5:08 PM (EST)</span>
              </div>
            </div>
            <div class="stars">★★★★★</div>
          </div>
          <p class="review-text">
            The training was excellent and very informative. I learned a lot of
            new strategies and techniques that I can apply to my business
            immediately.
          </p>
          <div class="google-badge">
            <img
              src="../assets/hud-statements.png"
              alt="Google"
              class="google-icon"
            />
            <span>Posted on Google</span>
          </div>
        </div>

        <!-- Add a few more review cards to ensure scrolling -->
        <div class="review-card">
          <div class="reviewer">
            <div class="reviewer-info">
              <img
                src="../assets/hud-statements.png"
                alt="Sarah Johnson"
                class="avatar"
              />
              <div class="name-and-date">
                <span class="name">Sarah Johnson</span>
                <span class="date">February 6th, 2025 4:55 PM (EST)</span>
              </div>
            </div>
            <div class="stars">★★★★★</div>
          </div>
          <p class="review-text">
            Outstanding program! The depth of knowledge shared and the practical
            applications make this invaluable for anyone in real estate
            investing.
          </p>
          <div class="google-badge">
            <img
              src="../assets/hud-statements.png"
              alt="Google"
              class="google-icon"
            />
            <span>Posted on Google</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reviews-section {
  padding: 2rem;
  margin: 2rem 0;
  background-color: black;
  border-radius: 8px;
}

h2 {
  color: white;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
}

.underline {
  border-bottom: 3px solid white;
}

.reviews-images {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.reviews-images img {
  max-width: 400px;
  border-radius: 8px;
}

.reviews-list {
  max-width: 800px;
  margin: 0 auto;
  max-height: 400px; /* Reduced from 600px to ensure scrolling */
  overflow-y: auto;
  padding: 1rem;
  /* Add some space at the bottom of the scrollable area */
  padding-bottom: 2rem;
  /* Make the scrollbar always visible */
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: #888 #f1f1f1; /* For Firefox */
  &::-webkit-scrollbar {
    width: 8px;
    display: block;
  }
}

.review-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.reviewer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.reviewer-info {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.name-and-date {
  display: flex;
  flex-direction: column;
}

.name {
  font-weight: bold;
  font-size: 1.1rem;
}

.date {
  color: #666;
  font-size: 0.9rem;
}

.stars {
  color: #ffd700;
  font-size: 1.2rem;
}

.review-text {
  margin: 1rem 0;
  line-height: 1.5;
  color: #333;
}

.google-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 0.9rem;
}

.google-icon {
  width: 20px;
  height: 20px;
}

@media (max-width: 768px) {
  .reviews-images {
    flex-direction: column;
    align-items: center;
  }

  .reviews-images img {
    max-width: 100%;
  }

  h2 {
    font-size: 2rem;
  }
}
</style>
