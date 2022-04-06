<template>
  <div class="footer-subnavbar">
    <p class="footer-subnavbar__company-name">
      © Mad Devs - {{ currentYear }}
    </p>
    <div class="footer-subnavbar__nav-list">
      <NuxtLink
        v-for="item in staticsPagesLinks"
        :key="item.link"
        :to="item.link"
        class="footer-subnavbar__nav-list-item"
        target="_blank"
      >
        {{ item.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { staticsPagesLinks } from '@/data/footerNavigation'

export default {
  name: 'FooterStaticNavigations',
  data() {
    return {
      staticsPagesLinks,
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>

<style lang="scss" scoped>
.footer-subnavbar {

  @media screen and (max-width: 992px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-top: 30px;
  }

  &__company-name {
    opacity: 0.7;
    font-size: 12px;
    color: #96969C;
    @media screen and (min-width: 992px) {
      margin-top: 105px;
      @include font('inter', 14px, 400);
    }
  }

  &__nav {
    &-list {
      @media screen and (min-width: 992px) {
        margin-top: 30px;
      }
    }

    &-list-item {
      color: #96969C;
      display: block;
      @include font('inter', 14px, 400);
      opacity: 0.7;

      @media screen and (max-width: 1320px) {
        font-size: 12px;
      }
    }
  }
}
</style>
