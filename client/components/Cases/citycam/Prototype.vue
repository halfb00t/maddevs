<template>
  <section>
    <div class="container_full background-color-black">
      <div class="container_regular">
        <h2 class="case_title_h2 case_subtitle p-48_top m-12_bottom">
          Building a prototype
        </h2>
        <TextParagraph class="m-32_bottom media-m-48_bottom case_section-paragraph">
          Prototyping the camera device was a matter of finding the most advanced solutions that the modern hardware
          industry has to offer. We went through a long trial and error process, constantly updating our plans and
          trying out yet better alternatives in each iteration. The early test prototypes were engineered using a
          module-based system:
        </TextParagraph>
        <div
          class="m-48_bottom"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom"
        >
          <Lottie
            id="prototype"
            :options="options"
            class="case_lottie"
            @animCreated="handleAnimation"
          />
        </div>
        <TextParagraph class="p-96_bottom media-p-48_bottom case_section-paragraph-grey">
          Low efficiency of power supply was a major challenge that we needed to focus on and overcome. The device’s
          initial version featured double conversion of energy where linear regulators first converted energy from power
          banks (+5 V) to make it fit for charging the Li+ accumulator (3.7 V–4.2 V), and then energy went back up to 5
          V to power the periphery of the device. Conversion was carried out by a pulsed DC/DC converter with a large
          output ripple value, so the operation of the controller and the periphery of the device was unstable.
        </TextParagraph>
      </div>
    </div>
  </section>
</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue'
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import animationData from '@/assets/lottie/citycam/prototype-citycam.json'
import playLottieMixin from '@/mixins/playLottieMixin'

export default {
  name: 'Prototype',
  components: {
    TextParagraph,
    Lottie,
  },

  mixins: [
    playLottieMixin('prototype', {
      animationData,
      autoplay: false,
      loop: false,
    }),
  ],
}
</script>

<style lang="scss" scoped>
.case {
  &_lottie {
    max-width: 813px;
  }

  &_subtitle,
  &_section-paragraph {
    text-align: center;
    color: $text-color--white;
    &-grey {
      text-align: center;
      color: $text-color--grey-opacity-40-percent;
    }
  }
}
</style>
