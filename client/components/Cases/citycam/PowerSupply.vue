<template>
  <section>
    <div class="container_regular m-96_top media-m-48_top">
      <h2 class="case_title_h2 m-12_bottom">
        Reimagining power supply
      </h2>
      <TextParagraph class="m-96_bottom media-m-48_bottom">
        We refactored the devices’ hardware and software components to move on to a new concept of power supply. We got
        rid of double conversion to save up energy, and we also left linear conversion behind to increase efficiency.
      </TextParagraph>
      <TextQuote
        class="m-auto m-96_bottom media-m-48_bottom"
        author="Anton Kozlov, hardware engineer"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom"
      >
        We devised a concept of uninterruptible power supply from power banks with instant switching to a backup Li+
        battery. As a result, energy consumption was halved.
      </TextQuote>
      <TextParagraph class="m-96_bottom media-m-48_bottom">
        We further gave up ready-made modules and started making our own boards: this was a way to reduce costs, simplify
        the circuitry, and introduce more flexibility in the development of the device.
      </TextParagraph>
      <h2 class="case_title_h2 m-12_bottom">
        Active components of the device
      </h2>

      <div
        class="m-96_bottom media-m-24_bottom"
      >
        <ListNumbered>
          <ListNumberedItem
            v-for="component in components"
            :key="component.text"
            class="m-10_bottom media-m-24_bottom"
          >
            <template #bold>
              {{ component.title }}
            </template>
            {{ component.text }}
          </ListNumberedItem>
        </ListNumbered>
      </div>
    </div>
    <div
      class="container_full background-color-purple-blue m-96_bottom media-m-48_bottom"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom"
    >
      <div class="container_regular">
        <h2 class="case_title_h2 case_subtitle p-48_top media-p-24_top m-24_bottom media-m-12_bottom">
          Board tracing
        </h2>
        <LottieMad
          id="power-supply"
          v-lazy-load
          class="case_lottie"
          :lottie-link="$getMediaFromS3(`/lottie/board-tracing.json`)"
          @animCreated="handleAnimation"
        />
      </div>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextQuote from '@/components/Cases/shared/TextQuote'
import ListNumbered from '@/components/Cases/shared/ListNumbered'
import ListNumberedItem from '@/components/Cases/shared/ListNumberedItem'
import { components } from '@/data/caseCityCam'
import playLottie from '@/helpers/playLottie'
import LottieMad from '@/components/shared/LottieMad'

export default {
  name: 'PowerSupply',
  components: {
    ListNumberedItem,
    ListNumbered,
    TextParagraph,
    TextQuote,
    LottieMad,
  },

  data() {
    return {
      components,
    }
  },

  methods: {
    handleAnimation(animation) {
      playLottie(animation, 'power-supply')
    },
  },
}
</script>

<style lang="scss" scoped>
.case {
  &_lottie {
    padding-bottom: 48px;
    @media screen and (max-width: 576px) {
      padding-bottom: 24px;
    }
  }
  &_subtitle{
    text-align: center;
    @media screen and (max-width: 576px) {
      font-size: 20px;
    }
  }
}
</style>
