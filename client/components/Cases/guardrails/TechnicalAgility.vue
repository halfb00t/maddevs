<template>
  <div class="m-96_bottom">
    <div class="container_regular">
      <h2 class="case_title_h2 m-12_bottom">
        Technical agility
      </h2>
      <TextParagraph class="m-48_bottom">
        Getting customer priorities right is crucial for product development. Prioritizing GuardRails’ requests and
        understanding their urgency allowed us to deliver results in a fast and efficient way. The technical agility of
        the Mad Devs team came useful, too.
      </TextParagraph>

      <TextQuoteBox>
        Being technically agile, we can quickly migrate to new platforms and switch to different technologies, adapting
        them to the needs of the project. That can save a customer plenty of time and costs.
      </TextQuoteBox>
    </div>
    <div class="container_regular">
      <h3 class="case_title_h4 m-12_bottom">
        React + Semantic UI
      </h3>
      <TextParagraph class="m-48_bottom">
        While working on the first version of the dashboard, we aimed to create a minimum
        viable solution in a short span of time. Once GuardRails identified a list of features necessary to achieve the
        product-market fit, we could focus on the second version of the dashboard.
      </TextParagraph>

      <TextParagraph class="m-48_bottom">
        To facilitate and speed up the frontend development, we opted for React and
        Semantic UI. As a result, we developed the dashboard based on pre-built components in just 3 months.
      </TextParagraph>
    </div>
    <div class="container_regular">
      <h3
        v-prlx="TechnicalAgilityTextAnimation"
        class="case_title_h4 m-12_bottom"
      >
        Netlify
      </h3>
      <TextParagraph
        v-prlx="TechnicalAgilityTextAnimation"
        class="m-48_bottom"
      >
        The CI/CD method is very important in app development as it automates the building, testing, and deployment
        processes. This allows developers to add new features and updates and immediately deliver them to the app users.
        Thus, CI/CD helps to derive benefits even from a simple prototype with some basic functionality.
      </TextParagraph>
      <TextParagraph
        v-prlx="TechnicalAgilityTextAnimation"
        class="m-48_bottom"
      >
        Netlify is a helpful tool that supports CI/CD and automatically builds and deploys the app changes. The
        GuardRails app’s dashboard was basically static files that had to be served, and Netlify had everything needed
        to quickly deploy static sites, namely:
      </TextParagraph>

      <!--     todo this component has bug with scrolling - need refactoring -->
      <div class="case_cards-container">
        <div class="case_column">
          <CardTechSolution
            v-for="result in TechnicalAgilityNetlify.slice(0, 2)"
            v-bind="result"
            :key="`guardrails-${result.icon}`"
            folder="guardrails"
          />
        </div>
        <div
          v-prlx="TechnicalAgilityCardsAnimation"
          class="case_column"
        >
          <CardTechSolution
            v-for="result in TechnicalAgilityNetlify.slice(2, 6)"
            v-bind="result"
            :key="`guardrails-${result.icon}`"
            folder="guardrails"
          />
        </div>
      </div>
      <!--     todo this component has bug with scrolling - need refactoring -->

      <TextQuoteBox class="m-48_bottom">
        We simply plugged our GitHub repository and added a little configuration; as a result, we had backend and
        frontend being built, deployed, and served in one place.
      </TextQuoteBox>
    </div>

    <div class="container_regular">
      <h3 class="case_title_h4 m-12_bottom">
        Database
      </h3>
      <TextParagraph class="m-48_bottom">
        We used CouchDB, a NoSQL database offering storage with a flexible scheme: developers can change the structure
        of saved data on the fly. This is a good fit for projects, in which the requirements are not clearly defined and
        can change anytime.
      </TextParagraph>
      <TextParagraph class="m-48_bottom">
        NoSQL databases are cost-effective development tools that perform well with high loads. Although they are
        fundamentally different from relational databases, it is possible to migrate data from NoSQL to SQL anytime in
        the future.
      </TextParagraph>
    </div>

    <div class="container_regular">
      <h3 class="case_title_h4 m-12_bottom">
        TypeScript
      </h3>
      <TextParagraph class="m-48_bottom">
        Different development tools may offer similar solutions—each with its benefits
        and disadvantages. It is highly important to choose those that meet the project needs at the moment. Some of
        them might be a perfect fit in the early stage of development, but as the product grows, we shift to other
        tools.
      </TextParagraph>
      <TextParagraph class="m-48_bottom">
        At the beginning of the GuardRails project, we used JavaScript due to time
        and budget limitations. Thus, we could write both the frontend and backend code in one language. At the time,
        we could keep the code tight when the codebase itself was relatively small.
      </TextParagraph>
      <TextParagraph class="m-48_bottom">
        As the project began to grow, we needed a more powerful tool to support
        the increased codebase. So we chose TypeScript that can detect and prevent errors in projects of varying
        scales. We seamlessly migrated to this language as we could start plugging in TypeScript on top of the
        existing JavaScript codebase.
      </TextParagraph>
    </div>

    <div class="container_regular">
      <h3 class="case_title_h4 m-12_bottom">
        Infrastructure optimisation & new technology stack
      </h3>
      <TextParagraph class="m-48_bottom">
        To prepare the project for further growth, Mad Devs started to move it to a new stack to make sure that
        GuardRails relies on the best-suited technologies. It was also necessary to pick cost-effective solutions for
        better scalability.
      </TextParagraph>
    </div>

    <div class="container_regular">
      <h3 class="case_title_h4 m-12_bottom">
        Implemented Ad Service
      </h3>
      <TextParagraph class="m-48_bottom">
        To prepare the project for further growth, Mad Devs started to move it to a new stack to make sure that
        GuardRails relies on the best-suited technologies. It was also necessary to pick cost-effective solutions
        for better scalability.
        <!--      todo check this text. its duplicated-->
      </TextParagraph>
      <LottieMad
        class="case_lottie"
        height="670px"
        :lottie-link="$getMediaFromS3(`/images/Cases/guardrails/lottie/implemented-ad-service.json`)"
        :autoplay="true"
      />
      <!-- todo add correct size to animation and bg-->
      <TextParagraph class="m-48_bottom">
        First, GuardRails was hosted on Google Cloud Platform with their app running on Docker Swarm. To reduce expenses
        related to cloud resource consumption, we migrated the customer to AWS using Kubernetes.
      </TextParagraph>
    </div>

    <div class="container_regular">
      <h3 class="case_title_h4 m-12_bottom">
        Migration from CouchDB to PostgreSQL+GraphQL
      </h3>
      <TextParagraph class="m-48_bottom">
        We transferred all data from CouchDB to PostgreSQL to ensure the use of the latest technology, feature-rich and
        well-supported. Also, we added GraphQL to fetch data promptly and efficiently. It took us just 1 month to
        complete
        both tasks—migrate to PostgreSQL and add GraphQL.
      </TextParagraph>
    </div>

    <div class="container_regular">
      <h3 class="case_title_h4 m-12_bottom">
        Here’s what the architecture became after migration
        to the new stack
      </h3>
      <TextParagraph class="m-48_bottom">
        Our workflow is thoroughly collaborative and transparent. The various tools we employ help us make sure that
        everyone on the team is on the same page, that tasks get properly tracked and finalised on time,
        and that issues are quickly spotted and resolved.
      </TextParagraph>
      <!-- todo add correct size to animation and bg-->
      <LottieMad
        class="case_lottie"
        height="670px"
        :lottie-link="$getMediaFromS3(`/images/Cases/guardrails/lottie/architecture.json`)"
        :autoplay="true"
      />
    </div>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import LottieMad from '@/components/shared/LottieMad'
