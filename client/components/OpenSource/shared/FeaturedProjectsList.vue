<template>
  <section>
    <ul class="featured-projects-list">
      <FeaturedProjectsListItem
        v-for="item of featuredProjectsList"
        :key="item.id"
        v-bind="item"
      />
    </ul>
    <a
      href="https://github.com/maddevsio/"
      target="_blank"
      class="featured-projects-list__see-more"
      @click="sendGithubClickEvent"
    >
      <UIButton>70+ Open source projects on GitHub</UIButton>
    </a>
  </section>
</template>

<script>
import UIButton from '@/components/shared/UIButton'
import FeaturedProjectsListItem from '@/components/OpenSource/shared/FeaturedProjectsListItem'
import { featuredProjectsList } from '@/data/featuredProjectsList'
import { githubClickEvent } from '@/analytics/events'
import { githubClickPixelEvent } from '@/analytics/pixelEvents'

export default {
  name: 'FeaturedProjectsList',
  components: {
    FeaturedProjectsListItem,
    UIButton,
  },

  data() {
    return {
      featuredProjectsList,
    }
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
.featured-projects-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  &__see-more {
    display: block;
    margin: 0 auto;
    max-width: 393px;
    margin-top: 50px;
    /deep/ .ui-button {
      display: block;
      width: 100%;
      height: 52px;
      font-weight: normal;
    }
  }

  @media screen and (max-width: 1260px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 430px) {
    gap: 24px;

    &__see-more {
      margin-top: 24px;
    }
  }
}
</style>
