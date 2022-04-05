<template>
  <div class="footer-navbar">
    <p class="footer-navbar__company-name">
      © Mad Devs - {{ currentYear }}
    </p>
    <div
      v-for="item in staticsPagesLinks"
      :key="item.link"
      class="footer-navbar__nav-list"
    >
      <NuxtLink
        :to="item.link"
        target="_blank"
        class="footer-navbar__nav-item"
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
@mixin social-network-list-grid {
  .footerSocialNetworkList {
    display: grid;
    grid-template-columns: repeat(4, max-content);

    &__social-network-link-wrapper {
      margin: 0 -8px;
    }
  }
}

.footerSocialNetworkList {
  display: flex;
  justify-content: space-between;

  &__social-network-link {
    width: 42px;
    height: 42px;
    display: block;

    img {
      width: 42px;
      height: 42px;
      display: block;
      overflow: hidden;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1200px) {
  @include social-network-list-grid;
}

@media screen and (max-width: 640px) {
  @include social-network-list-grid;
}
</style>
