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
        Here, you can find information <span class="customer-university__text--yellow"> about the main software development
          processes, useful tips on choosing a company to work on your product, determining whether the budget is reasonable,</span>
        and how Mad Devs company approaches and takes care of every project.
      </p>
      <div class="customer-university__rows">
        <div
          v-for="customerUniversityPost in customerUniversityPostsList"
          :key="customerUniversityPost.title"
          class="customer-university__columns"
        >
          <CustomerUniversityTextCard
            :title="customerUniversityPost.title"
            :description="customerUniversityPost.description"
          />
          <CustomerUniversityCard
            v-for="(post,idx) in customerUniversityPost.posts"
            :key="post.id"
            v-bind="post.data"
            :author="findAuthor(post.data.post_author.id, allAuthors)"
            :post-id="post.uid"
            :type="post.type"
            :is-main="isFirstElement(idx)"
            :direction="calculateCardDirection(idx)"
            :size="calculateCardSize(idx)"
            :width="calculateCardWidth(idx)"
          />
          <CustomerUniversityButton
            v-if="customerUniversityPost.redirectLink"
            label="See more"
            size="md"
            @click="redirectTo(customerUniversityPost.redirectLink)"
          />
        </div>
      </div>
      <hr class="customer-university__hr customer-university__hr--margin">
      <CustomerUniversityTitle
        id="mad-community"
        title="Mad"
        subtitle="Community"
      />
      <p class="customer-university__text">
        Are you considering Mad Devs as a company to work on your next project,
        or are you interested in building a career with us? This section is for
        you! Here, we share information about us as a team, our culture and our
        approaches to work.
      </p>
      <div
        v-if="madCommunityPostToShow.length"
        class="mad-community__posts-section"
      >
        <CustomerUniversityCard
          v-for="(madCommunityPost, idx) in madCommunityPostToShow"
          :key="madCommunityPost.id"
          v-bind="madCommunityPost.data"
          :author="findAuthor(madCommunityPostToShow[0].data.post_author.id, allAuthors)"
          :post-id="madCommunityPost.uid"
          :type="madCommunityPost.type"
          direction="row"
          :is-main="isFirstElement(idx)"
          :size="calculateCardSize(idx)"
        />
      </div>
      <MadCommunityBanner v-if="isShowAllMadCommunityPosts" />
      <CustomerUniversityButton
        v-if="madCommunityPost.length > 3 && !isShowAllMadCommunityPosts"
        label="All articles"
        size="lg"
        @click="isShowAllMadCommunityPosts=true"
      />
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import findPostAuthorMixin from '@/mixins/findPostAuthorMixin'
import initializeLazyLoad from '@/helpers/lazyLoad'
import MadCommunityBanner from '@/components/core/banners/MadCommunityBanner'
import CustomerUniversityTitle from '@/components/Blog/shared/СustomerUniversityTitle'
import CustomerUniversityTextCard from '@/components/Blog/shared/CustomerUniversityTextCard'
import CustomerUniversityCard from '@/components/Blog/shared/CustomerUniversityCard'
import CustomerUniversityButton from '@/components/Blog/shared/CustomerUniversityButton'
import { customerUniversitySectionData } from '@/data/customerUniversitySection'

export default {
  name: 'NewCustomerUniversitySection',
  components: {
    CustomerUniversityTitle,
    CustomerUniversityTextCard,
    CustomerUniversityCard,
    CustomerUniversityButton,
    MadCommunityBanner,
  },

  mixins: [findPostAuthorMixin],

  data() {
    return {
      isShowAllMadCommunityPosts: false,
    }
  },

  computed: {
    ...mapGetters(['customerUniversitySectionPosts', 'CUPosts', 'allAuthors', 'allPosts']),

    customerUniversityPostsList() {
      const {
        pricing_strategies: pricingStrategies,
        development_process: developmentProcess,
      } = this.customerUniversitySectionPosts
      const {
        pricingStrategiesInfo,
        developmentProcessInfo,
      } = customerUniversitySectionData
      const allPosts = [...this.CUPosts, ...this.allPosts]

      return [
        {
          ...pricingStrategiesInfo,
          posts: this.filterPosts(pricingStrategies, allPosts),
          redirectLink: '/ebooks/pricing-strategies/',
        },
        {
          ...developmentProcessInfo,
          posts: this.filterPosts(developmentProcess, allPosts),
        },
      ]
    },

    madCommunityPost() {
      const { mad_community: madCommunity } = this.customerUniversitySectionPosts
      const allPosts = [...this.CUPosts, ...this.allPosts]
      return this.filterPosts(madCommunity, allPosts) || []
    },

    madCommunityPostToShow() {
      return this.isShowAllMadCommunityPosts ? this.madCommunityPost : this.madCommunityPost.slice(0, 3)
    },
  },

  created() {
    this.getCustomerUniversitySectionPosts()
    this.getCustomerUniversityPosts()
  },

  methods: {
    ...mapActions(['getCustomerUniversitySectionPosts', 'getCustomerUniversityPosts']),
    filterPosts(postIdList, allPosts) {
      return postIdList?.map(postIdListItem => allPosts?.filter(allPostsItem => allPostsItem.id === postIdListItem.post.id))
        .flat()
    },

    isFirstElement(idx) {
      return idx === 0
    },

    calculateCardDirection(idx) {
      if (idx === 0) return 'column'
      return 'row'
    },

    calculateCardSize(idx) {
      if (idx === 0) return 'md'
      return 'sm'
    },

    calculateCardWidth(idx) {
      if (idx === 0) return '90'
      return '100'
    },

    redirectTo(url) {
      this.$router.push(url)
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
  }

  a {
    text-decoration: none;
  }

  &__text {
    @include font('Inter', 24px, 400);
    line-height: 146%;
    letter-spacing: -0.013em;
    color: $text-color--white-primary;
    max-width: 1070px;

    &--yellow {
      color: $text-color--yellow;
    }

    &--margin {
      margin: 32px 0 72px 0;
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
    margin-top: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .customer-university-card {
      &:first-child {
        margin-bottom: 48px;
        width: 100%;
      }

      width: 48.8%;
      margin-bottom: 32px;
      @media screen and (max-width: 1024px) {
        width: 100%;
        margin-bottom: 48px;
      }
    }
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

    &__title {
      font-size: 50px;
      line-height: 101%;
      letter-spacing: -0.03em;
      font-feature-settings: 'ss02' on;
      margin-bottom: 38px;
    }

    &__hr {
      border: 1px solid #28282A;

      &--margin {
        margin: 72px 0;
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
      @include font('Inter', 18px, 400);
      line-height: 143%;

      &--margin {
        margin: 32px 0;
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
