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
import copyToClipboard from '@/helpers/copyToClipboard'

export default {
  name: 'CustomerUniversityTitle',
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

  methods: {
    copyAnchorLink(event) {
      const copyText = event.target.getAttribute('data-id')
      if (!copyText) return null
      const tooltip = event.target.nextElementSibling
      if (tooltip) {
        tooltip.innerText = 'Copied!'
        setTimeout(() => {
          tooltip.innerText = 'Copy link'
        }, 3000)
      }
      copyToClipboard(this.anchorLink)
      return this.anchorLink
    },
  },
}
</script>
<style lang="scss" scoped>
.anchor_title {
  position: relative;

  .anchor_copy-link {
    button {
      display: none;
      position: absolute;
      left: -36px;
      top: 50%;
      transform: translateY(-50%);
      padding: 12px;
      cursor: pointer;
      border: 0;
      background-color: transparent;

      img {
        width: 16px;
        height: 16px;
        user-select: none;
        pointer-events: none;
      }
    }

    &-tooltip {
      display: none;
      position: absolute;
      left: -102px;
      top: 50%;
      transform: translateY(-50%);
      background-color: #F4F4F4;
      padding: 4px 8px;
      box-sizing: border-box;
      border-radius: 4px;
      border: 0;
      line-height: 18px;
      color: #101113;
      transition: all 0.1s ease;
      @include font('Inter', 12px, 400);
    }

    &:hover {
      .anchor_copy-link-tooltip {
        display: block;
      }
    }
  }

  &:hover {
    .anchor_copy-link button {
      display: block;
    }
  }
}

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
