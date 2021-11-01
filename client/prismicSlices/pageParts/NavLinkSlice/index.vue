<template>
  <section
    :style="{ backgroundColor: sliceBackground }"
  >
    <div
      :data-aos="animation"
      data-testid="nav-link__container"
      class="container"
    >
      <div
        class="nav-link-slice__links"
        :class="[
          `nav-link-slice__links-${position}`,
        ]"
      >
        <Component
          :is="disabledLink === 'previous-page' || disabledLink === 'both'? 'p' : 'a'"
          :href="prevLink.url "
          target="_self"
          class="nav-link-slice__link"
          :class="colorThemeClass"
          v-html="prevLinkText"
        />
        <Component
          :is="disabledLink === 'next-page' || disabledLink === 'both'? 'p' : 'a'"
          :href="nextLink.url"
          target="_self"
          class="nav-link-slice__link"
          :class="colorThemeClass"
          v-html="nextLinkText"
        />
      </div>
    </div>
  </section>
</template>

<script>

import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'TextSlice',

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
      default() {
        return {}
      },
    },
  },

  data() {
    return {
      prevLink: this.slice.primary.prevLink ? this.slice.primary.prevLink : { url: 'https://maddevs.io/' },
      prevLinkText: this.slice.primary.prevLinkText ? this.slice.primary.prevLinkText : 'Previous',
      nextLinkText: this.slice.primary.nextLinkText ? this.slice.primary.nextLinkText : 'Next',
      nextLink: this.slice.primary.nextLink ? this.slice.primary.nextLink : { url: 'https://maddevs.io/' },
      position: this.slice.primary.position ? this.slice.primary.position : 'center',
      disabledLink: this.slice.primary.disabledLink ? this.slice.primary.disabledLink : 'none',
      animation: this.slice.primary.animation,
    }
  },

  computed: {
    colorThemeClass() {
      if (this.slice?.primary?.background === 'black') return 'nav-link-slice__link-black'
      return 'nav-link-slice__link-white'
    },

    sliceBackground() {
      if (this.slice?.primary?.background === 'white') return '#ffffff'
      if (this.slice?.primary?.background === 'grey') return '#f5f7f9'
      if (this.slice?.primary?.background === 'black') return '#111213'
      return null
    },
  },
}
</script>

<style lang="scss" scoped>
.nav-link-slice {
  &__links{
    display: flex;
    justify-content: center;

    // Positions
    &-left {
      justify-content: flex-start;
    }

    &-center {
      justify-content: center;
    }

    &-right {
      justify-content: flex-end;
    }

    p{
      color: $text-color--grey-opacity-20-percent;
    }
    a:hover{
      color:$text-color--red;
    }
  }

  &__link{
    @include font('Inter', 16px, 500);
    line-height: 24px;
    text-align: center;
    position: relative;
    &-white {
      color: $text-color--black-lighter;
      &:first-child{
        border-right: 1px solid $text-color--black-lighter;
      }
    }
    &-black {
      color: $text-color--white;
      &:first-child{
        border-right: 1px solid  $text-color--white;
      }
    }
    &:before{
      content: "";
      position: absolute;
      top: 8px;
      width: 8px;
      height: 8px;
      border-width: 0 0 1px 1px;
      border-style: solid;
    }
    &:after{
      content: "";
      position: absolute;
      top: 12px;
      height: 1px;
      width: 11px;
      box-shadow: inset 0 0 0 32px;
      transform-origin: right top;
    }
    &:first-child{
      padding: 0 40px 0 30px;
      &:before{
        left: 0;
        transform: rotate(45deg);
      }
      &:after{
        left: -1px;
      }
    }
    &:last-child{
      padding: 0 30px 0 40px;
      &:before{
        right: 0;
        transform: rotate(230deg);
      }
      &:after{
        right: -1px;
      }
    }
  }

  @media screen and (max-width: 450px) {
    &__links{
      justify-content: space-between;
    }
    &__link{
      &:first-child{
        padding: 0 10px 0 30px;
        border: none;
      }
      &:last-child{
        padding: 0 30px 0 10px;
      }
    }
  }
}
</style>
