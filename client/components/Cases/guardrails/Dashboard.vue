<template>
  <div>
    <div class="container_regular">
      <h2 class="case_title_h2 m-12_bottom">
        The dashboard makes a difference
      </h2>
      <TextParagraph class="m-48_bottom">
        An enhanced user experience makes a product more compelling and valuable for its users. That is why building an
        intuitive dashboard was instrumental in giving a boost to the GuardRails solution. The data dashboard developed
        by Mad Devs from scratch allowed the app users to have a look inside their code and visualize its
        vulnerabilities. While working on this project, we created two versions of the dashboard.
      </TextParagraph>

      <h3 class="case_title_h4 m-12_bottom">
        Dashboard version 1
      </h3>
      <TextParagraph class="m-48_bottom">
        Having a tight timeframe for this task, we developed the first version of the dashboard in 3 months,
        implementing 50% of the core scanning functionality. The dashboard showed Git repositories and a list of
        projects linked to them. By enabling a particular repository, the user initiated security checks in the
        projects. Once the code scans were performed, the dashboard provided information about the vulnerabilities
        identified by the app, namely, how many issues were detected and in which commits they were found. The dashboard
        made it possible to check not only a PR comment but also commits associated with pull requests.
      </TextParagraph>
    </div>

    <div
      class="container_full case_container background-color-outer-space back m-72_bottom media-m-48_bottom p-72_top media-p-41_top"
    >
      <div v-mad-parallax="animationSettings">
        <div class="case_image-wrap">
          <Picture
            folder="guardrails"
            file="dashboard-group-v2"
            extension="png"
            alt="Dashboard version 1"
            :width="1440"
            :height="335"
            :background="false"
            :lazy="false"
          />
        </div>
      </div>
    </div>

    <div class="container_regular">
      <h3 class="case_title_h4 m-12_bottom">
        Dashboard version 2
      </h3>

      <TextParagraph class="m-48_bottom">
        For the second version of the dashboard, we had a list of updated product requirements and a more flexible
        timeline and budget. So we elaborated on the dashboard’s UI design and functionality and optimised its
        performance characteristics, such as speed and stability. The second version offered more detailed settings and
        reports - for example, the user could view the history of all scans and reports, see newly detected issues, and
        get remediation advice.
      </TextParagraph>

      <TextParagraph class="m-48_bottom">
        The updated dashboard allowed users to keep track of the security issues, gather statistics, and analyze
        vulnerabilities. The Insights section showed the total number of issues that were detected and fixed in a
        certain period of time, the types of vulnerabilities and their occurrence, and other useful data.
      </TextParagraph>
    </div>
    <div class="container_full">
      <div class="case-image-wrapper m-96_bottom media-m-48_bottom">
        <img
          v-lazy-load
          :width="1028"
          :height="612"
          class="case-image-wrapper__image"
          :data-src="$getMediaFromS3('/images/Cases/guardrails/png/dashboard-v3.png')"
          alt="Dashboard version 2"
        >
      </div>
    </div>
  </div>
</template>

<script>
import Picture from '@/components/Cases/shared/Picture'
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import MadParallax from '@/plugins/mad-parallax'

export default {
  name: 'Dashboard',
  components: {
    TextParagraph,
    Picture,
  },

  directives: {
    MadParallax,
  },

  data() {
    return {
      animationSettings: {
        reverse: true,
        maxMove: 30,
        customMove: true,
        speed: 0.3,
        startPoint: 3,
        setIndentTop: true,
      },
    }
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
.case {
  &_container {
    max-height: 482px;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      max-height: 276px;
    }
  }

  &-guardrails-image {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  &_image-wrap {
    min-width: 3450px;
    max-width: 3450px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    @media screen and (max-width: 1024px) {
      left: unset;
      right: 1220px;
      transform: none;
    }
    @media screen and (max-width: 768px) {
      min-width: 2600px;
      max-width: 2600px;
      right: 918px;

    }
  }
}

</style>
