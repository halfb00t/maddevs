<template>
  <div class="m-96_bottom">
    <div class="container_regular">
      <h2 class="case_title_h2 m-48_bottom">
        Results and achievements
      </h2>
      <div
        class="case_statistics case_statistics--main m-48_bottom"
        :style="'color:'+ ResultStatistics.usd.numberColor"
      >
        <div class="container_regular m-48_bottom">
          <span
            class="case_title-statistics case_text-align-center"
          >
            <span
              id="sgd"
              :data-end-value="ResultStatistics.sdg.number"
            >{{ ResultStatistics.sdg.numberText }}</span>
            <span>{{ ResultStatistics.sdg.name }} SGD {{ ResultStatistics.usd.textBeforeNumber }}</span><span
              id="usd"
              :data-end-value="ResultStatistics.usd.number"
            >{{ ResultStatistics.usd.numberText }}</span><span>{{ ResultStatistics.usd.name }} USD) funding</span>
          </span>
          <p class="case_title-statistics--description m-auto">
            {{ ResultStatistics.usd.description }}
          </p>
        </div>
      </div>
    </div>

    <div class="container_regular m-48_bottom">
      <h4 class="case_title_h4 m-24_bottom">
        Better user experience for higher adoption rates
      </h4>
      <TextParagraph class="m-24_bottom">
        GuardRails has significantly improved its adoption rates thanks to the intuitive and fast dashboard for
        end-users. The updated product has been equipped with secure access to API, command-line interface, and
        friendly policy ensuring feature requests acceptance and prioritization on a publicly available roadmap. All
        this creates an environment that puts the user and their security first.
      </TextParagraph>
      <TextParagraph>
        As of 2021, GuardRails has been adopted by 1000+ development teams representing SMEs, large enterprises, and
        government-backed organizations.
      </TextParagraph>
    </div>

    <div class="container_regular">
      <h4 class="case_title_h4 m-12_bottom">
        CouchDB optimised for 3x-5x better performance
      </h4>
      <TextParagraph class="m-48_bottom">
        The project’s DBMS could work faster so we decreased the response time from 2
        s to 200-400 ms. After all optimisations and migrations, we managed to reduce the database response time from
        2 seconds to 30 milliseconds for the most common requests. Previously, users had to wait longer for their
        accounts and repositories to become available. After we applied data structuring and indexing, the database
        started to work faster.
      </TextParagraph>
    </div>

    <div class="container_regular">
      <div
        class="case_statistics case_statistics--times"
        :style="'color:'+ ResultStatistics.usd.numberColor"
      >
        <span>
          At first, we decreased the database response time from
          <span
            id="time1"
            :data-end-value="ResultStatistics.time1.number"
          >{{ ResultStatistics.time1.numberText }}</span>{{ ResultStatistics.time1.name }}
          to
          <span
            id="time2"
            :data-end-value="ResultStatistics.time2.number"
          >{{ ResultStatistics.time2.numberText }}</span>{{ ResultStatistics.time2.name }}<span
            id="time3"
            :data-end-value="ResultStatistics.time3.number"
          >{{ ResultStatistics.time3.numberText }}</span>{{ ResultStatistics.time3.name }}. Later, we reduced it to
          <span
            id="time4"
            :data-end-value="ResultStatistics.time4.number"
          >{{ ResultStatistics.time4.numberText }}</span>{{ ResultStatistics.time4.name }}for the most common requests.
        </span>
      </div>
    </div>
  </div>
</template>

<script>

import TextParagraph from '@/components/Cases/shared/TextParagraph'
import { ResultStatistics } from '@/data/caseGuardrails'

export default {
  name: 'AgilityIsTheKey',
  components: { TextParagraph },

  data() {
    return {
      ResultStatistics,
    }
  },
}

</script>

<style lang="scss" scoped>
.case {
  &_statistics {
    text-align: center;
    &--main,
    &--times {
      @include font('Poppins', 36px, 600);
      line-height: 130%;
      letter-spacing: -0.02em;
      font-style: normal;
    }
  }

  &_title-statistics {
    &--description {
      @include font('Inter', 16px, 600);
      line-height: 135%;
      color: #404143;
      max-width: 600px;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
