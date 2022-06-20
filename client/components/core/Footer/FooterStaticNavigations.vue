<template>
  <div class="footer-subnavbar">
    <div class="footer-subnavbar__nav-list footer-subnavbar__nav-list--pdf">
      <a
        v-for="item in staticsPDFLinks"
        :key="item.link"
        :href="item.link"
        class="footer-subnavbar__nav-list-item footer-subnavbar__nav-list-item--pdf"
        target="_blank"
      >
        {{ item.title }}
      </a>
    </div>
    <div class="footer-subnavbar-container">
      <div class="footer-subnavbar__nav-list footer-subnavbar__nav-list--pages">
        <NuxtLink
          v-for="item in staticsPagesLinks"
          :key="item.link"
          :to="item.link"
          class="footer-subnavbar__nav-list-item footer-subnavbar__nav-list-item--pages"
          target="_blank"
        >
          {{ item.title }}
        </NuxtLink>
      </div>
      <p class="footer-subnavbar__company-name">
        © Mad Devs - {{ currentYear }}
      </p>
    </div>
  </div>
</template>

<script>
import { staticsPagesLinks, staticsPDFLinks } from '@/data/footerNavigation'

export default {
  name: 'FooterStaticNavigations',
  data() {
    return {
      staticsPagesLinks,
      staticsPDFLinks,
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>

<style lang="scss" scoped>

.footer-subnavbar {
  @media screen and (max-width: 992px) {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }
  @media screen and (max-width: 640px) {
    flex-direction: column;
  }

  &__company-name {
    opacity: 0.7;
    font-size: 12px;
    color: $text-color--grey;
    margin-top: 18px;

    @media screen and (min-width: 992px) {
      margin-top: 10px;
      @include font('inter', 14px, 400);
    }
    @media screen and (max-width: 640px) {
      margin-top: 10px;
    }
  }
  &-container{
      @media screen and (max-width: 640px) {
        margin-top: 30px;
      }
  }

  &__nav {
    &-list {
      &-item {
        transition: color .2s;

        &:hover {
          color: $text-color--red;
        }

        &--pdf {
          margin-bottom: 8px;
        }
      }

      @media screen and (min-width: 992px) {
        margin-top: 30px;
      }

    }

    &-list-item {
      color: $text-color--grey;
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
