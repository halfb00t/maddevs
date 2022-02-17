<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-24_bottom">
      Keyword grouping
    </h2>
    <TextParagraph class="m-24_bottom">
      The heart of Peklo Tool is a smart technology that groups keywords. Performed manually, grouping can take an overwhelmingly long time. It gets virtually unmanageable if a planned contextual advertising campaign uses thousands or tens of thousands of keywords, which they often do.
    </TextParagraph>
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="bottom"
    >
      <div
        class="case_img-wrapper m-12_bottom media-m-8_bottom"
      >
        <Picture
          :width="817"
          :height="459"
          file="keyword-grouping"
          alt="Keyword grouping"
          folder="peklo"
          extension="jpg"
        />
      </div>
      <TextParagraph
        class="case_img-alt m-56_bottom media-m-32_bottom"
        color="#a4a8b4"
      >
        The “Appliance Repair” niche 379 keywords in 369 ad groups within 0.176 seconds
      </TextParagraph>
    </div>
    <TextParagraph class="m-24_bottom">
      Automating the grouping process was challenging because human language was involved. All the possible spelling options (including typos) for keywords need to be considered. Normally, neural networks and natural language processing (NLP) technologies would be used to handle the linguistic variations. But with them, grouping would’ve been slow, so we found an alternative solution.
    </TextParagraph>
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="bottom"
    >
      <ColoredCards
        :cards-data="keywordGroupingCards"
        grid-type="two-two"
      />
    </div>
    <TextQuote
      class="m-auto m-96_top m-96_bottom media-m-48_top media-m-48_bottom"
      author="Oleg Katkov, Software engineer"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom"
    >
      Speed was a priority. We wanted to create a tool that could impress the user by grouping keywords instantly. By integrating the dictionaries, we achieved it. The grouping process takes Peklo Tool only a few seconds.
    </TextQuote>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextQuote from '@/components/Cases/shared/TextQuote'
import Picture from '@/components/Cases/shared/Picture'
import { keywordGroupingCards } from '@/data/casePeklo'
import ColoredCards from '@/components/Cases/shared/ColoredCards/ColoredCards'

export default {
  name: 'KeywordGrouping',
  components: {
    ColoredCards,
    TextParagraph,
    TextQuote,
    Picture,
  },

  data() {
    return {
      keywordGroupingCards,
    }
  },
}
</script>

<style lang="scss" scoped>
.case {
  &_img-wrapper {
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));
  }

  &_img-alt {
    text-align: center;
    font-size: 13px;
    letter-spacing: -0.02em;
  }

  @media screen and (max-width: 768px) {

    &_img-alt {
      font-size: 11px;
    }
  }
}
</style>
