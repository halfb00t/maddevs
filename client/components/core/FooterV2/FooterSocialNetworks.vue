<template>
  <ul class="footer__social-network">
    <li
      v-for="network in socialNetworks"
      :key="network.key"
      class="footer__social-network-link-wrapper"
    >
      <a
        :href="network.url"
        class="footer__social-network-link"
        target="_blank"
      >
        <img
          v-lazy-load
          :data-src="require(`@/assets/img/Footer/svg/${network.key}.svg`)"
          :alt="network.title || 'Image'"
          width="42"
          height="42"
        >
      </a>
    </li>
  </ul>
</template>

<script>
import { socialNetworks } from '@/data/socialNetworks'

export default {
  name: 'FooterSocialNetworkList',
  data() {
    return {
      socialNetworks,
    }
  },
}
</script>

<style lang="scss" scoped>
@mixin social-network-list-grid {
  .footer__social-network {
    display: grid;
    grid-template-columns: repeat(4, max-content);

    &__social-network-link-wrapper {
      margin: 0 -8px;
    }
  }
}

.footer__social-network {
  display: flex;
  justify-content: space-between;

  &-link {
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
