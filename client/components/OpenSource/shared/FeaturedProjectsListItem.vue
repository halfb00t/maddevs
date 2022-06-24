<template>
  <li class="featured-projects-list__item">
    <a
      :href="link"
      target="_blank"
      class="featured-projects-list__item-link"
      @click="sendGithubClickEvent"
    >
      <div class="featured-projects-list__item-info">
        <img
          v-lazy-load
          :data-src="$getMediaFromS3(`/images/OpenSource/svg/${logo.name}.svg`)"
          width="62"
          height="62"
          :alt="logo.alt || 'Image'"
        >
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
      <UIArrowButton class="featured-projects-list__item-button" />
    </a>
  </li>
</template>

<script>
import UIArrowButton from '@/components/shared/UIArrowButton'
import { githubClickEvent } from '@/analytics/events'

export default {
  name: 'FeaturedProjectsListItem',
  components: {
    UIArrowButton,
  },

  props: {
    logo: {
      type: Object,
      default: () => ({}),
    },

    name: {
      type: String,
      default: '',
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

  methods: {
    sendGithubClickEvent() {
      githubClickEvent.send()
      githubClickPixelEvent.send()
    },
  },
}
</script>

<style lang="scss" scoped>
.featured-projects-list__item {
  position: relative;
  display: block;
  border-radius: 4px;
  background-color: $bgcolor--black-pale;
  &:hover {
    .featured-projects-list__item-button {
      background-color: $border-color--white;
      color: $text-color--black-oil;
    }
  }
  &-link {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 67px 60px 45px;

    @media screen and (max-width: 430px) {
      padding: 24px;

      ::v-deep .ui-arrow-button {
        width: 30px;
        min-width: 30px;
        height: 30px;
        margin-top: 16px;
      }
    }
  }
  &-info {
    h3 {
      margin-top: 27px;
      font-size: 28px;
      font-weight: 600;
      line-height: 32px;
      letter-spacing: -0.013em;
      color: $text-color--white-primary;
    }
    p {
      margin-top: 21px;
      font-size: 17px;
      line-height: 25px;
      letter-spacing: -0.013em;
      color: $text-color--silver;
    }

    @media screen and (max-width: 430px) {
      img {
        width: 40px;
        height: 40px;
      }

      h3 {
        font-size: 22px;
        line-height: 26.63px;
        margin-top: 16px;
      }

      p {
        font-size: 14px;
        line-height: 21px;
        margin-top: 4px;
      }
    }
  }
}
</style>
