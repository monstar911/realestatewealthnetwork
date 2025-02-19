<template>
  <section class="funding-section">
    <div
      class="col-inner bgCover noBorder borderSolid border3px cornersAll radius0 shadow0 P0-top P0-bottom P0H noTopMargin"
      style="padding: 0 10px"
    >
      <div
        class="de elHeadlineWrapper ui-droppable de-editable"
        style="margin-top: 0px; outline: none; cursor: pointer"
      >
        <h1
          class="ne elHeadline hsSize3 lh4 elMargin0 elBGStyle0 hsTextShadow0 colTitle"
        >
          <b>You'll Give Me $1,000,000...Really?</b>
        </h1>
      </div>
      <div
        class="de elHeadlineWrapper ui-droppable hiddenElementTools de-editable"
        style="
          margin-top: 15px;
          outline: none;
          cursor: pointer;
          font-family: 'Open Sans', Helvetica, sans-serif !important;
        "
      >
        <h2
          class="ne elHeadline hsSize2 lh3 elMargin0 elBGStyle0 hsTextShadow0"
          style="text-align: left; font-size: 20px"
        >
          <p>
            Imagine having access to $1,000,000 to fund as many deals as you
            desire, all without having to pay any fees or interest. And there's
            no need to worry about qualifying or credit checks either– it's that
            easy!
          </p>
          <p>
            Our company has already funded over $91,166,873 in deals for our
            members.
          </p>
          <p>
            I know it sounds "too good to be true" but I assure you it is not.
            I'll explain exactly how it works and how you can start using these
            funds to do deals immediately during this training.
          </p>
        </h2>
      </div>
      <div
        class="de elBTN elMargin0 ui-droppable elAlign_left de-editable"
        style="margin-top: 30px; outline: none; cursor: pointer"
      >
        <a
          href="setup.php"
          class="elButton elButtonSize1 elButtonColor1 elButtonRounded elButtonPadding2 elBtnVP_10 elButtonCorner3 elButtonFluid elBtnHP_25 elBTN_b_1 elButtonShadowN1 elButtonTxtColor1 elBTNone elButtonBlock"
          style="
            color: rgb(255, 255, 255);
            background: #30a05c;
            font-size: 20px;
          "
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

<style scoped>
.funding-section {
  padding: 2rem;
  margin: 2rem 0;
}

h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-size: 2rem;
}

.content {
  max-width: 800px;
  margin: 0 auto;
}

.proof-grid {
  max-width: 800px;
  margin: 2rem auto;
  text-align: center;
}

.proof-image {
  width: 100%;
  max-width: 600px;
  margin-bottom: 1rem;
  border-radius: 8px;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1rem 0;
}

.stat-item {
  color: var(--primary-color);
  font-weight: bold;
  font-size: 1.2rem;
}

p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}
</style>
