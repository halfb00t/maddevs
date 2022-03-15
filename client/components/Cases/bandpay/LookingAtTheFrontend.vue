<template>
  <section class="container_regular m-96_bottom media-m-48_bottom">
    <h3 class="case_title_h2 m-12_bottom">
      Looking at the frontend
    </h3>
    <TextParagraph class="m-48_bottom media-m-24_bottom">
      We chose React.js to develop the frontend of the BandPay solution,
      taking advantage of the library’s opportunities, such as the following:
    </TextParagraph>
    <ColoredCards
      grid-type="two-one"
      :cards-data="lookingAtFrontendCards.slice(0, 3)"
      class="m-24_bottom"
    />
    <ColoredCards
      grid-type="two-one"
      :cards-data="lookingAtFrontendCards.slice(3)"
      class="m-48_bottom media-m-24_bottom"
    />
    <TextParagraph>
      We used Stripe.js and Stripe elements to integrate Stripe in the BandPay
      React app and create custom payment forms. The Mad Devs engineers made it possible to send an
      agreement via email with an inserted link that leads to the payment form UI.
    </TextParagraph>
  </section>
</template>
<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import ColoredCards from '@/components/Cases/shared/ColoredCards'
import { lookingAtFrontendCards } from '@/data/caseBandpay'

export default {
  name: 'LookingAtTheFrontend',
  components: {
    TextParagraph,
    ColoredCards,
  },

  data() {
    return {
      lookingAtFrontendCards,
    }
  },
}
</script>
<style lang="scss" scoped>

</style>
