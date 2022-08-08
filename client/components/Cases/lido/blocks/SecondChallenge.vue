<template>
  <section class="case-lido__second-challenge m-72_bottom media-m-48_bottom">
    <div class="container_regular">
      <h4 class="case_title_h4-28 m-24_bottom">
        Second challenge: Integration with cross-chain bridge
      </h4>
      <TextParagraph class="m-24_bottom">
        The
        <a
          href="https://docs.anchorprotocol.com/protocol/bonded-assets-bassets/bonded-eth-beth"
          target="_blank"
          class="case_link-in-text"
          rel="noopener"
        >
          bETH
        </a> token is a derisively-native asset used in the Anchor Protocol.
        Its integration was carried out through the
        <a
          href="https://bridge.terra.money/"
          target="_blank"
          class="case_link-in-text"
          rel="noopener"
        >
          Shuttle bridge
        </a>, which transfers it between Terra and Ethereum.
        In order to preserve its resilience, a decision was made to migrate to
        <a
          href="https://www.portalbridge.com/#/transfer"
          target="_blank"
          rel="noopener"
          class="case_link-in-text"
        >
          Wormhole bridge.
        </a>
      </TextParagraph>
      <TextParagraph class="m-24_bottom">
        The migration plan is:
      </TextParagraph>
      <ListNumberedBox class="m-48_bottom media-m-24_bottom">
        <ListNumberedItemBox
          v-for="(solution, i) in migrationPlanData"
          :id="`solution-item-${i}`"
          :key="solution.text"
          data-aos="fade-up"
        >
          {{ solution.text }}
        </ListNumberedItemBox>
      </ListNumberedBox>
      <EmbedCard v-bind="migrationToWormholeData" />
    </div>
  </section>
</template>
<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import ListNumberedBox from '@/components/Cases/shared/ListNumberedBox'
import ListNumberedItemBox from '@/components/Cases/shared/ListNumberedItemBox'
import { migrationPlanData, migrationToWormholeData } from '@/data/caseLido'
import EmbedCard from '@/components/Cases/shared/EmbedCard'

export default {
  name: 'SecondChallenge',

  components: {
    EmbedCard,
    TextParagraph,
    ListNumberedBox,
    ListNumberedItemBox,
  },

  data() {
    return {
      migrationPlanData,
      migrationToWormholeData,
    }
  },
}
</script>
<style lang="scss" scoped>
.case-lido__second-challenge {
  ::v-deep .embed-card {
    padding-right: 90px;
  }
}
</style>
