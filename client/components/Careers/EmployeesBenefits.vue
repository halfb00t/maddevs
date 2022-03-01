<template>
  <div class="employees-benefits">
    <div class="employees-benefits_grid-container container">
      <h2
        class="employees-benefits_title"
      >
        {{ $t('careers.section-7.title') }}
      </h2>
      <div
        class="employees-benefits_benefits-cards"
      >
        <LazyHydrate
          v-for="(benefit, i) of employeesBenefits"
          :key="`benefit_${i}`"
          when-visible
        >
          <BenefitCard
            v-bind="benefit"
          />
        </LazyHydrate>
      </div>
    </div>
    <div class="employees-benefits_slider-wrap">
      <LazyHydrate when-visible>
        <UISlider
          :options="swiperOptions"
          :slides="slides"
        />
      </LazyHydrate>
    </div>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import { slides } from '@/data/careersPage'

export default {
  name: 'EmployeesBenefits',
  components: {
    LazyHydrate,
    BenefitCard: () => import('@/components/Careers/shared/BenefitCard'),
    UISlider: () => import('@/components/shared/UISlider'),
  },

  data() {
    return {
      slides,
      swiperOptions: {
        speed: 750,
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
        loop: false,
        grabCursor: true,
        keyboard: {
          enabled: true,
        },

        autoplay: {
          delay: 2500,
        },
      },
    }
  },

  computed: {
    employeesBenefits() {
      return [
        {
          icon: {
            name: 'hours',
            alt: 'Hours Icon.',
            width: 31,
            height: 30,
          },

          title: this.$t('careers.section-7.list-items-1'),
        },
        {
          icon: {
            name: 'trips',
            alt: 'Trips Icon.',
            width: 28,
            height: 32,
          },

          title: this.$t('careers.section-7.list-items-2'),
        },
        {
          icon: {
            name: 'lessons',
            alt: 'Lessons Icon.',
            width: 36,
            height: 31,
          },

          title: this.$t('careers.section-7.list-items-3'),
        },
        {
          icon: {
            name: 'training',
            alt: 'Training Icon.',
            width: 39,
            height: 24,
          },

          title: this.$t('careers.section-7.list-items-4'),
        },
        {
          icon: {
            name: 'culture',
            alt: 'Culture Icon.',
            width: 24,
            height: 31,
          },

          title: this.$t('careers.section-7.list-items-5'),
        },
        {
          icon: {
            name: 'term',
            alt: 'Docs Icon.',
            width: 26,
            height: 30,
          },

          title: this.$t('careers.section-7.list-items-6'),
        },
        {
          icon: {
            name: 'conferences',
            alt: 'Microphone Icon.',
            width: 20,
            height: 33,
          },

          title: this.$t('careers.section-7.list-items-7'),
        },
        {
          icon: {
            name: 'parties',
            alt: 'Cocktail Glass Icon.',
            width: 31,
            height: 36,
          },

          title: this.$t('careers.section-7.list-items-8'),
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.employees-benefits {
  padding-top: 100px;

  &_grid-container,
  &_benefits-cards {
    display: grid;
  }

  &_grid-container {
    grid-template-columns: 1fr 2fr;
    margin-bottom: 61px;

    @media screen and (max-width: 768px) {
      margin-bottom: 32px;
    }
  }

  &_benefits-cards {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;

    @media screen and (max-width: 740px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &_title {
    margin-right: 48px;
    @include font('Inter', 60px, 900);
    letter-spacing: -2.6px;
    line-height: 64px;
    color: $text-color--red;
  }

  &_slider-wrap {
    max-width: 1440px;
    margin: 0 auto;
  }

  @media screen and (max-width: 1340px) {
    &_grid-container {
      grid-template-columns: 1fr;
    }

    &_benefits-cards {
      grid-gap: 8px;
    }

    &_title {
      margin-right: 0;
      margin-bottom: 29px;
    }
  }

  @media screen and (max-width: 1024px) {
    padding-top: 62px;

    &_title {
      margin-bottom: 23px;
      font-size: 40px;
      line-height: 118%;
      letter-spacing: -0.04em;
    }
  }

  @media screen and (max-width: 375px) {
    padding-top: 43px;
  }
}

/deep/ .benefit-card {
  padding: 30px 27px;

  @media screen and (max-width: 1024px) {
    padding: 15px;
  }

  @media screen and (max-width: 740px) {
    &__title br {
      display: none;
    }
  }
}

/deep/ .swiper-slide {
  height: 415px;
  width: 415px;

  @media screen and (max-width: 768px) {
    height: 293px;
    width: 293px;
  }
}
</style>
