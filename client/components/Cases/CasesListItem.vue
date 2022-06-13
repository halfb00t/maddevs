<template>
  <div
    class="cases-list_item"
    :class="{
      'cases-list_item--full': width === 'full',
      'cases-list_item--big': width === 'big',
      'cases-list_item--middle': width === 'middle',
      'cases-list_item--small': width === 'small',
      'is-mobile': isMobile,
    }"
    @mouseover="play"
    @mouseout="pause"
  >
    <NuxtLink
      :to="link"
      :disabled="isMobile"
      :tag="isMobile ? 'button' : 'a'"
      class="cases-list_item-link"
    >
      <!-- Video BG poster -->
      <div
        class="cases-list_item-video_poster"
        :lazy-background="$getMediaFromS3(posterLink)"
      />
      <!-- Video BG -->
      <video
        ref="video"
        v-lazy-load
        :controls="false"
        muted
        loop
        playsinline
        width="100%"
        height="100%"
        class="cases-list_item-video"
      >
        <source
          :data-src="$getMediaFromS3(videoFileName)"
          type="video/mp4"
        >
        Your browser does not support the video tag.
      </video>
      <!-- END Video BG -->
      <!-- Card info -->
      <div class="cases-list_item-info">
        <img
          v-lazy-load
          :width="logo.width"
          :height="logo.height"
          :data-src="$getMediaFromS3(`/images/Cases/${logo.folder}/svg/${logo.file}.svg`)"
          :alt="logo.alt || 'Image'"
          :class="`cases-list_item-info-${logo.file}`"
          class="cases-list_item-info-logo"
        >
        <span>{{ subtitle }}</span>
        <Component :is="titleTag">
          {{ title }}
        </Component>
        <p>{{ desc }}</p>
        <NuxtLink :to="link">
          Explore
        </NuxtLink>
        <div class="cases-list_item-text-content">
          <span>{{ subtitle }}</span>
          <Component :is="titleTag">
            {{ title }}
          </Component>
          <p>{{ desc }}</p>
          <NuxtLink :to="link">
            Explore
          </NuxtLink>
        </div>
      </div>
      <!-- END Card info  -->
    </NuxtLink>
  </div>
</template>

<script>
import { isMobile } from '@/helpers/isMobileDeviceDetect'
import mainMixins from '@/mixins/mainMixins'

export default {
  mixins: [mainMixins],

  props: {
    titleTag: {
      type: String,
      default: 'h3',
    },

    width: {
      type: String,
      default: 'full',
    },

    videoFileName: {
      type: String,
      default: null,
    },

    logo: {
      type: Object,
      default: () => ({
        width: 260,
        height: 80,
        folder: '',
        file: '',
        alt: '',
      }),
    },

    title: {
      type: String,
      default: null,
    },

    link: {
      type: String,
      default: '/',
    },

    subtitle: {
      type: String,
      default: null,
    },

    desc: {
      type: String,
      default: null,
    },

    posterLink: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      isMobile: false,
    }
  },

  mounted() {
    this.isMobile = isMobile()
  },

  methods: {
    play() {
      this.MixinPlayVideo(this.$refs.video)
    },

    pause() {
      if (this.$refs.video) this.$refs.video.pause()
    },
  },
}
</script>

