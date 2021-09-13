<template>
  <section>
    <div class="container_regular">
      <h2 class="case_title_h2 m-12_bottom">
        Continuously perfecting the device
      </h2>
      <TextParagraph class="m-12_bottom">
        Later versions of the device featured video streaming with a resolution of 320×240 to 1920×1080, 32px step, a
        framerate of 1 to 30, and automatic night vision. Low power consumption still was our main achievement: the
        device uses less than 300 mW in the sleep mode and less than 1.5 W in the active mode.
      </TextParagraph>
      <TextParagraph class="m-48_bottom media-m-24-bottom">
        Another major strength of the revised device was the use of solar energy. We added an adjustable solar charge
        controller with MPPT: the default voltage is 18 V, and the charging current can go up to 4 amps. In a sunny
        place, thanks to its +20 W solar cell and +15 Ah battery, the device can work 24/7 with no charge in the active
        mode.
      </TextParagraph>
    </div>
    <div
      class="container_middle m-96_bottom media-m-48_bottom slider"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom"
    >
      <Swiper
        :components="devicePerfectingSlides"
        :safari-top-bar="false"
      />
    </div>
    <div class="container_regular">
      <h2 class="case_title_h2 m-12_bottom">
        Software components
      </h2>
      <TextParagraph class="m-96_bottom media-m-48_bottom">
        The project featured several levels of complexity: focusing on hardware engineering, we also needed to take care
        of the software part. We built an application—backend and frontend—to enable end users’ access to traffic
        monitoring. The app’s major strength was its payment system module: we made it easily scalable and capable of
        effortless integration of new payment systems. <br><br>
        To ensure smooth and efficient communication between the cameras and their backend, we built an original
        protocol on top of the transmission control protocol (TCP). We made server deployment simple so that it required
        minimal human involvement: the whole project could be deployed in just a few clicks.
      </TextParagraph>
      <TextQuote
        class="m-auto m-96_bottom media-m-48_bottom"
        author="Alexander Edakin, backend developer"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom"
      >
        We made infrastructure deployment simple so that it required minimal human involvement. In fact, you can now
        click a couple dozen buttons, and the whole project is deployed.
      </TextQuote>
      <TextParagraph class="m-24_bottom media-m-48_bottom">
        For the frontend part, we used a PWA: a rather recent technology that makes the project’s website in many ways
        akin to a regular mobile application. PWAs combine the benefits of web apps and websites as they, for example,
        both are indexable by search engines and offer dynamic data access, even when the users are offline.
      </TextParagraph>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Swiper from '@/components/Cases/shared/Swiper'
import { devicePerfectingSlides } from '@/data/caseCityCam'
import TextQuote from '@/components/Cases/shared/TextQuote'

export default {
  name: 'DevicePerfecting',
  components: {
    TextQuote,
    TextParagraph,
    Swiper,
  },

  data() {
    return {
      devicePerfectingSlides,
    }
  },
}
</script>

<style lang="scss" scoped>
.case {

  &_bold {
    font-weight: 700;
  }

  &_img-wrapper {
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));
  }

  &_img-alt {
    max-width: 606px;
    text-align: center;
    font-size: 13px;
    letter-spacing: -0.02em;
  }

  &_cards-group {
    @include grid(repeat(2, 1fr), auto, 24px, 0);

    @media screen and (max-width: 768px) {
      @include grid(repeat(1, 1fr), auto, 0, 24px);
    }
  }

  &_cards {
    @include grid(repeat(1, 1fr), auto, 0, 24px);
  }

  &_card-title {
    color: $text-color--white;
  }

  @media screen and (max-width: 768px) {
    &_img-alt {
      font-size: 11px;
    }
  }
}

/deep/ .list-item_dot {
  margin-bottom: 0;
}

/deep/ .swiper.gallery-thumbs .swiper-slide {
  opacity: 0.6;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));
}

/deep/ .swiper.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}
</style>
