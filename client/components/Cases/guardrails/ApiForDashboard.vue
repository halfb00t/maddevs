<template>
  <div>
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
      <div class="case-image-wrapper m-96_bottom">
        <img
          v-lazy-load
          :data-src="$getMediaFromS3('/images/Cases/guardrails/png/dashboard-api.png')"
          alt="Dashboard version 2"
          class="case-guardrails-image"
        >
      </div>
    </div>

    <div class="container_regular">
      <h3 class="case_title_h3 m-12_bottom">
        Scanning mechanism
      </h3>
      <TextParagraph class="m-48_bottom media-m-48_bottom">
        Scanning is an essential part of the customer’s app. Mad Devs introduced significant changes to the scanning
        mechanism which resulted in better stability and higher speed— a user could get a quick assessment of the entire
        project. In addition, support for 10 more scanning engines and 5 more programming languages have been
        implemented into the GuardRails solution.
      </TextParagraph>

      <blockquote class="case_blockquote-box m-48_bottom">
        We increased the number of scanning engines from 15 to 25 and the number of programming languages—from 10 to 15.
      </blockquote>
    </div>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'

export default {
  name: 'APIforDashboard',
  components: {
    TextParagraph,
  },
}
</script>

<style lang="scss" scoped>
.case {

  &-guardrails-image {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  &_blockquote-box {
    border-left: 2px solid #ec1c24;
    font-family: "Inter", sans-serif;
    font-size: 17px;
    font-weight: 400;
    color: #404143;
    font-style: italic;
    line-height: 166%;
    letter-spacing: -.035em;
    padding-left: 35px;
    margin: 0 0 16px;
  }
}

</style>
