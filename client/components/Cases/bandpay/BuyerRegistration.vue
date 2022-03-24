<template>
  <section class="m-80_bottom media-m-48_bottom">
    <section class="container_regular m-24_bottom">
      <h3 class="case_title_h2 m-34_bottom">
        Buyer registration
      </h3>
      <TextParagraph class="m-24_bottom media-m-12_bottom">
        Registration with BandPay takes place only in the mobile application. However,
        the buyer and the seller can start cooperating via a webform, too.
      </TextParagraph>
      <TextParagraph class="m-24_bottom media-m-12_bottom">
        For example, the buyer can go to the seller’s public profile and create a project request.
        With that, the system will ask the buyer to add contact information. The confirmation link will
        then be sent to the buyer’s email address for verification. The buyer then becomes a registered user.
        After that, the seller sees the request and creates an agreement.
      </TextParagraph>
      <TextParagraph class="m-24_bottom media-m-12_bottom">
        Alternatively, the seller can create an instant deposit in the app and notify the buyer via email.
        At the same time, BandPay will send an invoice to the buyer’s email address.
        After paying the invoice, the buyer becomes a registered user.
      </TextParagraph>
    </section>
    <section class="container_middle">
      <div class="case_image-wrapper">
        <Picture
          :shadow="false"
          :lazy="false"
          :radius="false"
          :width="1028"
          :height="612"
          folder="bandpay"
          file="buyer-registration"
          extension="png"
          alt="Buyer Registration"
        />
      </div>
    </section>
  </section>
</template>
<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Picture from '@/components/Cases/shared/Picture'

export default {
  name: 'BuyerRegistration',
  components: {
    TextParagraph,
    Picture,
  },
}
</script>
