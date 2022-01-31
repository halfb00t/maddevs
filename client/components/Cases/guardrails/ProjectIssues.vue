<template>
  <section
    class="container_regular"
    data-aos="fade-up"
    data-aos-anchor-placement="bottom"
  >
    <h2 class="case_title_h2 m-24_bottom">
      Project issues and how we resolved them
    </h2>
    <div
      class="case_cards"
    >
      <div class="case_cards-group">
        <Card
          v-for="card in ProjectsIssuesCards"
          :key="card.title"
          :class="`background-color-${card.color}`"
        >
          <div class="case_card-img">
            <Picture
              :width="396"
              :height="200"
              :file="card.img"
              :alt="card.title || 'Image'"
              folder="guardrails"
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
      <div class="case_cards-group m-96_bottom media-m-48_bottom">
        <Card
          class="background-color-turquoise"
        >
          <!--todo refactor this component like base Card (with props)  -->
          <h3 class="case_title_h4 case_card-title m-8_bottom">
            Need for user-friendly reports
          </h3>
          <TextParagraph color="#ffffff">
            Mad Devs developed the security reporting
          </TextParagraph>
        </Card>

        <Card
          class="background-color-silver"
        >
          <h3 class="case_title_h4 m-8_bottom">
            False positives occurred at vulnerability detection
          </h3>
          <TextParagraph>
            We expanded the number of open source libraries under the hood for a better quality of results
          </TextParagraph>
        </Card>
      </div>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Picture from '@/components/Cases/shared/Picture'
import Card from '@/components/Cases/shared/Card'
import { ProjectsIssuesCards } from '@/data/caseGuardrails'

export default {
  name: 'ProjectIssues',
  components: {
    TextParagraph,
    Card,
    Picture,
  },

  data() {
    return {
      ProjectsIssuesCards,
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
