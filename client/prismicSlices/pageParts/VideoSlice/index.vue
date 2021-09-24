<template>
  <section
    class="video-slice"
    :class="{
      'video-slice--full': width === 'full',
      'video-slice--big': width === 'big',
      'video-slice--middle': width === 'middle',
      'video-slice--small': width === 'small',
      'is-mobile': isMobile,
      colorThemeClass
    }"
    @mouseover="play"
    @mouseout="pause"
  >
    <div class="container">
      <NuxtLink
        :to="link"
        :disabled="isMobile"
        :tag="isMobile ? 'button' : 'a'"
        class="video-slice-link"
      >
        <!-- Video BG poster -->
        <div
          class="video-slice-video_poster"
          :lazy-background="$getMediaFromS3(posterLink)"
        />
        <!-- Video BG -->
        <video
          ref="video"
          v-lazy-load
          muted="true"
          loop="true"
          class="video-slice-video"
        >
          <source
            :data-src="$getMediaFromS3(videoFileName)"
            type="video/mp4"
          >
          Your browser does not support the video tag.
        </video>
        <!-- END Video BG -->
        <!-- Card info -->
        <div class="video-slice-info">
          <img
            v-lazy-load
            :width="logoWidth"
            :height="logoHeight"
            :data-src="$getMediaFromS3(`/images/Cases/${folder}/svg/${file}.svg`)"
            :alt="alt || 'Image'"
            :class="`video-slice-info-${file}`"
            class="video-slice-info-logo"
          >
          <span>{{ subtitle }}</span>
          <h2>
            {{ title }}
          </h2>
          <NuxtLink :to="link">
            Explore
          </NuxtLink>
        </div>
      <!-- END Card info -->
      </NuxtLink>
    </div>
  </section>
</template>

<script>
import { isMobile } from 'mobile-device-detect'
import mainMixins from '@/mixins/mainMixins'

export default {
  name: 'VideoSlice',
  mixins: [mainMixins],
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
      isMobile,
      title: this.slice?.primary?.title,
      subtitle: this.slice?.primary?.subtitle,
      width: this.slice?.primary?.width,
      link: this.slice?.primary?.link,
      videoFileName: this.slice?.primary?.video,
      posterLink: this.slice?.primary?.poster,
      file: this.slice?.primary?.file,
      folder: this.slice?.primary?.folder,
      logoWidth: this.slice?.primary?.logoWidth,
      logoHeight: this.slice?.primary?.logoHeight,
      alt: this.slice?.primary?.alt,
    }
  },

  computed: {
    colorThemeClass() {
      if (this.slice?.primary?.colorTheme === 'white') return 'video-slice--white-theme'
      return 'video-slice--black-theme'
    },
  },

  methods: {
    play() {
      this.MixinPlayVideo(this.$refs.video)
    },

    pause() {
      if (this.$refs.video) {
        this.$refs.video.pause()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.video-slice {
  width: 100%;
  max-width: 100%;
  height: 605px;
  max-height: 605px;
  position: relative;
  border-radius: 2px;
  overflow: hidden;
  text-decoration: none;

  .container {
    height: 100%;
  }

  &--white-theme {
    background-color: #fff;
  }

  &--black-theme {
    background-color: #000;
  }

  &-link {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    padding: 40px;
    box-sizing: border-box;
    text-decoration: none;
    background-color: transparent;
    border: 0;
    text-align: left;

    @media screen and (max-width: 375px) {
      padding: 24px;
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

  @media screen and (max-width: 375px) {
    grid-column: auto / span 4 !important;
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

  &-info {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    z-index: 1;
    color: #F4F4F4;

    * {
      @include font('Inter', 16px, 400);
      color: inherit;
    }

    &-logo {
      max-width: 105px;
      height: auto;
      margin-bottom: auto;
    }

    &-peklo-logo {
      max-width: 80px;
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
      margin: 16px 0;

      @media screen and (max-width: 375px) {
        font-size: 32px;
      }
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
      background-color: #fff;
      color: #000;
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

      @media screen and (max-width: 375px) {
        font-size: 14px;
      }
    }
  }

  &:hover {
    .video-slice-info {
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

.is-mobile {
  .video-slice-info {
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
