<template>
  <section class="container_regular m-96_bottom case-lido__project-goals">
    <h3 class="case_title_h2 m-48_bottom media-m-24_bottom">
      Project goals and how we resolved them
    </h3>
    <ParallaxCards
      :data-cards="projectGoalsCards"
      :start-slice="1"
    />
    <div class="case-lido__project-goals-alert m-24_top">
      <img
        v-lazy-load
        width="25"
        height="25"
        :data-src="$getMediaFromS3(`/images/Cases/lido/svg/Icon-anchor.svg`)"
        class="case-lido__project-goals-anchor-icon"
        alt="Icon anchor"
      >
      <TextParagraph>
        Before proceeding, we advise that you review the terminology presented
        <a
          href="#terminology"
          nofollow
          data-testid="anchor-link"
          @click.prevent="goToTerminology"
        >
          here.
        </a>
      </TextParagraph>
    </div>
  </section>
</template>
<script>
import { projectGoalsCards } from '@/data/caseLido'
import ParallaxCards from '@/components/Cases/shared/ParallaxCards/ParallaxCards'
import TextParagraph from '@/components/Cases/shared/TextParagraph'

export default {
  name: 'ProjectGoals',

  components: {
    TextParagraph,
    ParallaxCards,
  },

  data() {
    return {
      projectGoalsCards,
    }
  },

  methods: {
    goToTerminology() {
      const terminology = document.getElementById('terminology')
      terminology.scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>
<style scoped lang="scss">
.case-lido__project-goals {
  &-alert {
    background-color: $bgcolor--silver;
    border-radius: 8px;
    padding: 16px;
    display: flex;

    a {
      color: $text-color--black-oil;
      text-decoration: underline;
    }
  }

  &-anchor-icon {
    vertical-align: text-bottom;
    margin-right: 14.78px;
  }
}
</style>
