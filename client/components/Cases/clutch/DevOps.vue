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
      <div class="case_cards-group m-48_bottom media-m-24_bottom">
        <div class="case_cards-item">
          <div class="case_cards-item-logo">
            <img
              v-lazy-load
              width="39px"
              height="39px"
              :data-src="$getMediaFromS3(`/images/Cases/clutch/svg/maddevs-logo.svg`)"
              alt="MadDevs"
            >
            <TextParagraph class="case_cards-item-logo-text">
              Mad Devs
            </TextParagraph>
          </div>
          <div class="case_cards-item-text m-21_top">
            <TextParagraph class="case_cards-item-text">
              Engineering Your Growth
            </TextParagraph>
          </div>
          <div class="case_cards-item-button">
            <NuxtLink
              to="/"
              class="case_cards-item-button-text"
            >
              Visit Website
            </NuxtLink>
          </div>
        </div>
        <div class="case_cards-item">
          <img
            v-lazy-load
            width="155px"
            height="147px"
            :data-src="$getMediaFromS3(`/images/Cases/clutch/svg/rocket.svg`)"
            alt="Rocket"
          >
        </div>
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

  &_cards {
    &-group {
      padding: 18px 70px;
      @include grid(repeat(2, 1fr), auto, 10px, 10px);
      align-items: center;
      background: linear-gradient(180deg, #FFFFFF 13.18%, rgba(254, 254, 254, 0.98194) 13.19%, rgba(238, 245, 247, 0.77) 44.33%, rgba(206, 226, 233, 0.43) 71.17%, rgba(204, 225, 232, 0.45918) 75.55%, rgba(202, 224, 231, 0.49) 91.12%);
      @media screen and (max-width: 730px) {
        padding: 10px 20px;
      }
    }

    &-item {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: center;

      &-logo {
        align-self: flex-start;
        display: flex;
        align-content: center;

        &-text {
          margin-top: 5px;
          margin-left: 15px;
          display: inline-block;
          @include font('Roboto', 20px, 600);
        }
      }

      &-text {
        flex-grow: 1;
        align-self: flex-start;
        @include font('Roboto', 18px, 400);
      }

      &-button {
        align-self: flex-start;

        &-text {
          display: inline-block;
          background-color: #FF3D2E;
          padding: 7px 25px;
          @include default-text($text-color--white, 14px, 166%, -0.035em, 500);
        }
      }

      @media screen and (max-width: 650px) {
        &-logo-text {
          font-size: 14px;
        }

        &-text {
          font-size: 12px;
        }

        &-button-text {
          padding: 5px 10px;
          font-size: 10px;
        }
      }
    }
  }
}
</style>
