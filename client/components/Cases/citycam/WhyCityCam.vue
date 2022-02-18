<template>
  <section
    class="container_regular"
    data-aos="fade-up"
    data-aos-anchor-placement="bottom"
  >
    <h2 class="case_title_h2 m-12_bottom media-m-24_bottom">
      Why cities need systems like CityCam
    </h2>
    <TextParagraph class="m-12_bottom">
      If traffic is poorly organised, virtually any process in a modern city’s life can come to a halt. Around the
      world, the most advanced technologies are applied to urban traffic to make sure that hundreds of thousands of
      people and vehicles moving around simultaneously can do it safely and efficiently.
    </TextParagraph>
    <TextParagraph class="m-72_bottom media-m-24_bottom">
      Traffic cameras are one of the solutions that allow making better transportation decisions in real time. If you
      can monitor roads and intersections, you can plan itineraries optimally, whether you’re just a resident driving
      around or an official in charge of traffic management. Consider the benefits of traffic cameras for three
      potential categories of users.
    </TextParagraph>

    <ColoredCards
      :cards-data="whyCityCamCards"
      grid-type="two-one"
      class="m-24_bottom"
    />

    <TextParagraph class="m-96_bottom media-m-48_bottom">
      Providing these benefits takes cutting-edge technological solutions. The cameras need to require minimum energy
      supply and function continuously without frequent external inputs. It was a serious challenge to build them that
      way.
    </TextParagraph>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import { whyCityCamCards, idCardList } from '@/data/caseCityCam'
import IntersectionObserverMixin from '@/mixins/IntersectionObserverMixin'
import setBackground from '@/helpers/setBackground'
import ColoredCards from '@/components/Cases/shared/ColoredCards/'

export default {
  name: 'WhyCityCam',
  components: {
    TextParagraph,
    ColoredCards,
  },

  mixins: [
    IntersectionObserverMixin(
      idCardList,
      setBackground,
    ),
  ],

  data() {
    return {
      whyCityCamCards,
    }
  },
}
</script>

<style lang="scss" scoped>
.case {
  &_cards {
    @include grid(repeat(1, 1fr), auto, 0, 24px);
  }

  &_cards-group {
    @include grid(repeat(2, 1fr), auto, 24px, 0);
  }

  &_card-title {
    color: $text-color--white;
  }

  &_card-img {
    min-width: 396px;
    margin: -32px 0 0;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    @media screen and (max-width: 768px) {
      margin: -20px 0 0;
    }

    @media screen and (min-width: 470px) and (max-width: 720px) {
      min-width: 550px
    }
  }

  @media screen and (max-width: 720px) {
    &_cards-group {
      @include grid(repeat(1, 1fr), auto, 0, 24px);
    }
  }
}
</style>