<style lang="scss" scoped>
.cases-list_item {
  width: 100%;
  max-width: 100%;
  height: 605px;
  max-height: 605px;
  position: relative;
  border-radius: 2px;
  overflow: hidden;
  text-decoration: none;

  &-link {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 40px;
    box-sizing: border-box;
    text-decoration: none;
    border: 0;
    text-align: left;
    background-color: transparent;
    outline: none;
    @media screen and (max-width: 430px) {
      padding: 20px 24px 20px 20px;
    }
  }

  &--full {
    grid-column: auto / span 3;
    @media screen and (max-width: 1140px) {
      grid-column: auto / span 4;
    }
  }

  &--big {
    grid-column: auto / span 2;
    @media screen and (max-width: 992px) {
      grid-column: auto / span 4;
    }
  }

  &--middle {
    grid-column: auto / span 1;
  }

  &--small {
    grid-column: auto / span 1;
    @media screen and (max-width: 1140px) {
      grid-column: auto / span 2;
    }
    @media screen and (max-width: 992px) {
      grid-column: auto / span 4;
    }
  }

  @media screen and (max-width: 430px) {
    grid-column: auto / span 4 !important;
    max-height: 230px;
    border-radius: 4px;
  }

  &-video {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    object-fit: cover;
    background-position: center;
    background-size: cover;

    &_poster {
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      position: absolute;
      top: 0;
      left: 0;
      background-size: cover;
      background-position: center;
      z-index: -1;
      margin: -1px;
    }
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.40);
    user-select: none;
    pointer-events: none;
  }

  &-info,
  &-text-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    z-index: 1;
    color: $text-color--cultured;
    * {
      @include font('Inter', 16px, 400);
      color: inherit;
    }

    &-logo {
      max-width: 105px;
      height: auto;
      margin-bottom: auto;
      @media screen and (max-width: 430px) {
        max-width: 68px;
      }
    }

    &-peklo-logo {
      max-width: 80px;

      @media screen and (max-width: 430px) {
        max-width: 68px;
      }
    }

    > span {
      text-transform: uppercase;
      letter-spacing: 0.28em;
      font-size: 10px;
      font-weight: normal;
      line-height: 140%;
      margin-bottom: 16px;
    }

    h2, h3 {
      max-width: 350px;
      font-size: 40px;
      letter-spacing: -0.04em;
      font-weight: bold;
      line-height: 100%;
      color: $text-color--white-primary;
    }

    p {
      max-width: 500px;
      height: 0;
      font-size: 16px;
      letter-spacing: -0.013em;
      line-height: 140%;
      font-weight: normal;
      overflow: hidden;
      transition: all 0.4s ease;
      transform: translateY(50px);
      @media screen and (max-width: 768px) {
        display: none;
      }
    }

    > a {
      height: 0;
      font-size: 16px;
      line-height: 100%;
      text-decoration: none;
      background-color: $bgcolor--white-primary;
      color: $text-color--black;
      padding: 0 8px;
      border-radius: 4px;
      overflow: hidden;
      transition: all 0.4s ease;
      transform: translateY(100px);

      &:hover {
        opacity: 0.8;
      }

      @media screen and (max-width: 768px) {
        height: auto;
        transform: none;
        transition: none;
        padding: 8px;
        margin-top: 20px;
      }
    }

    @media screen and (max-width: 430px) {
      > span,
      h2, h3,
      p,
      > a {
        display: none;
      }
    }
  }

  &-text-content {
    display: none;
    @media screen and (max-width: 430px) {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: flex-end;
      align-content: flex-end;
      width: 100%;

      h2, h3 {
        font-size: 22px;
        line-height: 26.63px;
        max-width: 210px;
        display: block;
      }

      > span {
        width: 100%;
        font-size: 7px;
        display: block;
        margin-bottom: 8px;
      }

      > a {
        font-size: 11px;
        line-height: 21px;
        padding: 2px 10px;
        display: grid;
        place-items: center;
        width: 37px;
        height: 21px;
      }
    }
  }

  &:hover {
    .cases-list_item-info {
      p {
        height: auto;
        margin: 16px 0;
        transform: none;
      }

      > a {
        height: auto;
        padding: 8px;
        transform: none;
      }
    }
  }
}

.cases-list_bandpay {
  &::before {
    background-color: rgba(255, 191, 11, 0.9);
  }
  & .cases-list_item-info {
    color: $text-color--black-oil;
  }
}

.is-mobile {
  .cases-list_item-info {
    p {
      display: none;
    }

    > a {
      height: auto;
      transform: none;
      transition: none;
      padding: 8px;
      margin-top: 20px;
    }
  }
}
</style>
