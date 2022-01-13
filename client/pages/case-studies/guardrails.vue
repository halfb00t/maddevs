<template>
  <main class="case case--guardrails">
    <CaseHeader
      :logo="logo"
      project="guardrails"
      video-name="/videos/guardrails-banner.mp4"
      video-fallback-path="/images/Cases/clutch/png/clutch-banner.png"
    >
      <h1
        slot="title"
        class="case_header-title"
      >
        Enhancing the GuardRails solution
      </h1>
      <p
        slot="description"
        class="case_header-description"
      >
        Mad Devs assisted GuardRails an application security platform <br> to advance their product and increase its business value.
      </p>
    </CaseHeader>
    <!--    <Main />-->
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
// import Main from '@/components/Cases/clutch/Main'
import { getMetadata, buildHead } from '@/data/seo'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'
import headerMixin from '@/mixins/headerMixin'

export default {
  name: 'Clutch',
  components: {
    CaseHeader,
    Footer, //    Main,

  },

  nuxtI18n: false,

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

  data() {
    return {
      logo: {
        width: 218,
        height: 300,
        folder: 'guardrails',
        file: 'guardrails-logo',
        alt: 'GUARDRAILS',
      },
    }
  },

  head() {
    return buildHead({
      ...getMetadata('clutch'),
      image: 'https://maddevs.io/clutch.png',
    })
  },
}
</script>

<style lang="scss">
@import '../../assets/styles/cases/base';
@import '../../assets/styles/cases/components';
@import '../../assets/styles/cases/media';

.case {
  &_header-guardrails {
    background-color:  #323A45;
  }

  &_header {
    &-title {
      width: 700px;
      margin-bottom: 16px;
      @media screen and (max-width: 655px) {
        margin-bottom: 0;
        width: 320px;
      }
      @media screen and (max-width: 370px) {
        width: 250px;
      }
    }
  }

  //&_guardrails-logo {
  //  //width: 218px;
  //  //height: 300px;
  //
  //  @media screen and (max-width: 1170px) {
  //    margin-bottom: 50px;
  //  }
  //
  //  @media screen and (max-width: 655px) {
  //    width: 185px;
  //    height: 53px;
  //  }
  //}

  &_logotype-citycam {
    width: 210px;
    height: 90px;
    margin-bottom: 30px;
  }

  &_title-citycam {
    margin-bottom: 51px;
    @media screen and (max-width: 500px) {
      max-width: 400px;
    }
    @media screen and (max-width: 430px) {
      max-width: 190px;
    }
  }

  @media screen and (max-width: 768px) {
    &_logotype-citycam {
      width: 180px;
      height: 65px;
    }

    &_title-citycam {
      margin-bottom: 31px;
    }
  }
}
</style>
