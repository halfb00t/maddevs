<template>
  <section>
    <div class="container_regular">
      <h2 class="case_title_h2 m-12_bottom">
        Three million rows of data processed by Clutch’s Statistics
      </h2>
      <TextParagraph class="m-48_bottom media-m-24_bottom">
        Mad Devs engineers have developed Clutch.co’s Statistics microservice that gathers data for the internal and
        external intelligent decision-making process. Three million rows of data are stored in PostgreSQL.
      </TextParagraph>
      <h3 class="case_title_h3 m-12_bottom">
        Three million rows of data processed by Clutch’s Statistics
      </h3>
      <TextParagraph class="m-12_bottom ">
        The Clutch algorithm continuously updates companies’ positions within different categories’ pages, directories,
        leader matrices, etc. The Statistics service collects such data to provide companies with a broader picture of
        their performance in comparison with their competitors.
      </TextParagraph>
      <TextParagraph class="m-48_bottom media-m-24_bottom">
        Clicks and views come from various Clutch pages. Companies can determine in which categories they are more
        popular and have a competitive advantage.
      </TextParagraph>
    </div>
    <div class="container_full background-color-blue-white m-48_bottom ">
      <div
        class="container_regular"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom"
      >
        <LottieMad
          id="data-processed"
          class="case_lottie"
          :lottie-link="$getMediaFromS3(`/images/Cases/clutch/lottie/data-processed.json`)"
          :autoplay="true"
        />
      </div>
    </div>
    <div class="container_regular">
      <h3 class="case_title_h3 m-12_bottom">
        Data for internal decision makers
      </h3>
      <TextParagraph class="m-12_bottom ">
        Clutch widget instalment rates in real time. Also, the list of all widget users whenever a customer deletes a
        widget. The Clutch algorithm continuously updates companies’ positions within different categories.
      </TextParagraph>
      <TextParagraph class="m-48_bottom media-m-24_bottom">
        This data is used inside another SPM microservice. Sponsorship, in turn, is a microservice that enables Clutch’s revenue
        operator managers to control sponsored accounts and deliver the value of sponsored accounts to paid customers.
      </TextParagraph>
      <h3 class="case_title_h3 m-12_bottom">
        Geographical data repository
      </h3>
      <TextParagraph class="m-12_bottom ">
        Essentially, the geographical database repository we developed is an interface for managing and editing data.
        Due to the lack of cost-effective solutions, Mad Devs engineers have decided to optimise expenses by developing
        the service from scratch.
      </TextParagraph>
      <TextParagraph class="m-48_bottom media-m-24_bottom">
        The service gathers data like regions, cities, states/provinces, and postal codes from a user-editable
        geographical database. However, the extensive amount of data was filtered from 7M place names to 52K. Special
        scripts automatically update the database to keep it up to date.
      </TextParagraph>
      <div
        class="p-80_bottom media-p-32_bottom"
      >
        <ListNumberedBox>
          <ListNumberedItemBox
            v-for="(data, i) in dataRep"
            :id="`data-item-${i}`"
            :key="data.text"
            :data-background="data.background"
          >
            {{ data.text }}
          </ListNumberedItemBox>
        </ListNumberedBox>
      </div>
    </div>
  </section>
</template>

<script>
import LottieMad from '@/components/shared/LottieMad'
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import ListNumberedBox from '@/components/Cases/shared/ListNumberedBox'
import ListNumberedItemBox from '@/components/Cases/shared/ListNumberedItemBox'
import IntersectionObserverMixin from '@/mixins/IntersectionObserverMixin'
import setBackground from '@/helpers/setBackground'
import { dataRep, idDataRep } from '@/data/caseClutch'

export default {
  name: 'DataProcessed',
  components: {
    TextParagraph,
    LottieMad,
    ListNumberedBox,
    ListNumberedItemBox,
  },

  mixins: [
    IntersectionObserverMixin(
      idDataRep,
      setBackground,
    ),
  ],

  data() {
    return {
      dataRep,
    }
  },
}
</script>

<style lang="scss" scoped>
.case {
  &_lottie {
    max-width: 813px;
  }

  /deep/ &_list-numbered_item {
    color: $text-color--white;
    min-height: 56px;
    background-color: $bgcolor--grey-cases;
    transition: 1s;
    @media screen and (max-width: 768px) {
      background-color: $bgcolor--grey-cases;
    }
  }
}
</style>
