<template>
  <main class="case case--itc">
    <CaseHeader
      :logo="logo"
      project="itc"
      video-name="/videos/itc-banner.mp4"
      video-fallback-path="/images/Cases/itc/jpg/itc-banner.jpg"
    >
      <h1
        slot="title"
        class="case_header-title"
      >
        Ready4Trade <br> Central Asia
      </h1>
      <p
        slot="description"
        class="case_header-description"
      >
        A web app customized for the delivery of export management coaching <br> missions that contributes to the development of <span class="case_nowrap">intra-regional</span> <br> and international trade in Central Asia.
      </p>
    </CaseHeader>
    <Main />
    <Footer
      link="/case-studies/veeqo/"
      class-name="veeqo"
    >
      <img
        slot="icon"
        v-lazy-load
        :data-src="require(`@/assets/img/Studies/svg/veeqo.svg`)"
        width="195"
        height="72"
        alt="Optimization for Veeqo"
        class="case_logotype-veeqo"
      >
      Optimization for Veeqo
    </Footer>
  </main>
</template>

<script>
import CaseHeader from '@/components/Cases/shared/CaseHeader'
import Footer from '@/components/Cases/shared/CaseFooter'
import Main from '@/components/Cases/itc/Main'
import { getMetadata, buildHead } from '@/data/seo'
import headerMixin from '@/mixins/headerMixin'

export default {
  name: 'CaseITC',
  components: {
    CaseHeader,
    Footer,
    Main,
  },

  mixins: [headerMixin('.case_header')],

  nuxtI18n: false,

  data() {
    return {
      logo: {
        width: 377,
        height: 154.95,
        folder: 'itc',
        file: 'itc-logo',
        alt: 'International trade center logo',
      },
    }
  },

  head() {
    return buildHead({
      ...getMetadata('itc'),
      image: 'https://maddevs.io/itc-case.jpg',
    })
  },
}
</script>

<style lang="scss">
@import '../../assets/styles/cases/_base';
@import '../../assets/styles/cases/_components';
@import '../../assets/styles/cases/_media';

.case {
  &_header-itc {
    background-color: rgba(16, 17, 19, 0.5);
  }

  &_itc-logo {
    width: 377px;
    height: 154.95px;
    margin-left: 127px;
    margin-bottom: 32px;

    @media screen and (max-width: 1320px) {
      margin-left: 70px;
    }

    @media screen and (max-width: 1170px) {
      margin-left: 0;
      margin-bottom: 40px;
    }

    @media screen and (max-width: 655px) {
      width: 192px;
      height: 78.97px;
    }
  }

  &_nowrap {
    white-space: nowrap;
  }

  &_logotype-veeqo {
    width: 195px;
    height: 72px;
    margin-bottom: 30px;
  }

  &_title-veeqo {
    margin-bottom: 51px;

    @media screen and (max-width: 430px) {
      max-width: 190px;
    }
  }

  @media screen and (max-width: 768px) {
    &_logotype-veeqo {
      width: 120px;
      height: 44px;
      margin-bottom: 21px;
    }

    &_title-veeqo {
      margin-bottom: 31px;
    }
  }
}
</style>
