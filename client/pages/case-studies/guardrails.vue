<template>
  <main class="case case--guardrails">
    <CaseHeader
      :logo="logo"
      project="clutch"
      video-name="/videos/clutch-banner.mp4"
      video-fallback-path="/images/Cases/clutch/png/clutch-banner.png"
    >
    </CaseHeader>
    <Footer
      link="/case-studies/sir-john-monash-centre/"
      class-name="sjmc"
    >
      <img
        slot="icon"
        v-lazy-load
        :data-src="require(`@/assets/img/Projects/svg/sjmc-black.svg`)"
        width="195"
        height="72"
        alt="Better cities with CityCam"
        class="case_logotype-citycam"
      >
      The maintenance of memory:
      <br>
      Sir John Monash Centre
    </Footer>
  </main>
</template>

<script>
import CaseHeader from '@/components/Cases/shared/CaseHeader'
import Footer from '@/components/Cases/shared/CaseFooter'
import { getMetadata, buildHead } from '@/data/seo'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'
import headerMixin from '@/mixins/headerMixin'

export default {
  name: 'Clutch',
  components: {
    CaseHeader,
    Footer,
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
        height: 63,
        folder: 'clutch',
        file: 'clutch-logo',
        alt: 'A platform of client reviews and content',
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
  &_header-clutch {
    background-color: rgba(8, 83, 126, 0.9);
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

  &_clutch-logo {
    width: 218px;
    height: 63px;

    @media screen and (max-width: 1170px) {
      margin-bottom: 50px;
    }

    @media screen and (max-width: 655px) {
      width: 185px;
      height: 53px;
    }
  }

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
