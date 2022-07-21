<template>
  <main class="case case_lido">
    <div class="case-lido__header-wrapper">
      <CaseHeader
        :logo="logo"
        project="lido"
        video-name="/videos/lido-banner.mp4"
        video-fallback-path="/images/Cases/lido/jpg/lido-banner.jpg"
      >
        <h1
          slot="title"
          class="case_header-title case_lido__header-title"
        >
          Lido: decentralized
          <br>
          staking platform
        </h1>
        <p
          slot="description"
          class="case_header-description case_lido__header-description"
        >
          Mad Devs assisted Lido - a liquid staking solution - to improve their
          <br>
          product and simplify and secure staking for your digital assets.
        </p>
      </CaseHeader>
    </div>
    <Main />
    <Footer
      link="/case-studies/bandpay/"
      class-name="bandpay"
    >
      <img
        slot="icon"
        v-lazy-load
        :data-src="require(`@/assets/img/Studies/svg/bandpay-footer.svg`)"
        width="230"
        height="113"
        alt="Bandpay"
        class="case_logotype-bandpay"
      >
      BandPay: A tool to run business
    </Footer>
  </main>
</template>

<script>
import CaseHeader from '@/components/Cases/shared/CaseHeader'
import Footer from '@/components/Cases/shared/CaseFooter'
import Main from '@/components/Cases/lido/Main'
import { getMetadata, buildHead } from '@/data/seo'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'
import headerMixin from '@/mixins/headerMixin'

export default {
  name: 'Lido',
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
        width: 286,
        height: 70,
        folder: 'lido',
        file: 'lido-logo',
        alt: 'Lido logo',
      },
    }
  },

  head() {
    return buildHead({
      ...getMetadata('lido'),
      image: 'https://maddevs.io/lido-meta-banner.png',
    })
  },
}
</script>

<style lang="scss">
@import '../../assets/styles/cases/base';
@import '../../assets/styles/cases/components';
@import '../../assets/styles/cases/media';

.case {
  &_header-lido {
    background: linear-gradient(180deg, rgba(0, 162, 254, 0.6) 0%, rgba(83, 211, 224, 0.6) 100%);
    &::before {
      height: 175px !important;
      background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.991353) 6.67%,
        rgba(0, 0, 0, 0.96449) 13.33%,
        rgba(0, 0, 0, 0.91834) 20%,
        rgba(0, 0, 0, 0.852589) 26.67%,
        rgba(0, 0, 0, 0.768225) 33.33%,
        rgba(0, 0, 0, 0.668116) 40%,
        rgba(0, 0, 0, 0.557309) 46.67%,
        rgba(0, 0, 0, 0.442691) 53.33%,
        rgba(0, 0, 0, 0.331884) 60%,
        rgba(0, 0, 0, 0.231775) 66.67%,
        rgba(0, 0, 0, 0.147411) 73.33%,
        rgba(0, 0, 0, 0.0816599) 80%,
        rgba(0, 0, 0, 0.03551) 86.67%,
        rgba(0, 0, 0, 0.0086472) 93.33%,
        rgba(0, 0, 0, 0) 100%);
      opacity: 0.3;
    }
  }

  &_lido-logo {
    width: 286px;
    height: 70px;

    @media screen and (max-width: 1170px) {
      margin-bottom: 50px;
    }

    @media screen and (max-width: 655px) {
      width: 176px;
      height: 43px;
    }
  }
}

.case_lido {
  & .case_header-content {
    padding-left: 65px;

    @media screen and (max-width: 1170px) {
      padding-left: 0;
    }
  }

  & section.case_footer::before {
    background-color: transparent;
  }
  & h1.case_lido__header-title {
    width: 815px;
    margin-bottom: 16px;
    color: $text-color--white-primary;
    @media screen and (max-width: 655px) {
      margin-bottom: 0;
      width: 320px;
    }
    @media screen and (max-width: 370px) {
      width: 250px;
    }
  }
  & .case_lido__header-description {
    color: $text-color--white-primary;
  }
}

.case_logotype-bandpay {
  margin-bottom: 35px;
  @media screen and (max-width: 768px) {
    width: 180px;
    height: 87.35px;
  }
}
</style>
