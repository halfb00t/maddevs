<template>
  <li
    class="boilerplates-list__item"
    :class="widthClass"
  >
    <a
      :href="link"
      target="_blank"
      class="boilerplates-list__item-link"
      :class="paddingClass"
      @click="sendGithubClickEvent"
    >
      <div class="boilerplates-list__item-info">
        <h3
          v-html="title"
        />
        <p
          v-html="description"
        />
        <UIArrowButton
          color="black"
          class="boilerplates-list__item-button"
        />
      </div>
      <img
        v-lazy-load
        class="boilerplates-list__item-logo"
        :data-src="$getMediaFromS3(`/images/OpenSource/svg/${logo.name}.svg`)"
        :alt="logo.alt || 'Image'"
        :width="logo.width"
        :height="logo.height"
      >
    </a>
  </li>
</template>

<script>
import UIArrowButton from '@/components/shared/UIArrowButton.vue'
import { githubClickEvent } from '@/analytics/events'
import { githubClickPixelEvent } from '@/analytics/pixelEvents'

export default {
  name: 'BoilerplatesListItem',
  components: {
    UIArrowButton,
  },

  props: {
    fullWidth: {
      type: Boolean,
      default: false,
    },

    bottomPadding: {
      type: Boolean,
      default: false,
    },

    logo: {
      type: Object,
      default: () => ({}),
    },

    title: {
      type: String,
      default: '',
    },

    description: {
      type: String,
      default: '',
    },

    link: {
      type: String,
      default: '',
    },
  },

  computed: {
    widthClass() {
      return this.fullWidth ? 'boilerplates-list__item--full-width' : null
    },

    paddingClass() {
      return this.bottomPadding ? 'boilerplates-list__item-link--bottom-padding' : null
    },
  },

  methods: {
    sendGithubClickEvent() {
      githubClickEvent.send()
      githubClickPixelEvent.send()
    },
  },
}
</script>

<style lang="scss" scoped>
.boilerplates-list__item {
  background-color: $bgcolor--silver;
  border-radius: 4px;
  &--full-width {
    grid-column: auto/span 2;
  }
  &:hover {
    .boilerplates-list__item-button {
      background-color: $text-color--black-oil;
      color: $text-color--white-primary;
    }
  }
  &-link {
    padding: 90px 112px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    width: 100%;
    height: 100%;
    color: $text-color--black-oil;
    word-break: break-word;
    &--bottom-padding {
      padding-bottom: 104px;
    }
  }
  &-info {
    h3 {
      font-size: 56px;
      line-height: 60px;
      letter-spacing: -0.013em;
    }
    p {
      margin-top: 31px;
      font-size: 20px;
      line-height: 29px;
      letter-spacing: -0.013em;
      max-width: 814px;
    }
  }
  &-button {
    margin: 40px auto 0;
  }
  &-logo {
    margin-top: 45px;
    display: block;
    line-height: 1;
    max-width: 75%;
    width: auto;
    height: auto;
  }

  @media screen and (max-width: 1260px) {
    &-info {
      h3 {
        font-size: 40px;
        line-height: 48px;
      }
      p {
        margin-top: 16px;
        font-size: 17px;
        line-height: 25px;
      }
    }
  }

  @media screen and (max-width: 1090px) {
    /deep/ br {
      display: none;
    }
    &--full-width {
      grid-column: auto;
    }
  }

  @media screen and (max-width: 1024px) {
    &-link {
      padding-top: 51px;
      &--bottom-padding {
        padding-bottom: 65px;
      }
    }
    &-button {
      margin-top: 28px;
    }
    &-logo {
      margin-top: 30px;
    }
  }

  @media screen and (max-width: 768px) {
    &-link {
      padding: 29px 20px 0;
      &--bottom-padding {
        padding-bottom: 43px;
      }
    }
    &-info {
      h3 {
        font-size: 32px;
      }
    }
  }
}
</style>
