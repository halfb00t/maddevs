<template>
  <section class="container_regular m-96_bottom media-m-48_bottom">
    <div class="m-48_bottom">
      <h3 class="case_title_h2 m-12_bottom">
        Challenges & solutions
      </h3>
      <TextParagraph class="m-24_bottom media-m-12_bottom">
        An enhanced user experience makes a product more compelling and valuable for its users.
        That is why building an intuitive dashboard was instrumental in giving a boost to the GuardRails solution.
        The data dashboard developed by Mad Devs from scratch allowed the app users to have a look inside their
        code and visualize its vulnerabilities. While working on this project, we created two versions of the dashboard.
      </TextParagraph>
      <TextParagraph>
        Freelancers had problems getting paid for their work. For their part,
        freelancers’ clients wanted to pay in installments and transfer money only when the work is completed.
        Both parties required a fast and transparent way of cooperation and needed to feel secure when working with
        one another. Moreover, clients and freelancers wanted to send and receive money quickly and conveniently.
      </TextParagraph>
    </div>
    <ParallaxCards
      :data-cards="challengesSolutionsCards"
      :start-slice="3"
    />
  </section>
</template>
<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import { challengesSolutionsCards } from '@/data/caseBandpay'
import ParallaxCards from '@/components/Cases/shared/ParallaxCards/ParallaxCards'

export default {
  name: 'ChallengesSolutions',
  components: {
    TextParagraph,
    ParallaxCards,
  },

  data() {
    return {
      challengesSolutionsCards,
    }
  },
}
</script>
<style lang="scss" scoped>
::v-deep .parallax_cards {
  & .case_paragraph {
    color: $text-color--quote-box;
  }
}
</style>
