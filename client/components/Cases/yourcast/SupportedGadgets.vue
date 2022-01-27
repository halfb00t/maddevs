<template>
  <section>
    <div class="container_regular">
      <h3 class="case_title_h2 m-24_bottom media-m-12_bottom">
        Supported gadgets
      </h3>
      <TextParagraph class="m-48_bottom media-m-24_bottom">
        The platform is available on any device and remains equally friendly to both web and mobile users. Since 2016, the
        project has been continuously improving to provide more options for each category of viewers.
      </TextParagraph>
    </div>
    <div class="container_full background-color-black p-100_top p-100_bottom">
      <div class="container_regular">
        <div class="case_cards-group">
          <Card
            v-for="gadget in supportedGadgets"
            :key="gadget.title"
            :class="`background-color-${gadget.color}`"
            class="case_card"
          >
            <h3 class="case_title_h4 case_card-title m-10_bottom media-m-8_bottom">
              {{ gadget.title }}
            </h3>
            <TextParagraph
              v-if="gadget.description"
              color="#ffffff"
              class="m-10_bottom"
            >
              {{ gadget.description }}
            </TextParagraph>
            <div class="case_card-img">
              <Picture
                v-if="gadget.file"
                :width="gadget.width"
                :height="gadget.height"
                :file="gadget.file"
                :alt="gadget.alt || 'Image'"
                folder="yourcast"
                extension="png"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from '@/components/Cases/shared/Card'
// import CardSupportedGadgets from '@/components/Cases/yourcast/CardSupportedGadgets'
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import { supportedGadgets } from '@/data/caseYourcast'
import Picture from '@/components/Cases/shared/Picture'

export default {
  name: 'SupportedGadgets',
  components: {
    Card,
    // CardSupportedGadgets,
    TextParagraph,
    Picture,
  },

  data() {
    return {
      supportedGadgets,
    }
  },
}
</script>

<style scoped lang="scss">
.case {
  &_card {
    padding: 32px 8px 0 32px;
    &-img {
      min-width: 368px;
      left: 52%;
    }
  }
  &_card:nth-child(2) {
    padding-left: 20px;
  }
  &_card:nth-child(3) .case_card-img {
    padding: 0;
  }
}

.background-color-dark-purple06 {
  background: $bgcolor--dark-purple06-opacity;
}
.background-color-dark-purple05 {
  background: $bgcolor--dark-purple05-opacity;
}
.background-color-dark-purple04 {
  background: $bgcolor--dark-purple04-opacity;
}
//.case {
//  &_supported-gadgets {
//    @include grid(repeat(3, 1fr), auto, 15px, 0);
//
//    @media screen and (max-width: 870px) {
//      @include grid(repeat(1, 1fr), auto, 0, 10px);
//    }
//  }
//}
//.case {
//  &_card {
//    padding-bottom: 0;
//    background: rgba(48, 148, 171, 0.3);
//    &:nth-child(3){
//      text-align: center;
//      grid-column-start: span 2;
//      .case_card-img{
//        padding: 0 30px;
//      }
//    }
//  }
//
//  &_cards-group {
//    @include grid(repeat(2, 1fr), auto, 23px, 23px);
//  }
//
//  &_card-title {
//    color: $text-color--white;
//  }
//
//  &_card-img {
//    min-width: 313px;
//    position: relative;
//    left: 50%;
//    transform: translateX(-50%);
//    @media screen and (max-width: 990px) {
//      min-width: 200px
//    }
//  }
//
//  @media screen and (max-width: 720px) {
//    & &_card {
//      grid-column-start: span 1;
//      &:nth-child(3) {
//        text-align: left;
//      }
//    }
//    &_cards-group {
//      @include grid(repeat(1, 1fr), auto, 0, 24px);
//    }
//  }
//}
</style>
