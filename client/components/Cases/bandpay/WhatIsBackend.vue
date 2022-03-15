<template>
  <section class="m-96_bottom media-m-48_bottom">
    <div class="container_regular m-48_bottom">
      <h3 class="case_title_h2 m-12_bottom">
        What is in the backend?
      </h3>
      <TextParagraph class="m-12_bottom">
        To build the backend, we opted for Go, which offered the following benefits for the project:
      </TextParagraph>
      <List class="m-24_bottom">
        <ListItemBoxCheckMark
          v-for="listItem in whatIsBackendList"
          :key="listItem"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom"
        >
          <img
            v-lazy-load
            width="23.44"
            height="23.44"
            :data-src="$getMediaFromS3(`/images/Cases/bandpay/svg/check-mark.svg`)"
            :alt="listItem"
            class="list-item__box-icon"
          >
          {{ listItem }}
        </ListItemBoxCheckMark>
      </List>
      <div
        class="case_cards-list m-24_bottom"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom"
      >
        <Card
          v-for="card in whatIsBackendCards"
          :key="card.title"
          :class="`case_card background-color-${card.color}`"
        >
          <h4 class="case_title_h5 case_card-title">
            {{ card.title }}
          </h4>
          <TextParagraph class="case_card-description">
            {{ card.description }}
          </TextParagraph>
          <img
            v-lazy-load
            :width="card.iconWidth"
            :height="card.iconHeight"
            :data-src="$getMediaFromS3(`/images/Cases/bandpay/svg/${card.icon}.svg`)"
            :alt="card.title || 'Image'"
            class="case_card-icon"
          >
        </Card>
      </div>
      <TextParagraph>
        The BandPay backend interacts with various platforms and services intended for email and text messaging,
        handling marketing activities, error tracking, crash monitoring and fixing, data storage, and many other functions
        and features. The scheme below shows the environment and services involved in the BandPay backend functionality
      </TextParagraph>
    </div>
    <div class="container_full background-color-silver m-48_bottom">
      <div class="container_regular">
        <LottieMad
          class="case_lottie"
          height="401px"
          :lottie-link="$getMediaFromS3(`/images/Cases/bandpay/lottie/what-is-backend.json`)"
          :autoplay="true"
        />
      </div>
    </div>
    <div class="container_regular">
      <TextParagraph>
        To enable the app to communicate with the database in an easy and effective way, we refactored the heavy
        database interface, making it more readable, convenient, and failproof.
      </TextParagraph>
    </div>
  </section>
</template>
<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import List from '@/components/Cases/shared/List'
import ListItemBoxCheckMark from '@/components/Cases/shared/ListItemBoxCheckMark'
import Card from '@/components/Cases/shared/Card'
import LottieMad from '@/components/shared/LottieMad'
import { whatIsBackendCards, whatIsBackendList } from '@/data/caseBandpay'

export default {
  name: 'WhatIsBackend',
  components: {
    TextParagraph,
    List,
    ListItemBoxCheckMark,
    Card,
    LottieMad,
  },

  data() {
    return {
      whatIsBackendCards,
      whatIsBackendList,
    }
  },
}
</script>
<style lang="scss" scoped>
.case {
  &_cards-list {
    @include grid(repeat(1, 1fr), auto, 0, 24px);

    @media screen and (max-width: 890px) {
      grid-row-gap: 16px;
    }
  }

  &_card {
    position: relative;
  }

  &_card-title {
    margin-bottom: 5px;
    color: $text-color--white-primary;
  }

  &_card-description {
    max-width: 373px;
    color: $text-color--grey-20-percent;
  }

  &_card-icon {
    position: absolute;
    right: 17px;
    bottom: 0;
  }
}

@media screen and (max-width: 890px) {
  &_card-description {
    max-width: 100%;
  }

  &_card-icon {
    display: none;
  }
}

::v-deep .list-item_box {
  padding-left: 16.78px;
  background-color: $bgcolor--silver;
  display: flex;
  &::before {
    content: '';
    display: none;
  }
}

.list-item__box-icon {
  vertical-align: text-bottom;
  margin-right: 14.78px;
}
</style>
