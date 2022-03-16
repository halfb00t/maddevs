<template>
  <section class="container_regular m-48_bottom">
    <h3 class="case_title_h2 m-12_bottom">
      Integrating online payment processing
    </h3>
    <TextParagraph class="m-24_bottom">
      Payment processing is an integral part of the BandPay solution. So one of the essential project tasks
      was integrating with a payment processor to accept and send payments online.
    </TextParagraph>
    <div
      class="case_cards-list m-24_bottom"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom"
    >
      <Card
        v-for="card in integratingOnlineCards"
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
    <TextParagraph class="m-48_bottom media-m-24_bottom">
      Stripe is a top-ranked payment processing platform that enables businesses to accept payments quickly and safely.
      By granting access to its infrastructure through APIs (application programming interfaces), the platform assists
      in launching bespoke financial services. We chose Stripe for the BandPay project based on the following advantages:
    </TextParagraph>
    <List class="m-48_bottom media-m-24_bottom">
      <ListItemBoxCheckMark
        v-for="listItem in integrationOnlineList"
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
    <TextParagraph>
      In addition to taking payments from buyers, BandPay was supposed to send payouts to sellers.
      Mad Devs met this challenge using Stripe Connect—a solution provided by the Stripe platform.
      By integrating Stripe Connect into the project, we made it possible to collect payments from buyers and route
      funds to sellers’ bank accounts. Now, BandPay is an official Stripe Partner.
    </TextParagraph>
  </section>
</template>
<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Card from '@/components/Cases/shared/Card'
import ListItemBoxCheckMark from '@/components/Cases/shared/ListItemBoxCheckMark'
import List from '@/components/Cases/shared/List'
import { integratingOnlineCards, integrationOnlineList } from '@/data/caseBandpay'

export default {
  name: 'IntegratingOnline',
  components: {
    TextParagraph,
    Card,
    List,
    ListItemBoxCheckMark,
  },

  data() {
    return {
      integratingOnlineCards,
      integrationOnlineList,
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
    padding-left: 50px;
    @media screen and (max-width: 920px) {
      padding: 29px 29px 139px 29px;
    }
  }

  &_card-title {
    margin-bottom: 5px;
    color: $text-color--white-primary;
  }

  &_card-description {
    max-width: 400px;
    color: $text-color--grey-20-percent;
    @media screen and (max-width: 920px) {
      max-width: 100%;
    }
  }

  &_card-icon {
    position: absolute;
    right: 17px;
    bottom: -8px;
    @media screen and (max-width: 920px) {
      right: 5px;
    }
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
