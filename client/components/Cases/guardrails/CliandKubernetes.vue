<template>
  <div>
    <div class="container_regular">
      <h2 class="case_title_h2 m-12_bottom">
        Command-line interface (CLI) implemented for GuardRails
      </h2>
      <TextParagraph class="m-48_bottom">
        The CLI offers a convenient way to set commands and communicate with a program. Implementing this text interface
        was another contribution to the app’s usability and one more way of interacting with the GuardRails’ product
        along with the dashboard and PR. The CLI enabled scanning without pushing to the repository and provided a
        number of intuitive commands for the app’s usage.
      </TextParagraph>
    </div>

    <div class="container_full">
      <div class="case-image-wrapper m-96_bottom">
        <!--        todo add shadow to img-->
        <img
          v-lazy-load
          :data-src="$getMediaFromS3('/images/Cases/guardrails/png/cli.png')"
          alt="Guardrails CLI"
          class="case-guardrails-image"
        >
      </div>
    </div>

    <div class="container_regular">
      <h2 class="case_title_h2 m-12_bottom">
        Availability in Kubernetes & Enterprise version
      </h2>

      <TextParagraph class="m-48_bottom">
        Mad Devs helped to develop an on-premise version of the app, which could fully meet the needs of GuardRails’
        enterprise customers, ensuring the security of their data. We also assisted with the creation of multiple
        options for deployment, including Kubernetes. Adopting Kubernetes expedited the deployment and scaling of the
        app, which was a time-saving strategy for enterprises.
      </TextParagraph>
    </div>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'

export default {
  name: 'HighLevelOverview',
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
}

</style>
