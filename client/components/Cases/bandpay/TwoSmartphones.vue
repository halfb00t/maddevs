<template>
  <section class="container_full background-color-silver p-48_top p-48_bottom m-96_bottom media-m-48_bottom">
    <div class="container_regular">
      <TextParagraph class="m-48_bottom two-smartphones__paragraph">
        To deposit funds and start a project, a buyer should open the app and enter the card details.
        The funds will be deposited to the seller’s BandPay account. To receive the payment,
        the seller should add a valid US non-prepaid debit card. Once the milestone is completed
        and approved by the buyer, the money will be sent to the seller automatically.
        The seller will see the amount and the number of the milestone and agreement.
      </TextParagraph>
      <div class="two-smartphones__image-wrapper">
        <Picture
          :width="669"
          :height="652"
          folder="bandpay"
          file="two-smartphones-bandpay"
          extension="png"
          alt="The BandPay Mobile Applications."
        />
      </div>
    </div>
  </section>
</template>
<script>
import Picture from '@/components/Cases/shared/Picture'
import TextParagraph from '@/components/Cases/shared/TextParagraph'

export default {
  name: 'TwoSmartphones',
  components: {
    Picture,
    TextParagraph,
  },
}
</script>
<style lang="scss" scoped>
.two-smartphones {
  &__image-wrapper {
    max-width: 669px;
    max-height: 652px;
    margin: 0 auto;
  }
  &__paragraph {
    text-align: center;
  }
}
</style>