import TextQuoteBox from '@/components/Cases/shared/TextQuoteBox'
import CardTechSolution from '@/components/Cases/shared/CardTechSolution'
import { TechnicalAgilityNetlify } from '@/data/caseGuardrails'

export default {
  name: 'TechnicalAgility',
  components: {
    TextParagraph,
    LottieMad,
    TextQuoteBox,
    CardTechSolution,
  },

  data() {
    return {
      TechnicalAgilityNetlify,
      TechnicalAgilityTextAnimation: {
        direction: 'y',
        speed: 0.1,
        fromBottom: false,
        reverse: true,
        limit: {
          min: -56,
          max: 56,
        },

        mobileMaxWidth: 977,
      },

      TechnicalAgilityCardsAnimation: {
        direction: 'y',
        speed: 0.3,
        fromBottom: false,
        reverse: true,
        limit: {
          min: -179,
          max: 56,
        },

        mobileMaxWidth: 977,
      },
    }
  },

}
</script>

<style lang="scss" scoped>
.case {
  &-guardrails-image {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  &_cards-container {
    @include grid(repeat(2, 1fr), auto, 24px, 0);
  }

  &_column {
    @include grid(repeat(1, 1fr), repeat(4, minmax(min-content, max-content)), 0, 24px);

    ::v-deep {
      .card-content {
        align-self: start;
      }
    }
  }

  @media screen and (max-width: 976px) {
    &_cards-container {
      margin-bottom: 96px;
      @include grid(repeat(1, 1fr), auto, 0, 10px);
    }

    &_column {
      grid-row-gap: 10px;
    }
  }
  @media screen and (max-width: 768px) {
    &_cards-container {
      margin-bottom: 48px;
    }
  }

}
</style>
