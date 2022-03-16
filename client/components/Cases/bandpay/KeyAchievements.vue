<template>
  <section class="m-96_bottom media-m-48_bottom">
    <section class="container_regular m-48_bottom media-m-24_bottom">
      <h3 class="case_title_h2 m-12_bottom">
        Key achievements
      </h3>
      <TextParagraph>
        The outcome of the work completed by the Mad Devs team is a fully-fledged platform where users can build
        partnerships, make agreements, pay, and get paid. BandPay safeguards its users and ensures that everyone
        remains satisfied with the final results, such as the desired deliverables and timely payments.
      </TextParagraph>
    </section>
    <div
      class="case_iframe-wrapper m-auto m-48_bottom media-m-24_bottom"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom"
    >
      <iframe
        src="https://www.youtube.com/embed/a0V5qU5oUfA"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="case_iframe"
      />
    </div>
    <section class="container_regular m-48_bottom media-m-24_bottom">
      <TextParagraph class="m-96_bottom media-m-48_bottom">
        While working on the BandPay solution, we managed to simplify onboarding and improve project visibility.
      </TextParagraph>
      <h4 class="case_title_h5 m-12_bottom">
        Easy onboarding
      </h4>
      <TextParagraph class="m-24_bottom media-m-12_bottom">
        To facilitate the onboarding process, we prepared sufficient project documentation and adopted
        a containerisation strategy using Docker container technology. Once assigned, a developer, be it a frontend
        or backend engineer, can quickly test and deploy the project regardless of the operating system.
        In addition, we obtained good test coverage for the code (65% coverage for 82,000 lines of the backend code).
      </TextParagraph>
      <TextParagraph class="m-48_bottom media-m-24_bottom">
        Consequently, it takes around 2 days to onboard a new team member in the BandPay project,
        while in other projects, the onboarding process may last up to 2 weeks.
      </TextParagraph>
      <h4 class="case_title_h5 m-12_bottom">
        Increased project visibility
      </h4>
      <TextParagraph class="m-24_bottom media-m-12_bottom">
        Mad Devs works in close collaboration with our partners from Peklo, a digital marketing studio engaged
        in BandPay’s marketing strategies and campaigns, including metrics and analytics. Our engineers implemented
        a variety of metrics in the iOS and Android applications to improve the visibility of the project.
      </TextParagraph>
      <TextParagraph>
        We added a news feed, which shows all recent activities on the platform, such as successful and unsuccessful
        payouts, generated agreements, registered and banned accounts, as well as other activities and events.
        We also added regular reports that provide information about the key metrics and alerts that notify about errors.
      </TextParagraph>
    </section>
    <div class="container_middle">
      <div class="case_image-wrapper m-48_bottom media-m-24_bottom case_box-shadow">
        <Picture
          :shadow="false"
          :lazy="false"
          :radius="false"
          :width="1026"
          :height="16.45"
          :background="true"
          folder="common"
          file="safari-top-bar-black"
          extension="jpg"
          alt="Project visibility"
        />
        <div class="container_middle__main-image">
          <Picture
            :shadow="false"
            :lazy="false"
            :radius="false"
            :width="1028"
            :height="595.81"
            folder="bandpay"
            file="project-visibility"
            extension="png"
            alt="Project visibility"
          />
        </div>
      </div>
    </div>
    <div class="container_regular m-48_bottom media-m-24_bottom">
      <TextParagraph>
        As a result, BandPay is 100% visible and transparent for both the business owner and developers, who can see
        everything happening in the project. This system allows for tracking the activity of the users and collecting
        their feedback in real time. Moreover, our developers can instantly detect and fix problems, even before users
        report them. For this purpose, we extensively apply Sentry.io—a helpful tool for error handling and alerting.
      </TextParagraph>
    </div>
    <div class="container_middle">
      <div class="case_image-wrapper m-48_bottom media-m-24_bottom case_box-shadow">
        <Picture
          :shadow="false"
          :lazy="false"
          :radius="false"
          :width="1026"
          :height="16.45"
          :background="true"
          folder="common"
          file="safari-top-bar-black"
          extension="jpg"
          alt="Project sentry"
        />
        <div class="container_middle__main-image">
          <Picture
            :shadow="false"
            :lazy="false"
            :radius="false"
            :width="1028"
            :height="476.81"
            folder="bandpay"
            file="sentry-errors"
            extension="png"
            alt="Project sentry"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Picture from '@/components/Cases/shared/Picture'

export default {
  name: 'KeyAchievements',
  components: {
    TextParagraph,
    Picture,
  },
}
</script>
<style lang="scss" scoped>
.case {
  &_image-wrapper {
    border-radius: 3px;
    overflow: hidden;
  }
  &_iframe-wrapper {
    width: 1037px;
    height: 420px;
  }

  &_iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
  @media screen and (max-width: 1046px) {
    &_iframe-wrapper {
      position: relative;
      padding-bottom: 56.25%;
      width: 100%;
      height: 100%;
    }

    &_iframe {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>
