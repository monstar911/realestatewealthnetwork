<template>
  <section class="when-is-section">
    <div
      class="row bgCover noBorder borderSolid border3px cornersAll radius0 shadow0 P0-top P0-bottom P0H noTopMargin"
      style="
        padding-top: 20px;
        padding-bottom: 20px;
        margin: 0px;
        outline: none;
      "
    >
      <div
        id="col-left-137-100"
        class="col-md-6 innerContent col_left ui-resizable"
        style="outline: none"
      >
        <div
          class="col-inner bgCover noBorder borderSolid border3px cornersAll radius0 shadow0 P0-top P0-bottom P0H noTopMargin"
          style="padding: 0 10px"
        >
          <div
            class="de elImageWrapper de-image-block elAlign_center elMargin0 ui-droppable de-editable"
            style="margin-top: 35px; outline: none; cursor: pointer"
          >
            <div class="calendar">
              <img
                data-src="//dlbf54swf3l6o.cloudfront.net/images/misc/vwacalendar-blank.webp"
                data-fallback="//dlbf54swf3l6o.cloudfront.net/images/misc/vwacalendar-blank.jpg"
                class="lazy"
                alt="Real Estate Wealth Summit - Event Date"
                width="300"
                src="//dlbf54swf3l6o.cloudfront.net/images/misc/vwacalendar-blank.webp"
              />
              <div class="month">March</div>
              <div class="dates">18<span class="calAnd">-</span>20</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.when-is-section {
  padding: 2rem;
  /* background: rgba(0, 0, 0, 0.2); */
  border-radius: 8px;
}

h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.calendar {
  background: rgb(48, 160, 92);
  width: fit-content;
  padding: 1rem 2rem;
  border-radius: 8px;
  margin: 1rem 0;
  text-align: center;
  position: relative;
  color: #000;
  font-family: "Verdana";
  font-weight: 900;
}

.month {
  color: black;
  font-size: 1.2rem;
  font-weight: bold;

  position: absolute;
  font-size: 36px;
  top: 40px;
  left: 50%;
  transform: translate(-50%, -50%);
}

.dates {
  color: black;
  font-size: 2rem;
  font-weight: bold;
  position: absolute;
  font-size: 65px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

p {
  margin-bottom: 1rem;
  line-height: 1.6;
}
</style>
