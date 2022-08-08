<template>
  <section
    class="case_lido__timeline-stat m-96_bottom media-m-48_bottom"
  >
    <div class="container_full background-color-silver p-48_top p-48_bottom media-p-32_top media-p-32_bottom">
      <div class="container_regular">
        <h4 class="case_lido__timeline-stat-title m-32_bottom">
          Eth liquid staking balances (time series)
        </h4>
        <LottieMad
          class="case_lottie case_lottie__desktop"
          height="420px"
          :lottie-link="$getMediaFromS3(`/images/Cases/lido/lottie/timeline-desktop.json`)"
          :autoplay="true"
        />
        <LottieMad
          class="case_lottie case_lottie__mobile"
          height="660px"
          :lottie-link="$getMediaFromS3(`/images/Cases/lido/lottie/timeline-mobile.json`)"
          :autoplay="true"
        />
        <div
          class="case_lido__timeline-stat-alert m-12_top"
        >
          <TextParagraph
            class="case_text-align-center"
          >
            The graphic is current as of July 2022. Visit the
            <a
              href="https://dune.com/LidoAnalytical/Lido-Finance-Extended"
              target="_blank"
            >
              website
            </a>
            for complete up-to-date statistics
          </TextParagraph>
        </div>
      </div>
    </div>
    <div class="container_regular m-48_top">
      <TextParagraph>
        Moreover,
        <a
          href="https://a16z.com/2022/03/03/investing-in-lido/"
          rel="noopener"
          class="case_link-in-text"
          target="_blank"
        >
          Andreessen Horowitz
        </a>, a private American venture capital firm, invested in Lido and described it
        as “an effective, decentralized staking platform. It offers one of the easiest ways to stake ETH and other
        PoS assets today while striving for decentralization through the DAO’s governance. Lido democratizes staking.”
      </TextParagraph>
    </div>
  </section>
</template>
<script>
import LottieMad from '@/components/shared/LottieMad'
import TextParagraph from '@/components/Cases/shared/TextParagraph'

export default {
  name: 'LidoStatisticsWithTimeline',

  components: { LottieMad, TextParagraph },
}
</script>
<style scoped lang="scss">
.case_lido__timeline-stat {
  &-title {
    @include font('Inter', 16px, 700);
    line-height: 22px;
    letter-spacing: -0.02em;
    color: $text-color--quote-box;
  }

  & .case_lottie__desktop {
    display: block;
  }
  & .case_lottie__mobile {
    display: none;
  }
  @media screen and (max-width: 430px) {
    & .case_lottie__desktop {
      display: none;
    }
    & .case_lottie__mobile {
      display: block;
    }
  }

  &-alert {
    background: rgba(255, 255, 255, 1);
    border-radius: 5px;
    padding: 10.5px 20px;

    p {
      @include font('Inter', 14px, 400);
      line-height: 166%;
      letter-spacing: -0.035em;
      color: $text-color--chinese-black;

      @media screen and (max-width: 400px){
        font-size: 17px;
      }

      a {
        color: $text-color--chinese-black;
        text-decoration: underline;
      }
    }
  }
}
</style>
