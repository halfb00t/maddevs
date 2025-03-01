<template>
  <section class="technologies-slice">
    <div
      class="container"
      data-testid="technologies-slice-container"
      :class="{ 'aos-animate': alreadyAnimated }"
      :data-aos="animation"
    >
      <h2
        class="technologies-slice__title"
        data-testid="technologies-slice-title"
      >
        {{ title || 'Technologies & Tools' }}
      </h2>
      <div
        :class="[
          'technologies-slice__categories',
          `technologies-slice__categories--${categoryToClass(activeCategory)}`
        ]"
      >
        <div
          v-for="category in categories"
          :key="category"
          data-testid="technologies-slice-category"
          :class="[
            'technologies-slice__category',
            `technologies-slice__category--${categoryToClass(category)}`
          ]"
          @click="setActiveCategory(category)"
        >
          {{ category }}
        </div>
      </div>
      <div
        :class="[
          'technologies-slice__grid',
          `technologies-slice__grid--${categoryToClass(activeCategory)}`
        ]"
      >
        <div
          v-for="technology in technologies"
          :key="`${technology.value} ${technology.category}`"
          :class="[
            'technologies-slice__technology',
            `${technology.category}-${technology.value} ${technology.category}`
          ]"
          data-testid="technologies-slice-technology"
        >
          <img
            v-lazy-load
            :data-src="require(`@/assets/img/Home/svg/technologies/${technology.value}.svg`)"
            :alt="technology.title"
            width="26"
            height="26"
          >
          <span>{{ technology.title }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { categories, technologies } from '@/data/technologiesAndTools'
import refreshLazyImages from '@/helpers/refreshLazyImages'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'TechnologiesAndTools',

  mixins: [animateOnScrollMixin({
    offset: 200,
    delay: 50,
    anchorPlacement: 'top-center',
    duration: 1000,
    once: true,
  })],

  props: {
    slice: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },

  data() {
    return {
      activeCategory: '',
      categories,
      technologies,
      title: this.slice?.primary?.title,
      animation: this.slice?.primary?.animation,
      alreadyAnimated: false, // needed to prevent the aos animation repeating on DOM changes
    }
  },

  methods: {
    refreshLazyImages,

    setActiveCategory(category) {
      this.alreadyAnimated = true
      this.activeCategory = category === this.activeCategory ? '' : category
      this.$nextTick(() => this.refreshLazyImages())
    },

    categoryToClass(category) {
      return category.replace(/\W/g, '').toLowerCase()
    },
  },
}
</script>

<style lang="scss" scoped>
// establish Technical legends colors
$tech_legends: (
  'devops': rgba(40, 29, 29, 1),
  'qa': rgba(33, 33, 33, 1),
  'backend': rgba(31, 30, 40, 1),
  'frontend': rgba(40, 33, 44, 1),
  'mobile': rgba(26, 36, 36, 1),
  'pm': rgba(38, 38, 31, 1),
  'infrastructure': rgba(38, 32, 27, 1),
  'uiux': rgba(37, 33, 29, 1),
);

@mixin mediaMiddleScreen($property) {
  @media screen and (max-width: 1024px) {
    order: $property;
  }
}

@mixin mediaMobileScreen($property) {
  @media screen and (max-width: 568px) {
    order: $property;
  }
}

