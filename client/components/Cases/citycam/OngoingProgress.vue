<template>
  <section>
    <div class="container_regular">
      <h2 class="case_title_h2 m-12_bottom">
        Ongoing progress
      </h2>
      <TextParagraph class="m-48_bottom media-m-24-bottom">
        Our recent brave move in perfecting the device was to shift from microcontrollers to microprocessors as the
        latter offer wider opportunities. The prototypes and the first batch were based on Raspberry Pi Zero with a
        Huawei 4G modem as the transceiver and an OV5640 camera via the MIPI interface. The combination proved to be as
        energy-efficient as the previous version of the device.
      </TextParagraph>
    </div>
    <div
      class="container_middle m-96_bottom media-m-48_bottom slider"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom"
    >
      <Swiper
        :components="sliderTwo"
        :safari-top-bar="false"
      />
      <TextParagraph class="m-12_bottom">
        The power module adds three important functions to the RPi. First, we now can use LiFePO4 accumulators as the
        power source. Second, we can quickly charge (4A) these accumulators using solar panels at their highest
        achievable efficiency (MPPT control). Third, we enabled a neat metric collection system that monitors the entire
        device’s energy consumption, the accumulator’s charge level, and the solar activity.
      </TextParagraph>
      <TextParagraph class="m-96_bottom media-m-48_bottom">
        We continue to elaborate this traffic monitoring system. We hope that the meticulous work of our hardware and
        software engineers will ultimately result in better traffic for everyone.
      </TextParagraph>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Swiper from '@/components/Cases/shared/Swiper'
import { sliderTwo } from '@/data/caseCityCam'

export default {
  name: 'DevicePerfecting',
  components: {
    TextParagraph,
    Swiper,
  },

  data() {
    return {
      sliderTwo,
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
