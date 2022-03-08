<template>
  <div class="m-96_bottom media-m-48_bottom">
    <div class="container_regular">
      <h2 class="case_title_h2 m-12_bottom">
        Building an API for the dashboard
      </h2>
      <TextParagraph class="m-48_bottom">
        When we joined the project, there was a database but no backend for the dashboard. By building an API,
        we enabled the dashboard to obtain data from the database and display it to the user. The API facilitated access
        to data: now, it could be easily fetched from the database and demonstrated as scans or reports.
      </TextParagraph>
    </div>

    <div class="container_full">
      <div class="case-image-wrapper m-96_bottom media-m-48_bottom">
        <img
          v-lazy-load
          :data-src="$getMediaFromS3('/images/Cases/guardrails/png/dashboard-api-v2.png')"
          alt="Dashboard version 2"
          class="case-image-wrapper__image"
        >
      </div>
    </div>

    <div class="container_regular">
      <h3 class="case_title_h3 m-12_bottom">
        Scanning mechanism
      </h3>
      <TextParagraph class="m-48_bottom media-m-48_bottom">
        Scanning is an essential part of the customer’s app. Mad Devs introduced significant changes to the scanning
        mechanism which resulted in better stability and higher speed - a user could get a quick assessment of the entire
        project. In addition, support for 10 more scanning engines and 5 more programming languages have been
        implemented into the GuardRails solution.
      </TextParagraph>

      <TextQuoteBox>
        We increased the number of scanning engines from 15 to 25 and the number of programming languages - from 10 to 15.
      </TextQuoteBox>
    </div>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextQuoteBox from '@/components/Cases/shared/TextQuoteBox'

export default {
  name: 'ApiForDashboard',
  components: {
    TextParagraph,
    TextQuoteBox,
  },
}
</script>

<style lang="scss" scoped>

.case-image-wrapper{
  padding: 0 25px;
  &__image{
    width: 100%;
    height: auto;
    display: block;
    margin: auto;
    max-width: 1028px;
    filter: drop-shadow(0px 2px 7px rgba(0, 0, 0, 0.05)) drop-shadow(0px 5.47001px 41.35px rgba(0, 0, 0, 0.1));
  }
}

</style>
