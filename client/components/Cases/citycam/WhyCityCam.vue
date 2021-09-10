<template>
  <section
    class="container_regular"
    data-aos="fade-up"
    data-aos-anchor-placement="bottom"
  >
    <h2 class="case_title_h2 m-12_bottom media-m-24_bottom">
      Why cities need systems like CityCam
    </h2>
    <TextParagraph class="m-72_bottom media-m-24_bottom">
      If traffic is poorly organised, virtually any process in a modern city’s life can come to a halt. Around the
      world, the most advanced technologies are applied to urban traffic to make sure that hundreds of thousands of
      people and vehicles moving around simultaneously can do it safely and efficiently.<br><br>
      Traffic cameras are one of the solutions that allow making better transportation decisions in real time. If you
      can monitor roads and intersections, you can plan itineraries optimally, whether you’re just a resident driving
      around or an official in charge of traffic management. Consider the benefits of traffic cameras for three
      potential categories of users.
    </TextParagraph>
    <div
      class="case_cards m-24_bottom"
    >
      <div class="case_cards-group">
        <Card
          v-for="(card, i) in whyCityCamCards"
          :id="`citycam-card-${i}`"
          :key="card.title"
          :class="`background-color-${card.color}`"
        >
          <div class="case_card-img">
            <Picture
              :width="396"
              :height="200"
              :file="card.img"
              :alt="card.title"
              folder="citycam"
              extension="png"
            />
          </div>
          <h3 class="case_title_h4 case_card-title m-24_top m-8_bottom">
            {{ card.title }}
          </h3>
          <TextParagraph color="#ffffff">
            {{ card.description }}
          </TextParagraph>
        </Card>
      </div>
      <Card
        id="citycam-card-2"
        class="background-color-blue-dark"
      >
        <h3 class="case_title_h4 case_card-title m-8_bottom">
          City administrators
        </h3>
        <TextParagraph color="#ffffff">
          They can identify weaknesses in the way traffic is currently organised by statistically analysing what
          crossroads and road sections get clogged frequently. Adjustments, like making certain green lights last
          longer, can solve congestion problems.
        </TextParagraph>
      </Card>
    </div>
    <TextParagraph class="m-96_bottom media-m-48_bottom">
      Providing these benefits takes cutting-edge technological solutions. The cameras need to require minimum energy
      supply and function continuously without frequent external inputs. It was a serious challenge to build them that
      way.
    </TextParagraph>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Picture from '@/components/Cases/shared/Picture'
import Card from '@/components/Cases/shared/Card'
import { whyCityCamCards, idCardList } from '@/data/caseCityCam'
import IntersectionObserverMixin from '@/mixins/IntersectionObserverMixin'
import setBackground from '@/helpers/setBackground'

export default {
  name: 'WhyCityCam',
  components: {
    TextParagraph,
    Card,
    Picture,
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
