<template>
  <section>
    <div class="container_regular">
      <h2
        class="case_title_h2 m-24_bottom media-m-12_bottom"
      >
        Building a fault-tolerant architecture
      </h2>
      <TextParagraph
        class="m-24_bottom"
      >
        We invested much effort in the architecture because we wanted to do things right, right from the start. A taxi
        service needs a highly flexible and failproof system to rely on. The numbers of requests to process and
        operations to run can vary remarkably depending on both regular factors, like rush hours, and unpredictable
        ones, like the weather. Below are the data that are relevant at the time of our work on the project.
      </TextParagraph>
    </div>
    <div
      class="container_full background-color-silver p-42_top p-42_bottom media-p-32_bottom media-p-32_top"
    >
      <div class="container_regular case_lottie">
        <LottieMad
          id="fault-tolerance-nambataxi"
          height="414px"
          :lottie-link="$getMediaFromS3(`/images/Cases/nambataxi/lottie/fault-tolerance.json`)"
          :autoplay="true"
        />
      </div>
    </div>
    <div class="container_regular m-56_top media-m-41_top">
      <StatisticsContainer class="m-80_bottom media-m-48_bottom">
        <StatisticCard
          v-for="(review, i) in applicationStatistics"
          :id="`application-speed-item-${i}`"
          :key="`application-speed-item-${i}`"
          v-bind="review"
          section="application-speed"
          :index="i"
        />
      </StatisticsContainer>
      <TextParagraph
        class="m-24_bottom media-m-12_bottom"
      >
        Given the requirements and the limitations, we decided to implement a one-core architecture using multiple
        technologies and open-source software with no OS- or device-related restrictions.
      </TextParagraph>
      <TextParagraph
        class="m-72_bottom media-m-24_bottom"
      >
        Ruby has Ruby-SMPP that deals with the SMPP protocol to receive and send text messages. We needed Node.js
        because of Socket.IO that enables real-time messaging. Turning to open-source software and choosing to develop a
        web application meant that staff could work remotely and it was no longer necessary to spend money on switching
        equipment or licences. So we could attract more customers.
      </TextParagraph>
      <h4
        class="case_title_h4 m-24_bottom media-m-12_bottom"
      >
        Implementation
      </h4>
      <TextParagraph
        class="m-48_bottom media-m-24_bottom"
      >
        To build the backend part of the web application, we chose Django as a flexible and secure development tool that
        provided for efficient client-server interactions in a request-response mode. Due to its high scalability,
        Django could easily cope with heavy traffic processing multiple requests from the users and quickly responding
        to them. As a result, the application could run smoothly even during high-demand periods.
      </TextParagraph>
    </div>
    <div
      class="container_full background-color-silver m-72_bottom media-m-48_bottom"
    >
      <div class="container_regular">
        <LottieMad
          id="implementation-nambataxi"
          height="451px"
          :lottie-link="$getMediaFromS3(`/images/Cases/nambataxi/lottie/implementation.json`)"
          :autoplay="true"
        />
      </div>
    </div>
    <div class="container_regular">
      <h4
        class="case_title_h4 m-24_bottom"
      >
        Drivers
      </h4>
      <TextParagraph
        class="m-48_bottom media-m-24_bottom"
      >
        Twisted was another component that we added to our web application’s architecture to make the remote system’s
        communications faster and more reliable. As a scalable event-driven engine, Twisted can handle numerous requests
        simultaneously. SMS notifications for clients were sent to drivers, i.e. our Twisted sent requests to Django
        through a Ruby daemon and then processed requests through the SMS provider’s centre (SMSC).
      </TextParagraph>
    </div>
    <div
      class="container_full background-color-silver m-72_bottom media-m-48_bottom"
    >
      <div class="container_regular">
        <LottieMad
          id="drivers-nambataxi"
          height="298px"
          :lottie-link="$getMediaFromS3(`/images/Cases/nambataxi/lottie/drivers.json`)"
          :autoplay="true"
        />
      </div>
    </div>
    <div class="container_regular">
      <h4
        class="case_title_h4 m-24_bottom"
      >
        SMS orders
      </h4>
      <TextParagraph
        class="m-72_bottom media-m-48_bottom"
      >
        Instead of making phone calls, clients could now place an order by a text message. The messages they sent
        reached the SMSC first. After that, we picked up the message using a Ruby daemon and made a POST request. We
        chose the POST request method as a secure way of transmitting sensitive data provided by the app users. Finally,
        the POST requests were sent to Django that processed the received messages
      </TextParagraph>
      <h4
        class="case_title_h4 m-24_bottom"
      >
        Dispatcher service
      </h4>
      <TextParagraph
        class="m-48_bottom media-m-24_bottom"
      >
        Operators’ two work processes were to accept orders and to handle telephone calls. All orders come to Django via
        POST requests; Django then saves a Percona order and sends it to a specific Redis channel that is listening to
        Node.js. Next, the information is sent to the operators’ broadcast channel.
      </TextParagraph>
    </div>
    <div
      class="container_full background-color-silver p-66_top media-p-38_top m-48_bottom media-m-24_bottom"
    >
      <div class="container_regular">
        <LottieMad
          id="dispatch-service-nambataxi"
          height="512px"
          :lottie-link="$getMediaFromS3(`/images/Cases/nambataxi/lottie/dispatch-service.json`)"
          :autoplay="true"
        />
      </div>
    </div>
    <div class="container_regular">
      <TextParagraph
        class="m-72_bottom media-m-48_bottom"
      >
        The simplest part of our system automates managers’ work. The core components here are Django and Percona—an
        open-source database management system. This helps managers to deal with large amounts of information, such as
        orders, client and driver databases, in a prompt and easy manner. Django collects data from Percona and sends it
        to Excel or to the browser.
      </TextParagraph>
      <h4
        class="case_title_h4 m-24_bottom"
      >
        Transition
      </h4>
      <TextParagraph
        class="m-72_bottom media-m-48_bottom"
      >
        Moving to the new software was difficult, and we learned many lessons from it. The transition took seven days
        and taught us to make better use of our frameworks and to create more realistic, reliable load tests.
        Admittedly, we lost about 8% of orders that week, but we brought the waiting time for passengers from 8 down to
        5 minutes.
      </TextParagraph>
      <h4
        class="case_title_h4 m-24_bottom"
      >
        Further growth
      </h4>
      <TextParagraph
        class="m-72_bottom media-m-48_bottom"
      >
        Quick growth ensued, presenting a new round of challenges. We needed to constantly introduce changes and
        improvements to ensure that the system could handle the load. For example, we used Sentinel at some point to
        provide fault tolerance for Redis. Later, we switched to Asterisk 11.5 as the telephone exchange to manage GSM
        gateways and providers. When we discovered that Asterisk had trouble bridging audio between devices, we moved to
        FreeSWITCH. We were constantly perfecting the system.
      </TextParagraph>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import LottieMad from '@/components/shared/LottieMad'
