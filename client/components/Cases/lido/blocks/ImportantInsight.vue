<template>
  <section class="case-lido__important-insight m-96_bottom media-m-48_bottom">
    <div class="container_regular">
      <h4 class="case_title_h4-28 m-12_bottom">
        Important insight to remember:
      </h4>
      <TextParagraph class="m-24_bottom">
        Mad Devs successfully completed the migration, passing all the tests and audits.
        Nonetheless, the work of both the Lido team and the Mad Devs team uncovered an intriguing pattern that deserves
        everyone's attention.
      </TextParagraph>
      <TextParagraph class="m-24_bottom">
        The smart contract work with the frontend, which will also pack bytes. For the old bridge,
        it was packed from right to left, but for us, it should be packed from left to right.
        The chain tests revealed that everything was working in order. However, when the users arrived,
        the most crucial detail was uncovered. If the users did not reload the page during the migration,
        they became stuck during the operation.
      </TextParagraph>
      <TextParagraph class="m-48_bottom">
        Total stuck in the bridge - 450 ETH (1 million 200 thousand at that rate by then).
      </TextParagraph>
      <TwitterCard source-link="https://twitter.com/LidoFinance/status/1486353473985822727">
        <TextParagraph class="twitter-card__main-text">
          Due to a UI bug associated with today's bETH migration - most likely related to non-invalidated
          caching - approximately 450 ETH of user funds were locked. The
          <a
            href="https://anchor.lido.fi/unwrap"
            class="twitter-card__main-text-link"
            target="_blank"
          >
            anchor.lido.fi
          </a>
          Ul is currently
          shut down to prevent any potential further issues.
        </TextParagraph>
      </TwitterCard>
      <TextParagraph class="m-48_top">
        Moral: Not only is it important to make tests "green," but also to evaluate the entire system - <strong>the user should
          know if the Smart contract has been modified (it is vital to reloading the page).</strong>
      </TextParagraph>
    </div>
  </section>
</template>
<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TwitterCard from '@/components/Cases/lido/shared/TwitterCard'

export default {
  name: 'ImportantInsight',
  components: { TwitterCard, TextParagraph },
}
</script>
<style lang="scss" scoped>
.twitter-card__main-text {
  max-width: 656px;
  font-size: 20px;
  line-height: 166%;
  color: $text-color--chinese-black;

  &-link {
    color: #5A9DED;
    text-decoration: underline;
    font-weight: 600;
  }

  @media screen and (max-width: 480px) {
    font-size: 17px;
  }
}
</style>
