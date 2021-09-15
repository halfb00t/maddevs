<template>
  <section class="container_full background-color-black m-48_bottom p-48_top p-48_bottom media-p-41_top media-p-41_bottom">
    <div
      class="container_regular"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom"
    >
      <h2 class="case_title_h2 case_title m-12_bottom">
        Peklo Tool under the hood
      </h2>
      <TextParagraph class="case_bold m-24_bottom">
        Peklo Tool’s architecture features three main components:
      </TextParagraph>
      <div
        class="case_cards m-48_bottom media-m-38_bottom"
      >
        <div
          v-for="card in pekloToolUnderTheHoodCards"
          :key="card.title"
          class="case_card background-color-gray"
        >
          <div class="case_card-text-wrapper">
            <h3
              class="case_title_h5 case_card-title m-8_bottom"
              v-html="card.title"
            >
              {{ card.title }}
            </h3>
            <TextParagraph
              class="case_card-description"
              color="#cfcfd0"
              v-html="card.description"
            >
              {{ card.description }}
            </TextParagraph>
          </div>
          <div class="case_icon-wrapper">
            <img
              v-lazy-load
              :data-src="$getMediaFromS3(`/images/Cases/peklo/svg/${card.icon}.svg`)"
              :alt="card.title || 'Image'"
              :width="card.iconWidth"
              :height="card.iconHeight"
              :class="`case_card-icon-${card.icon}`"
              class="case_card-icon"
            >
          </div>
        </div>
      </div>
      <TextParagraph
        color="#a0a0a1"
        class="case_architecture-description m-24_bottom m-auto"
      >
        Other components deal with payments, file and data storage, and load. Structurally, Peklo Tool’s architecture looks like this:
      </TextParagraph>
      <img
        v-lazy-load
        :data-src="$getMediaFromS3(`/images/Cases/peklo/svg/peklo-tool-under-the-hood.svg`)"
        alt="Peklo Tool’s architecture"
        width="816"
        height="408"
        class="case_architecture-img"
      >
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import { pekloToolUnderTheHoodCards } from '@/data/casePeklo'

export default {
  name: 'PekloToolUnderTheHood',
  components: {
    TextParagraph,
  },

  data() {
    return {
      pekloToolUnderTheHoodCards,
    }
  },
}
</script>

<style lang="scss" scoped>
.case {
  &_title,
  &_bold,
  &_card-title,
  &_card-description,
  &_architecture-description {
    text-align: center;
  }

  &_title,
  &_bold,
  &_card-title {
    color: $text-color--white;
  }

  &_bold {
    font-weight: 700;
  }

  &_architecture-description {
    max-width: 623px;
  }

  &_architecture-img {
    width: 100%;
    height: 100%;
  }

  &_cards {
    @include grid(repeat(3, 1fr), auto, 24px, 0);
  }

  &_card,
  &_icon-wrapper {
    display: flex;
  }

  &_card {
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
  }

  &_card-text-wrapper {
    margin-bottom: 20px;
    padding: 24px 10px 0;
  }

  &_icon-wrapper {
    justify-content: flex-end;
  }

  &_card-icon-vue {
    position: relative;
    right: -5px;
  }

  @media screen and (max-width: 990px) {
    &_cards {
      @include grid(repeat(1, 1fr), auto, 0, 24px);
    }

    &_card-title,
    &_card-description {
      /deep/ br {
        display: none;
      }
    }
  }
}
</style>
