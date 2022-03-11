<template>
  <section
    class="title-slice"
    :class="[
      `title-slice-text--${position}`,
      showAnchorLink ? 'anchor_title': ''
    ]"
  >
    <div
      v-if="showAnchorLink"
      class="title-slice-text-wrapper"
    >
      <div
        class="title-slice"
        :style="{ maxWidth }"
        v-html="createAnchorTag(tag, title, size)"
      />
    </div>
    <div v-else>
      <component
        :is="tag"
        :style="{ maxWidth }"
        :class="[
          `title-slice-text`,
          `title-slice-text--${size}`,
        ]"
        v-html="title"
      />
    </div>
  </section>
</template>

<script>
import mainMixins from '@/mixins/mainMixins'
import { copyAnchorLinkMixin } from '@/mixins/copyAnchorLinkMixin'

export default {
  name: 'TitleSlice',
  mixins: [mainMixins, copyAnchorLinkMixin],
  props: {
    title: {
      type: String,
      default: '',
    },

    tag: {
      type: String,
      default: 'h2',
    },

    maxWidth: {
      type: String,
      default: '100%',
    },

    position: {
      type: String,
      default: 'left',
    },

    size: {
      type: String,
      default: '16-px',
    },

    showAnchorLink: {
      type: Boolean,
      default: false,
    },
  },

  mounted() {
    document.querySelectorAll('.copy-link')
      .forEach(link => {
        link.addEventListener('click', this.copyAnchorLink)
      })
  },

  beforeDestroy() {
    document.querySelectorAll('.copy-link')
      .forEach(link => link.removeEventListener('click', this.copyAnchorLink))
  },

  methods: {
    createAnchorTag(tag, text, size) {
      return `
        <div id="${this.createAnchorID(text)}" class="anchor_title">
          <${tag} class="anchor_title-h title-slice-text--${size}">${text}</${tag}>
          <div class="anchor_copy-link">
            <button data-id="${this.createAnchorID(text)}" class="copy-link">
              <img src="${require('@/assets/img/common/anchor.svg')}" alt="Anchor" width="16" height="16" />
            </button>
            <div class="anchor_copy-link-tooltip">Copy link</div>
          </div>
        </div>
      `
    },
  },
}
</script>

<style lang="scss" scoped>

.title-slice-text-wrapper {
  display: inline-block;
}

.anchor_title {
  position: relative;

  &:hover {
    .anchor_copy-link button {
      display: block;
    }
  }
}

.title-slice {
  width: 100%;
  position: relative;

  &-text {
    width: 100%;
    display: block;
    color: inherit;
    letter-spacing: -0.013em;

    // Positions
    &--left {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;

      > * {
        text-align: left;
      }
    }

    &--center {
      display: flex;
      align-items: flex-start;
      justify-content: center;

      > * {
        text-align: center;
      }
    }

    &--right {
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;

      > * {
        text-align: right;
      }
    }

    // Sizes
    &--16-px {
      @include font('Inter', 16px, 400);
      line-height: 24px;
    }

    &--21-px {
      @include font('Inter', 21px, 400);
      line-height: 28px;
    }

    &--33-px {
      @include font('Inter', 33px, 600);
      line-height: 43px;
    }

    &--40-px {
      @include font('Inter', 40px, 700);
      line-height: 49px;
    }

    &--60-px {
      @include font('Inter', 60px, 800);
      line-height: 67px;
    }

    &--80-px {
      @include font('Inter', 80px, 800);
      line-height: 84px;
    }
  }
}

::v-deep {
  .title-slice {
    width: 100%;
    position: relative;

    &-text {
      width: 100%;
      display: block;
      color: inherit;
      letter-spacing: -0.013em;

      // Positions
      &--left {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;

        > * {
          text-align: left;
        }
      }

      &--center {
        display: flex;
        align-items: flex-start;
        justify-content: center;

        > * {
          text-align: center;
        }
      }

      &--right {
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;

        > * {
          text-align: right;
        }
      }

      // Sizes
      &--16-px {
        @include font('Inter', 16px, 400);
        line-height: 24px;
      }

      &--21-px {
        @include font('Inter', 21px, 400);
        line-height: 28px;
      }

      &--33-px {
        @include font('Inter', 33px, 600);
        line-height: 43px;
      }

      &--40-px {
        @include font('Inter', 40px, 700);
        line-height: 49px;
      }

      &--60-px {
        @include font('Inter', 60px, 800);
        line-height: 67px;
      }

      &--80-px {
        @include font('Inter', 80px, 800);
        line-height: 84px;
      }
    }
  }

  .anchor_title-h {
    display: inline-block;
  }

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
      @media screen and (max-width: 768px) {
        left: 0;
        top: 0;
      }

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
}

</style>