import countUp from '@/helpers/countUp'
import { applicationStatistics } from '@/data/caseNambaTaxi'
import StatisticsContainer from '@/components/Cases/shared/StatisticsContainer'
import StatisticCard from '@/components/Cases/shared/StatisticsCard'

export default {
  name: 'FaultTolerance',
  components: {
    LottieMad,
    TextParagraph,
    StatisticsContainer,
    StatisticCard,
  },

  data() {
    return {
      applicationStatistics,
      elementIdsForCountUp: [
        'statistics-application-speed-0',
        'statistics-application-speed-1',
        'statistics-application-speed-2',
      ],
    }
  },

  mounted() {
    this.initIntersectionObserver()
  },

  methods: {
    initIntersectionObserver() {
      this.elementIdsForCountUp.forEach(id => {
        const callback = (entries, observer) => {
          entries.forEach(entry => {
            if (entry.target.id === id) {
              if (entry.isIntersecting) {
                if (id !== 'statistics-application-speed-2') countUp(entry, observer)
                if (id === 'statistics-application-speed-2') {
                  countUp(entry, observer, {
                    decimalPlaces: 1,
                  })
                }
              }
            }
          })
        }
        const element = document.getElementById(id)
        if (!element) return
        const observer = new IntersectionObserver(callback, {
          root: null,
          rootMargin: '0px',
          threshold: 1.0,
        })
        observer.observe(element)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.case {
  &_lottie {
    /deep/ .lottie-container {
      border-radius: 10px;
      background-color: $bgcolor--white-primary;
    }
  }

  /deep/ &_statistics-item {
    border-right: 1px solid $border-color--black-border-03-opacity;

    &_number {
      border: none;
      margin-left: 20px;
      padding-bottom: 10px;
      @include font($text-color--black, 36px, 600);
    }

    &_description {
      max-width: 220px
    }

    &:last-child {
      border: none;
    }

    @media screen and (max-width: 820px) {
      &_number {
        padding: 0 0 5px;
      }
      border: none;
    }
  }

}
</style>
