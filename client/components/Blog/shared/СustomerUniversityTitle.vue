<template>
  <div
    v-if="anchorLink"
    id="anchorLink"
    class="anchor_title"
  >
    <h2 class="customer-university-title">
      <span>
        {{ title }}
      </span>
      <br>
      {{ subtitle }}
    </h2>
    <div class="anchor_copy-link">
      <button
        data-id="anchor-link"
        class="copy-link"
        @click="copyAnchorLink"
      >
        <img
          :src="`${require('@/assets/img/common/anchor.svg')}`"
          alt="Anchor"
          width="16"
          height="16"
        >
      </button>
      <div class="anchor_copy-link-tooltip">
        Copy link
      </div>
    </div>
  </div>
  <h2
    v-else
    class="customer-university-title"
  >
    <span>
      {{ title }}
    </span>
    <br>
    {{ subtitle }}
  </h2>
</template>
<script>
import { copyAnchorLinkMixin } from '@/mixins/copyAnchorLinkMixin'

export default {
  name: 'CustomerUniversityTitle',

  mixins: [copyAnchorLinkMixin],

  props: {
    title: {
      type: String,
      default: '',
    },

    subtitle: {
      type: String,
      default: '',
    },

    anchorLink: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.customer-university-title {
  @include font('Poppins', 80px, 700);
  font-style: normal;
  line-height: 101%;
  letter-spacing: -0.04em;
  color: $bgcolor--silver;
  margin-bottom: 32px;

  span {
    -webkit-text-stroke: 1.13333px $bgcolor--white;
    color: $text-color--black-oil;
  }

  @media screen and (max-width: 768px) {
    @include font('Poppins', 50px, 700);
    line-height: 104%;
    margin: 42px 0 16px 0;
  }
}
</style>
