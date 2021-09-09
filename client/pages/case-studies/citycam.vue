<template>
  <main class="case case--citycam">
    <CaseHeader
      :logo="logo"
      project="citycam"
      video-name="/videos/citycam-banner.mp4"
      video-fallback-path="/images/Cases/citycam/png/citycam-banner.png"
    >
      <h1
        slot="title"
        class="case_header-title"
      >
        Better cities <br> with CityCam
      </h1>
      <p
        slot="description"
        class="case_header-description"
      >
        Build hardware and software for energy-efficient <br> and highly autonomous traffic cameras
      </p>
    </CaseHeader>
    <Main />
    <Footer
      link="/case-studies/peklo/"
      class-name="peklo"
    >
      <img
        slot="icon"
        v-lazy-load
        :data-src="require(`@/assets/img/Studies/svg/peklo-footer.svg`)"
        width="195"
        height="72"
        alt="Peklo Tool for search ad campaigns"
        class="case_logotype-peklo"
      >
      Peklo Tool for better
      ad campaigns
    </Footer>
  </main>
</template>

<script>
import CaseHeader from '@/components/Cases/shared/CaseHeader'
import Footer from '@/components/Cases/shared/CaseFooter'
import Main from '@/components/Cases/citycam/Main'
import { getMetadata, buildHead } from '@/data/seo'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'
import headerMixin from '@/mixins/headerMixin'

export default {
  name: 'CityCam',
  components: {
    CaseHeader,
    Footer,
    Main,
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
        width: 253,
        height: 93,
        folder: 'citycam',
        file: 'citycam-logo',
        alt: 'CityCam intersection monitoring system',
      },
    }
  },

  head() {
    return buildHead({
      ...getMetadata('peklo'),
      image: 'https://maddevs.io/peklo.jpg',
    })
  },
}
</script>

<style lang="scss">
@import '../../assets/styles/cases/base';
@import '../../assets/styles/cases/components';
@import '../../assets/styles/cases/media';

.case {
  &_header-citycam {
    background-color: rgba(16, 17, 19, 0.4);
  }

  &_header-title {
    margin-right: 200px;
    margin-bottom: 28px;
    @media screen and (max-width: 768px) {
      margin-bottom: 0;
      margin-right: 0;
      br {
        display: none;
      }
    }
  }

  &_citycam-logo {
    width: 253px;
    height: 93px;
    margin-top:120px;
    margin-left: 100px;

    @media screen and (max-width: 1320px) {
      margin-top:0;
      margin-left: 70px;
    }

    @media screen and (max-width: 1170px) {
      margin-top:0;
      margin-left: 0;
      margin-bottom: 30px;
    }

    @media screen and (max-width: 655px) {
      margin-top:0;
      width: 137.86px;
      height: 99.25px;
    }
  }

  &_logotype-peklo {
    width: 210px;
    height: 90px;
    margin-bottom: 30px;
  }

  &_title-peklo {
    margin-bottom: 51px;
    @media screen and (max-width: 430px) {
      max-width: 190px;
    }
  }

  @media screen and (max-width: 768px) {
    &_logotype-peklo {
      width: 135px;
      height: 55px;
      margin-bottom: 21px;
    }

    &_title-peklo {
      margin-bottom: 31px;
    }
  }
}
</style>