.technologies-slice {
  &__title {
    @include font('Poppins', 62px, 700);
    line-height: 74px;
    letter-spacing: -1px;
    text-align: center;
    margin-bottom: 24px;
    color: $text-color--white;

    @media screen and (max-width: 1024px) {
      font-size: 26px;
      line-height: 33px;
      margin-bottom: 44px;
    }
  }

  &__categories {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 43px;

    @each $name, $color in $tech_legends {
      &--#{$name} {
        .technologies-slice__category--#{$name}:after {
          opacity: 1;
        }
      }
    }

    @media screen and (max-width: 976px) {
      max-width: 460px;
      margin: auto auto 10px 0;
      flex-wrap: wrap;
    }

    @media screen and (max-width: 390px) {
      margin-left: -7px;
      justify-content: space-between;
    }

    @media screen and (max-width: 330px) {
      margin-left: 0;
    }
  }

  &__category {
    margin-right: 31px;
    color: $text-color--spanish-gray;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.02em;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;

    &::before {
      content: '';
      display: inline-block;
      width: 16px;
      min-width: 16px;
      height: 16px;
      border-radius: 2px;
      margin-right: 8px;
    }

    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      width: 8px;
      min-width: 8px;
      height: 8px;
      border-radius: 50%;
      margin-right: 8px;
      top: 7px;
      left: 4px;
      background: $bgcolor--spanish-gray;
      opacity: 0;
      transition: opacity 0.2s;
    }

    &:last-child {
      margin-right: 0;
    }

    @each $name, $color in $tech_legends {
      &--#{$name}:before {
        background: $color;
      }
    }

    @media screen and (max-width: 976px) {
      margin-right: 9px;
      margin-left: 9px;
      font-size: 12px;
      line-height: 18px;
      display: flex;
      align-items: center;
      margin-bottom: 14px;
    }

    @media screen and (max-width: 390px) {
      margin-right: 0;
      margin-left: 7px;
    }

    @media screen and (max-width: 330px) {
      font-size: 10px;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1px 1px;

    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(9, 1fr);
    }

    @media screen and (max-width: 568px) {
      grid-template-columns: repeat(6, 1fr);
    }

    @each $name, $color in $tech_legends {
      &--#{$name} {
        .technologies-slice__technology:not(.#{$name}) {
          opacity: 0.4;
        }
      }
    }
  }

  &__technology {
    width: 102px;
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: opacity 0.2s linear;

    @media screen and (max-width: 976px) {
      height: 74px;
    }

    @media screen and (max-width: 668px) {
      height: 54px;
      justify-content: flex-end;
    }

    img {
      width: 26px;
      height: 26px;

      @media screen and (max-width: 976px) {
        width: 20px;
        height: 20px;
      }
    }

    span {
      @include font('Inter', 11px, 400);
      white-space: nowrap;
      line-height: 13px;
      color: rgba(255, 255, 255, 0.25);
      margin-top: 15px;
      display: block;
      width: 100%;
      max-width: 90px;
      text-overflow: ellipsis;
      text-align: center;
      overflow: hidden;

      @media screen and (max-width: 1370px) {
        max-width: 60px;
      }

      @media screen and (max-width: 1090px) {
        max-width: 40px;
      }

      @media screen and (max-width: 976px) {
        font-size: 8px;
        line-height: 13px;
        margin-top: 11px;
        max-width: 65px;
      }

      @media screen and (max-width: 850px) {
        max-width: 45px;
      }

      @media screen and (max-width: 668px) {
        margin-top: 9px;
        margin-bottom: 3px;
        max-width: 25px;
      }

      @media screen and (max-width: 576px) {
        max-width: 50px;
      }

      @media screen and (max-width: 420px) {
        max-width: 30px;
      }
    }

    &.qa-jasmine {
      order: 72;
      @include mediaMiddleScreen(54);
    }

    &.qa-selenoid {
      order: 70;
      @include mediaMiddleScreen(52);
      @include mediaMobileScreen(44);
    }

    &.qa-appium {
      order: 47;
      @include mediaMiddleScreen(50);
    }

    &.qa-cucumber {
      order: 48;
      @include mediaMiddleScreen(51);
    }

    &.qa-test-ng {
      order: 99;
    }

    &.qa-pytest {
      order: 71;
      @include mediaMiddleScreen(53);
    }

    &.qa-selenium {
      order: 60;
      @include mediaMiddleScreen(45);
      @include mediaMobileScreen(58);
    }

    &.qa-selenium-grid {
      order: 59;
      @include mediaMiddleScreen(44);
      @include mediaMobileScreen(57);
    }

    &.backend-python {
      order: 31;
      @include mediaMiddleScreen(32);
    }

    &.backend-go {
      order: 32;
      @include mediaMiddleScreen(33);
      @include mediaMobileScreen(32);
    }

    &.backend-node {
      order: 33;
      @include mediaMiddleScreen(34);
      @include mediaMobileScreen(53);
    }

    &.backend-js {
      order: 34;
      @include mediaMiddleScreen(35);
      @include mediaMobileScreen(44);
    }

    &.backend-typescript {
      order: 43;
      @include mediaMiddleScreen(36);
    }

    &.backend-php {
      order: 44;
      @include mediaMiddleScreen(41);
    }

    &.backend-ruby {
      order: 45;
      @include mediaMiddleScreen(42);
      @include mediaMobileScreen(52);
    }

    &.backend-c-plus {
      order: 58;
      @include mediaMiddleScreen(25);
      @include mediaMobileScreen(44);
    }

    &.backend-c {
      order: 46;
      @include mediaMiddleScreen(43);
      @include mediaMobileScreen(44);
    }

    &.mobile-kotlin {
      order: 11;
      @include mediaMiddleScreen(19);
      @include mediaMobileScreen(16);
    }

    &.mobile-java {
      order: 12;
      @include mediaMiddleScreen(22);
    }

    &.mobile-obj-c {
      order: 35;
      @include mediaMiddleScreen(23);
    }

    &.mobile-swift {
      order: 23;
      @include mediaMiddleScreen(20);
      @include mediaMobileScreen(17);
    }

    &.mobile-apple {
      order: 36;
      @include mediaMiddleScreen(24);
    }

    &.mobile-android {
      order: 24;
      @include mediaMiddleScreen(21);
      @include mediaMobileScreen(18);
    }

    &.frontend-js {
      order: 65;
      @include mediaMiddleScreen(70);
      @include mediaMobileScreen(66);
    }

    &.frontend-react {
      order: 66;
      @include mediaMiddleScreen(71);
      @include mediaMobileScreen(67);
    }

    &.frontend-babel {
      order: 67;
      @include mediaMiddleScreen(72);
      @include mediaMobileScreen(68);
    }

    &.frontend-vue {
      order: 68;
      @include mediaMiddleScreen(73);
      @include mediaMobileScreen(69);
    }

    &.frontend-webpack {
      order: 55;
      @include mediaMiddleScreen(63);
    }

    &.frontend-next {
      order: 56;
      @include mediaMiddleScreen(64);
    }

    &.frontend-nuxt {
      order: 57;
      @include mediaMiddleScreen(65);
    }

    &.frontend-sass {
      order: 69;
      @include mediaMiddleScreen(74);
      @include mediaMobileScreen(70);
    }

    &.frontend-post-css {
      order: 52;
      @include mediaMiddleScreen(60);
    }

    &.frontend-typescript {
      order: 53;
      @include mediaMiddleScreen(61);
    }

    &.frontend-angular {
      order: 54;
      @include mediaMiddleScreen(62);
    }

    &.devops-ansible {
      order: 1;
    }

    &.devops-terraform {
      order: 2;
    }

    &.devops-cloud-formation {
      order: 3;
    }

    &.devops-jenkins {
      order: 4;
    }

    &.devops-bamboo {
      order: 5;
    }

    &.devops-gitlab {
      order: 6;
    }

    &.devops-travis-ci {
      order: 13;
      @include mediaMiddleScreen(10);
      @include mediaMobileScreen(7);
    }

    &.devops-circle-ci {
      order: 14;
      @include mediaMiddleScreen(11);
      @include mediaMobileScreen(8);
    }

    &.devops-elastic {
      order: 15;
      @include mediaMiddleScreen(12);
      @include mediaMobileScreen(9);
    }

    &.devops-sentry {
      order: 16;
      @include mediaMiddleScreen(13);
      @include mediaMobileScreen(10);
    }

    &.devops-cloud-watch {
      order: 17;
      @include mediaMiddleScreen(14);
      @include mediaMobileScreen(11);
    }

    &.devops-prometheus {
      order: 18;
      @include mediaMiddleScreen(15);
      @include mediaMobileScreen(12);
    }

    &.infrastructure-aws {
      order: 7;
      @include mediaMobileScreen(13);
    }

    &.infrastructure-gcp {
      order: 8;
      @include mediaMobileScreen(14);
    }

    &.infrastructure-digital-ocean {
      order: 9;
      @include mediaMobileScreen(15);
    }

    &.infrastructure-azure {
      order: 10;
      @include mediaMiddleScreen(27);
      @include mediaMobileScreen(26);
    }

    &.infrastructure-heroku {
      order: 20;
      @include mediaMiddleScreen(17);
      @include mediaMobileScreen(20);
    }

    &.infrastructure-netlify {
      order: 21;
      @include mediaMiddleScreen(18);
      @include mediaMobileScreen(21);
    }

    &.infrastructure-cloudflare {
      order: 22;
      @include mediaMiddleScreen(26);
      @include mediaMobileScreen(25);
    }

    &.infrastructure-cloud-native {
      order: 19;
      @include mediaMiddleScreen(16);
      @include mediaMobileScreen(19);
    }

    &.pm-jira {
      order: 25;
      @include mediaMiddleScreen(28);
    }

    &.pm-slack {
      order: 26;
      @include mediaMiddleScreen(29);
    }

    &.pm-meet {
      order: 27;
      @include mediaMiddleScreen(30);
    }

    &.pm-zoom {
      order: 28;
      @include mediaMiddleScreen(31);
    }

    &.pm-miro {
      order: 29;
      @include mediaMiddleScreen(47);
      @include mediaMobileScreen(43);
    }

    &.pm-jira-assistant {
      order: 38;
      @include mediaMobileScreen(34);
    }

    &.pm-loom {
      order: 37;
      @include mediaMobileScreen(33);
    }

    &.pm-service-desk {
      order: 39;
      @include mediaMobileScreen(35);
    }

    &.pm-basecamp {
      order: 40;
      @include mediaMobileScreen(36);
    }

    &.pm-trello {
      order: 30;
      @include mediaMiddleScreen(46);
      @include mediaMobileScreen(42);
    }

    &.pm-notion {
      order: 41;
      @include mediaMiddleScreen(48);
      @include mediaMobileScreen(43);
    }

    &.pm-zapier {
      order: 42;
      @include mediaMiddleScreen(49);
      @include mediaMobileScreen(44);
    }

    &.uiux-figma {
      order: 49;
      @include mediaMiddleScreen(57);
      @include mediaMobileScreen(99);
    }

    &.uiux-sketch {
      order: 51;
      @include mediaMiddleScreen(59);
      @include mediaMobileScreen(99);
    }

    &.uiux-adobe {
      order: 50;
      @include mediaMiddleScreen(58);
      @include mediaMobileScreen(99);
    }

    &.uiux-frame {
      order: 99;
    }

    &.uiux-invision {
      order: 61;
      @include mediaMiddleScreen(66);
      @include mediaMobileScreen(99);
    }

    &.uiux-zeplin {
      order: 62;
      @include mediaMiddleScreen(67);
      @include mediaMobileScreen(99);
    }

    &.uiux-balsamic {
      order: 63;
      @include mediaMiddleScreen(68);
      @include mediaMobileScreen(99);
    }

    &.uiux-principle-app {
      order: 64;
      @include mediaMiddleScreen(69);
      @include mediaMobileScreen(99);
    }

    &.other-confluence {
      order: 99;
    }

    &.other-teamcity {
      order: 99;
    }

    &.other-aws-code {
      order: 99;
    }

    &.other-team {
      order: 99;
    }

    &.other-skype {
      order: 99;
    }

    @each $name, $color in $tech_legends {
      &.#{$name} {
        background: $color;
      }
    }
  }
}
</style>
