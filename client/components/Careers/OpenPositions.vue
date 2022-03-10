<template>
  <div
    id="open-positions"
    class="open-positions"
  >
    <div class="container">
      <div
        class="open-positions__head"
      >
        <h2 class="open-positions__title">
          {{ $t('careers.section-8.title') }}
        </h2>
        <LazyHydrate when-visible>
          <PositionsFilter />
        </LazyHydrate>
      </div>
      <PositionsGrid />
    </div>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import PositionsGrid from '@/components/Careers/shared/PositionsGrid'

export default {
  name: 'OpenPositions',
  components: {
    LazyHydrate,
    PositionsFilter: () => import('@/components/Careers/shared/PositionsFilter'),
    PositionsGrid,
  },
}
</script>

<style lang="scss" scoped>
.open-positions {
  padding: 82px 0 88px;
  &__head {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 48px;
    /deep/ .positions-filter {
      justify-content: center;
    }
  }
  &__title {
    @include font('Inter', 60px, 900);
    line-height: 64px;
    letter-spacing: -2.6px;
    margin-bottom: 38px;
  }

  @media screen and (max-width: 1024px) {
    padding: 57px 0 60px;
    &__head {
      align-items: flex-start;
      text-align: left;
      margin-bottom: 27px;
      /deep/ .positions-filter {
        justify-content: flex-start;
      }
    }
    &__title {
      margin-bottom: 24px;
      font-size: 40px;
      line-height: 40px;
      letter-spacing: -0.04em;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 55px 0 60px;
    &__title {
      margin-bottom: 22px;
      font-size: 34px;
      letter-spacing: -0.04em;
    }
    &__head {
      margin-bottom: 24px;
    }
  }
}
</style>
