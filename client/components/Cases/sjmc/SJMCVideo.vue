<template>
  <div
    v-show="fullscreenModIsActive"
    ref="videoContainer"
  >
    <div
      class="video-wrapper"
      @click="videoSetState"
    >
      <img
        v-if="showIcon"
        class="pause-icon"
        :src="require('@/assets/img/Studies/svg/pause-icon.svg')"
        alt="Pause"
      >
      <video
        ref="video"
        class="main-video"
        autoplay="true"
      >
        <source
          :src="$getMediaFromS3('/videos/sjmc/sjmc-modal-video.00bd869.mp4')"
          type="video/mp4"
        >
        Your browser does not support the video tag.
      </video>
    </div>
    <button
      class="exit"
      @click="closeFullscreen"
    >
      <img
        src="@/assets/img/Studies/svg/close-icon.svg"
        width="24"
        height="24"
        alt="Close"
      >
    </button>
  </div>
</template>

<script>
import mainMixins from '@/mixins/mainMixins'
import checkBrowserMixin from '@/mixins/checkBrowserMixin'

export default {
  name: 'SJMCVideo',
  mixins: [mainMixins, checkBrowserMixin],
  data() {
    return {
      showIcon: false,
      flagFirstStartVideo: true,
      fullscreenModIsActive: false,
    }
  },

  mounted() {
    this.closeFullscreen()
    // event bus handler
    this.$nuxt.$on('open-fullscreen', () => this.emitHandler())

    // exit fullscreen handler
    document.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement === null) {
        this.fullscreenModIsActive = false

        // Pause video when exit from fullscreen
        if (!this.$refs.video.paused) {
          this.pause()
          this.showIcon = true
        }
      }
    })

    this.$refs.video.addEventListener('ended', this.onEnded)
  },

  destroyed() {
    this.$refs.video.removeEventListener('ended', this.onEnded)
  },

  methods: {
    onEnded() {
      this.showIcon = true
    },

    closeFullscreen() {
      this.checkBrowserExitFullscreen()
      this.fullscreenModIsActive = false
    },

    emitHandler() {
      this.checkBrowserReqFullscreen(this.$refs.videoContainer)
      this.fullscreenModIsActive = true
      if (this.flagFirstStartVideo) {
        try {
          this.MixinPlayVideo(this.$refs.video)
        } catch (err) {
          this.showIcon = true
        }
        this.flagFirstStartVideo = false
      }
    },

    videoSetState() {
      if (this.$refs.video && this.$refs.video.paused) {
        try {
          this.MixinPlayVideo(this.$refs.video)
        } catch (err) {
          this.showIcon = true
        }
        this.showIcon = false
      } else {
        this.pause()
        this.showIcon = true
      }
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
.main-video {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.exit {
  width: 24px;
  height: 24px;
  border: 0;
  position: absolute;
  top: 52px;
  right: 52px;
  background-color: transparent;
  cursor: pointer;
  padding: 0;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}

.pause-icon {
  width: 120px;
  height: 120px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
</style>
