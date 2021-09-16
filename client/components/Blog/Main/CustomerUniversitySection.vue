<template>
  <section class="customer-university">
    <div class="container">
      <CustomerUniversityTitle
        title="Customer"
        subtitle="University"
      />
      <p class="customer-university__text">
        Many businesses still hesitate to hire an IT company to develop a technical solution or
        enhance an existing product because they aren’t aware of many processes and have more
        questions than replies. If you are one of them, this section is for you.
      </p>
      <p class="customer-university__text customer-university__text--margin">
        Here, you can find information <span class="customer-university__text--yellow"> about the main software development processes, useful tips on
          choosing a company to work on your product, determining whether the budget is reasonable,</span> and
        how Mad Devs company approaches and takes care of every project.
      </p>
      <div class="customer-university__rows">
        <div class="customer-university__columns">
          <CustomerUniversityTextCard
            title="Pricing Strategies"
            description="If it seems that you are overpaying for upgrading your existing or
            developing a new solution, or if you have doubts about how much your product will
            cost, this section is for you. Here, you learn about the main pricing strategies and
            factors that influence price formation and get useful tips on choosing the best development
            company to work on your project."
          />
          <div>
            <CustomerUniversityCard
              v-if="featuredCUPost"
              :post="featuredCUPost"
              :post-id="customerContent.featured_cu.uid"
              :author="findAuthor(featuredCUPost.post_author.id, allAuthors)"
            />

            <CustomerUniversityListItem
              v-for="(cluster, i) in clustersToShow"
              :key="i"
              :cluster="cluster"
            />
            <CustomerUniversityButton
              label=" See more"
              size="md"
            />
          </div>
        </div>
        <div class="customer-university__columns">
          <CustomerUniversityTextCard
            title="Development Process"
            description="Here, you can learn about development processes, artefacts delivered at every
            stage of work on a project, approaches, and the best practices for software development.
            And also about what rules we at Mad Devs adhere to when working on technical solutions for
            our clients and why our approach helps them achieve success."
          />
          <div>
            <CustomerUniversityCard
              v-if="featuredCUPost"
              :post="featuredCUPost"
              :post-id="customerContent.featured_cu.uid"
              :author="findAuthor(featuredCUPost.post_author.id, allAuthors)"
            />
            <CustomerUniversityListItem
              v-for="(cluster, i) in clustersToShow"
              :key="i"
              :cluster="cluster"
            />
          </div>
        </div>
      </div>
      <hr class="customer-university__hr customer-university__hr--margin">
      <CustomerUniversityTitle
        title="Mad"
        subtitle="Community"
      />
      <p class="customer-university__text">
        Are you considering Mad Devs as a company to work on your next project,
        or are you interested in building a career with us? This section is for
        you! Here, we share information about us as a team, our culture and our
        approaches to work.
      </p>
      <div class="mad-community__posts-section">
        <CustomerUniversityCard
          v-if="featuredCUPost"
          :post="featuredCUPost"
          :post-id="customerContent.featured_cu.uid"
          :author="findAuthor(featuredCUPost.post_author.id, allAuthors)"
          direction="row"
          class-name="mb-48px"
        />
        <div class="mad-community__posts-grid">
          <CustomerUniversityListItem
            v-for="(cluster, i) in clustersToShow"
            :key="i"
            :cluster="cluster"
          />
        </div>
      </div>
      <CustomerUniversityButton
        label="See more"
        size="lg"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import findPostAuthorMixin from '@/mixins/findPostAuthorMixin'
import initializeLazyLoad from '@/helpers/lazyLoad'
import CustomerUniversityTitle from '@/components/Blog/shared/СustomerUniversityTitle'
import CustomerUniversityTextCard from '@/components/Blog/shared/CustomerUniversityTextCard'
import CustomerUniversityCard from '@/components/Blog/shared/CustomerUniversityCard'
import CustomerUniversityListItem from '@/components/Blog/shared/CustomerUniversityListItem'
import CustomerUniversityButton from '@/components/Blog/shared/CustomerUniversityButton'

export default {
  name: 'CustomerUniversitySection',
  components: {
    CustomerUniversityTitle,
    CustomerUniversityTextCard,
    CustomerUniversityCard,
    CustomerUniversityListItem,
    CustomerUniversityButton,
  },

  mixins: [findPostAuthorMixin],

  data() {
    return {
      showAll: false,
    }
  },

  computed: {
    ...mapGetters(['customerContent', 'featuredCUPost', 'allAuthors']),
    clusters() {
      return this.customerContent.body || []
    },

    clustersToShow() {
      return this.showAll ? this.clusters : this.clusters.slice(0, 3)
    },
  },

  updated() {
    this.$nextTick(() => initializeLazyLoad())
  },
}
</script>

<style scoped lang="scss">
@mixin label {
  @include font('Inter', 13px, 400);
  color: $text-color--grey-opacity-40-percent;
  font-style: normal;
  line-height: 166%;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

.customer-university {
  background-color: $bgcolor--black-oil;
  padding: 88px 0 98px;

  &__rows {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }

  &__columns {
    width: 100%;

    .customer-university__featured-post {
      width: 90%;
    }
  }

  a {
    text-decoration: none;
  }

  &__text {
    @include font('Inter', 32px, 400);
    line-height: 137%;
    letter-spacing: -0.013em;
    color: $text-color--white-primary;

    &--yellow {
      color: $text-color--yellow;
    }

    &--margin {
      margin: 50px 0 96px 0;
    }
  }

  &__hr {
    border: 1px solid #28282A;

    &--margin {
      margin: 96px 0;
    }
  }
}

.mad-community {
  &__posts-section {
    margin-top: 128px;

    .customer-university__featured-post {
      margin-bottom: 48px;
    }
  }

  &__posts-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
}

@media screen and (max-width: 1024px) {
  .customer-university {
    padding: 35px 0 69px;

    &__rows {
      grid-template-columns: 1fr;
    }

    &__columns {
      .customer-university__featured-post {
        width: 100%;
      }
    }

    &__text {
      @include font('Inter', 28px, 400);
      line-height: 157%;

      &--margin {
        margin: 50px 0 72px 0;
      }
    }

    &__title {
      font-size: 50px;
      line-height: 101%;
      letter-spacing: -0.03em;
      font-feature-settings: 'ss02' on;
      margin-bottom: 38px;
    }

    &__hr {
      border: 1px solid #28282A;
      margin: 32px 0 72px 0;

      &--margin {
        margin: 32px 0 72px 0;
      }
    }
  }
  .mad-community {
    &__posts-section {
      margin-top: 72px;
    }

    &__posts-grid {
      grid-template-columns: 1fr;
      grid-gap: 32px;
    }
  }
}

@media screen and (max-width: 768px) {
  .customer-university {
    &__text {
      @include font('Inter', 21px, 400);
      line-height: 143%;

      &--margin {
        margin: 24px 0 72px 0;
      }
    }
  }
  .mad-community {
    &__posts-section {
      margin-top: 48px;
    }
  }
}
</style>
