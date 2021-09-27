<template>
  <section class="p-96_bottom p-media-p-48_bottom">
    <div class="container_regular m-96_bottom media-m-48_bottom">
      <h2 class="case_title_h2 m-12_bottom media-m-12_bottom">
        Switched to the microservices architecture
      </h2>
      <TextParagraph>
        Although Clutch.co’s monolithic architecture was cost-effective at the early development stages, it couldn’t
        sustain Сlutch’s continuously increasing website traffic and new registrations. So Mad Devs stepped in to build
        a new microservices architecture from scratch on Go and Python.
      </TextParagraph>
    </div>
    <div
      class="container_full background-color-blue-grey p-100_top p-100_bottom media-p-41_top media-p-41_bottom"
    >
      <div class="container_regular">
        <div class="case_cards-group">
          <Card class="case_card">
            <h2 class="case_title_h2 case_card-title m-21_bottom media-m-10_bottom">
              Integrated single sign-on (SSO)
            </h2>
            <TextParagraph
              class="case_card-text m-24_bottom media-m-2_bottom"
              color="$text-color--white"
            >
              The integration of SSO challenged our team with the need to display different web designs based on the URL
              that the user initially accessed. We made all services talk to each other via a remote procedure call
              system, and the SSO functionality was designed to quickly take the user to the desired website in a
              user-friendly way.
            </TextParagraph>
          </Card>
          <Card class="case_card">
            <Picture
              :shadow="false"
              :width="359"
              :height="695"
              :background="false"
              folder="clutch"
              file="iphone"
              extension="png"
              alt="SSO"
              class="case_card-img"
            />
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Picture from '@/components/Cases/shared/Picture'
import Card from '@/components/Cases/shared/Card'

export default {
  name: 'Microservices',
  components: {
    TextParagraph,
    Card,
    Picture,
  },
}
</script>

<style lang="scss" scoped>
.case {
  &_card {
    padding: 0;
    &-title, &-text{
      color: $text-color--white;
    }
  }

  &_cards-group {
    @include grid(repeat(2, 1fr), auto, 23px, 23px);
    align-items: center;
  }

  @media screen and (max-width: 894px) {
    &_card-img {
      width: 200px;
      height: 387px;
    }
  }

  @media screen and (max-width: 769px) {
    &_cards-group {
      @include grid(repeat(1, 1fr), auto, 0, 24px);
    }
  }
}
</style>
