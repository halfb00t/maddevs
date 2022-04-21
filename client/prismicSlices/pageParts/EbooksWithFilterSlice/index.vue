<template>
  <section class="ebooks">
    <div class="container">
      <h3
        ref="ebooksTitle"
        class="ebooks__cards-title"
      >
        {{ ebookCategory === 'Ebooks' ? 'All Ebooks' : ebookCategory }}
      </h3>
      <div
        class="ebooks__items"
      >
        <EbookFilter
          :categories="ebookCategories"
          :ebook-category="ebookCategory"
          @onChangeCategory="onChangeCategoryHandler"
        />
        <div
          v-if="ebooks"
          class="ebooks__cards"
        >
          <div
            class="ebooks__cards-grid"
          >
            <EbooksCard
              v-for="(item, i) in ebooks"
              :key="i"
              v-bind="item"
              data-testid="ebooksCards"
            />
            <template
              v-if="!ebooks.length"
            >
              <div
                v-for="item in 6"
                :key="item"
              >
                <SkeletonBlogWidget />
              </div>
            </template>
          </div>
          <UIPagination
            v-if="ebooks.length"
            :total-pages="totalPages"
            :per-page="perPage"
            :current-page="page"
            @pageChanged="onChangePage"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import UIPagination from '@/components/shared/UIPagination'
import EbookFilter from '@/components/Ebook/EbookFilter'
import EbooksCard from '@/components/Ebook/EbooksCard'
import SkeletonBlogWidget from '@/components/Blog/skeletons/SkeletonBlogWidget'

export default {
  name: 'EbooksWithFilterSlice',
  components: {
    EbooksCard,
    EbookFilter,
    UIPagination,
    SkeletonBlogWidget,
  },

  computed: {
    ...mapGetters([
      'ebooks',
      'ebookCategory',
      'totalPages',
      'perPage',
      'page',
      'ebookCategories',
    ]),
  },

  mounted() {
    this.getEbooksAction()
  },

  methods: {
    ...mapActions(['getEbooksAction', 'changeCategory', 'changePage']),

    onChangeCategoryHandler(category) {
      this.changeCategory(category)
      this.$refs.ebooksTitle.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      })
    },

    onChangePage(page) {
      this.changePage(page)
      this.$refs.ebooksTitle.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.ebooks {
  background-color: $bgcolor--white-primary;

  &__items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media screen and (max-width: 580px) {
      flex-direction: column;
    }
  }

  &__cards {
    width: 75%;

    @media screen and (max-width: 580px) {
      width: 100%;
    }

    &-title {
      @include font('Inter', 42px, 700);
      line-height: 46px;
      letter-spacing: -1.3px;
      color: $text-color--tech-label-black;
      text-align: center;
      position: relative;
      margin-bottom: 48px;
      margin-left: 24%;

      @media screen and (max-width: 768px) {
        font-size: 28px;
        line-height: 32px;
        letter-spacing: -1px;
        margin-bottom: 32px;
      }

      @media screen and (max-width: 580px) {
        margin-left: 0;
      }
    }

    &-grid {
      @include grid(repeat(3, 1fr), auto, 50px, 45px);
      margin-bottom: 50px;

      @media screen and (max-width: 1110px) {
        @include grid(repeat(2, 1fr), auto, 50px, 45px);
      }

      @media screen and (max-width: 768px) {
        @include grid(repeat(1, 1fr), auto, 0px, 48px);
      }
    }
  }
}
</style>
