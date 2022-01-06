<template>
  <main class="case case--nambaTaxi">
    <CaseHeader
      :logo="logo"
      project="namba-taxi"
      video-name="/videos/namba-taxi-banner.mp4"
      video-fallback-path="/images/Cases/nambataxi/png/nambataxi-banner.png"
    >
      <h1
        slot="title"
        class="case_header-title"
      >
        Namba Taxi: <br> Modernising transport
      </h1>
      <p
        slot="description"
        class="case_header-description"
      >
        The system that took urban transport in Bishkek, Kyrgyzstan to the <br> next level in 2013 by making taxi ordering
        fast, efficient and <br> convenient and continues to function today.
      </p>
    </CaseHeader>
    <Main />
    <Footer
      link="/case-studies/clutch/"
      class-name="clutch"
    >
      <img
        slot="icon"
        v-lazy-load
        :data-src="require(`@/assets/img/Studies/svg/clutch-footer.svg`)"
        width="312"
        height="138"
        alt="Clutch"
        class="case_logotype-clutch"
      >
      The growth of Clutch.co
    </Footer>
  </main>
</template>

<script>
import CaseHeader from '@/components/Cases/shared/CaseHeader'
import Footer from '@/components/Cases/shared/CaseFooter'
import Main from '@/components/Cases/nambataxi/Main'
import { getMetadata, buildHead } from '@/data/seo'
import headerMixin from '@/mixins/headerMixin'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'NambaTaxiCase',
  components: {
    CaseHeader,
    Footer,
    Main,
  },

  mixins: [
    animateOnScrollMixin({
      offset: 200,
      delay: 50,
      anchorPlacement: 'top-center',
      duration: 1000,
      once: true,
    }),
    headerMixin('.case_header'),
  ],

  nuxtI18n: false,

  data() {
    return {
      logo: {
        width: 218,
        height: 63,
        folder: 'nambataxi',
        file: 'nambataxi',
        alt: 'Namba Taxi',
      },
    }
  },

  head() {
    return buildHead({
      ...getMetadata('nambataxi'),
      image: 'https://maddevs.io/namba-taxi.png',
    })
  },
}
</script>

<style lang="scss">
@import '../../assets/styles/cases/_base';
@import '../../assets/styles/cases/_components';
@import '../../assets/styles/cases/_media';

.case {
  &_header-namba-taxi {
    background-color: rgba(0, 174, 239, 0.4);
  }

  &_header {
    &-title {
      width: 700px;
      margin-bottom: 20px;
      @media screen and (max-width: 655px) {
        margin-bottom: 0;
        width: 320px;
      }
      @media screen and (max-width: 370px) {
        width: 250px;
      }
    }
  }

  &_nambataxi {
    width: 310px;
    height: 45px;

    @media screen and (max-width: 1170px) {
      margin-bottom: 20px;
    }
    @media screen and (max-width: 655px) {
      margin-bottom: 50px;
      width: 185px;
      height: 30px;
    }
    @media screen and (max-width: 370px) {
      margin-bottom: 80px;
    }
  }

  &_logotype-clutch {
    width: 312px;
    height: 138px;
    margin-bottom: 5px;
  }

  &_title-clutch {
    margin-bottom: 25px;
    @media screen and (max-width: 500px) {
      max-width: 400px;
    }
    @media screen and (max-width: 430px) {
      max-width: 190px;
    }
  }

  @media screen and (max-width: 768px) {
    &_logotype-clutch {
      width: 180px;
      height: 80px;
    }

    &_title-clutch {
      margin-bottom: 31px;
    }
  }
}

</style>
