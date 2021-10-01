<template>
  <section>
    <div class="container_regular m-96_bottom media-m-48_bottom">
      <h3 class="case_title_h3 m-12_bottom">
        DevOps engineers optimised Clutch.co’s infrastructure costs
      </h3>
      <TextParagraph class="m-24_bottom">
        Mad Devs effectively managed Clutch.co’s infrastructure costs by selecting cost-effective resources to fulfil
        the solution’s technical needs.
      </TextParagraph>
      <div
        class="m-24_bottom"
      >
        <ListNumbered>
          <ListNumberedItem class="case_list-item">
            Mad Devs migrated Clutch.сo microservices to Kubernetes, an open-source container-orchestration system for
            automating the deployment, scaling, and management of containerised applications. Essentially, this enables
            Clutch.co to provide cost-effectiveness and high scalability, as Kubernetes takes less space and requires
            fewer resources. Kubernetes autoscaling allows optimizing resource usage by reducing the number of unused
            nodes, and the use of spot instances allows reducing costs to up to 90%.
          </ListNumberedItem>
          <ListNumberedItem class="case_list-item">
            Mad Devs automated and optimized TeamCity agents. Now, TeamCity launches and stops agents automatically, or
            deletes them after they’ve performed tasks. In the past, all non-performing work would continue, creating
            additional expenses.
          </ListNumberedItem>
        </ListNumbered>
      </div>

      <div
        class="m-96_bottom media-m-48_bottom"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom"
      >
        <Lottie
          id="devOps-clutch"
          :options="options"
          class="case_lottie"
          @animCreated="handleAnimation"
        />
      </div>
      <h3 class="case_title_h3 m-12_bottom">
        Implemented CRM-connector
      </h3>
      <TextParagraph class="m-48_bottom media-m-24_bottom">
        CRM connector is a service that connects Clutch with HubSpot, a popular CRM. The service allows Clutch managers
        to work in HubSpot with Clutch data to streamline such time-consuming tasks as data syncing and data sharing.
        With it, Clutch managers get access to accurate records that can be easily shared within the platform.
      </TextParagraph>
      <h3 class="case_title_h3 m-12_bottom">
        Implemented Ad Service
      </h3>
      <TextParagraph class="m-24_bottom">
        Our specialists implemented a service to use internal ads. The service uses a third-party API to sponsor
        campaigns represented with adblocks.
      </TextParagraph>

      <div
        class="case_banner background-color-silver m-60_bottom media-m-48_bottom"
        :style="{ backgroundImage: `url(${$getMediaFromS3(`/images/Cases/clutch/svg/cat.svg`)}), url(${$getMediaFromS3(`/images/Cases/clutch/svg/bigcloud.svg`)}), url(${$getMediaFromS3(`/images/Cases/clutch/svg/smallcloud.svg`)})` }"
      >
        <TextParagraph class="case_banner-text">
          Mad Devs
        </TextParagraph>
        <TextParagraph class="case_banner-text m-28_bottom">
          Engineering your growth
        </TextParagraph>
        <NuxtLink
          to="/"
          class="case_button"
        >
          <span class="case_button-text">Visit Website</span>
          <img
            v-lazy-load
            width="47px"
            height="43px"
            :data-src="$getMediaFromS3(`/images/Cases/clutch/svg/maddevs-icon.svg`)"
            alt="Rocket"
            class="case_button-image"
          >
        </NuxtLink>
      </div>
      <h3 class="case_title_h3 m-12_bottom">
        Implemented Matchmaking and Shortlist
      </h3>
      <TextParagraph class="m-12_bottom">
        Mad Devs implemented Matchmaking and Shortlist to facilitate Clutch clients the selection of companies based on
        their requirements. Matchmaking is a form to be filled by a client. In the form, the client provides the basic
        information about the potential project to get the list of the companies that comply with the requirements.
      </TextParagraph>
      <TextParagraph>
        Shortlist is a functionality that allows a client to choose the companies based on the client’s expectations and
        requirements and to save the data in a list.
      </TextParagraph>
    </div>
  </section>
</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue'
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import ListNumbered from '@/components/Cases/shared/ListNumbered'
import ListNumberedItem from '@/components/Cases/shared/ListNumberedItem'
import animationData from '@/assets/lottie/clutch/devOps.json'
import playLottieMixin from '@/mixins/playLottieMixin'

export default {
  name: 'DevOps',
  components: {
    TextParagraph,
    Lottie,
    ListNumbered,
    ListNumberedItem,
  },

  mixins: [
    playLottieMixin('devOps-clutch', {
      animationData,
      autoplay: false,
      loop: false,
    }),
  ],
}
</script>

<style lang="scss" scoped>
.case {
  &_list-item {
    &::marker {
      font-weight: 600;
    }
  }

  &_lottie {
    max-width: 813px;
  }

  &_banner {
    padding: 20px 36px 20px;
    height: 151px;
    background-position: right 10px top, right -2px top, top 20px right 290px;
    background-size: 270px, 285px, 70px;
    background-repeat: no-repeat;

    &-text {
      &:first-child {
        color: $text-color--red;
      }
      @include font('Montserrat',30px, 800);
      line-height: 36px;
      color: $text-color--black;
    }
  }

  &_button {
    position: relative;
    width: 220px;
    height: 42px;
    padding-right: 43px;
    display: flex;
    &-text{
      flex-grow: 1;
      background-color: $text-color--red;
      @include font('Montserrat',14px, 800);
      line-height: 40px;
      text-align: center;
      color: $text-color--white-primary;
    }
    &-image{
      position: absolute;
      top:0;
      right: -3px;
    }
  }
  @media screen and (max-width: 880px) {
    &_banner {
      height: 180px;
      &-text {
        width: 250px;
      }
    }
  }

    @media screen and (max-width: 769px) {
      &_banner {
        padding: 15px 15px 15px;
        height: 155px;
        background-position: right -20px top, right -40px top, top 20px right 146px;
        background-size: 170px, 175px, 50px;

        &-text {
          width: 300px;
          font-size: 24px;
          line-height: 29px;
        }
      }

      &_button {
        width: 151px;
        height: 30px;
        padding-right: 33px;
        &-text{
          font-size: 12px;
          line-height: 30px;
        }
        &-image{
         width: 33px;
          height: 30px;
          right: 1px;
        }
      }
  }
  @media screen and (max-width: 460px) {
    &_banner-text{
    width: 200px;
    }
  }
}
</style>
