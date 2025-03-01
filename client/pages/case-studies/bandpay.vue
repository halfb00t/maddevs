<template>
  <main class="case case_bandpay">
    <div class="case-bandpay__header-wrapper">
      <CaseHeader
        :logo="logo"
        project="bandpay"
        video-name="/videos/bandpay-banner.mp4"
        video-fallback-path="/images/Cases/bandpay/jpg/bandpay-banner.jpg"
      >
        <h1
          slot="title"
          class="case_header-title case_bandpay__header-title"
        >
          BandPay: A tool
          <br>
          to run business
        </h1>
        <p
          slot="description"
          class="case_header-description case_bandpay__header-description"
        >
          Mad Devs created a complete B2B payment management solution
          <br>
          that enables freelancers to promote their business, make
          <br>
          agreements, and get paid quickly and securely.
        </p>
      </CaseHeader>
    </div>
    <Main />
    <Footer
      link="/case-studies/guardrails/"
      class-name="guardrails"
    >
      <img
        slot="icon"
        v-lazy-load
        :data-src="require(`@/assets/img/Studies/svg/guardrails-footer.svg`)"
        width="230"
        height="113"
        alt="Guardrails"
        class="case_logotype-guardrails"
      >
      Enhancing the GuardRails <br>
      solution
    </Footer>
  </main>
</template>

<script>
import CaseHeader from '@/components/Cases/shared/CaseHeader'
import Footer from '@/components/Cases/shared/CaseFooter'
import Main from '@/components/Cases/bandpay/Main'
import { getMetadata, buildHead } from '@/data/seo'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'
import headerMixin from '@/mixins/headerMixin'

export default {
  name: 'Bandpay',
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
        width: 383,
        height: 114,
        folder: 'bandpay',
        file: 'bandpay-logo',
        alt: 'bandpay logo',
      },
    }
  },

  head() {
    return buildHead({
      ...getMetadata('bandpay'),
      image: 'https://maddevs.io/bandpay-meta-banner.png',
    })
  },
}
</script>

<style lang="scss">
@import '../../assets/styles/cases/base';
@import '../../assets/styles/cases/components';
@import '../../assets/styles/cases/media';

.case {
  &_header-bandpay {
    background: rgba(255, 191, 11, 0.9);
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

  &_bandpay-logo {
    width: 383px;
    height: 114px;

    @media screen and (max-width: 1170px) {
      margin-bottom: 50px;
    }

    @media screen and (max-width: 655px) {
      width: 217px;
      height: 138px;
    }
  }
}

.case_bandpay {
  & section.case_footer::before {
    background-color: transparent;
  }
  & h1.case_bandpay__header-title {
    width: 700px;
    margin-bottom: 16px;
    color: $text-color--black-oil;
    @media screen and (max-width: 655px) {
      margin-bottom: 0;
      width: 320px;
    }
    @media screen and (max-width: 370px) {
      width: 250px;
    }
  }
  & .case_bandpay__header-description {
    color: $text-color--black-oil;
  }
}

.case_logotype-guardrails {
  margin-bottom: 35px;
  @media screen and (max-width: 768px) {
    width: 180px;
    height: 87.35px;
  }
}
</style>
