<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-24_bottom media-m-12_bottom">
      OTT-like video streaming platform & online cinema
    </h2>
    <TextParagraph class="m-24_bottom media-m-12_bottom">
      A custom video streaming solution* was created to provide the ultimate entertainment experience to isolated groups
      of people feeling homesick. Access and the ability to securely watch familiar and up-to-date content on any device
      is something that closely resembles home and its comforts.
    </TextParagraph>
    <TextParagraph>
      According to the Statement of Work, we ensured the platform’s 100% autonomous work and strictly followed the security compliance requirements.
      However, due to an NDA, we are not authorised to share the how-tos and best
      practices related to security.
    </TextParagraph>
    <TextQuote class="m-auto m-96_top m-96_bottom media-m-48_top media-m-48_bottom">
      Yourcast.TV started as Mad Devs’ pet video-streaming project and evolved into a larger service after we open-sourced our code and found a customer.
      We respect the customer’s request to keep this project under the NDA, and we will not disclose the project’s name while sharing its details.
    </TextQuote>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextQuote from '@/components/Cases/shared/TextQuote'

export default {
  name: 'AboutYourcast',
  components: {
    TextParagraph,
    TextQuote,
  },
}
</script>
